import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, ChevronRight, CheckCircle2, BookmarkPlus, Sparkles,
  Brain, PenLine, Mic, Timer, Trophy, X, Check, RotateCcw,
  ArrowRight, Award, Layers, Briefcase, MessagesSquare, Send,
  Play, Square, ListChecks, GraduationCap, Flame, BookOpen,
  ClipboardCheck, Target, Users2
} from "lucide-react";
import { vocabData } from "../../../data/vocabData";


/* ------------------------------------------------------------------ */
/*  Theme                                                              */
/* ------------------------------------------------------------------ */
const theme = {
  bg0: "#0A0F1C",
  bg1: "#0E1526",
  surface: "#141D30",
  surfaceHi: "#1B2640",
  border: "#26324A",
  borderSoft: "#1E2A40",
  card: "#F6F0E2",
  cardBorder: "#E3D5AE",
  ink: "#231D14",
  inkSoft: "#5B5340",
  textPrimary: "#EAE6DA",
  textMuted: "#8E99AF",
  textFaint: "#5D6980",
  gold: "#D9A653",
  goldSoft: "#F0CD8E",
  teal: "#5FAE9F",
  tealSoft: "#9AD2C5",
  coral: "#E1685A",
  coralSoft: "#F0A79E",
  indigo: "#7C8CD8",
};

const FONT_STYLE = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');
.vt-root { font-family: 'Inter', sans-serif; }
.vt-display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
.vt-mono { font-family: 'JetBrains Mono', monospace; }
.vt-scroll::-webkit-scrollbar { height: 6px; width: 6px; }
.vt-scroll::-webkit-scrollbar-thumb { background: #35415C; border-radius: 4px; }
@keyframes vt-pulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
.vt-pulse { animation: vt-pulse 1.4s ease-in-out infinite; }
`;

const STORAGE_KEY = "vt_lexicon_progress_v1";
const TOTAL = vocabData.length;
const PASS_THRESHOLD = 70;

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n) {
  return shuffle(arr).slice(0, n);
}
function blankSentence(sentence, word) {
  const re = new RegExp(`\\b${word}\\b`, "i");
  if (re.test(sentence)) return sentence.replace(re, "_____");
  return sentence.replace(new RegExp(word, "i"), "_____");
}
function defaultProgress() {
  const p = {};
  vocabData.forEach((w) => {
    p[w.id] = {
      learned: false,
      review: false,
      confidence: null, // 'forgot' | 'difficult' | 'remembered' | 'easy'
      practicedSpeaking: false,
      personalSentence: "",
      testCorrect: 0,
      testSeen: 0,
    };
  });
  return p;
}
function wordMastery(entry) {
  if (!entry) return 0;
  let pts = 0;
  if (entry.learned) pts += 30;
  const confMap = { forgot: 0, difficult: 15, remembered: 25, easy: 40 };
  if (entry.confidence) pts += confMap[entry.confidence] || 0;
  if (entry.testSeen > 0) {
    pts += Math.min(30, entry.testCorrect * 15);
  }
  return Math.max(0, Math.min(100, pts));
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // guard against shape drift
    if (!parsed.progress) return null;
    return parsed;
  } catch {
    return null;
  }
}
function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota errors */
  }
}

/* ------------------------------------------------------------------ */
/*  Small UI atoms                                                      */
/* ------------------------------------------------------------------ */
function Pill({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0"
      style={{
        background: active ? theme.gold : "transparent",
        color: active ? "#241C0B" : theme.textMuted,
        border: `1px solid ${active ? theme.gold : theme.border}`,
      }}
    >
      <Icon size={15} strokeWidth={2.25} />
      {label}
    </button>
  );
}

function XPBadge({ xp }) {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg vt-mono text-xs font-semibold"
      style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.goldSoft }}
    >
      <Sparkles size={13} /> {xp} XP
    </div>
  );
}

function ActionButton({ onClick, icon: Icon, label, tone = "default", disabled }) {
  const tones = {
    default: { bg: theme.surfaceHi, color: theme.textPrimary, border: theme.border },
    gold: { bg: theme.gold, color: "#241C0B", border: theme.gold },
    teal: { bg: "transparent", color: theme.tealSoft, border: theme.teal },
    coral: { bg: "transparent", color: theme.coralSoft, border: theme.coral },
    ghost: { bg: "transparent", color: theme.textMuted, border: theme.border },
  };
  const t = tones[tone];
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
      style={{ background: t.bg, color: t.color, border: `1px solid ${t.border}` }}
    >
      <Icon size={16} strokeWidth={2.25} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Lexicon Word Card (always-visible core info)                       */
/* ------------------------------------------------------------------ */
function WordCard({ word, index, entry }) {
  return (
    <motion.div
      key={word.id}
      initial={{ opacity: 0, rotateY: -8, x: 30 }}
      animate={{ opacity: 1, rotateY: 0, x: 0 }}
      exit={{ opacity: 0, rotateY: 8, x: -30 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        boxShadow: "0 20px 50px -12px rgba(0,0,0,0.55)",
      }}
    >
      {/* stitched top ribbon */}
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{
          background: "repeating-linear-gradient(90deg, #2A2214 0 10px, #241E12 10px 20px)",
        }}
      >
        <span className="vt-mono text-[11px] tracking-widest" style={{ color: theme.goldSoft }}>
          ENTRY No. {String(index + 1).padStart(3, "0")}
        </span>
        <div className="flex items-center gap-2">
          {entry.learned && (
            <span className="flex items-center gap-1 vt-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: theme.teal, color: "#0A2420" }}>
              <CheckCircle2 size={11} /> LEARNED
            </span>
          )}
          {entry.review && (
            <span className="vt-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: theme.coral, color: "#2B0D08" }}>
              REVIEW
            </span>
          )}
        </div>
      </div>

      <div className="p-6 sm:p-8" style={{ color: theme.ink }}>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h1 className="vt-display text-4xl sm:text-5xl font-semibold tracking-tight">{word.word}</h1>
          <span
            className="vt-mono text-xs px-2.5 py-1 rounded-md mt-2"
            style={{ background: "#E9DDBB", color: theme.inkSoft, border: `1px solid ${theme.cardBorder}` }}
          >
            {word.pos}
          </span>
        </div>

        <p className="mt-3 text-lg leading-relaxed" style={{ color: theme.ink }}>
          {word.meaning}
        </p>

        <div className="mt-5 grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl px-4 py-3" style={{ background: "#EEE4CC" }}>
            <p className="vt-mono text-[10px] tracking-wider mb-1.5" style={{ color: theme.inkSoft }}>SYNONYMS</p>
            <p className="text-sm font-medium" style={{ color: theme.ink }}>
              {word.synonyms.join(" · ")}
            </p>
          </div>
          <div className="rounded-xl px-4 py-3" style={{ background: "#F1DAD3" }}>
            <p className="vt-mono text-[10px] tracking-wider mb-1.5" style={{ color: "#7A392E" }}>ANTONYM</p>
            <p className="text-sm font-medium" style={{ color: "#5A2A21" }}>{word.antonym}</p>
          </div>
        </div>

        <div className="mt-5 pl-4 border-l-2" style={{ borderColor: theme.gold }}>
          <p className="text-[15px] italic leading-relaxed" style={{ color: theme.inkSoft }}>
            "{word.example}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Guess The Meaning                                         */
/* ------------------------------------------------------------------ */
function GuessMeaningActivity({ word, allWords, onCorrect }) {
  const q = useMemo(() => {
    const distractorPool = allWords.filter((w) => w.id !== word.id);
    const distractors = sample(distractorPool, 3).map((w) => w.meaning);
    const options = shuffle([word.meaning, ...distractors]);
    return { options, correct: word.meaning };
  }, [word.id]);
  const [picked, setPicked] = useState(null);

  useEffect(() => setPicked(null), [word.id]);

  const handlePick = (opt) => {
    if (picked) return;
    setPicked(opt);
    if (opt === q.correct) onCorrect?.();
  };

  return (
    <div>
      <p className="text-sm mb-1" style={{ color: theme.textFaint }}>What does the highlighted word mean in this sentence?</p>
      <p className="text-base mb-4 leading-relaxed" style={{ color: theme.textPrimary }}>
        {word.example.split(new RegExp(`(${word.word})`, "i")).map((part, i) =>
          part.toLowerCase() === word.word.toLowerCase() ? (
            <span key={i} className="font-bold" style={{ color: theme.goldSoft }}>{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
      <div className="grid gap-2.5">
        {q.options.map((opt, i) => {
          const isCorrect = opt === q.correct;
          const isPicked = opt === picked;
          let style = { background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textPrimary };
          if (picked) {
            if (isCorrect) style = { background: "rgba(95,174,159,0.15)", border: `1px solid ${theme.teal}`, color: theme.tealSoft };
            else if (isPicked) style = { background: "rgba(225,104,90,0.15)", border: `1px solid ${theme.coral}`, color: theme.coralSoft };
          }
          return (
            <button
              key={i}
              onClick={() => handlePick(opt)}
              className="text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between gap-2"
              style={style}
            >
              <span>{opt}</span>
              {picked && isCorrect && <Check size={16} />}
              {picked && isPicked && !isCorrect && <X size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Choose The Word                                          */
/* ------------------------------------------------------------------ */
function ChooseWordActivity({ word, allWords, onCorrect }) {
  const q = useMemo(() => {
    const sentence = blankSentence(word.example, word.word);
    const distractorPool = allWords.filter((w) => w.id !== word.id);
    const distractors = sample(distractorPool, 3).map((w) => w.word);
    const options = shuffle([word.word, ...distractors]);
    return { sentence, options };
  }, [word.id]);
  const [picked, setPicked] = useState(null);
  useEffect(() => setPicked(null), [word.id]);

  const handlePick = (opt) => {
    if (picked) return;
    setPicked(opt);
    if (opt === word.word) onCorrect?.();
  };

  return (
    <div>
      <p className="text-sm mb-3" style={{ color: theme.textFaint }}>Choose the word that best completes the sentence.</p>
      <p className="text-base mb-4 leading-relaxed vt-mono" style={{ color: theme.textPrimary }}>{q.sentence}</p>
      <div className="grid grid-cols-2 gap-2.5">
        {q.options.map((opt, i) => {
          const isCorrect = opt === word.word;
          const isPicked = opt === picked;
          let style = { background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textPrimary };
          if (picked) {
            if (isCorrect) style = { background: "rgba(95,174,159,0.15)", border: `1px solid ${theme.teal}`, color: theme.tealSoft };
            else if (isPicked) style = { background: "rgba(225,104,90,0.15)", border: `1px solid ${theme.coral}`, color: theme.coralSoft };
          }
          return (
            <button key={i} onClick={() => handlePick(opt)} className="px-4 py-3 rounded-xl text-sm font-medium transition-all capitalize" style={style}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Real-Life Context (tabs)                                 */
/* ------------------------------------------------------------------ */
function ContextActivity({ word }) {
  const [tab, setTab] = useState("everyday");
  useEffect(() => setTab("everyday"), [word.id]);
  const tabs = [
    { key: "everyday", label: "Everyday", icon: Users2 },
    { key: "workplace", label: "Workplace", icon: Briefcase },
    { key: "discussion", label: "Discussion", icon: MessagesSquare },
  ];
  return (
    <div>
      <div className="flex gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: tab === t.key ? theme.surfaceHi : "transparent",
              border: `1px solid ${tab === t.key ? theme.indigo : theme.border}`,
              color: tab === t.key ? theme.textPrimary : theme.textMuted,
            }}
          >
            <t.icon size={14} /> {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="rounded-xl p-4"
          style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}` }}
        >
          <p className="text-[15px] leading-relaxed" style={{ color: theme.textPrimary }}>{word.context[tab]}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Active Recall                                             */
/* ------------------------------------------------------------------ */
function ActiveRecallActivity({ word, entry, onRate }) {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => setRevealed(false), [word.id]);

  const options = [
    { key: "forgot", label: "Forgot", tone: "coral" },
    { key: "difficult", label: "Difficult", tone: "gold2" },
    { key: "remembered", label: "Remembered", tone: "teal" },
    { key: "easy", label: "Easy", tone: "indigo2" },
  ];
  const toneMap = {
    coral: { border: theme.coral, color: theme.coralSoft },
    gold2: { border: theme.gold, color: theme.goldSoft },
    teal: { border: theme.teal, color: theme.tealSoft },
    indigo2: { border: theme.indigo, color: "#C3CBF2" },
  };

  return (
    <div className="text-center py-2">
      <p className="text-sm mb-4" style={{ color: theme.textFaint }}>
        Without peeking, try to recall the meaning of <span className="font-semibold" style={{ color: theme.textPrimary }}>"{word.word}"</span>.
      </p>
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="px-6 py-3 rounded-xl text-sm font-semibold"
          style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textPrimary }}
        >
          Reveal meaning
        </button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="rounded-xl p-4 mb-4" style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}` }}>
            <p className="text-[15px]" style={{ color: theme.textPrimary }}>{word.meaning}</p>
          </div>
          <p className="text-xs mb-2.5" style={{ color: theme.textFaint }}>How well did you remember it?</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {options.map((o) => (
              <button
                key={o.key}
                onClick={() => onRate(o.key)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold transition-transform active:scale-95"
                style={{ border: `1px solid ${toneMap[o.tone].border}`, color: toneMap[o.tone].color, background: "transparent" }}
              >
                {o.label}
              </button>
            ))}
          </div>
          {entry.confidence && (
            <p className="mt-3 text-xs vt-mono" style={{ color: theme.textFaint }}>
              Last rated: <span style={{ color: theme.goldSoft }}>{entry.confidence}</span>
            </p>
          )}
        </motion.div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Speaking Challenge                                        */
/* ------------------------------------------------------------------ */
function SpeakingActivity({ word, entry, onComplete }) {
  const [seconds, setSeconds] = useState(30);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSeconds(30);
    setRunning(false);
    clearInterval(intervalRef.current);
  }, [word.id]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const pct = (seconds / 30) * 100;

  return (
    <div>
      <p className="text-sm mb-3" style={{ color: theme.textFaint }}>Speak for 30 seconds using "{word.word}" naturally.</p>
      <div className="rounded-xl p-4 mb-4" style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}` }}>
        <p className="text-[15px] leading-relaxed" style={{ color: theme.textPrimary }}>{word.speaking}</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 shrink-0">
          <svg className="w-20 h-20 -rotate-90">
            <circle cx="40" cy="40" r="34" stroke={theme.border} strokeWidth="6" fill="none" />
            <circle
              cx="40" cy="40" r="34" stroke={seconds === 0 ? theme.coral : theme.gold} strokeWidth="6" fill="none"
              strokeDasharray={2 * Math.PI * 34}
              strokeDashoffset={2 * Math.PI * 34 * (1 - pct / 100)}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center vt-mono text-lg font-bold" style={{ color: theme.textPrimary }}>
            {seconds}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={seconds === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-40"
            style={{ background: theme.gold, color: "#241C0B" }}
          >
            {running ? <Square size={14} /> : <Play size={14} />} {running ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => { setSeconds(30); setRunning(false); }}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold"
            style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textMuted }}
          >
            <RotateCcw size={14} /> Reset
          </button>
          <button
            onClick={onComplete}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold"
            style={{ background: "transparent", border: `1px solid ${theme.teal}`, color: theme.tealSoft }}
          >
            <Check size={14} /> {entry.practicedSpeaking ? "Practiced again" : "Mark practiced (+5 XP)"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Activity: Personal Sentence                                         */
/* ------------------------------------------------------------------ */
function PersonalSentenceActivity({ word, entry, onSave }) {
  const [text, setText] = useState(entry.personalSentence || "");
  const [savedFlash, setSavedFlash] = useState(false);
  useEffect(() => setText(entry.personalSentence || ""), [word.id]);

  const containsWord = text.toLowerCase().includes(word.word.toLowerCase());

  const handleSave = () => {
    if (!containsWord || !text.trim()) return;
    onSave(text.trim());
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 1600);
  };

  return (
    <div>
      <p className="text-sm mb-3" style={{ color: theme.textFaint }}>Write your own sentence using "{word.word}".</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`e.g. "${word.example}"`}
        rows={3}
        className="w-full rounded-xl p-3.5 text-sm resize-none outline-none focus:ring-2"
        style={{ background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textPrimary }}
      />
      <div className="flex items-center justify-between mt-3">
        <p className="text-xs" style={{ color: containsWord || !text ? theme.textFaint : theme.coralSoft }}>
          {text && !containsWord ? `Include the word "${word.word}" in your sentence.` : "\u00A0"}
        </p>
        <button
          onClick={handleSave}
          disabled={!containsWord || !text.trim()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold disabled:opacity-40"
          style={{ background: theme.gold, color: "#241C0B" }}
        >
          <Send size={14} /> {savedFlash ? "Saved!" : "Save sentence"}
        </button>
      </div>
      {entry.personalSentence && !savedFlash && (
        <p className="mt-2 text-xs vt-mono" style={{ color: theme.textFaint }}>Saved sentence stored \u2713</p>
      )}
    </div>
  );
}

/* ================================================================== */
/*  TEST MODE                                                          */
/* ================================================================== */
const QUESTION_TYPES = [
  "meaning", "fillBlank", "chooseWord", "match",
  "situation", "incorrectUsage", "synonymAntonym", "sentenceCorrection",
];

function buildQuestion(type, word, pool, qid) {
  const others = pool.filter((w) => w.id !== word.id);

  if (type === "meaning") {
    const distractors = sample(others, 3).map((w) => w.meaning);
    return {
      qid, type, word,
      prompt: "Choose the correct meaning of the word:",
      subject: word.word,
      options: shuffle([word.meaning, ...distractors]),
      correct: word.meaning,
    };
  }
  if (type === "fillBlank") {
    const distractors = sample(others, 3).map((w) => w.word);
    return {
      qid, type, word,
      prompt: "Fill in the blank with the correct word:",
      subject: blankSentence(word.example, word.word),
      options: shuffle([word.word, ...distractors]),
      correct: word.word,
    };
  }
  if (type === "chooseWord") {
    const distractors = sample(others, 3).map((w) => w.word);
    return {
      qid, type, word,
      prompt: "Which word matches this meaning?",
      subject: word.meaning,
      options: shuffle([word.word, ...distractors]),
      correct: word.word,
    };
  }
  if (type === "match") {
    const extra = sample(others, 3);
    const setWords = shuffle([word, ...extra]);
    const meanings = shuffle(setWords.map((w) => w.meaning));
    return {
      qid, type, word,
      prompt: "Match each word with its correct meaning:",
      pairsWords: setWords,
      pairsMeanings: meanings,
    };
  }
  if (type === "situation") {
    const distractors = sample(others, 3).map((w) => w.word);
    return {
      qid, type, word,
      prompt: "Which word best fits this real-life situation?",
      subject: word.context.workplace.replace(new RegExp(word.word, "i"), "____"),
      options: shuffle([word.word, ...distractors]),
      correct: word.word,
    };
  }
  if (type === "incorrectUsage") {
    const correctUsages = shuffle([word.example, word.context.everyday, word.context.workplace]).slice(0, 2);
    const otherWord = sample(others, 1)[0];
    const wrongUsage = otherWord.example.replace(new RegExp(otherWord.word, "i"), word.word);
    const options = shuffle([...correctUsages, wrongUsage]);
    return {
      qid, type, word,
      prompt: `Which sentence uses "${word.word}" INCORRECTLY?`,
      options,
      correct: wrongUsage,
    };
  }
  if (type === "synonymAntonym") {
    const askSynonym = Math.random() > 0.5;
    const correct = askSynonym ? word.synonyms[0] : word.antonym;
    const distractorPool = shuffle(
      others.flatMap((w) => [...w.synonyms, w.antonym])
    ).filter((v) => v.toLowerCase() !== correct.toLowerCase());
    const distractors = sample([...new Set(distractorPool)], 3);
    return {
      qid, type, word,
      prompt: askSynonym ? `Which word is a SYNONYM of "${word.word}"?` : `Which word is an ANTONYM of "${word.word}"?`,
      options: shuffle([correct, ...distractors]),
      correct,
    };
  }
  if (type === "sentenceCorrection") {
    const otherWord = sample(others, 1)[0];
    const wrongSentence = word.example.replace(new RegExp(word.word, "i"), otherWord.word);
    const distractors = sample(others.filter((w) => w.id !== otherWord.id), 2).map((w) => w.word);
    const options = shuffle([word.word, otherWord.word, ...distractors]);
    return {
      qid, type, word,
      prompt: "This sentence uses the wrong word. Pick the word that correctly fixes it:",
      subject: wrongSentence,
      options,
      correct: word.word,
    };
  }
}

function generateTest(pool) {
  const chosenWords = sample(pool, Math.min(10, pool.length));
  const types = shuffle([...QUESTION_TYPES, ...sample(QUESTION_TYPES, 2)]).slice(0, chosenWords.length);
  return chosenWords.map((w, i) => buildQuestion(types[i], w, vocabData, i));
}

function TestQuestionCard({ q, onAnswer, answered }) {
  const [matchSelections, setMatchSelections] = useState({}); // wordId -> meaning
  const [selectedWord, setSelectedWord] = useState(null);

  useEffect(() => {
    setMatchSelections({});
    setSelectedWord(null);
  }, [q.qid]);

  if (q.type === "match") {
    const handleMeaningClick = (meaning) => {
      if (!selectedWord || answered) return;
      const next = { ...matchSelections, [selectedWord]: meaning };
      setMatchSelections(next);
      setSelectedWord(null);
      if (Object.keys(next).length === q.pairsWords.length) {
        const correctCount = q.pairsWords.filter((w) => next[w.id] === w.meaning).length;
        onAnswer({ matchResult: next, correctCount, total: q.pairsWords.length });
      }
    };
    return (
      <div>
        <p className="text-sm mb-4" style={{ color: theme.textFaint }}>{q.prompt}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            {q.pairsWords.map((w) => {
              const matched = matchSelections[w.id];
              const isSel = selectedWord === w.id;
              return (
                <button
                  key={w.id}
                  onClick={() => !answered && !matched && setSelectedWord(w.id)}
                  className="w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all"
                  style={{
                    background: isSel ? theme.gold : matched ? theme.surfaceHi : theme.surface,
                    color: isSel ? "#241C0B" : theme.textPrimary,
                    border: `1px solid ${matched ? (matched === w.meaning ? theme.teal : theme.coral) : theme.border}`,
                    opacity: matched ? 0.75 : 1,
                  }}
                >
                  {w.word} {matched && (matched === w.meaning ? "✓" : "✗")}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            {q.pairsMeanings.map((m, i) => {
              const used = Object.values(matchSelections).includes(m);
              return (
                <button
                  key={i}
                  onClick={() => handleMeaningClick(m)}
                  disabled={used || answered || !selectedWord}
                  className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs transition-all disabled:opacity-40"
                  style={{ background: theme.surface, border: `1px solid ${theme.border}`, color: theme.textMuted }}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </div>
        {!selectedWord && Object.keys(matchSelections).length < q.pairsWords.length && (
          <p className="text-xs mt-3 vt-pulse" style={{ color: theme.textFaint }}>Tap a word, then tap its meaning.</p>
        )}
      </div>
    );
  }

  // single-select question types
  const picked = answered?.userAnswer ?? null;
  return (
    <div>
      <p className="text-sm mb-2" style={{ color: theme.textFaint }}>{q.prompt}</p>
      {q.subject && (
        <p className="text-base mb-4 leading-relaxed vt-mono" style={{ color: theme.textPrimary }}>{q.subject}</p>
      )}
      <div className="grid gap-2.5">
        {q.options.map((opt, i) => {
          const isCorrect = opt === q.correct;
          const isPicked = opt === picked;
          let style = { background: theme.surfaceHi, border: `1px solid ${theme.border}`, color: theme.textPrimary };
          if (answered) {
            if (isCorrect) style = { background: "rgba(95,174,159,0.15)", border: `1px solid ${theme.teal}`, color: theme.tealSoft };
            else if (isPicked) style = { background: "rgba(225,104,90,0.15)", border: `1px solid ${theme.coral}`, color: theme.coralSoft };
          }
          return (
            <button
              key={i}
              disabled={!!answered}
              onClick={() => onAnswer({ userAnswer: opt, correct: opt === q.correct })}
              className="text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between"
              style={style}
            >
              <span>{opt}</span>
              {answered && isCorrect && <Check size={16} />}
              {answered && isPicked && !isCorrect && <X size={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TestView({ pool, onExit, onFinish }) {
  const [questions] = useState(() => generateTest(pool));
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // qid -> answer detail
  const [showResults, setShowResults] = useState(false);

  const q = questions[qIndex];
  const answeredCurrent = answers[q.qid];

  const handleAnswer = (detail) => {
    let correct;
    if (q.type === "match") correct = detail.correctCount === detail.total;
    else correct = detail.correct;
    setAnswers((prev) => ({ ...prev, [q.qid]: { ...detail, correct, question: q } }));
  };

  const goNext = () => {
    if (qIndex < questions.length - 1) setQIndex((i) => i + 1);
    else setShowResults(true);
  };

  const scored = Object.values(answers);
  const correctCount = scored.filter((a) => a.correct).length;
  const percent = Math.round((correctCount / questions.length) * 100);
  const xpEarned = correctCount * 10 + (percent >= PASS_THRESHOLD ? 30 : 0);
  const passed = percent >= PASS_THRESHOLD;

  if (showResults) {
    const incorrect = scored.filter((a) => !a.correct);
    const correctList = scored.filter((a) => a.correct);
    const needPractice = [...new Map(incorrect.map((a) => [a.question.word.id, a.question.word])).values()];

    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
        <div className="rounded-2xl p-6 text-center" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
          <div
            className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3"
            style={{ background: passed ? "rgba(95,174,159,0.15)" : "rgba(225,104,90,0.15)", border: `2px solid ${passed ? theme.teal : theme.coral}` }}
          >
            <Trophy size={26} color={passed ? theme.tealSoft : theme.coralSoft} />
          </div>
          <h2 className="vt-display text-2xl font-semibold" style={{ color: theme.textPrimary }}>
            {passed ? "Test Passed!" : "Keep Practicing"}
          </h2>
          <p className="text-sm mt-1" style={{ color: theme.textMuted }}>
            {correctCount} / {questions.length} correct &middot; {percent}%
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="vt-mono text-sm px-3 py-1.5 rounded-lg" style={{ background: theme.surfaceHi, color: theme.goldSoft }}>+{xpEarned} XP</div>
            <div
              className="vt-mono text-sm px-3 py-1.5 rounded-lg font-semibold"
              style={{ background: theme.surfaceHi, color: passed ? theme.tealSoft : theme.coralSoft }}
            >
              {passed ? "PASS" : "FAIL"}
            </div>
          </div>
        </div>

        {needPractice.length > 0 && (
          <div className="rounded-2xl p-5" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
            <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: theme.coralSoft }}>
              <Target size={15} /> Words that need more practice
            </p>
            <div className="flex flex-wrap gap-2">
              {needPractice.map((w) => (
                <span key={w.id} className="px-3 py-1.5 rounded-full text-xs vt-mono" style={{ background: theme.surfaceHi, border: `1px solid ${theme.coral}`, color: theme.coralSoft }}>
                  {w.word}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl p-5" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
          <p className="text-sm font-semibold mb-3" style={{ color: theme.textPrimary }}>Review your answers</p>
          <div className="space-y-2 max-h-72 overflow-y-auto vt-scroll pr-1">
            {scored.map((a, i) => (
              <div key={i} className="rounded-lg p-3 text-xs" style={{ background: theme.surfaceHi, border: `1px solid ${a.correct ? theme.teal : theme.coral}` }}>
                <p className="font-semibold mb-1" style={{ color: theme.textPrimary }}>
                  {a.correct ? "✓" : "✗"} {a.question.word.word} <span className="font-normal" style={{ color: theme.textFaint }}>({a.question.type})</span>
                </p>
                {a.question.type !== "match" ? (
                  <p style={{ color: theme.textMuted }}>
                    Your answer: <span style={{ color: a.correct ? theme.tealSoft : theme.coralSoft }}>{a.userAnswer}</span>
                    {!a.correct && <> &middot; Correct: <span style={{ color: theme.tealSoft }}>{a.question.correct}</span></>}
                  </p>
                ) : (
                  <p style={{ color: theme.textMuted }}>Matched {a.correctCount}/{a.total} correctly</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <ActionButton icon={RotateCcw} label="Retake test" tone="default" onClick={() => onFinish({ retake: true, correctCount, scored, percent, xpEarned, passed })} />
          <ActionButton icon={ArrowRight} label="Continue learning" tone="gold" onClick={() => onFinish({ retake: false, correctCount, scored, percent, xpEarned, passed })} />
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="flex items-center gap-1 text-xs" style={{ color: theme.textFaint }}>
          <X size={14} /> Exit test
        </button>
        <div className="vt-mono text-xs" style={{ color: theme.textMuted }}>
          Question {qIndex + 1} / {questions.length} &middot; Score {correctCount}
        </div>
      </div>
      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: theme.border }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: theme.gold }}
          animate={{ width: `${((qIndex + (answeredCurrent ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-2xl p-6" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
        <AnimatePresence mode="wait">
          <motion.div key={q.qid} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
            <TestQuestionCard q={q} onAnswer={handleAnswer} answered={answeredCurrent} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-end">
        <ActionButton
          icon={qIndex === questions.length - 1 ? ClipboardCheck : ArrowRight}
          label={qIndex === questions.length - 1 ? "Finish test" : "Next question"}
          tone="gold"
          disabled={!answeredCurrent}
          onClick={goNext}
        />
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MAIN APP                                                            */
/* ================================================================== */
const ACTIVITY_TABS = [
  { key: "guess", label: "Guess Meaning", icon: Brain },
  { key: "choose", label: "Choose Word", icon: ListChecks },
  { key: "context", label: "Real-Life Context", icon: Layers },
  { key: "recall", label: "Active Recall", icon: Flame },
  { key: "speak", label: "Speaking", icon: Mic },
  { key: "sentence", label: "My Sentence", icon: PenLine },
];

export default function VocabTrainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(defaultProgress());
  const [xp, setXp] = useState(0);
  const [activeTab, setActiveTab] = useState("guess");
  const [testMode, setTestMode] = useState(false);
  const [toast, setToast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // load from localStorage
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      setCurrentIndex(saved.currentIndex ?? 0);
      setProgress({ ...defaultProgress(), ...saved.progress });
      setXp(saved.xp ?? 0);
    }
    setLoaded(true);
  }, []);

  // persist
  useEffect(() => {
    if (!loaded) return;
    saveState({ currentIndex, progress, xp });
  }, [currentIndex, progress, xp, loaded]);

  const word = vocabData[currentIndex];
  const entry = progress[word.id];

  const flashToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 1800);
  };

  const addXp = useCallback((amount) => setXp((x) => x + amount), []);

  const updateEntry = useCallback((wordId, patch) => {
    setProgress((prev) => ({ ...prev, [wordId]: { ...prev[wordId], ...patch } }));
  }, []);

  const overallMastery = useMemo(() => {
    const total = vocabData.reduce((sum, w) => sum + wordMastery(progress[w.id]), 0);
    return Math.round(total / TOTAL);
  }, [progress]);

  const masteredCount = useMemo(
    () => vocabData.filter((w) => wordMastery(progress[w.id]) >= 80).length,
    [progress]
  );
  const learnedCount = useMemo(() => Object.values(progress).filter((e) => e.learned).length, [progress]);

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(TOTAL - 1, i + 1));

  const toggleLearned = () => {
    const wasLearned = entry.learned;
    updateEntry(word.id, { learned: !wasLearned });
    if (!wasLearned) { addXp(10); flashToast("Marked as learned · +10 XP"); }
  };
  const toggleReview = () => {
    updateEntry(word.id, { review: !entry.review });
    flashToast(entry.review ? "Removed from review" : "Added to review list");
  };

  const handleGuessCorrect = () => addXp(5);
  const handleChooseCorrect = () => addXp(5);
  const handleRecall = (rating) => {
    const gains = { forgot: 0, difficult: 2, remembered: 5, easy: 8 };
    updateEntry(word.id, { confidence: rating });
    if (gains[rating]) addXp(gains[rating]);
  };
  const handleSpeakingComplete = () => {
    if (!entry.practicedSpeaking) { updateEntry(word.id, { practicedSpeaking: true }); addXp(5); }
  };
  const handleSentenceSave = (text) => {
    const firstTime = !entry.personalSentence;
    updateEntry(word.id, { personalSentence: text });
    if (firstTime) addXp(5);
  };

  const testPool = useMemo(() => {
    const learnedWords = vocabData.filter((w) => progress[w.id]?.learned);
    if (learnedWords.length >= 10) return learnedWords;
    return vocabData.slice(0, Math.max(10, currentIndex + 1));
  }, [progress, currentIndex]);

  const [testKey, setTestKey] = useState(0);

  const handleTestFinish = ({ retake, scored, xpEarned, passed }) => {
    setProgress((prev) => {
      const next = { ...prev };
      scored.forEach((a) => {
        const wid = a.question.word.id;
        const prevEntry = next[wid];
        next[wid] = {
          ...prevEntry,
          testSeen: (prevEntry.testSeen || 0) + 1,
          testCorrect: (prevEntry.testCorrect || 0) + (a.correct ? 1 : 0),
          review: a.correct ? prevEntry.review : true,
        };
      });
      return next;
    });
    addXp(xpEarned);
    flashToast(passed ? `Test passed · +${xpEarned} XP` : `Test complete · +${xpEarned} XP`);
    if (retake) {
      setTestKey((k) => k + 1);
      setTestMode(true);
    } else {
      setTestMode(false);
    }
  };

  if (!loaded) return null;

  return (
    <div className="vt-root min-h-screen w-full" style={{ background: `linear-gradient(180deg, ${theme.bg0}, ${theme.bg1} 60%)` }}>
      <style>{FONT_STYLE}</style>

      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
        {/* Dashboard */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: theme.gold }}>
              <BookOpen size={18} color="#241C0B" />
            </div>
            <div>
              <p className="vt-display text-lg font-semibold leading-none" style={{ color: theme.textPrimary }}>Lexicon 100</p>
              <p className="vt-mono text-[11px] mt-0.5" style={{ color: theme.textFaint }}>Advanced vocabulary trainer</p>
            </div>
          </div>
          <XPBadge xp={xp} />
        </div>

        <div
          className="flex items-center justify-between text-xs vt-mono mb-2 px-1 flex-wrap gap-1"
          style={{ color: theme.textMuted }}
        >
          <span>Word {currentIndex + 1} of {TOTAL}</span>
          <span>{overallMastery}% Mastery</span>
          <span>{masteredCount} Mastered · {learnedCount} Learned</span>
        </div>
        <div className="w-full h-2 rounded-full overflow-hidden mb-6" style={{ background: theme.surfaceHi }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${theme.gold}, ${theme.teal})` }}
            animate={{ width: `${((currentIndex + 1) / TOTAL) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="mb-4 px-4 py-2.5 rounded-xl text-sm font-medium text-center"
              style={{ background: theme.surfaceHi, border: `1px solid ${theme.gold}`, color: theme.goldSoft }}
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {!testMode ? (
          <>
            <AnimatePresence mode="wait">
              <WordCard word={word} index={currentIndex} entry={entry} />
            </AnimatePresence>

            {/* Activity tabs */}
            <div className="flex gap-2 overflow-x-auto vt-scroll mt-6 pb-1">
              {ACTIVITY_TABS.map((t) => (
                <Pill key={t.key} active={activeTab === t.key} onClick={() => setActiveTab(t.key)} icon={t.icon} label={t.label} />
              ))}
            </div>

            <div className="rounded-2xl p-6 mt-3" style={{ background: theme.surface, border: `1px solid ${theme.border}` }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab + word.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                  {activeTab === "guess" && <GuessMeaningActivity word={word} allWords={vocabData} onCorrect={handleGuessCorrect} />}
                  {activeTab === "choose" && <ChooseWordActivity word={word} allWords={vocabData} onCorrect={handleChooseCorrect} />}
                  {activeTab === "context" && <ContextActivity word={word} />}
                  {activeTab === "recall" && <ActiveRecallActivity word={word} entry={entry} onRate={handleRecall} />}
                  {activeTab === "speak" && <SpeakingActivity word={word} entry={entry} onComplete={handleSpeakingComplete} />}
                  {activeTab === "sentence" && <PersonalSentenceActivity word={word} entry={entry} onSave={handleSentenceSave} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom nav */}
            <div className="flex flex-wrap gap-2 mt-6 justify-between">
              <div className="flex gap-2">
                <ActionButton icon={ChevronLeft} label="Previous" tone="default" onClick={goPrev} disabled={currentIndex === 0} />
                <ActionButton icon={ChevronRight} label="Next" tone="default" onClick={goNext} disabled={currentIndex === TOTAL - 1} />
              </div>
              <div className="flex gap-2 flex-wrap">
                <ActionButton icon={CheckCircle2} label={entry.learned ? "Learned" : "Mark as Learned"} tone={entry.learned ? "teal" : "default"} onClick={toggleLearned} />
                <ActionButton icon={BookmarkPlus} label={entry.review ? "In Review" : "Add to Review"} tone={entry.review ? "coral" : "default"} onClick={toggleReview} />
                <ActionButton icon={GraduationCap} label="Start Test" tone="gold" onClick={() => setTestMode(true)} />
              </div>
            </div>
          </>
        ) : (
          <TestView key={testKey} pool={testPool} onExit={() => setTestMode(false)} onFinish={handleTestFinish} />
        )}

        <p className="text-center text-[11px] mt-10 vt-mono" style={{ color: theme.textFaint }}>
          Progress saved automatically to this browser &middot; {TOTAL} words total
        </p>
      </div>
    </div>
  );
}
