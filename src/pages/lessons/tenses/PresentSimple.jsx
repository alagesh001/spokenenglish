import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Clock, Users, Type, CheckCircle2, XCircle, Sparkles, Lightbulb,
  Repeat, AlertTriangle, MessageCircle, PencilLine, ClipboardList, GraduationCap,
  ChevronRight, ChevronLeft, Menu, X, RotateCcw, HelpCircle, Sun, Briefcase,
  Sunrise, FlaskConical, Calendar, Timer, Star, Award, Check, ListChecks, Shuffle
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
        transparent, transparent 34px, rgba(37,99,235,0.06) 34px, rgba(37,99,235,0.06) 35px
      );
      background-position: 0 8px;
    }
  `}</style>
);

/* ---------------------------------------------------------------
   SECTION METADATA
--------------------------------------------------------------- */
const SECTIONS = [
  { id: 1, title: "Introduction", icon: BookOpen, color: "#2563EB" },
  { id: 2, title: "Sentence Structure", icon: Type, color: "#F97362" },
  { id: 3, title: "Subject Rules", icon: Users, color: "#EAA400" },
  { id: 4, title: "Verb Spelling Rules", icon: PencilLine, color: "#22B573" },
  { id: 5, title: "Daily Habits", icon: Sunrise, color: "#8B5CF6" },
  { id: 6, title: "Facts & Truths", icon: FlaskConical, color: "#EC4899" },
  { id: 7, title: "Permanent Situations", icon: Briefcase, color: "#0EA5E9" },
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
    <div
      className="rounded-2xl border-2 p-4 flex gap-3 items-start"
      style={{ borderColor: color, background: `${color}12` }}
    >
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
            {typeof ex === "string" ? (
              ex
            ) : (
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
        <div
          className="rounded-2xl p-4 text-center font-mono font-bold text-sm sm:text-base"
          style={{ background: `${color}12`, color }}
        >
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
            <button
              key={i}
              onClick={() => setSel(i)}
              className={`px-3 py-2 rounded-lg text-sm border-2 font-body font-medium transition ${cls}`}
            >
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
    definition: "Sentence structure is the order we put words in to make a sentence. In a positive Present Simple sentence, we always follow one simple pattern.",
    formula: "Subject + Verb (+s/es) + Object",
    rules: [
      "The Subject comes first — it tells us who or what does the action (I, you, Sara, the dog...).",
      "The Verb comes second — it tells us the action (eat, play, like...).",
      "The Object comes last — it tells us what receives the action.",
      "Not every sentence needs an object. 'Birds fly.' is a complete sentence.",
    ],
    examples: [
      { en: "I eat breakfast.", note: "Subject: I | Verb: eat | Object: breakfast" },
      { en: "She reads books.", note: "Subject: She | Verb: reads | Object: books" },
      { en: "They play football.", note: "" },
      { en: "The dog barks.", note: "no object needed" },
      { en: "We watch movies.", note: "" },
    ],
    mistakes: [
      { wrong: "Eat I breakfast.", right: "I eat breakfast.", why: "The subject must always come first, not the verb." },
      { wrong: "She books reads.", right: "She reads books.", why: "The verb comes before the object, not after it." },
    ],
    activity: "Mix up the words of a sentence, like 'football / plays / He', and ask the learner to put them in the correct order.",
    remember: "Think of a train: the Subject engine pulls the Verb car, which pulls the Object car. Order matters!",
  },
  3: {
    definition: "The verb changes its form depending on who is doing the action. This is called subject-verb agreement.",
    formula: "I / You / We / They + base verb   •   He / She / It + verb + s/es",
    rules: [
      "I, You, We, They → use the base verb with no change: I play, You play, We play, They play.",
      "He, She, It → add s or es to the verb: He plays, She plays, It plays.",
      "We add -s/-es for he/she/it because English marks one person or thing doing the action with a small tag on the verb — it's just a habit of the language to remember.",
      "This rule only happens in Present Simple, not in other tenses.",
    ],
    examples: [
      { en: "I like pizza.", note: "" },
      { en: "You like pizza.", note: "" },
      { en: "He likes pizza.", note: "add -s because he is one person" },
      { en: "She likes pizza.", note: "" },
      { en: "It rains a lot here.", note: "it = the weather" },
    ],
    mistakes: [
      { wrong: "He like pizza.", right: "He likes pizza.", why: "He/She/It needs -s at the end of the verb." },
      { wrong: "They likes pizza.", right: "They like pizza.", why: "They is plural, so no -s is needed." },
    ],
    activity: "Give a list of subjects (I, He, We, She, They, It) and one verb, like 'run'. Ask the learner to write the correct form for each subject.",
    remember: "He, She, It — the little 'S train' arrives! Every other subject keeps the base verb.",
  },
  4: {
    definition: "When we add -s or -es to a verb for he/she/it, the spelling sometimes changes depending on the verb's last letters.",
    rules: [
      "Most verbs: just add -s → play → plays, eat → eats, run → runs.",
      "Verbs ending in -ch, -sh, -ss, -x, -o: add -es → watch → watches, wash → washes, kiss → kisses, fix → fixes, go → goes.",
      "Verbs ending in a consonant + y: change y to i and add -es → study → studies, cry → cries, fly → flies.",
      "Verbs ending in a vowel + y: just add -s, no change → play → plays, say → says, buy → buys.",
      "Irregular spelling: have → has. There is no rule for this one — just remember it!",
    ],
    examples: [
      { en: "wash → She washes the car.", note: "" },
      { en: "study → He studies every night.", note: "" },
      { en: "play → It plays music.", note: "vowel + y, so just add -s" },
      { en: "fix → She fixes bikes.", note: "" },
      { en: "have → He has a cat.", note: "irregular" },
    ],
    mistakes: [
      { wrong: "She studys hard.", right: "She studies hard.", why: "Change y to i before adding -es after a consonant." },
      { wrong: "He haves a car.", right: "He has a car.", why: "'Have' becomes 'has' — it is irregular." },
      { wrong: "It watchs TV.", right: "It watches TV.", why: "Verbs ending in -ch need -es, not just -s." },
    ],
    activity: "Sort 10 verbs into four baskets: '+s', '+es', 'y→ies', and 'irregular'.",
    remember: "Say the verb out loud! If verb+s is hard to say smoothly (like 'watchs'), you probably need -es instead.",
  },
  5: {
    definition: "We use Present Simple to talk about things we do again and again — a routine or a habit.",
    rules: [
      "Used for actions that repeat regularly.",
      "Often used with time words like every day, usually, at 6 AM.",
      "The action might not be happening right now, but it happens regularly.",
    ],
    examples: [
      "I wake up at 6 AM.",
      "She drinks coffee every morning.",
      "We brush our teeth twice a day.",
      "He goes to school by bus.",
      "They exercise every evening.",
    ],
    mistakes: [
      { wrong: "I am waking up at 6 AM every day.", right: "I wake up at 6 AM every day.", why: "Repeated habits use Present Simple, not the -ing form." },
    ],
    activity: "Ask the learner to write 3 sentences describing their own daily routine.",
    remember: "Present Simple is like your daily 'robot' actions — the things you repeat like a routine!",
  },
  6: {
    definition: "We use Present Simple for facts that are always true, like science facts or general truths about the world.",
    rules: [
      "Used for facts about the world, nature, and science.",
      "These facts don't change over time.",
      "No time word is required, though words like 'always' can be added.",
    ],
    examples: [
      "The sun rises in the east.",
      "Water boils at 100°C.",
      "Ice is cold.",
      "Birds fly.",
      "The Earth goes around the Sun.",
    ],
    mistakes: [
      { wrong: "The sun is rising in the east.", right: "The sun rises in the east.", why: "General facts use Present Simple, not the -ing form." },
    ],
    activity: "Give 5 fact sentences with mistakes and ask the learner to fix the verb.",
    remember: "Facts don't change, so we use Present Simple — the tense for things that are always true!",
  },
  7: {
    definition: "We use Present Simple for things that are permanent or long-lasting, like your job, your hobby, or where you live.",
    rules: [
      "Jobs: I work as a teacher.",
      "Hobbies: She plays the guitar.",
      "Places: They live in Delhi.",
      "Relationships: He is my brother. I have two sisters.",
    ],
    examples: [
      "I work as a doctor.",
      "She teaches English.",
      "We live in Mumbai.",
      "He plays cricket every weekend.",
      "They are good friends.",
    ],
    mistakes: [
      { wrong: "I am working as a doctor.", right: "I work as a doctor.", why: "A permanent job uses Present Simple, not Present Continuous." },
    ],
    activity: "Ask the learner to write 4 sentences about themselves: job/study, hobby, city, and a family member.",
    remember: "Permanent means long-term! Use Present Simple for things that don't change quickly, like a job or a home.",
  },
  9: {
    definition: "A positive (affirmative) sentence tells us that something IS true or DOES happen.",
    formula: "I/You/We/They + base verb ...   •   He/She/It + verb+s/es ...",
    rules: [
      "Start with the Subject.",
      "Add the Verb — base form for I/you/we/they, and +s/es for he/she/it.",
      "Finish with the Object or extra information.",
    ],
    examples: [
      "I play the piano.",
      "You speak English well.",
      "He works in a bank.",
      "She loves chocolate.",
      "We live near the park.",
    ],
    mistakes: [
      { wrong: "She like tea.", right: "She likes tea.", why: "Don't forget -s after he/she/it in a positive sentence." },
    ],
    activity: "Give the learner 5 subject + verb + object word sets and ask them to build correct positive sentences.",
    remember: "In positive sentences, only he/she/it gets the extra -s or -es on the verb!",
  },
  10: {
    definition: "A negative sentence tells us that something does NOT happen.",
    formula: "I/You/We/They + do not (don't) + base verb ...   •   He/She/It + does not (doesn't) + base verb ...",
    rules: [
      "Use don't (do not) with I, you, we, they.",
      "Use doesn't (does not) with he, she, it.",
      "After don't/doesn't, always use the BASE verb — never add -s!",
      "doesn't already carries the 's', so the main verb goes back to its plain form.",
    ],
    examples: [
      "I don't like tea.",
      "You don't play chess.",
      "She doesn't like tea.",
      "He doesn't play chess.",
      "They don't watch TV.",
    ],
    mistakes: [
      { wrong: "He don't like tea.", right: "He doesn't like tea.", why: "He/she/it needs 'doesn't', not 'don't'." },
      { wrong: "She doesn't likes tea.", right: "She doesn't like tea.", why: "After 'doesn't', the verb goes back to its base form — no -s." },
    ],
    activity: "Give 5 positive sentences and ask the learner to change each one into a negative sentence.",
    remember: "doesn't already has the 's' — so the verb right after it never needs one too!",
  },
  11: {
    definition: "Yes/No questions ask something that can be answered simply with Yes or No.",
    formula: "Do/Does + Subject + base verb ...?",
    rules: [
      "Use Do with I, you, we, they.",
      "Use Does with he, she, it.",
      "The main verb always stays in its base form — no -s — because 'does' already carries it.",
      "Short answers: Yes, I do. / No, I don't. / Yes, she does. / No, she doesn't.",
    ],
    examples: [
      "Do you like tea? — Yes, I do.",
      "Does she play chess? — No, she doesn't.",
      "Do they live here? — Yes, they do.",
      "Does he work here? — Yes, he does.",
    ],
    mistakes: [
      { wrong: "Does she plays chess?", right: "Does she play chess?", why: "After 'does', use the base verb, not verb+s." },
    ],
    activity: "Ask the learner to turn 5 statements into Yes/No questions and give short answers.",
    remember: "Do/Does jumps to the front of the sentence, and the verb loses its -s!",
  },
  12: {
    definition: "WH questions ask for more information, not just Yes or No. They begin with a question word.",
    formula: "WH word + do/does + Subject + base verb ...?",
    rules: [
      "What = asks about a thing: What do you eat?",
      "Where = asks about a place: Where does she live?",
      "When = asks about time: When do they start?",
      "Why = asks for a reason: Why does he cry?",
      "Who / Which = can ask about a person or thing.",
      "How = asks about manner or way: How does it work?",
      "Special case: when Who or Which IS the subject, we don't use do/does — we just add -s directly, like a positive sentence: Who plays football? (not 'Who does play football?')",
    ],
    examples: [
      "What do you eat for breakfast?",
      "Where does she live?",
      "When do they start school?",
      "Why does he cry?",
      "Who plays football on Sundays?",
      "How does this machine work?",
    ],
    mistakes: [
      { wrong: "What you do like?", right: "What do you like?", why: "The question word comes first, then do/does, then the subject." },
      { wrong: "Who does play football?", right: "Who plays football?", why: "When 'who' is the subject, we don't add 'does' — just add -s to the verb." },
    ],
    activity: "Match each WH word (What, Where, When, Why, Who, Which, How) to the correct question it can create.",
    remember: "Order: WH word → do/does → subject → base verb. Except when who/which IS the subject!",
  },
  15: {
    definition: "Here are the most common Present Simple mistakes beginners make — and how to fix them.",
    examples: [],
    mistakes: [
      { wrong: "She play football.", right: "She plays football.", why: "He/she/it needs -s on the verb in positive sentences." },
      { wrong: "He don't like tea.", right: "He doesn't like tea.", why: "He/she/it uses 'doesn't', not 'don't'." },
      { wrong: "They plays cricket.", right: "They play cricket.", why: "They is plural — no -s is needed." },
      { wrong: "I likes music.", right: "I like music.", why: "'I' never takes -s on the verb." },
      { wrong: "She don't have a pen.", right: "She doesn't have a pen.", why: "Use 'doesn't' with she/he/it." },
      { wrong: "Does she plays tennis?", right: "Does she play tennis?", why: "After does, the verb stays in its base form." },
      { wrong: "He go to school every day.", right: "He goes to school every day.", why: "He/she/it needs -s or -es on the verb." },
      { wrong: "Do he like coffee?", right: "Does he like coffee?", why: "Use 'does' (not 'do') with he/she/it." },
    ],
    activity: "Show the learner 5 sentences with mistakes hidden inside. Ask them to find and correct each one.",
    remember: "Most mistakes happen in the same two spots: forgetting -s for he/she/it, or mixing up do/does and don't/doesn't.",
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
        <div
          className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: `${meta.color}18` }}
        >
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
        The <strong>Present Simple Tense</strong> is one of the first and most useful tenses in English.
        We use it to talk about things that are generally true, or that happen again and again — not just
        things happening right this second.
      </p>

      <div>
        <SectionLabel color={color}>When do we use it?</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: Repeat, title: "Habits & Routines", desc: "Things you do regularly, like brushing your teeth." },
            { icon: FlaskConical, title: "Facts & Truths", desc: "Things that are always true, like 'Water boils at 100°C'." },
            { icon: Briefcase, title: "Permanent Things", desc: "Long-lasting things like your job or where you live." },
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
            "I go to school every day.",
            "My mother cooks dinner every evening.",
            "The sun rises in the east.",
            "Cats like milk.",
            "We live in a small town.",
          ]}
        />
      </div>

      <Remember color={color}>
        If something happens again and again, or is always true, we almost always use the Present Simple Tense!
      </Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 8 — TIME EXPRESSIONS
--------------------------------------------------------------- */
const FREQUENCY_WORDS = [
  { w: "every day", ex: "I brush my teeth every day." },
  { w: "every week", ex: "We clean the house every week." },
  { w: "every month", ex: "She visits her grandma every month." },
  { w: "always", ex: "He always says hello." },
  { w: "usually", ex: "I usually walk to school." },
  { w: "often", ex: "They often eat rice." },
  { w: "sometimes", ex: "She sometimes plays chess." },
  { w: "rarely", ex: "He rarely watches TV." },
  { w: "never", ex: "I never eat spicy food." },
];
const TIME_POINT_WORDS = [
  { w: "on Mondays", ex: "We have English class on Mondays." },
  { w: "in the morning", ex: "I drink tea in the morning." },
  { w: "at night", ex: "She reads books at night." },
];

function TimeExpressionsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Some words are best friends with Present Simple. They tell us "how often" or "when" something
        happens, which is exactly what Present Simple is all about!
      </p>

      <div>
        <SectionLabel color={color}>How often — Frequency words</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {FREQUENCY_WORDS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>
                {f.w}
              </p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel color={color}>When — Time-point words</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-2">
          {TIME_POINT_WORDS.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 p-3 bg-white">
              <p className="font-mono text-xs font-bold px-2 py-1 rounded-md inline-block mb-1" style={{ background: `${color}15`, color }}>
                {f.w}
              </p>
              <p className="text-xs text-slate-600 font-body">{f.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <ActivityBox color={color}>
        Pick any 3 time words above and write your own sentence for each one!
      </ActivityBox>
      <Remember color={color}>
        Seeing one of these words in a sentence is a strong clue that it should be Present Simple.
      </Remember>
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
        Frequency adverbs tell us HOW OFTEN something happens. Each one shows a different amount, from
        100% of the time to 0% of the time.
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
          Subject + frequency adverb + verb
        </div>
        <p className="text-sm text-slate-600 font-body mt-2">
          Exception: with the verb "be" (am/is/are), the adverb goes AFTER it, not before.
        </p>
      </div>

      <ExampleList
        color={color}
        items={[
          "I always brush my teeth.",
          "She usually walks to school.",
          "He is never late.",
          "They are often busy on Fridays.",
        ]}
      />

      <div>
        <SectionLabel color={color}>Common Mistakes</SectionLabel>
        <MistakeList
          items={[
            { wrong: "I brush always my teeth.", right: "I always brush my teeth.", why: "The adverb goes before the main verb, not after it." },
            { wrong: "He never is late.", right: "He is never late.", why: "With 'be', the adverb goes after it, not before." },
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Ask the learner to rank their own habits — brushing teeth, eating vegetables, being late — using always, usually, sometimes, or never.
      </ActivityBox>
      <Remember color={color}>Adverb before the verb — except after "am/is/are".</Remember>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 14 — SIGNAL WORDS
--------------------------------------------------------------- */
const SIGNAL_WORDS = [
  "every day", "every week", "every year", "always", "usually", "often",
  "sometimes", "normally", "generally", "as a rule", "on Sundays", "once a week",
];

function SignalWordsSection({ color }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-700 leading-relaxed font-body text-[15px]">
        Signal words are like little flags in a sentence. When you spot one, it's a strong hint that the
        sentence should use Present Simple.
      </p>

      <div className="flex flex-wrap gap-2">
        {SIGNAL_WORDS.map((w, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-full text-sm font-body font-semibold"
            style={{ background: `${color}15`, color }}
          >
            {w}
          </span>
        ))}
      </div>

      <div>
        <SectionLabel color={color}>Examples</SectionLabel>
        <ExampleList
          color={color}
          items={[
            "As a rule, I don't eat sugar.",
            "She generally wakes up early.",
            "We normally have lunch at 1 PM.",
            "He visits his parents once a week.",
          ]}
        />
      </div>

      <ActivityBox color={color}>
        Give the learner a short paragraph and ask them to circle every signal word they can find.
      </ActivityBox>
      <Remember color={color}>Spot the signal word, and you've probably found a Present Simple sentence!</Remember>
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
        Let's see Present Simple in real conversations — the way people actually talk every day.
      </p>

      <div>
        <SectionLabel color={color}>Dialogue 1 — Meeting someone new</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Amit" color={color}>Hi! What do you do?</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>I work as a nurse. What about you?</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>I teach math at a school.</ChatBubble>
          <ChatBubble side="right" name="Riya" color={color}>That's great! Do you like teaching?</ChatBubble>
          <ChatBubble side="left" name="Amit" color={color}>Yes, I do. I love it.</ChatBubble>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Dialogue 2 — Daily routine</SectionLabel>
        <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
          <ChatBubble side="left" name="Sam" color={color}>What time do you wake up?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>I wake up at 6 AM every day.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Wow, early! Do you exercise too?</ChatBubble>
          <ChatBubble side="right" name="Leo" color={color}>Yes, I usually run for 20 minutes.</ChatBubble>
          <ChatBubble side="left" name="Sam" color={color}>Nice! I never wake up that early.</ChatBubble>
        </div>
      </div>

      <ActivityBox color={color}>
        Ask the learner to write a short 4-line dialogue between two friends talking about their hobbies, using Present Simple.
      </ActivityBox>
      <Remember color={color}>Real conversations use Present Simple all the time — for jobs, routines, and likes!</Remember>
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
          <CheckInput color={color} prompt="She ___ (like) chocolate." answer="likes" placeholder="type the verb" />
          <CheckInput color={color} prompt="They ___ (play) football on Sundays." answer="play" placeholder="type the verb" />
          <CheckInput color={color} prompt="He ___ (go) to school by bus." answer="goes" placeholder="type the verb" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>2. Choose the correct verb</SectionLabel>
        <div className="space-y-3">
          <ChoiceQ color={color} prompt="My mother ___ dinner every night." options={["cook", "cooks", "cooking"]} answerIndex={1} />
          <ChoiceQ color={color} prompt="I ___ tea every morning." options={["drinks", "drinking", "drink"]} answerIndex={2} />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>3. Rearrange the words</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="football / He / plays / every weekend." answer="He plays football every weekend." />
          <RevealQ color={color} prompt="early / wakes up / She / always." answer="She always wakes up early." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>4. Identify the mistake</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Find and fix the mistake: 'He don't like tea.'" answer="He doesn't like tea. (don't → doesn't)" />
          <RevealQ color={color} prompt="Find and fix the mistake: 'She play the piano.'" answer="She plays the piano. (play → plays)" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>5. Convert positive to negative</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this negative: 'I like coffee.'" answer="I don't like coffee." />
          <CheckInput color={color} prompt="Make this negative: 'He plays cricket.'" answer="He doesn't play cricket." />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>6. Convert statement into a question</SectionLabel>
        <div className="space-y-3">
          <CheckInput color={color} prompt="Make this a question: 'She likes tea.'" answer="Does she like tea?" />
          <CheckInput color={color} prompt="Make this a question: 'They live here.'" answer="Do they live here?" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>7. Find the verb</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Which word is the verb? 'My sister cooks dinner every day.'" answer="cooks" />
          <RevealQ color={color} prompt="Which word is the verb? 'The children play in the park.'" answer="play" />
        </div>
      </div>

      <div>
        <SectionLabel color={color}>8. Build a sentence</SectionLabel>
        <div className="space-y-3">
          <RevealQ color={color} prompt="Build a sentence with: she / study / English / every day" answer="She studies English every day." />
          <RevealQ color={color} prompt="Build a sentence with: we / not / eat / meat" answer="We don't eat meat." />
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------
   CUSTOM SECTION 18 — QUIZ
--------------------------------------------------------------- */
const QUIZ_QUESTIONS = [
  { q: "She ___ to school every day.", options: ["go", "goes", "going"], correct: 1 },
  { q: "I ___ pizza on Fridays.", options: ["eats", "eating", "eat"], correct: 2 },
  { q: "He ___ like tea.", options: ["don't", "doesn't", "not"], correct: 1 },
  { q: "___ you play chess?", options: ["Do", "Does", "Is"], correct: 0 },
  { q: "They ___ football every weekend.", options: ["plays", "play", "playing"], correct: 1 },
  { q: "The sun ___ in the east.", options: ["rise", "rising", "rises"], correct: 2 },
  { q: "We ___ in Delhi.", options: ["lives", "live", "living"], correct: 1 },
  { q: "___ she work here?", options: ["Do", "Does", "Are"], correct: 1 },
  { q: "He ___ TV at night.", options: ["watch", "watches", "watching"], correct: 1 },
  { q: "I ___ have a car.", options: ["don't", "doesn't", "isn't"], correct: 0 },
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
            {score >= 8 ? "Excellent work! You know Present Simple well." : score >= 5 ? "Good job! A little more practice will help." : "Keep practicing — review the earlier lessons and try again!"}
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-display font-semibold border-2"
            style={{ borderColor: color, color }}
          >
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
        I/You/We/They + base verb   •   He/She/It + verb+s/es
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Verb Rules</p>
          <ul className="text-sm text-slate-600 font-body space-y-1">
            <li>• Most verbs: add -s</li>
            <li>• -ch, -sh, -ss, -x, -o: add -es</li>
            <li>• consonant + y: y → ies</li>
            <li>• have → has (irregular)</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Negative Rule</p>
          <p className="text-sm text-slate-600 font-body">don't / doesn't + base verb</p>
          <p className="text-xs text-slate-400 font-body mt-1">He doesn't like tea. (not: likes)</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">Question Rule</p>
          <p className="text-sm text-slate-600 font-body">Do/Does + subject + base verb ...?</p>
          <p className="text-xs text-slate-400 font-body mt-1">Does she like tea?</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="font-display font-bold text-sm mb-2 text-slate-800">We use it for</p>
          <p className="text-sm text-slate-600 font-body">Habits • Facts • Permanent things</p>
        </div>
      </div>

      <div>
        <SectionLabel color={color}>Common Signal Words</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {["every day", "always", "usually", "often", "sometimes", "rarely", "never", "on Sundays"].map((w, i) => (
            <span key={i} className="px-3 py-1 rounded-full text-xs font-body font-semibold" style={{ background: `${color}15`, color }}>
              {w}
            </span>
          ))}
        </div>
      </div>

      <Remember color={color}>
        Quick tip: he/she/it always gets the -s. don't/doesn't and do/does always take the base verb after them.
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
    <div className="min-h-screen bg-[#F5F8FC] font-body">
      <FontStyle />

      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={() => setNavOpen((v) => !v)}>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <BookOpen size={18} color="white" />
            </div>
            <div>
              <p className="font-display font-bold text-slate-800 leading-none text-sm sm:text-base">Present Simple Tense</p>
              <p className="text-[11px] text-slate-400 font-body">A friendly beginner's guide</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 w-40">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${(activeId / 19) * 100}%` }} />
            </div>
            <span className="text-xs font-mono text-slate-400 shrink-0">{activeId}/19</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 grid lg:grid-cols-[240px_1fr] gap-6">
        {/* Sidebar */}
        <aside className={`${navOpen ? "block" : "hidden"} lg:block`}>
          <div className="lg:sticky lg:top-20 space-y-1 bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-2 lg:p-0 border lg:border-0 border-slate-200">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => go(s.id)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition ${
                    active ? "shadow-sm" : "hover:bg-slate-100"
                  }`}
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

        {/* Content */}
        <main>
          <div className="lesson-paper rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-red-200" />
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

          {/* Prev / Next */}
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
