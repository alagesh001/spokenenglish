import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Hourglass,
  Clock,
  PenLine,
  Hammer,
  GitCompare,
  Brain,
  Sparkles,
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  ArrowDown,
} from "lucide-react";

/* ============================== TIMELINES ============================== */
function SinceTimeline({ point = "2020" }) {
  return (
    <div className="flex items-center gap-2 py-6">
      <div className="flex flex-col items-center">
        <MapPin className="text-indigo-600" size={28} />
        <span className="mt-1 text-sm font-bold text-indigo-700">{point}</span>
      </div>
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-indigo-100">
        <motion.div
          className="h-full bg-indigo-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-indigo-600" />
        <span className="mt-1 text-sm font-bold text-indigo-700">NOW</span>
      </div>
    </div>
  );
}

function ForTimeline({ duration = "5 years" }) {
  return (
    <div className="flex items-center gap-2 py-6">
      <div className="flex flex-col items-center">
        <div className="h-3 w-3 rounded-full bg-amber-500" />
        <span className="mt-1 text-sm font-bold text-amber-700">START</span>
      </div>
      <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-amber-100">
        <motion.div
          className="h-full bg-amber-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-amber-700"
        >
          {duration}
        </motion.div>
      </div>
      <div className="flex flex-col items-center">
        <Hourglass className="text-amber-600" size={24} />
        <span className="mt-1 text-sm font-bold text-amber-700">NOW</span>
      </div>
    </div>
  );
}

/* ============================== 1. VISUAL TIME ACTIVITY ============================== */
function VisualTab() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          onClick={() => setActive(active === "since" ? null : "since")}
          className={`rounded-2xl border-2 p-6 text-left transition-colors ${
            active === "since" ? "border-indigo-500 bg-indigo-50" : "border-slate-200 bg-white hover:border-indigo-300"
          }`}
        >
          <MapPin className="mb-2 text-indigo-600" size={28} />
          <h3 className="text-lg font-extrabold text-indigo-700">Since 📍</h3>
          <p className="text-sm text-slate-500">When did it start?</p>
        </button>
        <button
          onClick={() => setActive(active === "for" ? null : "for")}
          className={`rounded-2xl border-2 p-6 text-left transition-colors ${
            active === "for" ? "border-amber-500 bg-amber-50" : "border-slate-200 bg-white hover:border-amber-300"
          }`}
        >
          <Hourglass className="mb-2 text-amber-600" size={28} />
          <h3 className="text-lg font-extrabold text-amber-700">For ⏳</h3>
          <p className="text-sm text-slate-500">How long?</p>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {active === "since" && (
          <motion.div
            key="since"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-6"
          >
            <p className="mb-2 text-lg font-bold text-slate-800">"I have lived here since 2020."</p>
            <SinceTimeline point="2020" />
            <p className="mt-2 text-sm font-semibold text-indigo-700">📍 2020 is the starting point.</p>
          </motion.div>
        )}
        {active === "for" && (
          <motion.div
            key="for"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-6 rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-6"
          >
            <p className="mb-2 text-lg font-bold text-slate-800">"I have lived here for 5 years."</p>
            <ForTimeline duration="5 years" />
            <p className="mt-2 text-sm font-semibold text-amber-700">⏳ 5 years is the duration.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================== 2. FILL THE BLANK ============================== */
const FILL_DATA = [
  { before: "I have been waiting", after: "2 hours.", answer: "for", explain: "2 hours shows duration, so we use FOR." },
  { before: "She has lived here", after: "Monday.", answer: "since", explain: "Monday is a starting point, so we use SINCE." },
  { before: "They have worked here", after: "2015.", answer: "since", explain: "2015 is a starting point, so we use SINCE." },
  { before: "We have known each other", after: "10 years.", answer: "for", explain: "10 years is a duration, so we use FOR." },
];

function FillItem({ data }) {
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const pick = (choice) => {
    if (locked) return;
    setSelected(choice);
    if (choice === data.answer) {
      setLocked(true);
    } else {
      setTimeout(() => setSelected(null), 800);
    }
  };

  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white p-5">
      <p className="mb-4 text-lg font-semibold text-slate-800">
        {data.before} <span className="mx-1 rounded bg-slate-100 px-3 py-1 font-bold text-slate-400">___</span> {data.after}
      </p>
      <div className="mb-3 flex gap-3">
        {["since", "for"].map((choice) => {
          const isSel = selected === choice;
          const isCorrect = choice === data.answer;
          let cls = "border-slate-200 bg-white text-slate-700";
          if (isSel && locked && isCorrect) cls = "border-emerald-400 bg-emerald-50 text-emerald-700";
          else if (isSel && !locked) cls = "border-rose-400 bg-rose-50 text-rose-700";
          return (
            <motion.button
              key={choice}
              whileTap={{ scale: 0.95 }}
              animate={isSel && !locked ? { x: [0, -6, 6, -6, 0] } : {}}
              onClick={() => pick(choice)}
              disabled={locked}
              className={`flex-1 rounded-xl border-2 py-2 font-bold capitalize ${cls}`}
            >
              {choice}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`rounded-lg p-3 text-sm font-semibold ${
              locked ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {locked ? (
              <CheckCircle2 className="mr-1 inline" size={16} />
            ) : (
              <XCircle className="mr-1 inline" size={16} />
            )}
            {locked ? " Correct! " : " Not quite, try the other one. "}
            {locked ? data.explain : ""}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FillTab() {
  return (
    <div className="flex flex-col gap-4">
      {FILL_DATA.map((d, i) => (
        <FillItem key={i} data={d} />
      ))}
    </div>
  );
}

/* ============================== 3. SENTENCE BUILDER ============================== */
function BuilderTab() {
  const [mode, setMode] = useState("since");
  const [choice, setChoice] = useState(null);

  const points = ["2020", "Monday", "morning"];
  const durations = ["2 hours", "5 years", "10 minutes"];
  const list = mode === "since" ? points : durations;

  const sentence = choice
    ? mode === "since"
      ? `I have been studying since ${choice}.`
      : `I have been waiting for ${choice}.`
    : null;

  return (
    <div>
      <div className="mb-5 flex justify-center gap-3">
        <button
          onClick={() => {
            setMode("since");
            setChoice(null);
          }}
          className={`rounded-full px-5 py-2 font-bold transition-colors ${
            mode === "since" ? "bg-indigo-600 text-white" : "border-2 border-slate-200 bg-white text-slate-600"
          }`}
        >
          Since 📍
        </button>
        <button
          onClick={() => {
            setMode("for");
            setChoice(null);
          }}
          className={`rounded-full px-5 py-2 font-bold transition-colors ${
            mode === "for" ? "bg-amber-500 text-white" : "border-2 border-slate-200 bg-white text-slate-600"
          }`}
        >
          For ⏳
        </button>
      </div>

      <p className="mb-3 text-center text-sm font-bold text-slate-500">
        {mode === "since" ? "Pick a starting point:" : "Pick a duration:"}
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {list.map((item) => (
          <motion.button
            key={item}
            whileTap={{ scale: 0.95 }}
            onClick={() => setChoice(item)}
            className={`rounded-xl border-2 px-4 py-2 font-bold ${
              choice === item
                ? mode === "since"
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "border-amber-500 bg-amber-50 text-amber-700"
                : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            {item}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {sentence && (
          <motion.div
            key={sentence}
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            className={`rounded-2xl border-2 p-6 text-center text-xl font-bold ${
              mode === "since" ? "border-indigo-300 bg-indigo-50 text-indigo-800" : "border-amber-300 bg-amber-50 text-amber-800"
            }`}
          >
            "{sentence}"
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================== 4. COMPARISON GAME ============================== */
function CompareTab() {
  const [matched, setMatched] = useState({});
  const [selectedWord, setSelectedWord] = useState(null);
  const [wrong, setWrong] = useState(null);

  const words = ["Since", "For"];
  const meanings = ["Starting point", "Duration"];
  const correctMap = { Since: "Starting point", For: "Duration" };

  const clickWord = (w) => {
    if (matched[w]) return;
    setSelectedWord(w);
  };

  const clickMeaning = (m) => {
    if (!selectedWord) return;
    if (correctMap[selectedWord] === m) {
      setMatched((prev) => ({ ...prev, [selectedWord]: m }));
      setSelectedWord(null);
    } else {
      setWrong(m);
      setTimeout(() => {
        setWrong(null);
        setSelectedWord(null);
      }, 600);
    }
  };

  const allMatched = Object.keys(matched).length === words.length;

  return (
    <div>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-4">
          <p className="font-bold text-slate-800">A: "I have worked here since 2020."</p>
        </div>
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4">
          <p className="font-bold text-slate-800">B: "I have worked here for 5 years."</p>
        </div>
      </div>

      <p className="mb-4 text-center font-bold text-slate-600">What is the difference? Match each word to its meaning.</p>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          {words.map((w) => (
            <motion.button
              key={w}
              whileTap={{ scale: 0.95 }}
              onClick={() => clickWord(w)}
              className={`rounded-xl border-2 px-4 py-3 font-bold ${
                matched[w]
                  ? "border-emerald-400 bg-emerald-50 text-emerald-700 opacity-60"
                  : selectedWord === w
                  ? "border-slate-700 bg-slate-100 text-slate-800"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {w}
            </motion.button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {meanings.map((m) => {
            const isMatched = Object.values(matched).includes(m);
            return (
              <motion.button
                key={m}
                whileTap={{ scale: 0.95 }}
                animate={wrong === m ? { x: [0, -6, 6, -6, 0] } : {}}
                onClick={() => clickMeaning(m)}
                className={`rounded-xl border-2 px-4 py-3 font-bold ${
                  isMatched
                    ? "border-emerald-400 bg-emerald-50 text-emerald-700 opacity-60"
                    : wrong === m
                    ? "border-rose-400 bg-rose-50 text-rose-700"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {m}
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {allMatched && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 rounded-xl bg-slate-800 p-4 text-center font-semibold text-white"
          >
            🎉 Exactly! SINCE marks the starting point, FOR marks the duration.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============================== 5. QUIZ ============================== */
const QUIZ = [
  { sentence: "I have been waiting ___ 2 hours.", answer: "for", explain: "2 hours is a duration, so we use FOR." },
  { sentence: "She has lived here ___ Monday.", answer: "since", explain: "Monday is a starting point, so we use SINCE." },
  { sentence: "They have worked here ___ 2015.", answer: "since", explain: "2015 is a starting point, so we use SINCE." },
  { sentence: "We have known each other ___ 10 years.", answer: "for", explain: "10 years is a duration, so we use FOR." },
  { sentence: "He has been sick ___ last night.", answer: "since", explain: "Last night is a starting point, so we use SINCE." },
  { sentence: "I have studied English ___ three months.", answer: "for", explain: "Three months is a duration, so we use FOR." },
  { sentence: "My brother has played guitar ___ he was seven.", answer: "since", explain: "'He was seven' marks a starting point, so we use SINCE." },
  { sentence: "It has been raining ___ two days.", answer: "for", explain: "Two days is a duration, so we use FOR." },
  { sentence: "She has been a teacher ___ 2010.", answer: "since", explain: "2010 is a starting point, so we use SINCE." },
  { sentence: "We have lived in this town ___ our whole lives.", answer: "for", explain: "'Our whole lives' describes a duration, so we use FOR." },
];

function QuizTab() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const q = QUIZ[idx];

  const answer = (choice) => {
    if (selected) return;
    setSelected(choice);
    if (choice === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (idx + 1 < QUIZ.length) {
      setIdx(idx + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const restart = () => {
    setIdx(0);
    setScore(0);
    setSelected(null);
    setDone(false);
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-8 text-center"
      >
        <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <Trophy className="mx-auto mb-3 text-amber-500" size={48} />
        </motion.div>
        <h3 className="mb-2 text-2xl font-extrabold text-slate-800">Quiz complete!</h3>
        <p className="mb-4 text-lg font-bold text-emerald-700">
          Score: {score}/{QUIZ.length}
        </p>
        <button
          onClick={restart}
          className="mx-auto flex items-center gap-2 rounded-full bg-slate-800 px-6 py-2 font-bold text-white"
        >
          <RotateCcw size={16} /> Try again
        </button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-slate-200 bg-white p-6">
      <div className="mb-3 flex items-center justify-between text-xs font-bold text-slate-400">
        <span>
          Question {idx + 1}/{QUIZ.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <p className="mb-5 text-lg font-bold text-slate-800">{q.sentence}</p>
      <div className="grid grid-cols-2 gap-3">
        {["since", "for"].map((choice) => {
          const isSel = selected === choice;
          const isCorrect = choice === q.answer;
          let cls = "border-slate-200 bg-white text-slate-700";
          if (selected) {
            if (isCorrect) cls = "border-emerald-400 bg-emerald-50 text-emerald-700";
            else if (isSel) cls = "border-rose-400 bg-rose-50 text-rose-700";
          }
          return (
            <motion.button
              key={choice}
              whileTap={{ scale: 0.95 }}
              animate={isSel && !isCorrect ? { x: [0, -6, 6, -6, 0] } : {}}
              onClick={() => answer(choice)}
              disabled={!!selected}
              className={`rounded-xl border-2 py-3 text-lg font-bold capitalize ${cls}`}
            >
              {choice}
            </motion.button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 rounded-xl p-3 text-sm font-semibold ${
              selected === q.answer ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
            }`}
          >
            {selected === q.answer ? (
              <CheckCircle2 className="mr-1 inline" size={16} />
            ) : (
              <XCircle className="mr-1 inline" size={16} />
            )}
            {q.explain}
          </motion.div>
        )}
      </AnimatePresence>
      {selected && (
        <button
          onClick={next}
          className="mt-4 flex items-center gap-1 rounded-full bg-slate-800 px-5 py-2 font-bold text-white"
        >
          {idx + 1 < QUIZ.length ? "Next" : "See results"} <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

/* ============================== 6. FINAL MEMORY CARD ============================== */
function MemoryTab() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-2xl border-2 border-indigo-300 bg-indigo-50 p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <MapPin className="text-indigo-600" size={24} />
          <h3 className="text-lg font-extrabold text-indigo-700">SINCE 📍</h3>
        </div>
        <p className="mb-3 text-sm font-semibold text-indigo-600">Start point</p>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mb-1 flex justify-center"
        >
          <ArrowDown className="text-indigo-400" size={20} />
        </motion.div>
        <SinceTimeline point="2020" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6"
      >
        <div className="mb-3 flex items-center gap-2">
          <Hourglass className="text-amber-600" size={24} />
          <h3 className="text-lg font-extrabold text-amber-700">FOR ⏳</h3>
        </div>
        <p className="mb-3 text-sm font-semibold text-amber-600">Duration</p>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="mb-1 flex justify-center"
        >
          <ArrowDown className="text-amber-400" size={20} />
        </motion.div>
        <ForTimeline duration="5 years" />
      </motion.div>
    </div>
  );
}

/* ============================== APP ============================== */
const TABS = [
  { id: "visual", label: "Visual Time", icon: Clock },
  { id: "fill", label: "Fill the Blank", icon: PenLine },
  { id: "builder", label: "Sentence Builder", icon: Hammer },
  { id: "compare", label: "Compare", icon: GitCompare },
  { id: "quiz", label: "Quiz", icon: Brain },
  { id: "memory", label: "Memory Card", icon: Sparkles },
];

export default function SinceForActivity() {
  const [tab, setTab] = useState("visual");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-cyan-50 p-4 sm:p-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800">⏳📍 Since vs For</h1>
          <p className="text-sm font-semibold text-slate-500">Learn the difference by doing, not memorizing rules.</p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-1.5 rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
                  active ? "border-slate-800 bg-slate-800 text-white" : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                <Icon size={16} /> {t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tab === "visual" && <VisualTab />}
            {tab === "fill" && <FillTab />}
            {tab === "builder" && <BuilderTab />}
            {tab === "compare" && <CompareTab />}
            {tab === "quiz" && <QuizTab />}
            {tab === "memory" && <MemoryTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}