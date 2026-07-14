import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Square, Shuffle, Mic } from "lucide-react";
import LessonLayout from "../LessonLayout";
import Waveform from "../../../components/Waveform";

const PROMPTS = [
  "Describe your morning routine, from waking up to leaving the house.",
  "Talk about a place you'd love to visit and why.",
  "Explain how to make your favourite meal, step by step.",
  "Describe your job or studies to someone who knows nothing about it.",
  "Talk about a skill you'd like to learn this year, and why.",
];

const DURATION = 60; // seconds

export default function SelfRecording() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const start = () => {
    setSecondsLeft(DURATION);
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const shuffle = () => {
    stop();
    setSecondsLeft(DURATION);
    setPromptIndex((i) => (i + 1) % PROMPTS.length);
  };

  const progress = ((DURATION - secondsLeft) / DURATION) * 100;
  const finished = !running && secondsLeft === 0;

  return (
    <LessonLayout>
      <div className="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
            Speaking prompt
          </span>
          <button
            onClick={shuffle}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 dark:text-teal-300 hover:gap-2 transition-all"
          >
            <Shuffle size={13} /> New prompt
          </button>
        </div>

        <motion.p
          key={promptIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 font-display font-semibold text-lg text-ink-900 dark:text-white leading-snug"
        >
          {PROMPTS[promptIndex]}
        </motion.p>

        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-40 h-40">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="44" fill="none" strokeWidth="8" className="stroke-ink-100 dark:stroke-ink-800" />
              <motion.circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                strokeWidth="8"
                strokeLinecap="round"
                className="stroke-teal-500"
                style={{ strokeDasharray: 2 * Math.PI * 44 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 44 * (1 - progress / 100) }}
                transition={{ duration: 0.4, ease: "linear" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {running ? (
                <span className="text-teal-500"><Waveform className="h-6" /></span>
              ) : (
                <Mic size={22} className={finished ? "text-teal-500" : "text-ink-300 dark:text-ink-600"} />
              )}
              <span className="mt-1 font-display font-bold text-2xl text-ink-900 dark:text-white">
                {secondsLeft}s
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            {!running ? (
              <button
                onClick={start}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-500 text-white font-medium text-sm shadow-glow hover:bg-teal-600 transition-colors"
              >
                <Play size={15} /> {finished ? "Record again" : "Start speaking"}
              </button>
            ) : (
              <button
                onClick={stop}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-coral-500 text-white font-medium text-sm hover:bg-coral-600 transition-colors"
              >
                <Square size={14} /> Stop
              </button>
            )}
          </div>

          {finished && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 text-sm text-teal-600 dark:text-teal-300 font-medium"
            >
              Nice work! Notice one thing you'd improve, then try a new prompt.
            </motion.p>
          )}
        </div>

        <p className="mt-6 text-xs text-ink-400 dark:text-ink-500 text-center">
          This is a timing tool for self-practice — pair it with your phone's voice recorder to
          actually capture and review your answer.
        </p>
      </div>
    </LessonLayout>
  );
}
