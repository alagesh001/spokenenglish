import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Repeat, AlertTriangle, MessageCircle, ListChecks, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Calendar,
  Award, Check, Rocket, Scissors, Telescope, CalendarCheck, Handshake
} from "lucide-react";

/* ---------------------------------------------------------------
   FONTS
--------------------------------------------------------------- */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap');
    .font-display { font-family: 'Fredoka', sans-serif; }
    .font-body { font-family: 'Nunito', sans-serif; }
    .font-mono { font-family: 'Space Mono', monospace; }
    .lesson-paper {
      background-image: repeating-linear-gradient(
        transparent, transparent 34px, rgba(13,148,136,0.07) 34px, rgba(13,148,136,0.07) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: Rocket, color: "#0D9488" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "'Will' Stays the Same", icon: Users, color: "#EAA400" },
  { id: 4, title: "Contractions", icon: Scissors, color: "#22B573" },
  { id: 5, title: "Predictions", icon: Telescope, color: "#8B5CF6" },
  { id: 6, title: "Facts & Certain Events", icon: CalendarCheck, color: "#EC4899" },
  { id: 7, title: "Promises & Offers", icon: Handshake, color: "#0EA5E9" },
  { id: 8, title: "Time Expressions", icon: Calendar, color: "#F59E0B" },
  { id: 9, title: "Positive Sentences", icon: CheckCircle2, color: "#22B573" },
  { id: 10, title: "Negative Sentences", icon: XCircle, color: "#F97362" },
  { id: 11, title: "Yes/No Questions", icon: HelpCircle, color: "#2563EB" },
  { id: 12, title: "WH Questions", icon: MessageCircle, color: "#8B5CF6" },
  { id: 13, title: "Frequency Adverbs", icon: Repeat, color: "#EC4899" },
  { id: 14, title: "Signal Words", icon: Sparkles, color: "#EAA400" },
  { id: 15, title: "Common Mistakes", icon: AlertTriangle, color: "#F97362" },
  { id: 16, title: "Real-Life Talk", icon: MessageCircle, color: "#0EA5E9" },
  { id: 17, title: "Practice Time", icon: ListChecks, color: "#22B573" },
  { id: 18, title: "Quiz Time", icon: GraduationCap, color: "#8B5CF6" },
  { id: 19, title: "Summary Sheet", icon: BookOpen, color: "#0D9488" },
];

/* ---------------------------------------------------------------
   SMALL REUSABLE PIECES
--------------------------------------------------------------- */
function SectionLabel({ children, color }) {
  return (
    <h4 className="font-display font-semibold text-slate-800 mb-2 text-xs uppercase tracking-widest" style={{ color }}>
      {children}
    </h4>
  );
}

function Remember({ children, color }) {
  return (
    <div className="rounded-2xl border-2 p-4 flex gap-3 items-start" style={{ borderColor: color, background: `${color}12` }}>
      <Lightbulb className="shrink-0 mt-0.5" size={20} color={color} />
      <div>
        <p className="font-display font-bold text-sm mb-1" style={{ color }}>Remember!</p>
        <p className="text-sm text-slate-700 font-body">{children}</p>
      </div>
    </div>
  );
}

function ExampleList({ items, color }) {
  return (
    <ul className="space-y-2">
      {items.map((ex, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-700 font-body">
          <Check size={16} className="shrink-0 mt-1" color={color} />
          <span>
            {typeof ex === "string" ? ex : (
              <>
                {ex.en}
                {ex.note && <span className="text-slate-400 text-sm"> — {ex.note}</span>}
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

function MistakeList({ items }) {
  return (
    <div className="space-y-3">
      {items.map((m, i) => (
        <div key={i} className="rounded-xl bg-red-50 border border-red-100 p-3">
          <div className="flex items-center gap-2 text-red-600 text-sm font-semibold font-body">
            <XCircle size={16} className="shrink-0" /> {m.wrong}
          </div>
          <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold font-body mt-1">
            <CheckCircle2 size={16} className="shrink-0" /> {m.right}
          </div>
          <p className="text-xs text-slate-500 mt-1 ml-6 font-body">{m.why}</p>
        </div>
      ))}
    </div>
  );
}

function ActivityBox({ children, color }) {
  return (
    <div className="rounded-2xl p-4" style={{ background: `${color}0F` }}>
      <div className="flex items-center gap-2 font-display font-bold text-sm mb-1" style={{ color }}>
        <Sparkles size={16} /> Try it yourself!
      </div>
      <p className="text-sm text-slate-700 font-body">{children}</p>
    </div>
  );
}

function ConceptBlock({ data, color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">{data.definition}</p>

      {data.formula && (
        <div className="rounded-2xl p-4 text-center font-mono font-bold text-sm sm:text-base" style={{ background: `${color}12`, color }}>
          {data.formula}
        </div>
      )}

      {data.rules && (
        <div>
          <SectionLabel color={color}>Rules</SectionLabel>
          <ul className="space-y-2">
            {data.rules.map((r, i) => (
              <li key={i} className="flex gap-2 text-slate-700 text-sm font-body">
                <span style={{ color }} className="font-bold shrink-0">{i + 1}.</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList items={data.examples} color={color} />
      </div>

      {data.mistakes && (
        <div>
          <SectionLabel color={color}>Common Mistakes</SectionLabel>
          <MistakeList items={data.mistakes} />
        </div>
      )}

      {data.activity && <ActivityBox color={color}>{data.activity}</ActivityBox>}
      {data.remember && <Remember color={color}>{data.remember}</Remember>}
    </div>
  );
}

/* ---------------------------------------------------------------
   INTERACTIVE EXERCISE PIECES
--------------------------------------------------------------- */
function CheckInput({ prompt, answer, color, placeholder = "Type your answer" }) {
  const [val, setVal] = useState("");
  const [checked, setChecked] = useState(false);
  const norm = (s) => s.trim().toLowerCase().replace(/[.!?]+$/, "").replace(/\s+/g, " ");
  const correct = norm(val) === norm(answer);
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <p className="text-slate-700 mb-2 font-body">{prompt}</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          value={val}
          onChange={(e) => { setVal(e.target.value); setChecked(false); }}
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm font-body focus:outline-none focus:ring-2"
          style={{ "--tw-ring-color": color }}
          placeholder={placeholder}
        />
        <button
          onClick={() => setChecked(true)}
          className="px-4 py-2 rounded-lg text-white text-sm font-display font-semibold shrink-0"
          style={{ background: color }}
        >
          Check
        </button>
      </div>
      {checked && (
        correct ? (
          <p className="text-emerald-600 text-sm mt-2 flex items-center gap-1 font-body font-semibold">
            <CheckCircle2 size={16} /> Correct! Great job.
          </p>
        ) : (
          <p className="text-red-500 text-sm mt-2 flex items-center gap-1 font-body">
            <XCircle size={16} className="shrink-0" /> Not quite. Correct answer: <strong>{answer}</strong>
          </p>
        )
      )}
    </div>
  );
}

function ChoiceQ({ prompt, options, answerIndex, color }) {
  const [sel, setSel] = useState(null);
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <p className="text-slate-700 mb-3 font-body">{prompt}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => {
          let cls = "border-slate-200 text-slate-700 hover:border-slate-400";
          if (sel !== null && i === answerIndex) cls = "bg-emerald-50 border-emerald-400 text-emerald-700";
          else if (sel === i) cls = "bg-red-50 border-red-400 text-red-600";
          return (
            <button key={i} onClick={() => setSel(i)} className={`px-3 py-2 rounded-lg text-sm border-2 font-body font-medium transition ${cls}`}>
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function RevealQ({ prompt, answer, color }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 p-4 bg-white">
      <p className="text-slate-700 mb-2 font-body whitespace-pre-line">{prompt}</p>
      <button
        onClick={() => setShow((s) => !s)}
        className="text-sm font-display font-semibold px-3 py-1.5 rounded-lg"
        style={{ background: `${color}15`, color }}
      >
        {show ? "Hide answer" : "Show answer"}
      </button>
      {show && <p className="mt-2 text-emerald-700 text-sm font-semibold font-body whitespace-pre-line">{answer}</p>}
    </div>
  );
}

/* ---------------------------------------------------------------
   STANDARD CONTENT (categories that follow the same pattern)
--------------------------------------------------------------- */
const STANDARD_CONTENT = {
  2: {
    definition: "Sentence structure is the order of words in a sentence. In a positive Future Simple sentence, we add the special helper word 'will' before the main verb.",
    formula: "Subject + will + base verb + Object",
    rules: [
      "The Subject comes first.",
      "'will' comes next — it is exactly the same for every subject.",
      "The main verb stays in its base form — never add -s, -ed, or -ing after will.",
      "The Object comes last, if the sentence needs one.",
    ],
    examples: [
      { en: "I will call you.", note: "" },
      { en: "She will call you.", note: "" },
      { en: "They will call you.", note: "" },
      { en: "The bus will arrive soon.", note: "" },
      { en: "We will visit the museum.", note: "" },
    ],
    mistakes: [
      { wrong: "She will calls you.", right: "She will call you.", why: "After will, always use the base verb — never add -s." },
      { wrong: "I will to call you.", right: "I will call you.", why: "Never add 'to' after will." },
    ],
    activity: "Give jumbled words like 'you / will / call / I' and ask the learner to put them in the correct order.",
    remember: "will + base verb — always, for every subject, with no changes to the verb!",
  },
  3: {
    definition: "Unlike Present Simple, 'will' never changes, no matter who is doing the action.",
    formula: "I/You/He/She/It/We/They + will + base verb",
    rules: [
      "There's no extra -s for he/she/it, unlike in Present Simple.",
      "'will' is a helper word (a modal verb), and modal verbs never change their form.",
      "This makes Future Simple a little easier — one form of 'will' fits every subject!",
    ],
    examples: [
      { en: "I will go.", note: "" },
      { en: "You will go.", note: "" },
      { en: "He will go.", note: "" },
      { en: "She will go.", note: "" },
      { en: "They will go.", note: "" },
    ],
    mistakes: [
      { wrong: "He wills go.", right: "He will go.", why: "'will' never takes -s, even with he/she/it." },
    ],
    activity: "Ask the learner to write 'will + go' for 6 different subjects to see they are all exactly the same.",
    remember: "One 'will' fits all — I, you, he, she, it, we, they all use exactly the same form!",
  },
  4: {
    definition: "In spoken and informal English, 'will' is often shortened. Knowing these short forms helps you understand real conversations.",
    rules: [
      "will → 'll (I will → I'll, she will → she'll).",
      "will not → won't (not 'willn't'!).",
      "Contractions are very common in speaking and informal writing.",
      "In formal writing, we usually write the full form: will / will not.",
    ],
    examples: [
      { en: "I'll see you soon.", note: "= I will" },
      { en: "She'll be there.", note: "= She will" },
      { en: "They won't come.", note: "= They will not" },
      { en: "We'll finish it.", note: "= We will" },
      { en: "He won't like this.", note: "= He will not" },
    ],
    mistakes: [
      { wrong: "I willn't go.", right: "I won't go.", why: "The negative contraction is 'won't', not 'willn't'." },
      { wrong: "Il help you.", right: "I'll help you.", why: "Don't forget the apostrophe in 'll." },
    ],
    activity: "Give 5 full sentences with 'will' and ask the learner to rewrite them using contractions.",
    remember: "'will not' becomes 'won't' — it's a special, irregular contraction, so just memorize it!",
  },
  5: {
    definition: "We use 'will' to make predictions — guesses about what we think will happen, often based on opinion rather than facts.",
    rules: [
      "Used for guesses or beliefs about the future.",
      "Often used with words like 'I think', 'probably', 'maybe'.",
      "The prediction may or may not come true.",
    ],
    examples: [
      "I think it will rain tomorrow.",
      "She will probably pass the exam.",
      "Robots will do more jobs in the future.",
      "He will be a great doctor one day.",
    ],
    mistakes: [
      { wrong: "I think it rains tomorrow.", right: "I think it will rain tomorrow.", why: "A future prediction needs 'will', not Present Simple." },
    ],
    activity: "Ask the learner to make 3 predictions about next year, using 'I think... will...'.",
    remember: "Predictions are guesses about tomorrow — dress them in 'will'!",
  },
  6: {
    definition: "We also use 'will' for things we are fairly sure will happen in the future, like scheduled or certain events.",
    rules: [
      "Used for events we feel confident will happen.",
      "Often paired with time expressions like 'tomorrow', 'next year'.",
      "Different from predictions — these feel more certain, not just a guess.",
    ],
    examples: [
      "The sun will rise tomorrow.",
      "Summer will end in September.",
      "My birthday will be on Friday this year.",
      "The train will leave at 6 PM.",
    ],
    mistakes: [
      { wrong: "The sun rise tomorrow.", right: "The sun will rise tomorrow.", why: "Don't forget 'will' before the base verb." },
    ],
    activity: "Give 4 certain future facts with 'will' missing, and ask the learner to add it in the right place.",
    remember: "When we're confident something will happen, 'will' shows that certainty.",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something WILL happen.",
    formula: "Subject + will + base verb + Object",
    rules: [
      "Start with the Subject.",
      "Add 'will' — the same word for every subject.",
      "Add the main verb in its base form.",
      "Finish with the Object or extra information.",
    ],
    examples: [
      "I will play the piano.",
      "You will speak English well.",
      "He will work in a bank.",
      "She will love this gift.",
      "We will live near the park.",
    ],
    mistakes: [
      { wrong: "She will loves this gift.", right: "She will love this gift.", why: "The verb after will always stays in its base form." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct 'will' sentences.",
    remember: "will + base verb — nothing extra, no matter the subject!",
  },
  10: {
    definition: "A negative sentence tells us that something will NOT happen.",
    formula: "Subject + will not (won't) + base verb",
    rules: [
      "Add 'not' right after will, or use the contraction won't.",
      "The main verb stays in its base form.",
      "won't is the standard short form — never 'willn't'.",
    ],
    examples: [
      "I will not go.",
      "She won't come.",
      "They will not finish on time.",
      "He won't like it.",
    ],
    mistakes: [
      { wrong: "She don't will come.", right: "She won't come.", why: "Don't mix 'don't' with 'will' — just add 'not' or use won't." },
      { wrong: "He will not comes.", right: "He will not come.", why: "Use the base verb after 'will not' — no -s." },
    ],
    activity: "Give 5 positive 'will' sentences and ask the learner to make them negative.",
    remember: "will + not = won't. Simple as that!",
  },
  11: {
    definition: "Yes/No questions in the future ask something that can be answered simply with Yes or No.",
    formula: "Will + Subject + base verb ...?",
    rules: [
      "Move 'will' to the very front of the sentence.",
      "The main verb stays in its base form.",
      "Short answers: Yes, I will. / No, I won't.",
    ],
    examples: [
      "Will you help me? — Yes, I will.",
      "Will she come to the party? — No, she won't.",
      "Will they finish today?",
    ],
    mistakes: [
      { wrong: "Will she comes to the party?", right: "Will she come to the party?", why: "Use the base verb after will — no -s." },
    ],
    activity: "Ask the learner to turn 5 future statements into Yes/No questions.",
    remember: "will jumps to the front of the sentence — the rest stays exactly the same!",
  },
  12: {
    definition: "WH questions ask for more information about the future, not just Yes or No. They begin with a question word.",
    formula: "WH word + will + Subject + base verb ...?",
    rules: [
      "What = asks about a thing: What will you eat?",
      "Where = asks about a place: Where will she go?",
      "When = asks about time: When will they arrive?",
      "Why = asks for a reason: Why will he leave?",
      "Who / Which = can ask about a person or thing.",
      "How = asks about manner or way: How will you get there?",
      "Good news: unlike Present and Past Simple, there's no special exception here — even when 'Who' is the subject, we still use 'will': Who will win the match?",
    ],
    examples: [
      "What will you eat for dinner?",
      "Where will she go on holiday?",
      "When will they arrive?",
      "Why will he leave early?",
      "Who will win the match?",
      "How will you get there?",
    ],
    mistakes: [
      { wrong: "What will you will eat?", right: "What will you eat?", why: "Only one 'will' is needed per question." },
      { wrong: "Who will wins?", right: "Who will win?", why: "Use the base verb after will — no -s, even when who is the subject." },
    ],
    activity: "Match each WH word (What, Where, When, Why, Who, Which, How) to a question about tomorrow.",
    remember: "WH word → will → subject → base verb. Only one 'will' needed per question!",
  },
  15: {
    definition: "Here are the most common Future Simple mistakes beginners make — and how to fix them.",
    examples: [],
    mistakes: [
      { wrong: "She will goes tomorrow.", right: "She will go tomorrow.", why: "The verb after will must stay in its base form." },
      { wrong: "I will to call you.", right: "I will call you.", why: "Never add 'to' after will." },
      { wrong: "He willn't come.", right: "He won't come.", why: "The negative contraction is 'won't', not 'willn't'." },
      { wrong: "Will she comes?", right: "Will she come?", why: "Use the base verb after will." },
      { wrong: "I think it rains tomorrow.", right: "I think it will rain tomorrow.", why: "Future predictions need 'will', not Present Simple." },
      { wrong: "She don't will help.", right: "She won't help.", why: "Don't mix don't with will — use won't." },
      { wrong: "Who will wins?", right: "Who will win?", why: "The verb after will always stays base form, even for 'who'." },
    ],
    activity: "Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.",
    remember: "Most mistakes happen in the same two spots: adding -s after will, or getting the won't contraction wrong.",
  },
};

/* ---------------------------------------------------------------
   MAIN SECTION SHELL
--------------------------------------------------------------- */
function SectionShell({ meta, children }) {
  const Icon = meta.icon;
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${meta.color}18` }}>
          <Icon size={22} color={meta.color} />
        </div>
        <div>
          <p className="text-xs font-body font-bold uppercase tracking-widest text-slate-400">
            Lesson {String(meta.id).padStart(2, "0")} / 19
          </p>
          <h2 className="font-display font-bold text-2xl text-slate-800">{meta.title}</h2>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 1 — INTRODUCTION
--------------------------------------------------------------- */
function IntroSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        The <strong>Future Simple Tense</strong> is used to talk about actions that haven't happened yet —
        things we expect, promise, or decide will happen later. We usually build it with the little helper
        word <strong>will</strong>.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Telescope, title: "Predictions", desc: "Guesses about the future, like 'It will rain tomorrow.'" },
            { icon: Handshake, title: "Promises & Offers", desc: "Things decided right now, like 'I will help you.'" },
            { icon: CalendarCheck, title: "Certain Events", desc: "Things we're confident about, like 'The sun will rise.'" },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 p-4 bg-white">
              <c.icon size={20} color={color} className="mb-2" />
              <p className="font-display font-semibold text-sm text-slate-800">{c.title}</p>
              <p className="text-xs text-slate-500 font-body mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Everyday examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "I will call you tomorrow.",
            "It will rain this evening.",
            "She will help you with your homework.",
            "They will arrive next week.",
            "We will win this match.",
          ]}
        />
      </div>

      <Remember color={color}>
        If it's about the future — a guess, a promise, or something certain — 'will' is often the tense we reach for.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const NEAR_FUTURE = [
  { w: "tomorrow", ex: "I will see you tomorrow." },
  { w: "tonight", ex: "She will call tonight." },
  { w: "soon", ex: "We will leave soon." },
  { w: "later", ex: "He will explain later." },
];
const FAR_FUTURE = [
  { w: "next week", ex: "They will move next week." },
  { w: "next month", ex: "She will start next month." },
  { w: "next year", ex: "We will travel next year." },
  { w: "in the future", ex: "Cars will fly in the future." },
];
const SPECIFIC_FUTURE = [
  { w: "next Monday", ex: "The meeting will be next Monday." },
  { w: "in 2030", ex: "The project will finish in 2030." },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Future Simple. They tell us WHEN something will happen — a
        moment that hasn't arrived yet.
      </p>

      <div>
        <SectionLabel color={color}>Very soon</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {NEAR_FUTURE.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Further ahead</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {FAR_FUTURE.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Specific future points</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {SPECIFIC_FUTURE.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <ActivityBox color={color}>
        Pick any 3 time words above and write your own sentence about your own future for each one!
      </ActivityBox>
      <Remember color={color}>These words always point forward — they never look back at the past.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 13 — FREQUENCY ADVERBS
--------------------------------------------------------------- */
const FREQ_SCALE = [
  { w: "always", pct: 100 },
  { w: "usually", pct: 80 },
  { w: "often", pct: 60 },
  { w: "sometimes", pct: 40 },
  { w: "rarely", pct: 15 },
  { w: "never", pct: 0 },
];

function FrequencyAdverbsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Frequency adverbs tell us HOW OFTEN something will happen. With 'will', they sit in a special spot
        — right after 'will', before the main verb.
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2">
        {FREQ_SCALE.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-20 text-xs font-body font-semibold text-slate-600 shrink-0">{f.w}</span>
            <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${f.pct}%`, background: color }} />
            </div>
            <span className="w-10 text-xs font-mono text-slate-400 text-right shrink-0">{f.pct}%</span>
          </div>
        ))}
      </div>

      <div>
        <SectionLabel color={color}>Word order</SectionLabel>
        <div className="rounded-2xl p-4 text-center font-mono font-bold text-sm" style={{ background: `${color}12`, color }}>
          Subject + will + frequency adverb + base verb
        </div>
      </div>

      <ExampleList
        color={color}
        items={[
          "I will always remember this day.",
          "She will never give up.",
          "He will usually call before visiting.",
          "They will often help their neighbors.",
        ]}
      />

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList
          items={[
            { wrong: "I always will remember.", right: "I will always remember.", why: "With will, the adverb goes after will, not before it." },
            { wrong: "She will give never up.", right: "She will never give up.", why: "The adverb goes right after will, before the verb, not in the middle of the verb phrase." },
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Ask the learner to make 3 promises about their future using always or never, like "I will always ___."
      </ActivityBox>
      <Remember color={color}>With will, the adverb always slots in right after will, before the main verb.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = [
  "tomorrow", "tonight", "soon", "later", "next week", "next month",
  "next year", "in the future", "next Monday", "in 2030", "one day",
];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Future Simple.
      </p>

      <div className="flex flex-wrap gap-2">
        {SIGNAL_WORDS.map((w, i) => (
          <span key={i} className="px-3 py-1.5 rounded-full text-sm font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
        ))}
      </div>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "Tomorrow, I will start my new job.",
            "One day, she will travel the world.",
            "We will meet again next year.",
            "The shop will open soon.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Future Simple sentence!</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 16 — CONVERSATIONS
--------------------------------------------------------------- */
function ChatBubble({ side, name, color, children }) {
  const isLeft = side === "left";
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-[80%] ${isLeft ? "" : "text-right"}`}>
        <p className="text-[11px] font-body font-bold text-slate-400 mb-0.5 px-1">{name}</p>
        <div
          className="rounded-2xl px-4 py-2 text-sm font-body inline-block text-left"
          style={{
            background: isLeft ? "#F1F5F9" : `${color}18`,
            color: "#334155",
            borderTopLeftRadius: isLeft ? 4 : undefined,
            borderTopRightRadius: !isLeft ? 4 : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ConversationsSection({ color }) {
  return (
    <div className="space-y-8">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Let's see Future Simple in real conversations — the way people actually talk about plans, promises, and guesses.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — Making plans</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>What will you do this weekend?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I will visit my grandparents.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Nice! Will you take the train?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>No, I won't. I'll drive there instead.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Have a safe trip!</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — A promise</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>I'm worried about the exam.</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>Don't worry, I will help you study.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Really? Thank you so much!</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>Of course. We will pass this together.</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue between two friends making plans for next weekend.
      </ActivityBox>
      <Remember color={color}>Real conversations use Future Simple all the time — for plans, promises, and guesses!</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 17 — PRACTICE EXERCISES
--------------------------------------------------------------- */
function PracticeSection({ color }) {
  return (
    <div className="space-y-8">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Time to practice! Try each exercise below. Type your answer or click the buttons, then check yourself.
      </p>

      <div>
        <SectionLabel color={color}>1. Fill in the blanks</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="She ___ (call) you tomorrow." answer="will call" placeholder="type will + verb" />
          <CheckInput color={color} prompt="They ___ (arrive) next week." answer="will arrive" placeholder="type will + verb" />
          <CheckInput color={color} prompt="He ___ not (come) to the party." answer="will not come" placeholder="type will not + verb" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="I will ___ you a letter." options={["writes", "wrote", "write"]} answerIndex={2} />
          <ChoiceQ color={color} prompt="She will ___ tired after the trip." options={["is", "be", "was"]} answerIndex={1} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / will / He / play / tomorrow." answer="He will play football tomorrow." />
          <RevealQ color={color} prompt="early / will / She / wake up / tomorrow." answer="She will wake up early tomorrow." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'He will comes tomorrow.'" answer="He will come tomorrow. (comes → come)" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'She willn't help.'" answer="She won't help. (willn't → won't)" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I will call you.'" answer="I will not call you." />
          <CheckInput color={color} prompt="Make this negative: 'He will play cricket.'" answer="He will not play cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She will visit Paris.'" answer="Will she visit Paris?" />
          <CheckInput color={color} prompt="Make this a question: 'They will live here.'" answer="Will they live here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which word is the main verb? 'My sister will cook dinner tomorrow.'" answer="cook" />
          <RevealQ color={color} prompt="Which word is the main verb? 'The children will play in the park.'" answer="play" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / next year" answer="She will study English next year." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / meat" answer="We will not eat meat." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school tomorrow.", options: ["go", "will go", "goes"], correct: 1 },
  { q: "I ___ pizza tonight.", options: ["will eat", "eats", "ate"], correct: 0 },
  { q: "He ___ like this plan.", options: ["won't", "don't", "isn't"], correct: 0 },
  { q: "___ you help me tomorrow?", options: ["Do", "Will", "Did"], correct: 1 },
  { q: "They ___ football next weekend.", options: ["will played", "will play", "plays"], correct: 1 },
  { q: "I think it ___ rain later.", options: ["will", "is", "was"], correct: 0 },
  { q: "We ___ in this city next year.", options: ["will lived", "lives", "will live"], correct: 2 },
  { q: "___ she work here next month?", options: ["Will", "Does", "Did"], correct: 0 },
  { q: "He ___ TV tonight.", options: ["will watches", "will watch", "watched"], correct: 1 },
  { q: "I ___ forget this day.", options: ["will never", "never will", "will not never"], correct: 0 },
];

function QuizSection({ color }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUIZ_QUESTIONS.every((_, i) => answers[i] !== undefined);
  const score = QUIZ_QUESTIONS.reduce((s, q, i) => s + (answers[i] === q.correct ? 1 : 0), 0);

  function select(qi, oi) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qi]: oi }));
  }
  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Let's test what you've learned! Answer all 10 questions, then press "Submit Quiz" to see your score.
      </p>

      <div className="space-y-4">
        {QUIZ_QUESTIONS.map((q, qi) => (
          <div key={qi} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-body text-slate-700 mb-3">
              <span className="font-bold" style={{ color }}>{qi + 1}.</span> {q.q}
            </p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((o, oi) => {
                let cls = "border-slate-200 text-slate-700 hover:border-slate-400";
                if (answers[qi] === oi && !submitted) cls = "border-2";
                if (submitted) {
                  if (oi === q.correct) cls = "bg-emerald-50 border-emerald-400 text-emerald-700";
                  else if (oi === answers[qi]) cls = "bg-red-50 border-red-400 text-red-600";
                }
                return (
                  <button
                    key={oi}
                    onClick={() => select(qi, oi)}
                    style={answers[qi] === oi && !submitted ? { borderColor: color, color, background: `${color}10` } : undefined}
                    className={`px-3 py-2 rounded-lg text-sm border-2 font-body font-medium transition ${cls}`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          disabled={!allAnswered}
          onClick={() => setSubmitted(true)}
          className="w-full py-3 rounded-xl text-white font-display font-bold disabled:opacity-40"
          style={{ background: color }}
        >
          {allAnswered ? "Submit Quiz" : `Answer all questions (${Object.keys(answers).length}/10)`}
        </button>
      ) : (
        <div className="rounded-2xl p-5 text-center" style={{ background: `${color}12` }}>
          <Award size={28} color={color} className="mx-auto mb-2" />
          <p className="font-display font-bold text-2xl text-slate-800">{score} / 10</p>
          <p className="text-sm text-slate-600 font-body mb-3">
            {score >= 8 ? "Excellent work! You know Future Simple well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
          </p>
          <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display font-semibold border-2" style={{ borderColor: color, color }}>
            <RotateCcw size={14} /> Try Again
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 19 — SUMMARY
--------------------------------------------------------------- */
function SummarySection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Here is your one-page revision sheet. Keep it handy whenever you need a quick reminder!
      </p>

      <div className="rounded-2xl p-4 text-center font-mono font-bold" style={{ background: `${color}12`, color }}>
        Subject + will + base verb — same form for every subject
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">We use 'will' for</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• Predictions</li>
            <li>• Promises & offers</li>
            <li>• Spontaneous decisions</li>
            <li>• Certain future events</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Contractions</p>
          <p className="text-sm text-slate-600 font-body">will → 'll</p>
          <p className="text-sm text-slate-600 font-body">will not → won't</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Negative Rule</p>
          <p className="text-sm text-slate-600 font-body">will not (won't) + base verb</p>
          <p className="text-xs text-slate-400 font-body mt-1">She won't come. (not: comes)</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Will + subject + base verb ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Will she come tomorrow?</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["tomorrow", "tonight", "soon", "next week", "next year", "in the future", "one day", "later"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: 'will' never changes form, the verb after it is always base form, and 'will not' shortens to 'won't'.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   MAIN APP
--------------------------------------------------------------- */
export default function App() {
  const [activeId, setActiveId] = useState(1);
  const [navOpen, setNavOpen] = useState(false);
  const meta = SECTIONS.find((s) => s.id === activeId);
  const color = meta.color;

  function go(id) {
    setActiveId(id);
    setNavOpen(false);
  }

  function renderContent() {
    if (activeId === 1) return <IntroSection color={color} />;
    if (activeId === 8) return <TimeExpressionsSection color={color} />;
    if (activeId === 13) return <FrequencyAdverbsSection color={color} />;
    if (activeId === 14) return <SignalWordsSection color={color} />;
    if (activeId === 16) return <ConversationsSection color={color} />;
    if (activeId === 17) return <PracticeSection color={color} />;
    if (activeId === 18) return <QuizSection color={color} />;
    if (activeId === 19) return <SummarySection color={color} />;
    return <ConceptBlock data={STANDARD_CONTENT[activeId]} color={color} />;
  }

  return (
    <div className="min-h-screen bg-[#F1FAF9] font-body">
      <FontStyle />

      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
              <Rocket size={17} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Future Simple Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-teal-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
            </div>
            <span className="text-xs font-mono text-slate-400 shrink-0">{activeId}/19</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-[240px_1fr] gap-6">
        <aside className={`${navOpen ? "block" : "hidden"} lg:block`}>
          <div className="lg:sticky lg:top-20 space-y-1 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-2 lg:p-0 border lg:border-0 border-slate-200">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition ${active ? "shadow-sm" : "hover:bg-slate-100"}`}
                  style={active ? { background: `${s.color}14` } : undefined}
                >
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold shrink-0"
                    style={{ background: active ? s.color : "#E2E8F0", color: active ? "white" : "#64748B" }}
                  >
                    {s.id}
                  </span>
                  <Icon size={15} color={active ? s.color : "#94A3B8"} className="shrink-0" />
                  <span className={`text-sm font-body ${active ? "font-bold" : "font-medium text-slate-600"}`} style={active ? { color: s.color } : undefined}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <main>
          <div className="lesson-paper rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-teal-200" />
            <div className="pl-4 sm:pl-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <SectionShell meta={meta}>{renderContent()}</SectionShell>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              disabled={activeId === 1}
              onClick={() => go(activeId - 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-display font-semibold text-slate-600 disabled:opacity-30"
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <button
              disabled={activeId === 19}
              onClick={() => go(activeId + 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-xl text-white text-sm font-display font-semibold disabled:opacity-30"
              style={{ background: color }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
