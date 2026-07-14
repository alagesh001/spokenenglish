import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";
import LessonLayout from "../LessonLayout";

// Each entry: the letter, how it sounds, and one example word.
const CARDS = [
  { letter: "A", sound: "/eɪ/", word: "Apple" },
  { letter: "B", sound: "/biː/", word: "Book" },
  { letter: "C", sound: "/siː/", word: "Cat" },
  { letter: "D", sound: "/diː/", word: "Dog" },
  { letter: "E", sound: "/iː/", word: "Egg" },
  { letter: "F", sound: "/ɛf/", word: "Fish" },
  { letter: "G", sound: "/dʒiː/", word: "Goat" },
  { letter: "H", sound: "/eɪtʃ/", word: "House" },
  { letter: "I", sound: "/aɪ/", word: "Ice" },
  { letter: "J", sound: "/dʒeɪ/", word: "Juice" },
  { letter: "K", sound: "/keɪ/", word: "Kite" },
  { letter: "L", sound: "/ɛl/", word: "Lion" },
  { letter: "M", sound: "/ɛm/", word: "Mango" },
  { letter: "N", sound: "/ɛn/", word: "Nest" },
  { letter: "O", sound: "/əʊ/", word: "Orange" },
  { letter: "P", sound: "/piː/", word: "Pen" },
  { letter: "Q", sound: "/kjuː/", word: "Queen" },
  { letter: "R", sound: "/ɑːr/", word: "Rabbit" },
  { letter: "S", sound: "/ɛs/", word: "Sun" },
  { letter: "T", sound: "/tiː/", word: "Tiger" },
  { letter: "U", sound: "/juː/", word: "Umbrella" },
  { letter: "V", sound: "/viː/", word: "Van" },
  { letter: "W", sound: "/ˈdʌbəl.juː/", word: "Watch" },
  { letter: "X", sound: "/ɛks/", word: "Xylophone" },
  { letter: "Y", sound: "/waɪ/", word: "Yak" },
  { letter: "Z", sound: "/ziː/", word: "Zoo" },
];

export default function Alphabet() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const card = CARDS[index];

  const go = (dir) => {
    setFlipped(false);
    setIndex((i) => (i + dir + CARDS.length) % CARDS.length);
  };

  return (
    <LessonLayout>
      <div className="flex flex-col items-center">
        <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">
          Tap the card to flip it, then say the letter and word out loud.
        </p>

        <button
          onClick={() => setFlipped((f) => !f)}
          className="relative w-64 h-64 [perspective:1000px]"
          aria-label="Flip flashcard"
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full [transform-style:preserve-3d]"
          >
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-glow flex flex-col items-center justify-center">
              <span className="font-display font-extrabold text-7xl">{card.letter}</span>
              <span className="mt-2 text-teal-100 text-sm">Tap to reveal sound &amp; word</span>
            </div>
            {/* Back */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft flex flex-col items-center justify-center gap-2">
              <span className="text-xs uppercase tracking-wide text-ink-400">Sounds like</span>
              <span className="font-display font-bold text-3xl text-teal-600 dark:text-teal-300">{card.sound}</span>
              <span className="mt-3 text-xs uppercase tracking-wide text-ink-400">Example word</span>
              <span className="font-display font-semibold text-xl text-ink-800 dark:text-white">{card.word}</span>
            </div>
          </motion.div>
        </button>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
            aria-label="Previous letter"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-sm text-ink-500 dark:text-ink-400 w-16 text-center">
            {index + 1} / {CARDS.length}
          </span>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
            aria-label="Next letter"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => setFlipped((f) => !f)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-ink-200 dark:border-ink-700 hover:bg-ink-50 dark:hover:bg-ink-800 transition-colors"
            aria-label="Flip card"
          >
            <RotateCw size={16} />
          </button>
        </div>

        <div className="mt-6 flex gap-1.5 flex-wrap justify-center max-w-sm">
          {CARDS.map((c, i) => (
            <AnimatePresence key={c.letter} initial={false}>
              <motion.button
                onClick={() => {
                  setFlipped(false);
                  setIndex(i);
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-8 h-8 rounded-lg text-xs font-semibold transition-colors ${
                  i === index
                    ? "bg-teal-500 text-white"
                    : "bg-ink-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400 hover:bg-ink-200 dark:hover:bg-ink-700"
                }`}
              >
                {c.letter}
              </motion.button>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </LessonLayout>
  );
}
