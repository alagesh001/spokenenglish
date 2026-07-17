import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Split, AlertTriangle, MessageCircle, PencilLine, ListChecks, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Calendar,
  Award, Check, Hourglass, Zap
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
        transparent, transparent 34px, rgba(124,58,237,0.07) 34px, rgba(124,58,237,0.07) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: Hourglass, color: "#7C3AED" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "Was/Were Rules", icon: Users, color: "#EAA400" },
  { id: 4, title: "-ing Spelling Rules", icon: PencilLine, color: "#22B573" },
  { id: 5, title: "Action in Progress", icon: Hourglass, color: "#8B5CF6" },
  { id: 6, title: "Interrupted Actions", icon: Zap, color: "#EC4899" },
  { id: 7, title: "Two Actions Together", icon: Split, color: "#0EA5E9" },
  { id: 8, title: "Time Expressions", icon: Calendar, color: "#F59E0B" },
  { id: 9, title: "Positive Sentences", icon: CheckCircle2, color: "#22B573" },
  { id: 10, title: "Negative Sentences", icon: XCircle, color: "#F97362" },
  { id: 11, title: "Yes/No Questions", icon: HelpCircle, color: "#2563EB" },
  { id: 12, title: "WH Questions", icon: MessageCircle, color: "#8B5CF6" },
  { id: 13, title: "When vs While", icon: Split, color: "#EC4899" },
  { id: 14, title: "Signal Words", icon: Sparkles, color: "#EAA400" },
  { id: 15, title: "Common Mistakes", icon: AlertTriangle, color: "#F97362" },
  { id: 16, title: "Real-Life Talk", icon: MessageCircle, color: "#0EA5E9" },
  { id: 17, title: "Practice Time", icon: ListChecks, color: "#22B573" },
  { id: 18, title: "Quiz Time", icon: GraduationCap, color: "#8B5CF6" },
  { id: 19, title: "Summary Sheet", icon: BookOpen, color: "#7C3AED" },
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
    definition: "Sentence structure is the order of words in a sentence. A positive Past Continuous sentence always uses TWO parts working together: was/were and the -ing verb.",
    formula: "Subject + was/were + verb-ing + Object",
    rules: [
      "The Subject comes first.",
      "The correct past form of 'be' (was/were) comes next.",
      "The main verb takes -ing.",
      "The Object comes last, if the sentence needs one.",
    ],
    examples: [
      { en: "I was watching TV.", note: "" },
      { en: "She was reading a book.", note: "" },
      { en: "They were playing football.", note: "" },
      { en: "The baby was sleeping.", note: "no object needed" },
    ],
    mistakes: [
      { wrong: "I watching TV.", right: "I was watching TV.", why: "Never drop was/were — it's a required helper." },
      { wrong: "She was read a book.", right: "She was reading a book.", why: "The main verb must have -ing, not the base form." },
    ],
    activity: "Give jumbled words like 'TV / watching / was / I' and ask the learner to order them correctly.",
    remember: "Two parts are needed together: was/were + verb-ing. Neither one works alone!",
  },
  3: {
    definition: "The helper verb 'be' has two past forms. Choosing the right one depends on the subject.",
    formula: "I/He/She/It + was   •   You/We/They + were",
    rules: [
      "I, He, She, It → was",
      "You, We, They → were",
      "This is different from Present Continuous, where 'I' uses 'am' — in the past, 'I' uses 'was'.",
    ],
    examples: [
      { en: "I was eating.", note: "" },
      { en: "He was eating.", note: "" },
      { en: "We were eating.", note: "" },
      { en: "They were watching TV.", note: "" },
    ],
    mistakes: [
      { wrong: "She were eating.", right: "She was eating.", why: "He/she/it uses 'was', not 'were'." },
      { wrong: "They was eating.", right: "They were eating.", why: "'They' uses 'were', not 'was'." },
    ],
    activity: "Give a list of subjects and ask the learner to fill in was or were correctly for each one.",
    remember: "I/He/She/It → was. You/We/They → were. Just two little words to remember!",
  },
  4: {
    definition: "When we add -ing to a verb, the spelling can change a little depending on the verb's last letters. The rule is the same as in Present Continuous.",
    rules: [
      "Most verbs: just add -ing → play→playing, read→reading, watch→watching.",
      "Verbs ending in a silent -e: drop the e, then add -ing → make→making, write→writing, dance→dancing.",
      "Short verbs ending in one vowel + one consonant: double the last letter, then add -ing → run→running, sit→sitting, swim→swimming.",
      "Verbs ending in -ie: change ie to y, then add -ing → lie→lying, die→dying.",
    ],
    examples: [
      { en: "make → She was making a cake.", note: "" },
      { en: "run → He was running fast.", note: "doubled letter" },
      { en: "write → I was writing a letter.", note: "dropped the e" },
      { en: "sit → They were sitting quietly.", note: "" },
    ],
    mistakes: [
      { wrong: "She was makeing a cake.", right: "She was making a cake.", why: "Drop the silent e before adding -ing." },
      { wrong: "He was siting down.", right: "He was sitting down.", why: "Short verbs need the last letter doubled before -ing." },
    ],
    activity: "Sort 10 verbs into baskets: '+ing', 'drop e + ing', 'double letter + ing'.",
    remember: "Silent e disappears before -ing, and short vowel-consonant verbs double their last letter!",
  },
  5: {
    definition: "We use Past Continuous for an action that was in progress at a specific moment in the past — it was already happening at that time.",
    rules: [
      "The action was ongoing at a particular past time.",
      "Often used with a specific time: at 8 o'clock, at that moment, all day yesterday.",
      "We don't know exactly when it started or finished — we just know it was happening then.",
    ],
    examples: [
      "At 8 PM, I was having dinner.",
      "She was sleeping at midnight.",
      "We were studying all evening.",
      "He was driving to work at that time.",
    ],
    mistakes: [
      { wrong: "At 8 PM, I had dinner.", right: "At 8 PM, I was having dinner.", why: "An action in progress at a specific past moment needs Past Continuous." },
    ],
    activity: "Ask the learner to write what they were doing yesterday at 7 PM.",
    remember: "Picture a photo of the past — Past Continuous freezes an action right in the middle of happening.",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something WAS happening at a certain past time.",
    formula: "Subject + was/were + verb-ing + Object",
    rules: [
      "Start with the Subject.",
      "Add the correct past be verb (was/were).",
      "Add the main verb with -ing.",
      "Finish with the Object or extra information.",
    ],
    examples: [
      "I was playing the piano.",
      "You were speaking loudly.",
      "He was working in the garden.",
      "She was watching a movie.",
      "We were living nearby then.",
    ],
    mistakes: [
      { wrong: "She playing the piano.", right: "She was playing the piano.", why: "Don't forget was/were before the -ing verb." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct Past Continuous sentences.",
    remember: "was/were + verb-ing — both parts must be there together!",
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
        The <strong>Past Continuous Tense</strong> (also called Past Progressive) is used to talk about
        an action that was already in progress at a certain moment in the past — like pressing pause on
        an old video and seeing the action frozen in the middle.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Hourglass, title: "Action in Progress", desc: "Ongoing at a past moment, like 'I was sleeping at 10 PM.'" },
            { icon: Zap, title: "Interrupted Actions", desc: "A longer action cut short, like 'I was cooking when he called.'" },
            { icon: Split, title: "Two Actions Together", desc: "Two things happening at once, like 'While I was reading, she was cooking.'" },
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
            "I was reading a book at 9 PM.",
            "She was cooking dinner when the phone rang.",
            "We were watching a movie all evening.",
            "They were talking while I was working.",
            "It was raining when we left the house.",
          ]}
        />
      </div>

      <Remember color={color}>
        If it was happening in the middle of a past moment — not finished yet at that time — Past Continuous is the tense to reach for.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 6 — INTERRUPTED ACTIONS
--------------------------------------------------------------- */
function InterruptedSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        We often use Past Continuous for a longer action that was interrupted by a shorter action. The
        longer action uses Past Continuous, and the shorter, interrupting action uses Simple Past.
      </p>

      <div className="rounded-2xl p-4 text-center font-mono font-bold text-sm" style={{ background: `${color}12`, color }}>
        Longer action (was/were + -ing) + when + shorter action (Simple Past)
      </div>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "I was cooking dinner when the phone rang.",
            "She was sleeping when the alarm went off.",
            "We were walking home when it started to rain.",
            "He was studying when his friend arrived.",
          ]}
        />
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "I cooked dinner when the phone was ringing.", right: "I was cooking dinner when the phone rang.", why: "The longer, background action takes Past Continuous; the short interruption takes Simple Past." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Ask the learner to complete: "I was ___ (verb) when ___ (something happened)."
      </ActivityBox>
      <Remember color={color}>Longer action = was/were + -ing. Shorter interruption = Simple Past. They work as a team!</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 7 — TWO ACTIONS TOGETHER
--------------------------------------------------------------- */
function TwoActionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        We also use Past Continuous to describe two longer actions happening at the same time in the past
        — like two videos playing side by side.
      </p>

      <div className="rounded-2xl p-4 text-center font-mono font-bold text-sm" style={{ background: `${color}12`, color }}>
        While + Subject + was/were + -ing, Subject + was/were + -ing
      </div>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "While I was reading, she was cooking.",
            "He was singing while she was playing the guitar.",
            "While the children were playing, the parents were talking.",
            "I was studying while my brother was watching TV.",
          ]}
        />
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "While I read, she was cooking.", right: "While I was reading, she was cooking.", why: "Both parallel actions need Past Continuous, not just one of them." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Ask the learner to describe two things that were happening in their house at the same time yesterday, using "while".
      </ActivityBox>
      <Remember color={color}>"While" connects two actions happening side by side — both usually take was/were + -ing.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const TIME_POINT = [
  { w: "at 8 o'clock", ex: "I was sleeping at 8 o'clock." },
  { w: "at that moment", ex: "She was crying at that moment." },
  { w: "all day yesterday", ex: "We were working all day yesterday." },
];
const CONNECTOR_WORDS = [
  { w: "while", ex: "While I was cooking, she was reading." },
  { w: "when", ex: "He was sleeping when I called." },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Past Continuous. They tell us exactly WHEN something was
        happening, or connect two actions happening around the same time.
      </p>

      <div>
        <SectionLabel color={color}>A specific past moment</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {TIME_POINT.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Connector words</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-2">
          {CONNECTOR_WORDS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <ActivityBox color={color}>
        Pick any 3 time words above and write your own sentence for each one!
      </ActivityBox>
      <Remember color={color}>Seeing one of these words is a strong clue the sentence should be Past Continuous.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 10 — NEGATIVE
--------------------------------------------------------------- */
function NegativeSection({ color }) {
  return (
    <ConceptBlock
      color={color}
      data={{
        definition: "A negative sentence tells us that something was NOT happening at a certain past time.",
        formula: "Subject + was/were + not + verb-ing",
        rules: [
          "Add 'not' right after was/were.",
          "Contractions: wasn't (was not), weren't (were not).",
          "The main verb keeps its -ing ending.",
        ],
        examples: [
          "I was not watching TV.",
          "She wasn't cooking at that time.",
          "They weren't playing outside.",
          "He wasn't sleeping.",
        ],
        mistakes: [
          { wrong: "She didn't cooking dinner.", right: "She wasn't cooking dinner.", why: "Negative Past Continuous sentences use wasn't/weren't, not didn't." },
        ],
        activity: "Give 5 positive Past Continuous sentences and ask the learner to make them negative.",
        remember: "Just slide 'not' right after was/were — the -ing verb doesn't change!",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 11 — YES/NO QUESTIONS
--------------------------------------------------------------- */
function YesNoSection({ color }) {
  return (
    <ConceptBlock
      color={color}
      data={{
        definition: "Yes/No questions in the past ask something about an ongoing past action that can be answered with Yes or No.",
        formula: "Was/Were + Subject + verb-ing ...?",
        rules: [
          "Move was/were to the front of the sentence.",
          "The main verb keeps its -ing ending.",
          "Short answers: Yes, I was. / No, she wasn't. / No, they weren't.",
        ],
        examples: [
          "Was you watching TV? — Yes, I was.",
          "Was she sleeping? — No, she wasn't.",
          "Were they playing outside? — Yes, they were.",
        ],
        mistakes: [
          { wrong: "Did she was cooking?", right: "Was she cooking?", why: "Don't add 'did' — just move was/were to the front." },
        ],
        activity: "Ask the learner to turn 5 Past Continuous statements into Yes/No questions.",
        remember: "was/were jumps to the front — no did needed here!",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 12 — WH QUESTIONS
--------------------------------------------------------------- */
function WHSection({ color }) {
  return (
    <ConceptBlock
      color={color}
      data={{
        definition: "WH questions ask for more information about what was happening in the past, not just Yes or No.",
        formula: "WH word + was/were + Subject + verb-ing ...?",
        rules: [
          "What = asks about a thing: What were you doing?",
          "Where = asks about a place: Where was she going?",
          "Why = asks for a reason: Why was he crying?",
          "Who = can ask about a person: Who was knocking at the door?",
          "How = asks about manner: How were you feeling?",
        ],
        examples: [
          "What were you doing at 9 PM?",
          "Where was she going?",
          "Why was he crying?",
          "Who was knocking at the door?",
          "How were you feeling yesterday?",
        ],
        mistakes: [
          { wrong: "What you were doing?", right: "What were you doing?", why: "was/were comes right after the WH word, before the subject." },
        ],
        activity: "Match each WH word (What, Where, Why, Who, How) to a question about yesterday.",
        remember: "Order: WH word → was/were → subject → verb-ing.",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 13 — WHEN VS WHILE
--------------------------------------------------------------- */
function WhenWhileSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        "When" and "while" both connect two past actions, but they are used a little differently.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2" style={{ color }}>WHEN</p>
          <p className="text-sm text-slate-600 font-body mb-2">
            Introduces the shorter, interrupting action. That action is usually Simple Past.
          </p>
          <p className="text-sm text-slate-700 font-body font-semibold">I was cooking when the phone rang.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2" style={{ color }}>WHILE</p>
          <p className="text-sm text-slate-600 font-body mb-2">
            Introduces a longer, ongoing action. That action uses Past Continuous.
          </p>
          <p className="text-sm text-slate-700 font-body font-semibold">While I was cooking, she was reading.</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "While I cooked, the phone rang.", right: "While I was cooking, the phone rang.", why: "'While' usually introduces the longer, ongoing action, so it needs Past Continuous." },
          { wrong: "I was cooking while the phone rang.", right: "I was cooking when the phone rang.", why: "The short, sudden interruption usually pairs with 'when', not 'while'." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Give the learner 4 sentence halves and ask them to decide whether 'when' or 'while' fits better.
      </ActivityBox>
      <Remember color={color}>While = the long background action. When = the short, sudden interruption.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = ["while", "when", "at that moment", "at 8 o'clock last night", "all day yesterday", "all morning", "the whole time"];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Past Continuous.
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
            "At 8 o'clock last night, I was studying.",
            "While she was cooking, I was cleaning.",
            "We were traveling all day yesterday.",
            "He was working the whole time.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Past Continuous sentence!</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 15 — COMMON MISTAKES
--------------------------------------------------------------- */
function MistakesSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Here are the most common Past Continuous mistakes beginners make — and how to fix them.
      </p>
      <MistakeList items={[
        { wrong: "She cooking dinner.", right: "She was cooking dinner.", why: "Never drop was/were — it must be there before the -ing verb." },
        { wrong: "They was playing outside.", right: "They were playing outside.", why: "'They' needs 'were', not 'was'." },
        { wrong: "He was siting down.", right: "He was sitting down.", why: "Short verbs need their last letter doubled before -ing." },
        { wrong: "I cooked when the phone was ringing.", right: "I was cooking when the phone rang.", why: "The longer background action takes Past Continuous; the interruption takes Simple Past." },
        { wrong: "Did she was cooking?", right: "Was she cooking?", why: "Don't add 'did' to a was/were question." },
        { wrong: "I watching TV then.", right: "I was watching TV then.", why: "was/were must always be there." },
      ]} />
      <ActivityBox color={color}>
        Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.
      </ActivityBox>
      <Remember color={color}>
        Most mistakes happen in the same two spots: forgetting was/were, or mixing up was and were.
      </Remember>
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
        Let's see Past Continuous in real conversations — the way people actually describe what was happening.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — What happened last night?</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>What were you doing at 9 PM last night?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I was watching a movie with my sister.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Nice! I was studying the whole evening.</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>That sounds tiring! Were you tired?</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Yes, I was! I went to sleep early.</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — An interruption</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>Why didn't you answer my call?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>Sorry, I was driving when you called.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Oh, I understand. Were you going somewhere important?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>Yes, while I was driving, I was also listening to the news about the storm.</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue about what they were doing when something interrupted them.
      </ActivityBox>
      <Remember color={color}>Real conversations use Past Continuous all the time — for background stories and interruptions!</Remember>
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
          <CheckInput color={color} prompt="She ___ (cook) dinner at 7 PM." answer="was cooking" placeholder="type was/were + verb-ing" />
          <CheckInput color={color} prompt="They ___ (play) in the park all afternoon." answer="were playing" placeholder="type was/were + verb-ing" />
          <CheckInput color={color} prompt="I ___ (write) an email when you called." answer="was writing" placeholder="type was/were + verb-ing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="He was ___ a letter when I arrived." options={["writeing", "writting", "writing"]} answerIndex={2} />
          <ChoiceQ color={color} prompt="They ___ playing football at 5 PM." options={["was", "were", "is"]} answerIndex={1} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / playing / were / They / yesterday." answer="They were playing football yesterday." />
          <RevealQ color={color} prompt="TV / was / She / watching / then." answer="She was watching TV then." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'She cooking dinner then.'" answer="She was cooking dinner then. (add 'was')" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'They was sleeping.'" answer="They were sleeping. (was → were)" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I was watching TV.'" answer="I was not watching TV." />
          <CheckInput color={color} prompt="Make this negative: 'They were playing cricket.'" answer="They were not playing cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She was visiting Paris.'" answer="Was she visiting Paris?" />
          <CheckInput color={color} prompt="Make this a question: 'They were living here.'" answer="Were they living here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which words show the action? 'My sister was cooking dinner.'" answer="was cooking" />
          <RevealQ color={color} prompt="Which words show the action? 'The children were playing outside.'" answer="were playing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / at 8 PM" answer="She was studying English at 8 PM." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / dinner / at that time" answer="We were not eating dinner at that time." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school when I saw her.", options: ["go", "was going", "goes"], correct: 1 },
  { q: "I ___ pizza at 8 PM last night.", options: ["was eating", "eats", "eat"], correct: 0 },
  { q: "They ___ sleeping when the storm started.", options: ["was", "were", "are"], correct: 1 },
  { q: "___ you watching TV at 9 PM?", options: ["Do", "Were", "Does"], correct: 1 },
  { q: "He ___ football when he hurt his leg.", options: ["was playing", "were playing", "plays"], correct: 0 },
  { q: "While she ___ cooking, I was cleaning.", options: ["was", "were", "is"], correct: 0 },
  { q: "We ___ living in Delhi that year.", options: ["was", "were", "are"], correct: 1 },
  { q: "___ she working at that time?", options: ["Do", "Was", "Does"], correct: 1 },
  { q: "He ___ TV when the power went out.", options: ["watch", "was watching", "watched"], correct: 1 },
  { q: "I ___ sleeping when you called.", options: ["was not", "did not", "am not"], correct: 0 },
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
            {score >= 8 ? "Excellent work! You know Past Continuous well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
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
        Subject + was/were + verb-ing
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Was/Were Rules</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• I/He/She/It → was</li>
            <li>• You/We/They → were</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">-ing Spelling</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• Most verbs: +ing</li>
            <li>• silent -e: drop e, +ing</li>
            <li>• short CVC: double + ing</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Negative Rule</p>
          <p className="text-sm text-slate-600 font-body">was/were + not + verb-ing</p>
          <p className="text-xs text-slate-400 font-body mt-1">She wasn't cooking.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Was/Were + subject + verb-ing ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Was she cooking?</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["while", "when", "at that moment", "at 8 o'clock last night", "all day yesterday"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: "while" pairs with the longer background action; "when" usually introduces the short interruption.
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
    if (activeId === 6) return <InterruptedSection color={color} />;
    if (activeId === 7) return <TwoActionsSection color={color} />;
    if (activeId === 8) return <TimeExpressionsSection color={color} />;
    if (activeId === 10) return <NegativeSection color={color} />;
    if (activeId === 11) return <YesNoSection color={color} />;
    if (activeId === 12) return <WHSection color={color} />;
    if (activeId === 13) return <WhenWhileSection color={color} />;
    if (activeId === 14) return <SignalWordsSection color={color} />;
    if (activeId === 15) return <MistakesSection color={color} />;
    if (activeId === 16) return <ConversationsSection color={color} />;
    if (activeId === 17) return <PracticeSection color={color} />;
    if (activeId === 18) return <QuizSection color={color} />;
    if (activeId === 19) return <SummarySection color={color} />;
    return <ConceptBlock data={STANDARD_CONTENT[activeId]} color={color} />;
  }

  return (
    <div className="min-h-screen bg-[#FAF7FE] font-body">
      <FontStyle />

      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center">
              <Hourglass size={17} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Past Continuous Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-violet-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
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
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-violet-200" />
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
