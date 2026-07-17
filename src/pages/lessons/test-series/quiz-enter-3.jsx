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
    title: "The Silent Auction",
    difficulty: "Easy",
    passage:
      "Every spring, the small town of Millbrook held a silent auction to raise money for the local library. Instead of shouting bids the way people did in movies, bidders simply wrote their offers on a sheet of paper next to each item, and anyone could raise the bid by writing a higher number below it. There was no auctioneer, no gavel, and no noise at all — just rows of tables covered in handmade quilts, baked pies, and gift certificates donated by shopkeepers.\n\nElla had never won anything at the auction before, mostly because she always waited until the last hour to check the sheets, by which time the good items already had high bids. This year, she decided to try something different. She arrived when the doors opened and wrote a modest but early bid on a hand-carved wooden birdhouse, then checked back every twenty minutes to see if anyone had topped her.\n\nBy the final bell, only one other bidder had noticed the birdhouse, and Ella's last bid, written with three minutes to spare, held. She paid at the front table, thanked the woman who had carved it, and carried it home under one arm, already planning where in her garden it would hang. The library, she later read in the town newsletter, raised enough that spring to replace every chair in the children's reading room.",
    questions: [
      {
        id: 1,
        question: "What was the purpose of the Millbrook auction?",
        options: [
          "To sell old furniture",
          "To raise money for the local library",
          "To elect a new mayor",
          "To celebrate the town's founding",
        ],
        answer: 1,
        explanation:
          "The passage states the town held the auction every spring to raise money for the local library.",
      },
      {
        id: 2,
        question: "How did bidding actually work at this auction?",
        options: [
          "Bidders shouted out numbers to an auctioneer",
          "Bidders wrote offers on a sheet next to each item",
          "Bidders raised paddles for the highest bidder",
          "Items were sold to whoever arrived first",
        ],
        answer: 1,
        explanation:
          "The passage explains bidders wrote their offers on a sheet of paper, and others could write a higher number below.",
      },
      {
        id: 3,
        question: "Why had Ella never won an item before this year?",
        options: [
          "She never had enough money",
          "She always waited until the last hour to check the sheets",
          "She never liked any of the items",
          "She was too shy to bid",
        ],
        answer: 1,
        explanation:
          "The passage says Ella usually waited until the last hour, by which time good items already had high bids.",
      },
      {
        id: 4,
        question: "What did Ella do differently this year?",
        options: [
          "She brought a friend to help her bid",
          "She arrived early and checked back every twenty minutes",
          "She bid on every item in the auction",
          "She asked the woman who carved the birdhouse for a discount",
        ],
        answer: 1,
        explanation:
          "The passage describes Ella arriving when the doors opened and checking the birdhouse bid every twenty minutes.",
      },
      {
        id: 5,
        question: "What did the library do with the money raised that spring?",
        options: [
          "Bought new books only",
          "Repainted the building",
          "Replaced every chair in the children's reading room",
          "Hired a new librarian",
        ],
        answer: 2,
        explanation:
          "The town newsletter reported the library raised enough to replace every chair in the children's reading room.",
      },
    ],
  },
  {
    id: 2,
    title: "Bleached but Not Dead",
    difficulty: "Medium",
    passage:
      "Coral reefs get their color from tiny algae that live inside coral tissue in a close partnership: the algae photosynthesize and share food with the coral, while the coral provides shelter and compounds the algae need to grow. When ocean water becomes unusually warm, even by just one or two degrees for several weeks, this partnership can break down. The stressed coral expels its algae, and since the algae carried most of the reef's color, the coral is left pale or white, a process known as bleaching.\n\nA common misconception is that bleached coral is already dead. In fact, bleached coral is alive but under severe stress, and it can recover its algae and color if water temperatures drop back to normal reasonably quickly. If the warm conditions persist for too long, however, the coral runs out of energy reserves and starves, and a bleached reef can then die outright and become covered in other organisms like sponges and turf algae.\n\nMarine biologists who track bleaching events have noted that reefs do not all respond identically to the same conditions. Some coral species and even some individual colonies tolerate heat stress far better than others, and reefs that have experienced repeated, moderate bleaching sometimes show a kind of acquired tolerance in later heatwaves, retaining more of their algae than reefs bleached for the first time. Researchers caution against reading too much hope into this pattern, though, since the frequency of severe marine heatwaves is increasing faster than most reefs seem able to adapt.",
    questions: [
      {
        id: 1,
        question: "What gives coral reefs most of their color?",
        options: [
          "Minerals in the coral skeleton",
          "Tiny algae living inside the coral tissue",
          "Sunlight reflecting off the water",
          "Sponges that grow on the reef",
        ],
        answer: 1,
        explanation:
          "The passage explains that algae living inside coral tissue carry most of the reef's color.",
      },
      {
        id: 2,
        question: "What triggers coral bleaching, according to the passage?",
        options: [
          "A sudden drop in ocean salinity",
          "Unusually warm water for several weeks",
          "An increase in fish population",
          "A lack of sunlight reaching the reef",
        ],
        answer: 1,
        explanation:
          "The passage states that unusually warm water, even by one or two degrees for weeks, can cause coral to expel its algae.",
      },
      {
        id: 3,
        question: "Is bleached coral necessarily dead?",
        options: [
          "Yes, bleaching always kills coral immediately",
          "No, bleached coral is alive but under severe stress and can recover",
          "No, bleaching only affects the water around the coral",
          "Yes, but only for coral in shallow water",
        ],
        answer: 1,
        explanation:
          "The passage directly corrects this misconception, noting bleached coral is alive but stressed, and can recover if temperatures normalize quickly.",
      },
      {
        id: 4,
        question: "What happens if warm conditions persist too long after bleaching?",
        options: [
          "The coral regains its color faster",
          "The coral starves and the reef can die outright",
          "The algae return in greater numbers",
          "The reef becomes more colorful",
        ],
        answer: 1,
        explanation:
          "The passage explains that prolonged warm conditions cause the coral to run out of energy and starve, potentially killing the reef.",
      },
      {
        id: 5,
        question: "What pattern have some researchers observed in reefs with repeated bleaching?",
        options: [
          "They bleach more severely each time",
          "They sometimes show acquired tolerance, retaining more algae in later heatwaves",
          "They stop bleaching permanently after the first event",
          "They grow faster than reefs that have never bleached",
        ],
        answer: 1,
        explanation:
          "The passage notes reefs with repeated, moderate bleaching sometimes retain more algae in later heatwaves, a kind of acquired tolerance.",
      },
      {
        id: 6,
        question: "Why do researchers caution against reading too much hope into that tolerance pattern?",
        options: [
          "Because it has never actually been observed",
          "Because severe marine heatwaves are increasing faster than reefs seem able to adapt",
          "Because it only applies to freshwater coral",
          "Because tolerant reefs still lose all their fish",
        ],
        answer: 1,
        explanation:
          "The passage states researchers are cautious because heatwave frequency is rising faster than most reefs can adapt.",
      },
    ],
  },
  {
    id: 3,
    title: "The Paradox of Choice",
    difficulty: "Hard",
    passage:
      "Classical economic theory generally assumes that more options make people better off: a shopper choosing among thirty jam flavors should, in principle, be more likely to find one they truly love than a shopper choosing among six. Yet a body of research in behavioral psychology has repeatedly found the opposite in practice. In one widely cited supermarket study, a tasting booth offering twenty-four varieties of jam attracted more browsers than a booth offering only six, but the smaller display generated roughly ten times as many actual purchases.\n\nResearchers who study this effect, often called the paradox of choice, attribute it to several compounding costs that grow as the number of options increases. Comparing many alternatives takes more mental effort, which can leave people fatigued before they ever decide. Larger choice sets also raise the psychological stakes of choosing badly, since a shopper who picks poorly from thirty options has, in some sense, more evidence that a better option existed than one choosing from six. This can produce a phenomenon researchers call anticipated regret, in which people avoid deciding at all rather than risk feeling later that they chose wrong.\n\nImportantly, later replications and reviews have complicated the original supermarket finding, showing that the size of the effect depends heavily on context: it appears more reliably when the choices are hard to compare, when the decision matters a great deal, or when people are uncertain about their own preferences to begin with. When options are easy to rank against clear criteria, such as price for an identical product, more choices tend not to backfire in the same way. The paradox of choice, in other words, is not a universal law so much as a description of when abundant options become a burden rather than a benefit.",
    questions: [
      {
        id: 1,
        question: "What does classical economic theory generally assume about having more options?",
        options: [
          "More options make people worse off",
          "More options should make people better off",
          "The number of options has no effect on wellbeing",
          "People always prefer fewer options",
        ],
        answer: 1,
        explanation:
          "The passage states classical theory assumes more options should let people find something closer to what they truly want.",
      },
      {
        id: 2,
        question: "What happened in the supermarket jam study described in the passage?",
        options: [
          "The 24-jam booth generated more purchases than the 6-jam booth",
          "The 6-jam booth attracted more browsers but fewer purchases",
          "The 6-jam booth generated roughly ten times as many purchases despite fewer browsers",
          "Both booths generated the same number of purchases",
        ],
        answer: 2,
        explanation:
          "The passage states the 6-jam booth generated roughly ten times as many purchases even though the 24-jam booth attracted more browsers.",
      },
      {
        id: 3,
        question: "What is 'anticipated regret' as described in the passage?",
        options: [
          "Regret felt only after a purchase is made",
          "Avoiding a decision to escape the risk of later feeling one chose wrong",
          "A store policy allowing returns on jam",
          "The tendency to buy the cheapest option available",
        ],
        answer: 1,
        explanation:
          "The passage defines anticipated regret as avoiding a decision altogether rather than risking the feeling of having chosen wrong.",
      },
      {
        id: 4,
        question: "According to the passage, why do larger choice sets raise the psychological stakes of choosing badly?",
        options: [
          "Because stores charge more when there are more options",
          "Because a poor choice from many options suggests more evidence a better one existed",
          "Because larger choice sets are always more expensive",
          "Because people are legally required to compare all options",
        ],
        answer: 1,
        explanation:
          "The passage explains that choosing badly from thirty options provides more evidence a better option existed than choosing badly from six.",
      },
      {
        id: 5,
        question: "What have later replications and reviews shown about the original supermarket finding?",
        options: [
          "That it was completely disproven and never occurs",
          "That the effect's size depends heavily on context",
          "That it only applies to jam and no other products",
          "That it happens equally regardless of how easy options are to compare",
        ],
        answer: 1,
        explanation:
          "The passage states later work found the effect depends on context, such as how hard the options are to compare.",
      },
      {
        id: 6,
        question: "Under what condition does the passage suggest more choices tend not to backfire?",
        options: [
          "When the decision doesn't matter much and options are easy to rank on clear criteria",
          "When people are highly uncertain about their preferences",
          "When there are more than twenty options",
          "When the choices are impossible to compare",
        ],
        answer: 0,
        explanation:
          "The passage notes that when options are easy to rank on clear criteria, like price for an identical product, more choices tend not to backfire.",
      },
      {
        id: 7,
        question: "What is the best summary of the passage's final point?",
        options: [
          "The paradox of choice is a universal law that always applies",
          "The paradox of choice describes when abundant options become a burden rather than a universal rule",
          "Having more options is always better in every situation",
          "Behavioral psychology has been proven wrong about choice",
        ],
        answer: 1,
        explanation:
          "The passage closes by framing the paradox of choice as context-dependent rather than a universal law.",
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