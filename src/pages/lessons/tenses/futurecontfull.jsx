import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Scale, AlertTriangle, MessageCircle, PencilLine, ListChecks, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Calendar,
  Award, Check, Compass, Smile
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
        transparent, transparent 34px, rgba(225,29,72,0.06) 34px, rgba(225,29,72,0.06) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: Compass, color: "#E11D48" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "'Will Be' Stays the Same", icon: Users, color: "#EAA400" },
  { id: 4, title: "-ing Spelling Rules", icon: PencilLine, color: "#22B573" },
  { id: 5, title: "Action at a Future Time", icon: Compass, color: "#8B5CF6" },
  { id: 6, title: "Future Plans in Progress", icon: Calendar, color: "#EC4899" },
  { id: 7, title: "Polite Questions", icon: Smile, color: "#0EA5E9" },
  { id: 8, title: "Time Expressions", icon: Calendar, color: "#F59E0B" },
  { id: 9, title: "Positive Sentences", icon: CheckCircle2, color: "#22B573" },
  { id: 10, title: "Negative Sentences", icon: XCircle, color: "#F97362" },
  { id: 11, title: "Yes/No Questions", icon: HelpCircle, color: "#2563EB" },
  { id: 12, title: "WH Questions", icon: MessageCircle, color: "#8B5CF6" },
  { id: 13, title: "vs Future Simple", icon: Scale, color: "#EC4899" },
  { id: 14, title: "Signal Words", icon: Sparkles, color: "#EAA400" },
  { id: 15, title: "Common Mistakes", icon: AlertTriangle, color: "#F97362" },
  { id: 16, title: "Real-Life Talk", icon: MessageCircle, color: "#0EA5E9" },
  { id: 17, title: "Practice Time", icon: ListChecks, color: "#22B573" },
  { id: 18, title: "Quiz Time", icon: GraduationCap, color: "#8B5CF6" },
  { id: 19, title: "Summary Sheet", icon: BookOpen, color: "#E11D48" },
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
    definition: "Sentence structure is the order of words in a sentence. A positive Future Continuous sentence uses THREE parts together: will, be, and the -ing verb.",
    formula: "Subject + will be + verb-ing + Object",
    rules: [
      "The Subject comes first.",
      "'will be' comes next — exactly the same for every subject.",
      "The main verb takes -ing.",
      "The Object comes last, if the sentence needs one.",
    ],
    examples: [
      { en: "I will be watching TV.", note: "" },
      { en: "She will be reading a book.", note: "" },
      { en: "They will be playing football.", note: "" },
      { en: "We will be traveling this time tomorrow.", note: "" },
    ],
    mistakes: [
      { wrong: "I will watching TV.", right: "I will be watching TV.", why: "Never drop 'be' — will and be work together." },
      { wrong: "She will be read a book.", right: "She will be reading a book.", why: "The main verb must have -ing, not the base form." },
    ],
    activity: "Give jumbled words like 'be / watching / will / I / TV' and ask the learner to order them correctly.",
    remember: "Three parts, always together: will + be + verb-ing!",
  },
  3: {
    definition: "Just like 'will' in Future Simple, 'will be' never changes, no matter who is doing the action.",
    formula: "I/You/He/She/It/We/They + will be + verb-ing",
    rules: [
      "There's no extra -s for he/she/it.",
      "'will' is a helper word (modal verb) and never changes its form.",
      "'be' also stays exactly the same after will — it never becomes 'is' or 'are' here.",
    ],
    examples: [
      { en: "I will be sleeping.", note: "" },
      { en: "He will be sleeping.", note: "" },
      { en: "They will be sleeping.", note: "" },
    ],
    mistakes: [
      { wrong: "He will is sleeping.", right: "He will be sleeping.", why: "After will, always use 'be' — never 'is' or 'are'." },
    ],
    activity: "Ask the learner to write 'will be + sleeping' for 6 different subjects to see they are all the same.",
    remember: "will be + verb-ing — one form fits everyone, every time!",
  },
  4: {
    definition: "When we add -ing to a verb, the spelling can change a little depending on the verb's last letters. The rule is the same in every continuous tense.",
    rules: [
      "Most verbs: just add -ing → play→playing, read→reading, watch→watching.",
      "Verbs ending in a silent -e: drop the e, then add -ing → make→making, write→writing.",
      "Short verbs ending in one vowel + one consonant: double the last letter, then add -ing → run→running, sit→sitting.",
      "Verbs ending in -ie: change ie to y, then add -ing → lie→lying, die→dying.",
    ],
    examples: [
      { en: "make → She will be making dinner.", note: "" },
      { en: "run → He will be running by then.", note: "doubled letter" },
      { en: "write → I will be writing at 8 PM.", note: "dropped the e" },
    ],
    mistakes: [
      { wrong: "She will be makeing dinner.", right: "She will be making dinner.", why: "Drop the silent e before adding -ing." },
    ],
    activity: "Sort 10 verbs into baskets: '+ing', 'drop e + ing', 'double letter + ing'.",
    remember: "The -ing spelling rule never changes, no matter which tense you're using it in!",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something WILL BE happening at a certain point in the future.",
    formula: "Subject + will be + verb-ing + Object",
    rules: [
      "Start with the Subject.",
      "Add 'will be' — exactly the same for every subject.",
      "Add the main verb with -ing.",
      "Finish with the Object or extra information.",
    ],
    examples: [
      "I will be studying at 8 PM tomorrow.",
      "You will be traveling this time next week.",
      "He will be working late tonight.",
      "She will be waiting at the station.",
    ],
    mistakes: [
      { wrong: "She will studying at 8 PM.", right: "She will be studying at 8 PM.", why: "Don't forget 'be' between will and the -ing verb." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct Future Continuous sentences.",
    remember: "will + be + verb-ing — all three parts, every time!",
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
        The <strong>Future Continuous Tense</strong> is used to talk about an action that will be in
        progress at a specific moment in the future — imagine taking a photo of a future moment and
        catching an action happening right in the middle of it.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Compass, title: "Action at a Future Time", desc: "In progress later, like 'I will be sleeping at midnight.'" },
            { icon: Calendar, title: "Plans in Progress", desc: "A longer plan already running, like 'I will be traveling all week.'" },
            { icon: Smile, title: "Polite Questions", desc: "Asking gently about plans, like 'Will you be using the car?'" },
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
            "I will be studying at 8 PM tonight.",
            "This time tomorrow, we will be flying to London.",
            "She will be waiting for you at the station.",
            "They will be having dinner when we arrive.",
            "He will be working late this evening.",
          ]}
        />
      </div>

      <Remember color={color}>
        If it will be happening in the middle of a future moment, Future Continuous paints that picture perfectly.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 6 — FUTURE PLANS IN PROGRESS
--------------------------------------------------------------- */
function PlansSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        We use Future Continuous to describe a plan or activity that will already be running or in
        progress at a certain point, often over a longer stretch of time.
      </p>

      <div>
        <SectionLabel color={color}>Rules</SectionLabel>
        <ul className="space-y-2">
          {[
            "The activity will be ongoing at that future point, not just starting or finishing.",
            "Often used with 'this time' phrases: this time tomorrow, this time next week.",
            "It paints a picture of a scene in the future, as if looking at a photo.",
          ].map((r, i) => (
            <li key={i} className="flex gap-2 text-slate-700 text-sm font-body">
              <span style={{ color }} className="font-bold shrink-0">{i + 1}.</span><span>{r}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "This time next week, I will be relaxing on a beach.",
            "At 6 AM tomorrow, we will still be sleeping.",
            "By this time next month, she will be living in a new city.",
            "He will be studying all evening tomorrow.",
          ]}
        />
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "This time tomorrow, I will relax on a beach.", right: "This time tomorrow, I will be relaxing on a beach.", why: "An ongoing scene in the future needs will BE + verb-ing, not just will + verb." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Ask the learner to imagine this time next year and describe what they will be doing, using Future Continuous.
      </ActivityBox>
      <Remember color={color}>Future Continuous freezes a moment in the future and shows what will be happening in it.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 7 — POLITE QUESTIONS
--------------------------------------------------------------- */
function PoliteSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Future Continuous can also make a question sound softer and more polite, because it asks about a
        plan that's already happening rather than asking someone to do something.
      </p>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "Will you be using the car tonight?",
            "Will you be joining us for dinner?",
            "Will she be coming to the meeting?",
            "Will they be staying for the weekend?",
          ]}
        />
      </div>

      <div className="rounded-2xl p-4" style={{ background: `${color}0F` }}>
        <p className="text-sm text-slate-700 font-body">
          Compare: <strong>"Are you using the car tonight?"</strong> can sound like a direct request, while
          <strong> "Will you be using the car tonight?"</strong> sounds like a gentle, polite question about
          an existing plan.
        </p>
      </div>

      <ActivityBox color={color}>
        Ask the learner to turn 3 direct questions into softer, more polite ones using Future Continuous.
      </ActivityBox>
      <Remember color={color}>Will you be + verb-ing...? is a gentle way to ask about someone's plans.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const TIME_POINT = [
  { w: "this time tomorrow", ex: "This time tomorrow, I will be flying." },
  { w: "this time next week", ex: "This time next week, we will be traveling." },
  { w: "at 8 PM tomorrow", ex: "At 8 PM tomorrow, she will be cooking." },
];
const OTHER_WORDS = [
  { w: "by then", ex: "By then, he will be sleeping." },
  { w: "at that time", ex: "At that time, we will be working." },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Future Continuous. They point to a specific future moment and
        picture an action happening right in the middle of it.
      </p>

      <div>
        <SectionLabel color={color}>Specific future moments</SectionLabel>
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
        <SectionLabel color={color}>Other useful words</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-2">
          {OTHER_WORDS.map((f, i) => (
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
      <Remember color={color}>These phrases point to a specific moment in the future — that's the Future Continuous "photo" moment.</Remember>
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
        definition: "A negative sentence tells us that something will NOT be happening at a certain future time.",
        formula: "Subject + will not be (won't be) + verb-ing",
        rules: [
          "Add 'not' after will, or use the contraction won't.",
          "'be' still comes after not/won't — it never disappears.",
          "The main verb keeps its -ing ending.",
        ],
        examples: [
          "I will not be sleeping at that time.",
          "She won't be joining us tonight.",
          "They will not be working tomorrow.",
        ],
        mistakes: [
          { wrong: "She won't working tonight.", right: "She won't be working tonight.", why: "Don't drop 'be' — it must stay between won't and the -ing verb." },
        ],
        activity: "Give 5 positive Future Continuous sentences and ask the learner to make them negative.",
        remember: "will + not + be + verb-ing — or simply won't be + verb-ing!",
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
        definition: "Yes/No questions ask about an action that will be happening at a future moment, and can be answered with Yes or No.",
        formula: "Will + Subject + be + verb-ing ...?",
        rules: [
          "Move 'will' to the front of the sentence.",
          "'be' still comes right before the -ing verb.",
          "Short answers: Yes, I will. / No, I won't.",
        ],
        examples: [
          "Will you be sleeping at 10 PM? — Yes, I will.",
          "Will she be joining us? — No, she won't.",
          "Will they be traveling tomorrow?",
        ],
        mistakes: [
          { wrong: "Will she joining us?", right: "Will she be joining us?", why: "Don't drop 'be' — it belongs right before the -ing verb." },
        ],
        activity: "Ask the learner to turn 5 Future Continuous statements into Yes/No questions.",
        remember: "will jumps to the front, but 'be' always stays right before the -ing verb!",
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
        definition: "WH questions ask for more information about what will be happening in the future, not just Yes or No.",
        formula: "WH word + will + Subject + be + verb-ing ...?",
        rules: [
          "What = asks about a thing: What will you be doing?",
          "Where = asks about a place: Where will she be staying?",
          "When = asks about time: When will they be arriving?",
          "Who = can ask about a person: Who will be joining us?",
          "How = asks about manner: How will you be traveling?",
        ],
        examples: [
          "What will you be doing this time tomorrow?",
          "Where will she be staying next week?",
          "When will they be arriving?",
          "Who will be joining us for dinner?",
          "How will you be traveling there?",
        ],
        mistakes: [
          { wrong: "What will you doing?", right: "What will you be doing?", why: "Don't drop 'be' — it belongs right before the -ing verb." },
        ],
        activity: "Match each WH word (What, Where, When, Who, How) to a question about this time next week.",
        remember: "Order: WH word → will → subject → be → verb-ing.",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 13 — VS FUTURE SIMPLE
--------------------------------------------------------------- */
function VsFutureSimpleSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Future Simple and Future Continuous both talk about the future, but they paint different pictures.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2" style={{ color }}>Future Simple (will)</p>
          <p className="text-sm text-slate-600 font-body mb-2">
            A complete action — it will happen and finish.
          </p>
          <p className="text-sm text-slate-700 font-body font-semibold">I will cook dinner tonight.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2" style={{ color }}>Future Continuous (will be + -ing)</p>
          <p className="text-sm text-slate-600 font-body mb-2">
            An action in progress at a specific future moment.
          </p>
          <p className="text-sm text-slate-700 font-body font-semibold">I will be cooking dinner at 7 PM.</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "At 7 PM, I will cook dinner.", right: "At 7 PM, I will be cooking dinner.", why: "A specific future moment 'in the middle of' an action needs will be + -ing, not just will." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Give 4 sentences and ask the learner to decide whether Future Simple or Future Continuous fits better.
      </ActivityBox>
      <Remember color={color}>Future Simple = the whole action. Future Continuous = a snapshot in the middle of it.</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = ["this time tomorrow", "this time next week", "at 8 PM tomorrow", "by then", "at that time", "this time next year"];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Future Continuous.
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
            "This time tomorrow, I will be relaxing at home.",
            "At 8 PM tomorrow, she will be cooking dinner.",
            "By then, he will be sleeping.",
            "This time next year, we will be living abroad.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Future Continuous sentence!</Remember>
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
        Here are the most common Future Continuous mistakes beginners make — and how to fix them.
      </p>
      <MistakeList items={[
        { wrong: "I will studying tonight.", right: "I will be studying tonight.", why: "Don't drop 'be' — it goes between will and the -ing verb." },
        { wrong: "She will be studys tonight.", right: "She will be studying tonight.", why: "The verb after will be must always take -ing." },
        { wrong: "He will is sleeping then.", right: "He will be sleeping then.", why: "After will, always use 'be' — never 'is' or 'are'." },
        { wrong: "Will she joining us?", right: "Will she be joining us?", why: "Don't drop 'be' in a question either." },
        { wrong: "At 7 PM, I will cook.", right: "At 7 PM, I will be cooking.", why: "A moment 'in the middle of' a future action needs will be + -ing." },
        { wrong: "She won't working tomorrow.", right: "She won't be working tomorrow.", why: "'be' must stay after won't." },
      ]} />
      <ActivityBox color={color}>
        Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.
      </ActivityBox>
      <Remember color={color}>
        Almost every mistake here comes from one thing: forgetting the little word 'be' between will and the -ing verb.
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
        Let's see Future Continuous in real conversations — the way people actually talk about future plans in progress.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — This time tomorrow</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>What will you be doing this time tomorrow?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I will be flying to Mumbai!</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Wow, exciting! Will you be traveling alone?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>No, my sister will be joining me.</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — A polite question</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>Will you be using the car this evening?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>No, I won't be. You can take it.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Great, thanks! I will be picking up some groceries.</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>No problem, drive safe!</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue about what two friends will be doing this time next weekend.
      </ActivityBox>
      <Remember color={color}>Real conversations use Future Continuous for plans in progress, and for polite questions!</Remember>
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
          <CheckInput color={color} prompt="She ___ (cook) dinner at 7 PM tomorrow." answer="will be cooking" placeholder="type will be + verb-ing" />
          <CheckInput color={color} prompt="They ___ (travel) this time next week." answer="will be traveling" placeholder="type will be + verb-ing" />
          <CheckInput color={color} prompt="I ___ (study) at 8 PM tonight." answer="will be studying" placeholder="type will be + verb-ing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="He will be ___ a letter at that time." options={["writeing", "writting", "writing"]} answerIndex={2} />
          <ChoiceQ color={color} prompt="___ you be joining us tonight?" options={["Do", "Will", "Are"]} answerIndex={1} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / be / will / playing / They / tomorrow." answer="They will be playing football tomorrow." />
          <RevealQ color={color} prompt="TV / be / will / watching / She / then." answer="She will be watching TV then." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'She will cooking dinner then.'" answer="She will be cooking dinner then. (add 'be')" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'Will she joining us?'" answer="Will she be joining us? (add 'be')" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I will be watching TV.'" answer="I will not be watching TV." />
          <CheckInput color={color} prompt="Make this negative: 'They will be playing cricket.'" answer="They will not be playing cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She will be visiting Paris.'" answer="Will she be visiting Paris?" />
          <CheckInput color={color} prompt="Make this a question: 'They will be living here.'" answer="Will they be living here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which words show the action? 'My sister will be cooking dinner tomorrow.'" answer="will be cooking" />
          <RevealQ color={color} prompt="Which words show the action? 'The children will be playing outside.'" answer="will be playing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / at 8 PM tomorrow" answer="She will be studying English at 8 PM tomorrow." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / dinner / at that time" answer="We will not be eating dinner at that time." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school this time tomorrow.", options: ["go", "will be going", "goes"], correct: 1 },
  { q: "I ___ dinner at 7 PM tonight.", options: ["will be eating", "eats", "ate"], correct: 0 },
  { q: "He ___ working at that time.", options: ["won't be", "don't", "isn't"], correct: 0 },
  { q: "___ you be joining us tomorrow?", options: ["Do", "Will", "Does"], correct: 1 },
  { q: "They ___ football this time next week.", options: ["will be playing", "will play be", "plays"], correct: 0 },
  { q: "This time tomorrow, I ___ on a plane.", options: ["will be", "will", "am"], correct: 0 },
  { q: "We ___ in the sea at 4 PM.", options: ["will swimming", "will be swimming", "swim"], correct: 1 },
  { q: "___ she be staying with us?", options: ["Will", "Does", "Did"], correct: 0 },
  { q: "He ___ TV at 9 PM tonight.", options: ["will watches", "will be watching", "watched"], correct: 1 },
  { q: "I ___ be sleeping at midnight.", options: ["won't", "don't", "isn't"], correct: 0 },
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
            {score >= 8 ? "Excellent work! You know Future Continuous well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
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
        Subject + will be + verb-ing
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">We use it for</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• Action in progress at a future time</li>
            <li>• Plans already in progress</li>
            <li>• Polite questions about plans</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Key reminder</p>
          <p className="text-sm text-slate-600 font-body">'be' never disappears — it always sits between will and the -ing verb.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Negative Rule</p>
          <p className="text-sm text-slate-600 font-body">will not be (won't be) + verb-ing</p>
          <p className="text-xs text-slate-400 font-body mt-1">She won't be coming.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Will + subject + be + verb-ing ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Will she be coming tomorrow?</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["this time tomorrow", "this time next week", "at 8 PM tomorrow", "by then", "at that time"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: three parts, always together — will + be + verb-ing. Never drop the 'be' in the middle!
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
    if (activeId === 6) return <PlansSection color={color} />;
    if (activeId === 7) return <PoliteSection color={color} />;
    if (activeId === 8) return <TimeExpressionsSection color={color} />;
    if (activeId === 10) return <NegativeSection color={color} />;
    if (activeId === 11) return <YesNoSection color={color} />;
    if (activeId === 12) return <WHSection color={color} />;
    if (activeId === 13) return <VsFutureSimpleSection color={color} />;
    if (activeId === 14) return <SignalWordsSection color={color} />;
    if (activeId === 15) return <MistakesSection color={color} />;
    if (activeId === 16) return <ConversationsSection color={color} />;
    if (activeId === 17) return <PracticeSection color={color} />;
    if (activeId === 18) return <QuizSection color={color} />;
    if (activeId === 19) return <SummarySection color={color} />;
    return <ConceptBlock data={STANDARD_CONTENT[activeId]} color={color} />;
  }

  return (
    <div className="min-h-screen bg-[#FFF5F6] font-body">
      <FontStyle />

      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center">
              <Compass size={17} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Future Continuous Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-rose-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
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
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-rose-200" />
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
