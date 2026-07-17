import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Brain, AlertTriangle, MessageCircle, PencilLine, ListChecks, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Calendar,
  Award, Check, Activity, TrendingUp
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
        transparent, transparent 34px, rgba(217,119,6,0.07) 34px, rgba(217,119,6,0.07) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: Activity, color: "#D97706" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "'Be' Verb Rules", icon: Users, color: "#EAA400" },
  { id: 4, title: "-ing Spelling Rules", icon: PencilLine, color: "#22B573" },
  { id: 5, title: "Actions Happening Now", icon: Activity, color: "#8B5CF6" },
  { id: 6, title: "Temporary Situations", icon: Clock, color: "#EC4899" },
  { id: 7, title: "Future Arrangements", icon: TrendingUp, color: "#0EA5E9" },
  { id: 8, title: "Time Expressions", icon: Calendar, color: "#F59E0B" },
  { id: 9, title: "Positive Sentences", icon: CheckCircle2, color: "#22B573" },
  { id: 10, title: "Negative Sentences", icon: XCircle, color: "#F97362" },
  { id: 11, title: "Yes/No Questions", icon: HelpCircle, color: "#2563EB" },
  { id: 12, title: "WH Questions", icon: MessageCircle, color: "#8B5CF6" },
  { id: 13, title: "Stative Verbs", icon: Brain, color: "#EC4899" },
  { id: 14, title: "Signal Words", icon: Sparkles, color: "#EAA400" },
  { id: 15, title: "Common Mistakes", icon: AlertTriangle, color: "#F97362" },
  { id: 16, title: "Real-Life Talk", icon: MessageCircle, color: "#0EA5E9" },
  { id: 17, title: "Practice Time", icon: ListChecks, color: "#22B573" },
  { id: 18, title: "Quiz Time", icon: GraduationCap, color: "#8B5CF6" },
  { id: 19, title: "Summary Sheet", icon: BookOpen, color: "#D97706" },
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
    definition: "Sentence structure is the order of words in a sentence. A positive Present Continuous sentence always uses TWO parts working together: the 'be' verb and the -ing verb.",
    formula: "Subject + am/is/are + verb-ing + Object",
    rules: [
      "The Subject comes first.",
      "The correct form of 'be' (am/is/are) comes next.",
      "The main verb takes -ing.",
      "The Object comes last, if the sentence needs one.",
    ],
    examples: [
      { en: "I am watching TV.", note: "" },
      { en: "She is reading a book.", note: "" },
      { en: "They are playing football.", note: "" },
      { en: "The baby is sleeping.", note: "no object needed" },
    ],
    mistakes: [
      { wrong: "I watching TV.", right: "I am watching TV.", why: "Never drop the 'be' verb — am/is/are is a required helper." },
      { wrong: "She is read a book.", right: "She is reading a book.", why: "The main verb must have -ing, not the base form." },
    ],
    activity: "Give jumbled words like 'TV / watching / am / I' and ask the learner to order them correctly.",
    remember: "Two parts are needed together: be verb + verb-ing. Neither one works alone!",
  },
  3: {
    definition: "The helper verb 'be' changes depending on the subject. Getting this right is the key to Present Continuous.",
    formula: "I + am   •   He/She/It + is   •   You/We/They + are",
    rules: [
      "I → am",
      "He, She, It → is",
      "You, We, They → are",
      "Contractions are very common: I'm, he's, she's, it's, you're, we're, they're.",
    ],
    examples: [
      { en: "I am eating.", note: "" },
      { en: "He is eating.", note: "" },
      { en: "We are eating.", note: "" },
      { en: "She's watching TV.", note: "contraction" },
    ],
    mistakes: [
      { wrong: "She are eating.", right: "She is eating.", why: "He/she/it uses 'is', not 'are'." },
      { wrong: "I is eating.", right: "I am eating.", why: "'I' always uses 'am'." },
    ],
    activity: "Give a list of subjects and ask the learner to fill in the correct be verb for each one.",
    remember: "I-am, He/She/It-is, You/We/They-are. Try saying it like a little song!",
  },
  4: {
    definition: "When we add -ing to a verb, the spelling can change a little depending on the verb's last letters.",
    rules: [
      "Most verbs: just add -ing → play→playing, read→reading, watch→watching.",
      "Verbs ending in a silent -e: drop the e, then add -ing → make→making, write→writing, dance→dancing.",
      "Short verbs ending in one vowel + one consonant: double the last letter, then add -ing → run→running, sit→sitting, swim→swimming.",
      "Verbs ending in -ie: change ie to y, then add -ing → lie→lying, die→dying.",
    ],
    examples: [
      { en: "make → She is making a cake.", note: "" },
      { en: "run → He is running fast.", note: "doubled letter" },
      { en: "write → I am writing a letter.", note: "dropped the e" },
      { en: "lie → The cat is lying on the sofa.", note: "" },
    ],
    mistakes: [
      { wrong: "She is makeing a cake.", right: "She is making a cake.", why: "Drop the silent e before adding -ing." },
      { wrong: "He is siting down.", right: "He is sitting down.", why: "Short verbs need the last letter doubled before -ing." },
    ],
    activity: "Sort 10 verbs into baskets: '+ing', 'drop e + ing', 'double letter + ing'.",
    remember: "Silent e disappears before -ing, and short vowel-consonant verbs double their last letter!",
  },
  5: {
    definition: "We use Present Continuous for actions that are happening at this exact moment, right now, as we speak.",
    rules: [
      "The action is in progress right now, not finished.",
      "Often used with words like now, right now, at the moment, Look!, Listen!",
    ],
    examples: [
      "I am writing an email right now.",
      "Look! It is snowing!",
      "She is talking on the phone at the moment.",
      "Listen! They are singing.",
    ],
    mistakes: [
      { wrong: "I write an email right now.", right: "I am writing an email right now.", why: "An action happening this second needs Present Continuous, not Present Simple." },
    ],
    activity: "Ask the learner to describe 3 things happening around them right now.",
    remember: "'Right now' is the biggest clue — grab Present Continuous!",
  },
  6: {
    definition: "We use Present Continuous for situations that are true only for a short or limited time, not forever.",
    rules: [
      "The situation is temporary, not permanent.",
      "Often contrasts with Present Simple, which shows permanent facts.",
    ],
    examples: [
      "I am staying with my aunt this week.",
      "She is working from home these days.",
      "We are living in a rented flat for now.",
      "He is studying for his exams this month.",
    ],
    mistakes: [
      { wrong: "I live with my aunt this week.", right: "I am staying with my aunt this week.", why: "A temporary situation uses Present Continuous, not Present Simple." },
    ],
    activity: "Ask the learner to write a sentence about something temporary happening in their life right now.",
    remember: "Temporary = for now, not forever. That's Present Continuous territory!",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something IS happening.",
    formula: "Subject + am/is/are + verb-ing + Object",
    rules: [
      "Start with the Subject.",
      "Add the correct be verb (am/is/are).",
      "Add the main verb with -ing.",
      "Finish with the Object or extra information.",
    ],
    examples: [
      "I am playing the piano.",
      "You are speaking loudly.",
      "He is working in the garden.",
      "She is loving this song.",
      "We are living nearby this month.",
    ],
    mistakes: [
      { wrong: "She playing the piano.", right: "She is playing the piano.", why: "Don't forget the be verb before the -ing verb." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct Present Continuous sentences.",
    remember: "Be verb + verb-ing — both parts must be there together!",
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
        The <strong>Present Continuous Tense</strong> (also called Present Progressive) is used to talk
        about actions that are happening right now, or around this period of time — not finished yet.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Activity, title: "Happening Now", desc: "Actions in progress this second, like 'I am reading.'" },
            { icon: Clock, title: "Temporary Situations", desc: "Things true for a short time, like 'I am staying here.'" },
            { icon: TrendingUp, title: "Future Arrangements", desc: "Fixed plans, like 'We are meeting tomorrow.'" },
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
            "I am reading a book right now.",
            "She is cooking dinner at the moment.",
            "We are studying English this year.",
            "They are meeting us tomorrow.",
            "It is raining outside.",
          ]}
        />
      </div>

      <Remember color={color}>
        If it's happening right now, or only for a while, or already arranged for later — Present Continuous is often the tense to use.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 7 — FUTURE ARRANGEMENTS
--------------------------------------------------------------- */
function FutureArrangementsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        We use Present Continuous to talk about plans that are already arranged for the near future —
        like something written on your calendar.
      </p>

      <div>
        <SectionLabel color={color}>Rules</SectionLabel>
        <ul className="space-y-2">
          {[
            "The plan is fixed, arranged, or scheduled — not just a guess.",
            "Often used with a future time word: tomorrow, next week, this weekend.",
            "This feels like a real, organized plan, not just any future prediction.",
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
            "I am meeting my friend tomorrow.",
            "We are flying to Delhi next week.",
            "She is having a party this Saturday.",
            "They are visiting us next month.",
          ]}
        />
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "I meet my friend tomorrow.", right: "I am meeting my friend tomorrow.", why: "An arranged future plan uses Present Continuous, not Present Simple." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Ask the learner to write 2 sentences about plans they already have for next week.
      </ActivityBox>
      <Remember color={color}>
        If it's already arranged and on your calendar, Present Continuous can talk about the future too!
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const NOW_WORDS = [
  { w: "now", ex: "I am reading now." },
  { w: "right now", ex: "She is cooking right now." },
  { w: "at the moment", ex: "He is sleeping at the moment." },
  { w: "currently", ex: "We are currently traveling." },
];
const OTHER_WORDS = [
  { w: "these days", ex: "I am working late these days." },
  { w: "this week", ex: "She is staying with us this week." },
  { w: "Look!", ex: "Look! It is raining!" },
  { w: "Listen!", ex: "Listen! They are singing!" },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Present Continuous. They tell us that something is happening
        right now, or during this short period of time.
      </p>

      <div>
        <SectionLabel color={color}>This exact moment</SectionLabel>
        <div className="grid sm:grid-cols-2 gap-2">
          {NOW_WORDS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Around this time</SectionLabel>
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
      <Remember color={color}>Seeing one of these words is a strong clue the sentence should be Present Continuous.</Remember>
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
        definition: "A negative sentence tells us that something is NOT happening.",
        formula: "Subject + am/is/are + not + verb-ing",
        rules: [
          "Add 'not' right after the be verb.",
          "Contractions: isn't (is not), aren't (are not). 'Am not' shortens only to I'm not.",
          "The main verb keeps its -ing ending.",
        ],
        examples: [
          "I am not watching TV.",
          "She isn't cooking right now.",
          "They aren't playing outside.",
          "He is not sleeping.",
        ],
        mistakes: [
          { wrong: "She don't watching TV.", right: "She isn't watching TV.", why: "Negative continuous sentences use isn't/aren't, not don't." },
        ],
        activity: "Give 5 positive Present Continuous sentences and ask the learner to make them negative.",
        remember: "Just slide 'not' right after am/is/are — the -ing verb doesn't change!",
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
        definition: "Yes/No questions ask something that can be answered simply with Yes or No.",
        formula: "Am/Is/Are + Subject + verb-ing ...?",
        rules: [
          "Move the be verb (am/is/are) to the front of the sentence.",
          "The main verb keeps its -ing ending.",
          "Short answers: Yes, I am. / No, she isn't. / No, they aren't.",
        ],
        examples: [
          "Are you watching TV? — Yes, I am.",
          "Is she sleeping? — No, she isn't.",
          "Are they coming today? — Yes, they are.",
        ],
        mistakes: [
          { wrong: "Does she is cooking?", right: "Is she cooking?", why: "Don't add 'does' — just move the be verb to the front." },
        ],
        activity: "Ask the learner to turn 5 Present Continuous statements into Yes/No questions.",
        remember: "The be verb (am/is/are) jumps to the front — no do/does needed here!",
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
        definition: "WH questions ask for more information about what's happening now, not just Yes or No.",
        formula: "WH word + am/is/are + Subject + verb-ing ...?",
        rules: [
          "What = asks about a thing: What are you doing?",
          "Where = asks about a place: Where is she going?",
          "Why = asks for a reason: Why is he crying?",
          "Who = can ask about a person: Who is knocking at the door?",
          "How = asks about manner: How are you feeling?",
        ],
        examples: [
          "What are you doing right now?",
          "Where is she going?",
          "Why is he crying?",
          "Who is knocking at the door?",
          "How are you feeling today?",
        ],
        mistakes: [
          { wrong: "What you are doing?", right: "What are you doing?", why: "The be verb comes right after the WH word, before the subject." },
        ],
        activity: "Match each WH word (What, Where, Why, Who, How) to a question about right now.",
        remember: "Order: WH word → be verb → subject → verb-ing.",
      }}
    />
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 13 — STATIVE VERBS
--------------------------------------------------------------- */
function StativeVerbsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some verbs describe states, feelings, or thoughts rather than actions. We usually do NOT use them
        in the continuous (-ing) form, even when talking about now.
      </p>

      <div>
        <SectionLabel color={color}>Rules</SectionLabel>
        <ul className="space-y-2">
          {[
            "Stative verbs describe feelings (love, like, hate), thoughts (know, believe, understand), possession (have, own, belong), and senses (see, hear, smell).",
            "We normally use these verbs in Present Simple, even when talking about right now.",
            "Common stative verbs: like, love, hate, want, need, know, believe, understand, have, own, belong, seem.",
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
            { en: "I like this song.", note: "not 'I am liking'" },
            { en: "She knows the answer.", note: "not 'She is knowing'" },
            { en: "We understand the lesson.", note: "not 'We are understanding'" },
            { en: "He has a car.", note: "possession — not continuous" },
          ]}
        />
      </div>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList items={[
          { wrong: "I am liking this song.", right: "I like this song.", why: "'Like' is a stative verb — it doesn't normally take -ing." },
          { wrong: "She is knowing the answer.", right: "She knows the answer.", why: "'Know' is a stative verb." },
        ]} />
      </div>

      <ActivityBox color={color}>
        Give a list of 8 verbs and ask the learner to mark which are stative (no -ing) and which are action verbs (-ing okay).
      </ActivityBox>
      <Remember color={color}>Feelings, thoughts, and possession usually skip the -ing — stick with Present Simple for those!</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = ["now", "right now", "at the moment", "currently", "at present", "these days", "Look!", "Listen!", "today"];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Present Continuous.
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
            "Right now, I am doing my homework.",
            "Look! The dog is running away!",
            "At the moment, she is on holiday.",
            "These days, he is exercising a lot.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Present Continuous sentence!</Remember>
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
        Here are the most common Present Continuous mistakes beginners make — and how to fix them.
      </p>
      <MistakeList items={[
        { wrong: "She cooking dinner.", right: "She is cooking dinner.", why: "Never drop the be verb — it must be there before the -ing verb." },
        { wrong: "I am liking tea.", right: "I like tea.", why: "'Like' is a stative verb — don't add -ing to it." },
        { wrong: "He is siting down.", right: "He is sitting down.", why: "Short verbs need their last letter doubled before -ing." },
        { wrong: "She are working.", right: "She is working.", why: "He/she/it uses 'is', not 'are'." },
        { wrong: "Does she is cooking?", right: "Is she cooking?", why: "Don't add 'does' to a be-verb question." },
        { wrong: "I watching TV now.", right: "I am watching TV now.", why: "The be verb (am) must always be there." },
      ]} />
      <ActivityBox color={color}>
        Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.
      </ActivityBox>
      <Remember color={color}>
        Most mistakes happen in the same two spots: forgetting the be verb, or adding -ing to a stative verb.
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
        Let's see Present Continuous in real conversations — the way people actually talk about what's happening right now.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — On a phone call</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>Hey, what are you doing?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I am cooking dinner right now.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Oh nice! What are you making?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I am making pasta. Are you coming over?</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Yes, I am! See you soon.</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — Talking about plans</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>Are you free this weekend?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>No, I am visiting my parents on Saturday.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>What about Sunday?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>I am meeting some friends in the evening.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Okay, maybe next week then!</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue about what they are doing right now.
      </ActivityBox>
      <Remember color={color}>Real conversations use Present Continuous all the time — for now, and for near-future plans!</Remember>
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
          <CheckInput color={color} prompt="She ___ (cook) dinner right now." answer="is cooking" placeholder="type be + verb-ing" />
          <CheckInput color={color} prompt="They ___ (play) in the park." answer="are playing" placeholder="type be + verb-ing" />
          <CheckInput color={color} prompt="I ___ (write) an email at the moment." answer="am writing" placeholder="type be + verb-ing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="He is ___ a letter." options={["writeing", "writting", "writing"]} answerIndex={2} />
          <ChoiceQ color={color} prompt="I ___ tea. (not continuous — stative verb)" options={["am liking", "like", "liking"]} answerIndex={1} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / playing / are / They / now." answer="They are playing football now." />
          <RevealQ color={color} prompt="TV / is / She / watching." answer="She is watching TV." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'She cooking dinner.'" answer="She is cooking dinner. (add 'is')" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'I am knowing the answer.'" answer="I know the answer. ('know' is stative)" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I am watching TV.'" answer="I am not watching TV." />
          <CheckInput color={color} prompt="Make this negative: 'He is playing cricket.'" answer="He is not playing cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She is visiting Paris.'" answer="Is she visiting Paris?" />
          <CheckInput color={color} prompt="Make this a question: 'They are living here.'" answer="Are they living here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which words show the action? 'My sister is cooking dinner.'" answer="is cooking" />
          <RevealQ color={color} prompt="Which words show the action? 'The children are playing outside.'" answer="are playing" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / now" answer="She is studying English now." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / dinner" answer="We are not eating dinner." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school right now.", options: ["go", "is going", "goes"], correct: 1 },
  { q: "I ___ pizza at the moment.", options: ["am eating", "eats", "ate"], correct: 0 },
  { q: "He ___ like tea. (stative verb)", options: ["isn't", "doesn't", "aren't"], correct: 1 },
  { q: "___ you watching TV now?", options: ["Do", "Are", "Does"], correct: 1 },
  { q: "They ___ football right now.", options: ["is playing", "are playing", "play"], correct: 1 },
  { q: "Look! It ___ raining!", options: ["is", "are", "am"], correct: 0 },
  { q: "We ___ in Delhi for now.", options: ["is living", "are living", "live"], correct: 1 },
  { q: "___ she working today?", options: ["Do", "Is", "Does"], correct: 1 },
  { q: "He ___ TV right now.", options: ["watch", "is watching", "watches"], correct: 1 },
  { q: "I ___ this song. (stative verb)", options: ["am liking", "like", "likes"], correct: 1 },
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
            {score >= 8 ? "Excellent work! You know Present Continuous well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
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
        Subject + am/is/are + verb-ing
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Be Verb Rules</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• I → am</li>
            <li>• He/She/It → is</li>
            <li>• You/We/They → are</li>
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
          <p className="text-sm text-slate-600 font-body">be verb + not + verb-ing</p>
          <p className="text-xs text-slate-400 font-body mt-1">She isn't cooking.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Am/Is/Are + subject + verb-ing ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Is she cooking?</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["now", "right now", "at the moment", "currently", "these days", "Look!", "Listen!"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: stative verbs (like, know, want, have) usually skip the -ing, even when talking about now.
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
    if (activeId === 7) return <FutureArrangementsSection color={color} />;
    if (activeId === 8) return <TimeExpressionsSection color={color} />;
    if (activeId === 10) return <NegativeSection color={color} />;
    if (activeId === 11) return <YesNoSection color={color} />;
    if (activeId === 12) return <WHSection color={color} />;
    if (activeId === 13) return <StativeVerbsSection color={color} />;
    if (activeId === 14) return <SignalWordsSection color={color} />;
    if (activeId === 15) return <MistakesSection color={color} />;
    if (activeId === 16) return <ConversationsSection color={color} />;
    if (activeId === 17) return <PracticeSection color={color} />;
    if (activeId === 18) return <QuizSection color={color} />;
    if (activeId === 19) return <SummarySection color={color} />;
    return <ConceptBlock data={STANDARD_CONTENT[activeId]} color={color} />;
  }

  return (
    <div className="min-h-screen bg-[#FEF9F0] font-body">
      <FontStyle />

      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center">
              <Activity size={17} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Present Continuous Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-amber-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
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
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-amber-200" />
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
