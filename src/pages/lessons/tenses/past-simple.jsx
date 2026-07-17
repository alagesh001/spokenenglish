import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Shuffle, AlertTriangle, MessageCircle, PencilLine, ListChecks, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Calendar, Star,
  Award, Check, Landmark, ListOrdered, Rewind
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
        transparent, transparent 34px, rgba(124,58,237,0.06) 34px, rgba(124,58,237,0.06) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: Rewind, color: "#2563EB" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "Regular vs Irregular", icon: Shuffle, color: "#EAA400" },
  { id: 4, title: "Verb Spelling Rules", icon: PencilLine, color: "#22B573" },
  { id: 5, title: "Completed Actions", icon: Clock, color: "#8B5CF6" },
  { id: 6, title: "Historical Facts", icon: Landmark, color: "#EC4899" },
  { id: 7, title: "Sequence of Events", icon: ListOrdered, color: "#0EA5E9" },
  { id: 8, title: "Time Expressions", icon: Calendar, color: "#F59E0B" },
  { id: 9, title: "Positive Sentences", icon: CheckCircle2, color: "#22B573" },
  { id: 10, title: "Negative Sentences", icon: XCircle, color: "#F97362" },
  { id: 11, title: "Yes/No Questions", icon: HelpCircle, color: "#2563EB" },
  { id: 12, title: "WH Questions", icon: MessageCircle, color: "#8B5CF6" },
  { id: 13, title: "Irregular Verbs List", icon: Star, color: "#EC4899" },
  { id: 14, title: "Signal Words", icon: Sparkles, color: "#EAA400" },
  { id: 15, title: "Common Mistakes", icon: AlertTriangle, color: "#F97362" },
  { id: 16, title: "Real-Life Talk", icon: MessageCircle, color: "#0EA5E9" },
  { id: 17, title: "Practice Time", icon: ListChecks, color: "#22B573" },
  { id: 18, title: "Quiz Time", icon: GraduationCap, color: "#8B5CF6" },
  { id: 19, title: "Summary Sheet", icon: BookOpen, color: "#2563EB" },
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
    definition: "Sentence structure is the order of words in a sentence. In a positive Simple Past sentence, we follow one simple pattern — the verb just changes to its past form.",
    formula: "Subject + Verb (past form) + Object",
    rules: [
      "The Subject comes first.",
      "The Verb comes second, in its past form (regular -ed or irregular).",
      "The Object comes last, if the sentence needs one.",
      "The verb form is the SAME for every subject — I, you, he, she, we, they all use the same past verb!",
    ],
    examples: [
      { en: "I watched a movie.", note: "" },
      { en: "She cooked dinner.", note: "" },
      { en: "They went to the park.", note: "" },
      { en: "The dog barked.", note: "no object needed" },
      { en: "We visited our grandmother.", note: "" },
    ],
    mistakes: [
      { wrong: "She watch a movie.", right: "She watched a movie.", why: "The verb must be in its past form." },
      { wrong: "He goed to school.", right: "He went to school.", why: "'Go' is irregular — 'goed' is not a real word." },
    ],
    activity: "Give jumbled words like 'movie / watched / She' and ask the learner to put them in the correct order.",
    remember: "Good news: past tense verbs never change for the subject! 'I watched', 'She watched', 'They watched' — all the same.",
  },
  3: {
    definition: "In the past tense, verbs are either 'regular' (they follow a simple -ed rule) or 'irregular' (they change into a completely new word that must be memorized).",
    formula: "Regular: verb + ed   •   Irregular: special past form (no rule)",
    rules: [
      "Regular verbs: just add -ed to the base verb → play→played, watch→watched, clean→cleaned.",
      "Irregular verbs: change completely and don't follow the -ed rule → go→went, eat→ate, have→had.",
      "There is no shortcut for irregular verbs — they must be learned by heart, a few at a time.",
      "Many common, everyday verbs in English are irregular, so you will meet them very often!",
    ],
    examples: [
      { en: "play → played", note: "regular" },
      { en: "study → studied", note: "regular" },
      { en: "go → went", note: "irregular" },
      { en: "eat → ate", note: "irregular" },
      { en: "have → had", note: "irregular" },
    ],
    mistakes: [
      { wrong: "I eated breakfast.", right: "I ate breakfast.", why: "'Eat' is irregular — never add -ed to it." },
      { wrong: "She goed home.", right: "She went home.", why: "'Go' is irregular; its past form is 'went'." },
    ],
    activity: "Give a mixed list of 10 verbs and ask the learner to sort them into 'Regular' and 'Irregular' baskets.",
    remember: "When in doubt, check! If a verb 'sounds funny' with -ed (like 'eated' or 'goed'), it's probably irregular.",
  },
  4: {
    definition: "When we add -ed to a regular verb, the spelling can change a little depending on the verb's last letters.",
    rules: [
      "Most verbs: just add -ed → play→played, watch→watched, help→helped.",
      "Verbs ending in -e: add only -d → like→liked, live→lived, smile→smiled.",
      "Verbs ending in a consonant + y: change y to i and add -ed → study→studied, cry→cried, carry→carried.",
      "Verbs ending in a vowel + y: just add -ed, no change → play→played, stay→stayed.",
      "Short verbs ending in one vowel + one consonant: double the last letter, then add -ed → stop→stopped, plan→planned, chat→chatted.",
    ],
    examples: [
      { en: "clean → She cleaned her room.", note: "" },
      { en: "study → He studied all night.", note: "" },
      { en: "stay → We stayed at a hotel.", note: "vowel + y, no change" },
      { en: "smile → She smiled at me.", note: "-e verb, add -d only" },
      { en: "stop → The car stopped suddenly.", note: "doubled letter" },
    ],
    mistakes: [
      { wrong: "She studyed hard.", right: "She studied hard.", why: "Change y to i before adding -ed after a consonant." },
      { wrong: "He stoped the car.", right: "He stopped the car.", why: "Short verbs need the last letter doubled before -ed." },
    ],
    activity: "Sort 10 regular verbs into baskets: '+ed', '+d only', 'y→ied', 'double letter+ed'.",
    remember: "Say it slowly! Doubling the last letter (stopped, planned) keeps the vowel sound short.",
  },
  5: {
    definition: "We use Simple Past for actions that started and finished at a specific time in the past. The action is completely over.",
    rules: [
      "The action happened and finished — it is not happening now.",
      "Often used with a specific past time word: yesterday, last week, in 2020.",
      "Even without an exact time word, we usually know from context that it's finished.",
    ],
    examples: [
      "I visited Paris last year.",
      "She called me yesterday.",
      "We finished our homework.",
      "He lost his keys this morning.",
      "They watched a movie last night.",
    ],
    mistakes: [
      { wrong: "I am visiting Paris last year.", right: "I visited Paris last year.", why: "A finished past action uses Simple Past, not the -ing form." },
    ],
    activity: "Ask the learner to write 3 sentences about something they did yesterday.",
    remember: "If the action is finished and done, Simple Past is the tense to use!",
  },
  6: {
    definition: "We use Simple Past to talk about historical facts and things that were true in the past but are now finished.",
    rules: [
      "Used for facts about history, famous people, and past events.",
      "The fact happened at a specific time that is now over.",
      "Often no exact time word is needed if the event is well known.",
    ],
    examples: [
      "Shakespeare wrote many plays.",
      "Dinosaurs lived millions of years ago.",
      "The Titanic sank in 1912.",
      "Gandhi led India's independence movement.",
      "World War II ended in 1945.",
    ],
    mistakes: [
      { wrong: "Shakespeare writes many plays.", right: "Shakespeare wrote many plays.", why: "Historical facts about the past use Simple Past, not Present Simple." },
    ],
    activity: "Give 5 historical facts with the verb in the wrong tense and ask the learner to fix them.",
    remember: "History already happened, so we always talk about it using Simple Past.",
  },
  7: {
    definition: "We use Simple Past to tell stories, describing events one after another in the order they happened.",
    rules: [
      "Used to narrate a series of past actions in order.",
      "Time-order words like first, then, after that, finally help connect the events.",
      "Every action in the story is usually in Simple Past, kept consistent from start to end.",
    ],
    examples: [
      "First, I woke up. Then, I brushed my teeth.",
      "She opened the door and saw a cat.",
      "He arrived, sat down, and started eating.",
      "First we packed our bags, then we left home.",
    ],
    mistakes: [
      { wrong: "First I wake up, then I brush my teeth.", right: "First I woke up, then I brushed my teeth.", why: "A story about the past keeps every verb in Simple Past." },
    ],
    activity: "Ask the learner to write a 4-sentence mini-story about their morning, using time-order words.",
    remember: "A story about the past needs Simple Past verbs all the way through — keep it consistent!",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something DID happen.",
    formula: "Subject + Verb (past form) + Object",
    rules: [
      "Start with the Subject.",
      "Add the Verb in its past form — regular -ed or a special irregular form.",
      "Finish with the Object or extra information.",
      "The verb form never changes for the subject in Simple Past.",
    ],
    examples: [
      "I played the piano.",
      "You spoke English well.",
      "He worked in a bank.",
      "She loved chocolate.",
      "We lived near the park.",
    ],
    mistakes: [
      { wrong: "She like tea yesterday.", right: "She liked tea yesterday.", why: "The verb must be in past form, even though 'she' doesn't need an extra -s here." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct past sentences.",
    remember: "One past form fits all subjects — no extra -s needed for he/she/it in the past!",
  },
  10: {
    definition: "A negative sentence tells us that something did NOT happen.",
    formula: "Subject + did not (didn't) + base verb",
    rules: [
      "Use did not / didn't for every subject — I, you, he, she, it, we, they all use the same form.",
      "After didn't, always use the BASE verb — never the past form!",
      "didn't already carries the 'past' meaning, so the main verb goes back to its plain form.",
    ],
    examples: [
      "I didn't watch the movie.",
      "She didn't go to school.",
      "They didn't eat breakfast.",
      "He didn't call me.",
    ],
    mistakes: [
      { wrong: "She didn't went to school.", right: "She didn't go to school.", why: "After didn't, use the base verb, not the past form." },
      { wrong: "He don't watched TV.", right: "He didn't watch TV.", why: "Negative past sentences use didn't, not don't." },
    ],
    activity: "Give 5 positive past sentences and ask the learner to make them negative.",
    remember: "didn't already means 'past' — so the verb after it goes back to normal (base form)!",
  },
  11: {
    definition: "Yes/No questions in the past ask something that can be answered simply with Yes or No.",
    formula: "Did + Subject + base verb ...?",
    rules: [
      "Use Did for every subject — I, you, he, she, it, we, they.",
      "The main verb always stays in base form after Did — no -ed, no irregular past form!",
      "Short answers: Yes, I did. / No, I didn't.",
    ],
    examples: [
      "Did you watch the movie? — Yes, I did.",
      "Did she go to the party? — No, she didn't.",
      "Did they finish their homework? — Yes, they did.",
    ],
    mistakes: [
      { wrong: "Did she went to the party?", right: "Did she go to the party?", why: "After did, use the base verb, not the past form." },
    ],
    activity: "Ask the learner to turn 5 past statements into Yes/No questions.",
    remember: "Did takes the 'past' job for the whole sentence — the main verb goes back to its base form!",
  },
  12: {
    definition: "WH questions ask for more information about a past event, not just Yes or No. They begin with a question word.",
    formula: "WH word + did + Subject + base verb ...?",
    rules: [
      "What = asks about a thing: What did you eat?",
      "Where = asks about a place: Where did she go?",
      "When = asks about time: When did they arrive?",
      "Why = asks for a reason: Why did he cry?",
      "Who / Which = can ask about a person or thing.",
      "How = asks about manner or way: How did it happen?",
      "Special case: when Who or Which IS the subject, we don't use did — we just use the past form directly, like a positive sentence: Who won the race? (not 'Who did win the race?')",
    ],
    examples: [
      "What did you eat for lunch?",
      "Where did she go yesterday?",
      "When did they arrive?",
      "Why did he cry?",
      "Who won the race?",
      "How did this happen?",
    ],
    mistakes: [
      { wrong: "What did you ate?", right: "What did you eat?", why: "After did, use the base verb, not the past form." },
      { wrong: "Who did win the race?", right: "Who won the race?", why: "When 'who' is the subject, we don't add 'did' — just use the past verb." },
    ],
    activity: "Match each WH word (What, Where, When, Why, Who, Which, How) to the correct question it can create about yesterday.",
    remember: "Order: WH word → did → subject → base verb. Except when who/which IS the subject!",
  },
  15: {
    definition: "Here are the most common Simple Past mistakes beginners make — and how to fix them.",
    examples: [],
    mistakes: [
      { wrong: "She go to school yesterday.", right: "She went to school yesterday.", why: "A past action needs the past form of the verb." },
      { wrong: "He didn't went home.", right: "He didn't go home.", why: "After didn't, always use the base verb." },
      { wrong: "Did you ate breakfast?", right: "Did you eat breakfast?", why: "After did, always use the base verb." },
      { wrong: "I eated an apple.", right: "I ate an apple.", why: "'Eat' is irregular — its past form is 'ate', not 'eated'." },
      { wrong: "They was happy.", right: "They were happy.", why: "With 'they', the past form of 'be' is 'were', not 'was'." },
      { wrong: "She don't finished her homework.", right: "She didn't finish her homework.", why: "Negative past sentences use didn't, not don't, plus the base verb." },
      { wrong: "We goed to the market.", right: "We went to the market.", why: "'Go' is irregular; its past form is 'went'." },
    ],
    activity: "Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.",
    remember: "Most mistakes happen in three spots: forgetting the past form, adding -ed to irregular verbs, or mixing up was/were and did/didn't.",
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
        The <strong>Simple Past Tense</strong> is the tense we use to talk about things that already
        happened. The action started and finished at some point before now — it is completely over.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Clock, title: "Completed Actions", desc: "Things that happened and finished, like 'I visited Paris.'" },
            { icon: Landmark, title: "Historical Facts", desc: "True facts about the past, like 'Shakespeare wrote plays.'" },
            { icon: ListOrdered, title: "Telling Stories", desc: "Describing events in order, like 'First I woke up, then...'" },
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
            "I watched TV last night.",
            "She visited her grandmother last week.",
            "We played football yesterday.",
            "He was late for school.",
            "They lived in London for five years.",
          ]}
        />
      </div>

      <Remember color={color}>
        If something already happened and is finished, we almost always use the Simple Past Tense!
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const PAST_MARKERS = [
  { w: "yesterday", ex: "I called her yesterday." },
  { w: "last night", ex: "We watched a movie last night." },
  { w: "last week", ex: "They visited us last week." },
  { w: "last month", ex: "She started a new job last month." },
  { w: "last year", ex: "We moved house last year." },
  { w: "the other day", ex: "I saw him the other day." },
];
const AGO_WORDS = [
  { w: "two days ago", ex: "She left two days ago." },
  { w: "a week ago", ex: "He arrived a week ago." },
  { w: "three years ago", ex: "We met three years ago." },
];
const DATE_WORDS = [
  { w: "in 1990", ex: "My father was born in 1990." },
  { w: "when I was young", ex: "I loved cartoons when I was young." },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Simple Past. They tell us exactly WHEN something happened —
        and that's exactly what Simple Past is all about!
      </p>

      <div>
        <SectionLabel color={color}>Past-time markers</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {PAST_MARKERS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>"Ago" — counting back in time</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {AGO_WORDS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>{f.w}</p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dates & periods</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {DATE_WORDS.map((f, i) => (
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
      <Remember color={color}>
        "Ago" always looks backward from now: "three years ago" means three years before today.
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 13 — IRREGULAR VERBS REFERENCE
--------------------------------------------------------------- */
const IRREGULAR_VERBS = [
  ["go", "went"], ["eat", "ate"], ["have", "had"], ["see", "saw"],
  ["do", "did"], ["make", "made"], ["take", "took"], ["come", "came"],
  ["give", "gave"], ["write", "wrote"], ["read", "read"], ["buy", "bought"],
  ["think", "thought"], ["get", "got"], ["say", "said"], ["know", "knew"],
];

function IrregularVerbsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Irregular verbs don't follow the -ed rule — they have their own special past form. There's no
        shortcut, but here are 16 of the most common ones to start with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {IRREGULAR_VERBS.map(([base, past], i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-3 text-center">
            <p className="text-xs text-slate-400 font-body">{base}</p>
            <ChevronRight size={12} className="mx-auto my-1 text-slate-300" />
            <p className="font-display font-bold text-sm" style={{ color }}>{past}</p>
          </div>
        ))}
      </div>

      <ActivityBox color={color}>
        Cover the right-hand column with your hand and try to remember each past form. Practice 5 new verbs a day!
      </ActivityBox>

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList
          items={[
            { wrong: "I writed a letter.", right: "I wrote a letter.", why: "'Write' is irregular — its past form is 'wrote'." },
            { wrong: "She buyed a dress.", right: "She bought a dress.", why: "'Buy' is irregular — its past form is 'bought'." },
          ]}
        />
      </div>

      <Remember color={color}>
        There's no shortcut — irregular verbs must be memorized a few at a time. Little and often works best!
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = [
  "yesterday", "last night", "last week", "last month", "last year",
  "two days ago", "a year ago", "in 1990", "when I was young", "the other day", "once",
];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Simple Past.
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
            "Yesterday, I cleaned my room.",
            "We met once, a long time ago.",
            "When I was young, I lived in a village.",
            "She called me the other day.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Simple Past sentence!</Remember>
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
        Let's see Simple Past in real conversations — the way people actually talk about their past.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — Talking about the weekend</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>How was your weekend?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>It was great! I visited my cousins.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Nice! What did you do there?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>We cooked food and watched movies.</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Sounds fun! I stayed home and studied.</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — Talking about a trip</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>Where did you go last summer?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>I went to the mountains with my family.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>How long did you stay?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>We stayed for five days. It was amazing.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>I never went there. Maybe next year!</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue between two friends talking about something they did last weekend.
      </ActivityBox>
      <Remember color={color}>Real conversations use Simple Past all the time — for trips, weekends, and memories!</Remember>
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
          <CheckInput color={color} prompt="She ___ (like) the movie." answer="liked" placeholder="type the verb" />
          <CheckInput color={color} prompt="They ___ (go) to the market yesterday." answer="went" placeholder="type the verb" />
          <CheckInput color={color} prompt="He ___ (stop) the car suddenly." answer="stopped" placeholder="type the verb" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="My mother ___ dinner last night." options={["cook", "cooked", "cooking"]} answerIndex={1} />
          <ChoiceQ color={color} prompt="I ___ an apple this morning." options={["eated", "eating", "ate"]} answerIndex={2} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / He / played / yesterday." answer="He played football yesterday." />
          <RevealQ color={color} prompt="early / woke up / She / this morning." answer="She woke up early this morning." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'He didn't went home.'" answer="He didn't go home. (went → go)" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'She go to school yesterday.'" answer="She went to school yesterday. (go → went)" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I liked the movie.'" answer="I didn't like the movie." />
          <CheckInput color={color} prompt="Make this negative: 'He played cricket.'" answer="He didn't play cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She visited Paris.'" answer="Did she visit Paris?" />
          <CheckInput color={color} prompt="Make this a question: 'They lived here.'" answer="Did they live here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which word is the verb? 'My sister cooked dinner yesterday.'" answer="cooked" />
          <RevealQ color={color} prompt="Which word is the verb? 'The children played in the park.'" answer="played" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / last night" answer="She studied English last night." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / meat" answer="We didn't eat meat." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school yesterday.", options: ["go", "goed", "went"], correct: 2 },
  { q: "I ___ pizza last night.", options: ["eated", "ate", "eat"], correct: 1 },
  { q: "He ___ like tea this morning.", options: ["don't", "didn't", "not"], correct: 1 },
  { q: "___ you play chess yesterday?", options: ["Do", "Did", "Does"], correct: 1 },
  { q: "They ___ football last weekend.", options: ["played", "plays", "playing"], correct: 0 },
  { q: "Shakespeare ___ many plays.", options: ["write", "writes", "wrote"], correct: 2 },
  { q: "We ___ in Delhi for two years.", options: ["lives", "lived", "live"], correct: 1 },
  { q: "___ she work here last year?", options: ["Do", "Did", "Does"], correct: 1 },
  { q: "He ___ TV last night.", options: ["watch", "watched", "watches"], correct: 1 },
  { q: "I ___ have a car back then.", options: ["didn't", "don't", "isn't"], correct: 0 },
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
            {score >= 8 ? "Excellent work! You know Simple Past well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
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
        Subject + Verb (past form) + Object — same verb for every subject
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Verb Rules (regular)</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• Most verbs: add -ed</li>
            <li>• Verbs ending in -e: add -d</li>
            <li>• consonant + y: y → ied</li>
            <li>• short CVC verbs: double + ed</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Irregular Verbs</p>
          <p className="text-sm text-slate-600 font-body">No rule — memorize them!</p>
          <p className="text-xs text-slate-400 font-body mt-1">go→went, eat→ate, have→had...</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Negative Rule</p>
          <p className="text-sm text-slate-600 font-body">didn't + base verb</p>
          <p className="text-xs text-slate-400 font-body mt-1">She didn't go. (not: went)</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Did + subject + base verb ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Did she go home?</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["yesterday", "last night", "last week", "last year", "ago", "in 1990", "the other day", "when I was young"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>{w}</span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: the past verb form never changes for the subject. didn't/did always take the base verb after them.
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
    if (activeId === 13) return <IrregularVerbsSection color={color} />;
    if (activeId === 14) return <SignalWordsSection color={color} />;
    if (activeId === 16) return <ConversationsSection color={color} />;
    if (activeId === 17) return <PracticeSection color={color} />;
    if (activeId === 18) return <QuizSection color={color} />;
    if (activeId === 19) return <SummarySection color={color} />;
    return <ConceptBlock data={STANDARD_CONTENT[activeId]} color={color} />;
  }

  return (
    <div className="min-h-screen bg-[#F6F5FC] font-body">
      <FontStyle />

      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
              <Rewind size={17} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Simple Past Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-indigo-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
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
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-indigo-200" />
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
