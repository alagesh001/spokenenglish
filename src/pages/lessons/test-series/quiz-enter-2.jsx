import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BookmarkCheck,
  Flame,
  RotateCcw,
  LayoutGrid,
  Timer as TimerIcon,
  Sparkles,
  ArrowLeft,
  Eye,
  Award,
  Circle,
  CheckCircle,
} from "lucide-react";

// ============================================================================
// SAMPLE DATA — matches the required `comprehensions` shape exactly.
// Replace/extend freely; nothing below this block needs to change.
// ============================================================================
const comprehensions = [
  {
    id: 1,
    title: "The Lighthouse Keeper's Watch",
    difficulty: "Easy",
    passage:
      "For thirty-seven years, Edmund Hale climbed the hundred and twelve spiral steps of the Point Argent lighthouse every evening at dusk. The tower stood at the edge of a rocky peninsula where the current ran fast and cold, and ships had foundered there long before the light was built. Edmund's father had kept the same watch before him, and his father's father before that, so that the Hale name had become as fixed to the lighthouse as the stone it was built from.\n\nThe work was simple but unforgiving: trim the wick, polish the lens, wind the mechanism that turned the light through the dark. A single missed night could mean a wrecked hull and drowned sailors, so Edmund never missed one, not even the winter his wife was ill, not even the year his boat was lost and he had to walk eleven miles along the cliff path in a storm to reach the tower on foot.\n\nWhen the government finally automated the light in the last year of his service, Edmund stood on the gallery and watched the new electric lamp flicker to life on its own, needing no one. He felt, he later said, both a great relief and a strange grief, as though a very old friend had quietly retired without saying goodbye. He kept climbing the stairs anyway, most evenings, just to watch the light turn, until he was too old to manage them at all.",
    questions: [
      {
        id: 1,
        question: "How long did Edmund Hale keep watch at the Point Argent lighthouse?",
        options: ["Eleven years", "Thirty-seven years", "A hundred and twelve years", "Two generations"],
        answer: 1,
        explanation:
          "The passage opens by stating Edmund climbed the lighthouse steps every evening for thirty-seven years.",
      },
      {
        id: 2,
        question: "What had been passed down through the Hale family?",
        options: [
          "A rocky peninsula",
          "The duty of keeping the lighthouse",
          "A fishing boat",
          "A book of storms",
        ],
        answer: 1,
        explanation:
          "Edmund's father and grandfather kept the same watch before him, making the lighthouse duty a family tradition.",
      },
      {
        id: 3,
        question: "What happened the year Edmund's boat was lost?",
        options: [
          "He missed his watch for the first time",
          "He walked eleven miles along the cliff path to reach the tower",
          "The lighthouse was automated early",
          "His wife took over his duties",
        ],
        answer: 1,
        explanation:
          "The passage says he walked eleven miles along the cliff path in a storm to reach the tower on foot that year.",
      },
      {
        id: 4,
        question: "How did Edmund feel when the light was automated?",
        options: [
          "Only relief",
          "Only grief",
          "Both relief and a strange grief",
          "Anger at the government",
        ],
        answer: 2,
        explanation:
          "The text explicitly says he felt both a great relief and a strange grief when the new lamp switched on by itself.",
      },
      {
        id: 5,
        question: "What is the best description of the passage's tone?",
        options: [
          "Comic and lighthearted",
          "Quietly reflective and nostalgic",
          "Urgent and suspenseful",
          "Cold and clinical",
        ],
        answer: 1,
        explanation:
          "The passage reflects gently on decades of steady duty and the bittersweet feeling of being replaced by automation.",
      },
      {
        id: 6,
        question: "How many steps led up the lighthouse tower?",
        options: ["Eleven", "Thirty-seven", "A hundred and twelve", "Two hundred"],
        answer: 2,
        explanation:
          "The passage says Edmund climbed the hundred and twelve spiral steps of the lighthouse every evening.",
      },
    ],
  },
  {
    id: 2,
    title: "The Mycelium Beneath",
    difficulty: "Medium",
    passage:
      "Beneath nearly every forest floor lies a hidden network of fungal threads called mycelium, so fine that a single cubic inch of soil can contain several miles of it. For a long time, foresters treated fungi mainly as decomposers, quietly breaking down dead wood and leaf litter. More recent research suggests their role is far more active: many species form partnerships with living tree roots, exchanging soil minerals like phosphorus and nitrogen for sugars the trees produce through photosynthesis.\n\nWhat has drawn particular attention is evidence that this fungal network can connect multiple trees, even of different species, into something researchers have informally called a 'wood wide web.' Through these shared fungal threads, a mature tree with excess sugar may in some cases support a smaller, shaded seedling nearby, and chemical signals warning of insect attack in one tree have been detected reaching neighboring trees through the same fungal pathways.\n\nThe idea has become popular well beyond scientific circles, appearing in documentaries and popular books that describe forests as cooperative, even communicative, communities. Some researchers welcome the public's enthusiasm but caution that the picture is more complicated than the popular version suggests: the same networks are also arenas of fierce competition, where fungi and trees alike may withhold resources from rivals, and not all forest types show fungal connections of the same density or effect. The metaphor of a forest 'talking' to itself, they note, is a useful simplification, not a settled scientific conclusion.",
    questions: [
      {
        id: 1,
        question: "What is mycelium, as described in the passage?",
        options: [
          "A type of tree root",
          "A network of fine fungal threads in soil",
          "A chemical signal used by insects",
          "A layer of dead leaves",
        ],
        answer: 1,
        explanation:
          "The passage defines mycelium as a hidden network of fungal threads so fine that a single cubic inch of soil can hold miles of it.",
      },
      {
        id: 2,
        question: "What do trees typically exchange with fungi in these partnerships?",
        options: [
          "Water for shade",
          "Sugars for soil minerals like phosphorus and nitrogen",
          "Seeds for shelter",
          "Oxygen for carbon dioxide",
        ],
        answer: 1,
        explanation:
          "The passage states fungi exchange soil minerals for the sugars trees produce through photosynthesis.",
      },
      {
        id: 3,
        question: "What is the 'wood wide web' informally used to describe?",
        options: [
          "A digital forestry database",
          "A single species' root system",
          "Fungal networks connecting multiple, sometimes different, trees",
          "The layer of bark on old trees",
        ],
        answer: 2,
        explanation:
          "Researchers use the term to describe fungal networks that connect multiple trees, even across species, to one another.",
      },
      {
        id: 4,
        question: "Why do some researchers urge caution about the popular version of this idea?",
        options: [
          "Because fungi have been proven not to connect trees at all",
          "Because the networks also involve competition and vary between forest types",
          "Because the research has since been retracted",
          "Because trees cannot produce sugar through photosynthesis",
        ],
        answer: 1,
        explanation:
          "The passage notes the networks are also arenas of competition and that not all forests show connections of the same density or effect.",
      },
      {
        id: 5,
        question: "How does the passage characterize the phrase 'forests talking to themselves'?",
        options: [
          "As a precise scientific term",
          "As a useful simplification, not a settled conclusion",
          "As entirely inaccurate and discredited",
          "As a term coined by foresters in the 1800s",
        ],
        answer: 1,
        explanation:
          "The passage closes by describing that framing as a useful simplification rather than a settled scientific conclusion.",
      },
      {
        id: 6,
        question: "What is the overall purpose of the passage?",
        options: [
          "To argue that fungi are harmful to forests",
          "To give simple gardening advice",
          "To explain a scientific idea while noting its popular oversimplification",
          "To criticize documentary filmmakers",
        ],
        answer: 2,
        explanation:
          "The passage explains the science of fungal networks and then tempers the popular narrative with researchers' caveats.",
      },
      {
        id: 7,
        question: "What kind of signal has been detected passing between trees through fungal networks?",
        options: [
          "Electrical currents",
          "Chemical signals warning of insect attack",
          "Sound vibrations",
          "Light pulses",
        ],
        answer: 1,
        explanation:
          "The passage notes chemical signals warning of insect attack in one tree have been detected reaching neighboring trees through the same fungal pathways.",
      },
    ],
  },
  {
    id: 3,
    title: "The Ledger of Small Debts",
    difficulty: "Hard",
    passage:
      "In the years before formal banking reached most rural towns, a peculiar kind of trust economy governed daily life. A farmer might borrow a plough from a neighbor in spring, repay it with a share of the harvest in autumn, and in the meantime owe a favor to the blacksmith who had mended it. None of this was written down as a contract; it was carried, instead, in memory, reputation, and the quiet social pressure of a small community where everyone's dealings were, sooner or later, known to everyone else.\n\nEconomic historians who have studied these arrangements resist the temptation to romanticize them as evidence of some lost, purer form of cooperation. The system worked well precisely because it was not purely generous: it was enforced by the threat of exclusion. A household that failed to repay what it owed, whether in grain, labor, or livestock, risked being quietly frozen out of future exchanges, a penalty often more severe than any legal one, since it could mean no plough at planting time or no hands at harvest.\n\nWhat is easy to miss, looking back, is how much information such a system required participants to track without any ledger at all. A shopkeeper extending credit needed to weigh not only a household's current means but its history of repayment, the size and health of its family, and the standing of its wider kin, since a debt owed by one member of a family was often treated as a debt owed by all of them. Some historians argue that the eventual shift to written ledgers and formal credit did not simply make trade more efficient; it also, in freeing transactions from this dense web of personal reputation, made it possible for strangers with no shared history to trade with one another at all, at the cost of the social accountability the older system had built in almost by accident.",
    questions: [
      {
        id: 1,
        question: "According to the passage, how were most debts recorded in this trust economy?",
        options: [
          "In formal written contracts",
          "In memory, reputation, and social pressure",
          "In bank ledgers kept by the blacksmith",
          "They were not tracked at all",
        ],
        answer: 1,
        explanation:
          "The passage states these arrangements were carried in memory, reputation, and social pressure rather than written contracts.",
      },
      {
        id: 2,
        question: "Why do economic historians resist romanticizing this system?",
        options: [
          "Because it never actually existed",
          "Because it was enforced by the threat of exclusion, not pure generosity",
          "Because it only applied to wealthy families",
          "Because no historical records of it survive",
        ],
        answer: 1,
        explanation:
          "The passage explains the system worked because of the threat of exclusion, not because it was purely generous.",
      },
      {
        id: 3,
        question: "What could happen to a household that failed to repay a debt?",
        options: [
          "Immediate imprisonment",
          "A formal court fine",
          "Being quietly frozen out of future exchanges",
          "Losing the right to vote locally",
        ],
        answer: 2,
        explanation:
          "The passage states such a household risked being quietly frozen out of future exchanges in the community.",
      },
      {
        id: 4,
        question: "How was a debt owed by one family member often treated?",
        options: [
          "As a debt owed by the entire family",
          "As entirely separate from the rest of the family",
          "As automatically forgiven",
          "As the sole responsibility of the shopkeeper",
        ],
        answer: 0,
        explanation:
          "The passage notes a debt owed by one member of a family was often treated as owed by all of them.",
      },
      {
        id: 5,
        question: "What tradeoff does the passage associate with the shift to written ledgers?",
        options: [
          "Trade became slower but fairer",
          "It enabled trade among strangers but reduced built-in social accountability",
          "It eliminated the need for trust entirely",
          "It made rural communities wealthier overnight",
        ],
        answer: 1,
        explanation:
          "The passage argues formal credit let strangers trade without shared history, at the cost of the older system's social accountability.",
      },
      {
        id: 6,
        question: "What kind of information did a shopkeeper need to extend credit wisely?",
        options: [
          "Only the household's current cash on hand",
          "Only the shopkeeper's own past profits",
          "A household's means, repayment history, family size and health, and kin standing",
          "The national interest rate at the time",
        ],
        answer: 2,
        explanation:
          "The passage lists these specific factors a shopkeeper needed to weigh before extending credit.",
      },
      {
        id: 7,
        question: "Which best describes the passage's overall argument?",
        options: [
          "Modern banking is inferior to informal trust economies",
          "Informal trust economies were sophisticated but had real costs and limits",
          "Rural communities never needed any form of credit",
          "Written ledgers were invented by blacksmiths",
        ],
        answer: 1,
        explanation:
          "The passage presents the trust economy as intricate and effective, while carefully noting its enforcement mechanism and its tradeoffs versus formal credit.",
      },
      {
        id: 8,
        question: "In the opening example, what did the farmer owe the blacksmith after borrowing a plough?",
        options: ["Money", "A favor", "A share of the harvest", "Nothing"],
        answer: 1,
        explanation:
          "The passage says the farmer would owe a favor to the blacksmith who had mended the plough, as part of the informal trust economy.",
      },
    ],
  },
];

// ============================================================================
// CONSTANTS & HELPERS
// ============================================================================
const WORDS_PER_MINUTE = 200;

const wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;
const readingMinutes = (text) => Math.max(1, Math.round(wordCount(text) / WORDS_PER_MINUTE));

const difficultyStyles = {
  Easy: { text: "text-emerald-300", bg: "bg-emerald-400/10", ring: "ring-emerald-400/30" },
  Medium: { text: "text-amber-300", bg: "bg-amber-400/10", ring: "ring-amber-400/30" },
  Hard: { text: "text-rose-300", bg: "bg-rose-400/10", ring: "ring-rose-400/30" },
};

const formatTime = (secs) => {
  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

const STORAGE_KEY = "reading-quiz-progress-v1";

// ============================================================================
// SMALL PRESENTATIONAL PIECES
// ============================================================================

// A soft glass panel used throughout the app.
const GlassPanel = ({ className = "", children, ...rest }) => (
  <div
    className={`rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.55)] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

// The signature "reading lamp" circular dial — reused for per-question
// progress, the passage's overall completion ring, and the results screen.
const LampDial = ({ progress, size = 84, stroke = 8, label, sublabel, glow = true }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * Math.min(Math.max(progress, 0), 1);

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#lampGradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - dash }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            filter: glow ? "drop-shadow(0 0 6px rgba(232,176,75,0.55))" : "none",
          }}
        />
        <defs>
          <linearGradient id="lampGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8B04B" />
            <stop offset="100%" stopColor="#F4D28C" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-semibold text-amber-50 leading-none">{label}</span>
        {sublabel && <span className="text-[10px] text-white/50 mt-1">{sublabel}</span>}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================
export default function ReadingComprehensionQuiz() {
  // ---- Persisted state -----------------------------------------------------
  // answers:            { [passageId]: { [questionId]: selectedOptionIndex } }
  // bookmarks:          { [passageId]: number[] (question ids) }
  // completedPassages:  { [passageId]: { score, total, completedAt } }
  // lastOpenedPassageId: number
  const [answers, setAnswers] = useState({});
  const [bookmarks, setBookmarks] = useState({});
  const [completedPassages, setCompletedPassages] = useState({});
  const [lastOpenedPassageId, setLastOpenedPassageId] = useState(comprehensions[0].id);
  const [hydrated, setHydrated] = useState(false);

  // ---- Session / navigation state ------------------------------------------
  const [activePassageId, setActivePassageId] = useState(comprehensions[0].id);
  const [view, setView] = useState("passage"); // 'passage' | 'result'
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [reviewMode, setReviewMode] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  const passage = useMemo(
    () => comprehensions.find((p) => p.id === activePassageId) ?? comprehensions[0],
    [activePassageId]
  );
  const questions = passage.questions;
  const currentQuestion = questions[currentQIndex];
  const passageAnswers = answers[passage.id] || {};
  const passageBookmarks = bookmarks[passage.id] || [];

  // --------------------------------------------------------------------------
  // LOAD PERSISTED PROGRESS ON MOUNT (window.storage — persists across visits)
  // --------------------------------------------------------------------------
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const result = await window.storage.get(STORAGE_KEY);
        if (!cancelled && result?.value) {
          const saved = JSON.parse(result.value);
          setAnswers(saved.answers || {});
          setBookmarks(saved.bookmarks || {});
          setCompletedPassages(saved.completedPassages || {});
          if (saved.lastOpenedPassageId) {
            setLastOpenedPassageId(saved.lastOpenedPassageId);
            setActivePassageId(saved.lastOpenedPassageId);
          }
        }
      } catch (err) {
        // No saved progress yet, or storage unavailable — start fresh.
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // --------------------------------------------------------------------------
  // PERSIST PROGRESS WHENEVER IT CHANGES (after initial hydration)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!hydrated) return;
    const payload = { answers, bookmarks, completedPassages, lastOpenedPassageId };
    (async () => {
      try {
        await window.storage.set(STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        // Saving failed silently; progress just won't resume next time.
      }
    })();
  }, [answers, bookmarks, completedPassages, lastOpenedPassageId, hydrated]);

  // --------------------------------------------------------------------------
  // TIMER (optional feature) — counts up while reading/answering a passage
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (view !== "passage" || !timerRunning) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [view, timerRunning]);

  useEffect(() => {
    setElapsed(0);
    setTimerRunning(true);
  }, [activePassageId]);

  // --------------------------------------------------------------------------
  // ANSWER HANDLING
  // --------------------------------------------------------------------------
  const selectAnswer = useCallback(
    (optionIndex) => {
      if (passageAnswers[currentQuestion.id] !== undefined) return; // locked once answered
      setAnswers((prev) => ({
        ...prev,
        [passage.id]: { ...(prev[passage.id] || {}), [currentQuestion.id]: optionIndex },
      }));
    },
    [passage.id, currentQuestion, passageAnswers]
  );

  const goToQuestion = useCallback(
    (index) => {
      if (index < 0 || index >= questions.length) return;
      setCurrentQIndex(index);
    },
    [questions.length]
  );

  const canAdvance = passageAnswers[currentQuestion?.id] !== undefined;
  const answeredCount = Object.keys(passageAnswers).length;
  const remainingCount = questions.length - answeredCount;
  const scoreSoFar = questions.reduce(
    (acc, q) => acc + (passageAnswers[q.id] === q.answer ? 1 : 0),
    0
  );

  const toggleBookmark = () => {
    setBookmarks((prev) => {
      const current = prev[passage.id] || [];
      const has = current.includes(currentQuestion.id);
      return {
        ...prev,
        [passage.id]: has
          ? current.filter((id) => id !== currentQuestion.id)
          : [...current, currentQuestion.id],
      };
    });
  };

  const submitQuiz = () => {
    const finalScore = questions.reduce(
      (acc, q) => acc + (passageAnswers[q.id] === q.answer ? 1 : 0),
      0
    );
    setCompletedPassages((prev) => ({
      ...prev,
      [passage.id]: { score: finalScore, total: questions.length, completedAt: Date.now() },
    }));
    setTimerRunning(false);
    if (finalScore === questions.length) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 2600);
    }
    setView("result");
  };

  const retryPassage = () => {
    setAnswers((prev) => ({ ...prev, [passage.id]: {} }));
    setCurrentQIndex(0);
    setView("passage");
    setReviewMode(false);
  };

  const openPassage = (id) => {
    setActivePassageId(id);
    setLastOpenedPassageId(id);
    setCurrentQIndex(0);
    setReviewMode(false);
    setView(completedPassages[id] ? "result" : "passage");
  };

  // --------------------------------------------------------------------------
  // KEYBOARD NAVIGATION
  // --------------------------------------------------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (view !== "passage") return;
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = Number(e.key) - 1;
        if (idx < (currentQuestion?.options.length || 0)) selectAnswer(idx);
      } else if (e.key === "ArrowRight" && canAdvance) {
        if (currentQIndex < questions.length - 1) goToQuestion(currentQIndex + 1);
      } else if (e.key === "ArrowLeft") {
        if (currentQIndex > 0) goToQuestion(currentQIndex - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [view, currentQuestion, canAdvance, currentQIndex, questions.length, selectAnswer, goToQuestion]);

  // --------------------------------------------------------------------------
  // RENDER
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_#1B2A41_0%,_#0B1220_55%,_#070B14_100%)] text-[#F1EFEA] font-[Inter,ui-sans-serif] p-4 md:p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui; }
        .passage-scroll::-webkit-scrollbar { width: 6px; }
        .passage-scroll::-webkit-scrollbar-thumb { background: rgba(232,176,75,0.35); border-radius: 999px; }
        .passage-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <div className="max-w-7xl mx-auto font-body">
        {/* ================================================================ */}
        {/* HEADER */}
        {/* ================================================================ */}
        <header className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center shadow-[0_0_20px_rgba(232,176,75,0.45)]">
              <BookOpen className="w-5 h-5 text-[#0B1220]" strokeWidth={2.4} />
            </div>
            <div>
              <h1 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Reading Room</h1>
              <p className="text-xs text-white/45">Comprehension practice, at your own pace</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/50 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            {Object.keys(completedPassages).length} of {comprehensions.length} passages complete
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* ============================================================== */}
          {/* LEFT SIDEBAR — passage list */}
          {/* ============================================================== */}
          <GlassPanel className="p-3 md:p-4 h-fit lg:sticky lg:top-8">
            <p className="text-[11px] uppercase tracking-wider text-white/40 px-2 mb-3">Passages</p>
            <div className="flex flex-col gap-2">
              {comprehensions.map((p, idx) => {
                const isActive = p.id === activePassageId;
                const done = completedPassages[p.id];
                const dStyle = difficultyStyles[p.difficulty] || difficultyStyles.Easy;
                return (
                  <button
                    key={p.id}
                    onClick={() => openPassage(p.id)}
                    className={`group relative text-left rounded-2xl p-3 border transition-all duration-200 overflow-hidden
                      ${isActive
                        ? "border-amber-300/50 bg-amber-300/[0.08] shadow-[0_0_0_1px_rgba(232,176,75,0.25)]"
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20"
                      }`}
                  >
                    {/* spine accent */}
                    <span
                      className={`absolute left-0 top-0 bottom-0 w-1 ${
                        isActive ? "bg-amber-400" : "bg-white/10 group-hover:bg-white/20"
                      } transition-colors`}
                    />
                    <div className="flex items-start justify-between gap-2 pl-2">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] text-white/35 font-medium">{String(idx + 1).padStart(2, "0")}</span>
                          {done && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                        </div>
                        <h3 className="font-display text-sm font-semibold leading-snug truncate text-white/90">
                          {p.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ring-1 ${dStyle.bg} ${dStyle.text} ${dStyle.ring}`}>
                            {p.difficulty}
                          </span>
                          <span className="text-[10px] text-white/40">{p.questions.length} Qs</span>
                        </div>
                        {done && (
                          <p className="text-[10px] text-emerald-300/80 mt-1.5">
                            Scored {done.score}/{done.total}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </GlassPanel>

          {/* ============================================================== */}
          {/* MAIN CONTENT */}
          {/* ============================================================== */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              {view === "passage" ? (
                <motion.div
                  key={`passage-${passage.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-6"
                >
                  {/* ---- Passage card ------------------------------------ */}
                  <GlassPanel className="p-5 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-[11px] px-2.5 py-1 rounded-full ring-1 ${
                              (difficultyStyles[passage.difficulty] || difficultyStyles.Easy).bg
                            } ${(difficultyStyles[passage.difficulty] || difficultyStyles.Easy).text} ${
                              (difficultyStyles[passage.difficulty] || difficultyStyles.Easy).ring
                            }`}
                          >
                            {passage.difficulty}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-white">
                          {passage.title}
                        </h2>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {readingMinutes(passage.passage)} min read
                        </span>
                        <span>{wordCount(passage.passage)} words</span>
                        <span className="flex items-center gap-1.5">
                          <TimerIcon className="w-3.5 h-3.5 text-amber-300" />
                          {formatTime(elapsed)}
                        </span>
                      </div>
                    </div>
                    <div className="passage-scroll max-h-72 overflow-y-auto pr-2 font-display text-[15px] leading-relaxed text-white/80 whitespace-pre-line">
                      {passage.passage}
                    </div>
                  </GlassPanel>

                  {/* ---- Progress strip ---------------------------------- */}
                  <GlassPanel className="p-4 md:p-5">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-lg font-semibold text-white">{answeredCount}/{questions.length}</p>
                        <p className="text-[11px] text-white/45">Answered</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{remainingCount}</p>
                        <p className="text-[11px] text-white/45">Remaining</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-emerald-300">{scoreSoFar}</p>
                        <p className="text-[11px] text-white/45">Correct so far</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">
                          {Math.round((answeredCount / questions.length) * 100)}%
                        </p>
                        <p className="text-[11px] text-white/45">Passage progress</p>
                      </div>
                    </div>
                  </GlassPanel>

                  {/* ---- Quiz question card ------------------------------- */}
                  <GlassPanel className="p-5 md:p-7">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <LampDial
                          progress={(currentQIndex + 1) / questions.length}
                          size={56}
                          stroke={5}
                          label={`${currentQIndex + 1}/${questions.length}`}
                        />
                        <div>
                          <p className="text-xs text-white/40 uppercase tracking-wide">Question</p>
                          <p className="text-sm text-white/70">
                            {answeredCount} answered · {remainingCount} to go
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={toggleBookmark}
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                        title="Bookmark this question"
                      >
                        {passageBookmarks.includes(currentQuestion.id) ? (
                          <BookmarkCheck className="w-3.5 h-3.5 text-amber-300" />
                        ) : (
                          <Bookmark className="w-3.5 h-3.5 text-white/50" />
                        )}
                        Bookmark
                      </button>
                    </div>

                    {/* progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-6">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-300 to-amber-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="font-display text-lg md:text-xl font-medium text-white mb-5 leading-snug">
                          {currentQuestion.question}
                        </p>

                        <div className="flex flex-col gap-3">
                          {currentQuestion.options.map((opt, i) => {
                            const selected = passageAnswers[currentQuestion.id];
                            const isLocked = selected !== undefined;
                            const isCorrectOpt = i === currentQuestion.answer;
                            const isSelectedOpt = selected === i;

                            let stateClasses =
                              "border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20";
                            if (isLocked) {
                              if (isCorrectOpt) {
                                stateClasses = "border-emerald-400/50 bg-emerald-400/10";
                              } else if (isSelectedOpt && !isCorrectOpt) {
                                stateClasses = "border-rose-400/50 bg-rose-400/10";
                              } else {
                                stateClasses = "border-white/5 bg-white/[0.02] opacity-60";
                              }
                            }

                            return (
                              <button
                                key={i}
                                disabled={isLocked}
                                onClick={() => selectAnswer(i)}
                                className={`flex items-center gap-3 text-left rounded-2xl border px-4 py-3.5 transition-all duration-150 ${stateClasses} ${
                                  isLocked ? "cursor-default" : "cursor-pointer"
                                }`}
                              >
                                <span
                                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 border ${
                                    isLocked && isCorrectOpt
                                      ? "border-emerald-400 text-emerald-300"
                                      : isLocked && isSelectedOpt
                                      ? "border-rose-400 text-rose-300"
                                      : "border-white/20 text-white/60"
                                  }`}
                                >
                                  {String.fromCharCode(65 + i)}
                                </span>
                                <span className="text-sm text-white/85 flex-1">{opt}</span>
                                {isLocked && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                                {isLocked && isSelectedOpt && !isCorrectOpt && (
                                  <XCircle className="w-4 h-4 text-rose-400" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Explanation card */}
                        <AnimatePresence>
                          {passageAnswers[currentQuestion.id] !== undefined && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-4 flex gap-3">
                                <Sparkles className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                                <div>
                                  <p className="text-xs font-semibold text-amber-200 mb-1">
                                    {passageAnswers[currentQuestion.id] === currentQuestion.answer
                                      ? "Correct!"
                                      : "Not quite — here's why"}
                                  </p>
                                  <p className="text-sm text-white/70 leading-relaxed">
                                    {currentQuestion.explanation}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </AnimatePresence>

                    {/* Prev / Next / Submit */}
                    <div className="flex items-center justify-between mt-7">
                      <button
                        onClick={() => goToQuestion(currentQIndex - 1)}
                        disabled={currentQIndex === 0}
                        className="flex items-center gap-1.5 text-sm px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </button>

                      {currentQIndex === questions.length - 1 ? (
                        <button
                          onClick={submitQuiz}
                          disabled={answeredCount < questions.length}
                          className="flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B1220] font-semibold shadow-[0_0_20px_rgba(232,176,75,0.35)] disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
                        >
                          <Award className="w-4 h-4" /> Submit Quiz
                        </button>
                      ) : (
                        <button
                          onClick={() => goToQuestion(currentQIndex + 1)}
                          disabled={!canAdvance}
                          className="flex items-center gap-1.5 text-sm px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B1220] font-semibold shadow-[0_0_20px_rgba(232,176,75,0.35)] disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110 transition-all"
                        >
                          Next <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {/* Question navigator */}
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <p className="text-[11px] uppercase tracking-wider text-white/40 mb-3 flex items-center gap-1.5">
                        <LayoutGrid className="w-3 h-3" /> Jump to question
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {questions.map((q, i) => {
                          const isCurrent = i === currentQIndex;
                          const isAnswered = passageAnswers[q.id] !== undefined;
                          const isBookmarked = passageBookmarks.includes(q.id);
                          return (
                            <button
                              key={q.id}
                              onClick={() => goToQuestion(i)}
                              className={`relative w-9 h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all border
                                ${
                                  isCurrent
                                    ? "bg-blue-500/90 border-blue-400 text-white"
                                    : isAnswered
                                    ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
                                    : "bg-white/[0.03] border-white/10 text-white/50"
                                }`}
                            >
                              {i + 1}
                              {isBookmarked && (
                                <Bookmark className="w-2.5 h-2.5 text-amber-300 absolute -top-1 -right-1 fill-amber-300" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              ) : (
                // ============================================================
                // RESULT PAGE
                // ============================================================
                <motion.div
                  key={`result-${passage.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <GlassPanel className="p-6 md:p-10 text-center relative overflow-hidden">
                    {celebrate && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2.4 }}
                      >
                        <Sparkles className="w-40 h-40 text-amber-300/30" />
                      </motion.div>
                    )}

                    {(() => {
                      const result = completedPassages[passage.id] || {
                        score: scoreSoFar,
                        total: questions.length,
                      };
                      const pct = Math.round((result.score / result.total) * 100);
                      let message = "Keep Practicing";
                      let messageColor = "text-rose-300";
                      if (pct === 100) {
                        message = "Excellent!";
                        messageColor = "text-amber-300";
                      } else if (pct >= 80) {
                        message = "Great Job";
                        messageColor = "text-emerald-300";
                      } else if (pct >= 50) {
                        message = "Needs Improvement";
                        messageColor = "text-amber-300";
                      }

                      return (
                        <>
                          <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                            {passage.title}
                          </p>
                          <div className="flex justify-center my-6">
                            <LampDial
                              progress={result.score / result.total}
                              size={140}
                              stroke={10}
                              label={`${pct}%`}
                              sublabel="score"
                            />
                          </div>
                          <h2 className={`font-display text-2xl md:text-3xl font-semibold mb-1 ${messageColor}`}>
                            {message}
                          </h2>
                          <p className="text-white/50 text-sm mb-8">
                            You scored {result.score} out of {result.total}
                          </p>

                          <div className="grid grid-cols-2 max-w-sm mx-auto gap-4 mb-8">
                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4">
                              <p className="text-2xl font-semibold text-emerald-300">{result.score}</p>
                              <p className="text-[11px] text-white/45 mt-1">Correct answers</p>
                            </div>
                            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.06] p-4">
                              <p className="text-2xl font-semibold text-rose-300">
                                {result.total - result.score}
                              </p>
                              <p className="text-[11px] text-white/45 mt-1">Wrong answers</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap justify-center gap-3">
                            <button
                              onClick={retryPassage}
                              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <RotateCcw className="w-4 h-4" /> Retry Passage
                            </button>
                            <button
                              onClick={() => {
                                setReviewMode(true);
                                setCurrentQIndex(0);
                                setView("passage");
                              }}
                              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors"
                            >
                              <Eye className="w-4 h-4" /> Review Answers
                            </button>
                            <button
                              onClick={() => {
                                const nextIncomplete = comprehensions.find(
                                  (p) => !completedPassages[p.id] && p.id !== passage.id
                                );
                                openPassage((nextIncomplete || comprehensions[0]).id);
                              }}
                              className="flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-[#0B1220] font-semibold shadow-[0_0_20px_rgba(232,176,75,0.35)] hover:brightness-110 transition-all"
                            >
                              <ArrowLeft className="w-4 h-4 rotate-180" /> Choose Another Passage
                            </button>
                          </div>
                        </>
                      );
                    })()}
                  </GlassPanel>
                </motion.div>
              )}
            </AnimatePresence>

            {reviewMode && view === "passage" && (
              <div className="mt-3 flex items-center gap-2 text-xs text-amber-200/80 bg-amber-300/[0.06] border border-amber-300/20 rounded-xl px-3 py-2">
                <Eye className="w-3.5 h-3.5" />
                Review mode — answers are locked in, browse freely with the navigator below.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}