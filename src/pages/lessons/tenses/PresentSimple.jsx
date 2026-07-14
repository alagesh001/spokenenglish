import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import LessonLayout from "../LessonLayout";

const QUESTIONS = [
  { sentence: "She ___ (work) at a hospital.", answer: "works", options: ["work", "works", "working"] },
  { sentence: "They ___ (not / like) spicy food.", answer: "don't like", options: ["doesn't like", "don't like", "not like"] },
  { sentence: "The sun ___ (rise) in the east.", answer: "rises", options: ["rise", "rises", "rising"] },
  { sentence: "I ___ (study) English every morning.", answer: "study", options: ["study", "studies", "studying"] },
  { sentence: "He ___ (not / drink) coffee at night.", answer: "doesn't drink", options: ["don't drink", "doesn't drink", "not drinks"] },
];

export default function PresentSimple() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = QUESTIONS[step];
  const isCorrect = selected === question?.answer;

  const choose = (option) => {
    if (selected) return; // lock after first pick
    setSelected(option);
    if (option === question.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (step + 1 < QUESTIONS.length) {
      setStep((s) => s + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setStep(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    return (
      <LessonLayout>
        <div className="p-8 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft text-center">
          <span className="font-display font-extrabold text-4xl text-teal-600 dark:text-teal-300">
            {score}/{QUESTIONS.length}
          </span>
          <p className="mt-2 text-ink-500 dark:text-ink-400">
            {score === QUESTIONS.length
              ? "Perfect score — present simple is looking solid!"
              : "Nice work. Try again to lock these in."}
          </p>
          <button
            onClick={restart}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 dark:bg-teal-500 text-white text-sm font-medium hover:-translate-y-0.5 transition-transform"
          >
            <RotateCcw size={15} /> Try again
          </button>
        </div>
      </LessonLayout>
    );
  }

  return (
    <LessonLayout>
      <div className="p-6 rounded-2xl bg-white dark:bg-ink-900 border border-ink-100 dark:border-ink-800 shadow-soft">
        <div className="flex items-center justify-between text-xs text-ink-400 dark:text-ink-500 mb-4">
          <span>Question {step + 1} of {QUESTIONS.length}</span>
          <span>Score: {score}</span>
        </div>

        <div className="h-1.5 rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden mb-6">
          <motion.div
            initial={false}
            animate={{ width: `${(step / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
            className="h-full rounded-full bg-gradient-to-r from-teal-500 to-coral-400"
          />
        </div>

        <motion.p
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-semibold text-lg text-ink-900 dark:text-white"
        >
          {question.sentence}
        </motion.p>

        <div className="mt-5 flex flex-col gap-2.5">
          {question.options.map((option) => {
            const chosen = selected === option;
            const correct = option === question.answer;
            let stateClasses =
              "border-ink-200 dark:border-ink-700 hover:border-teal-300 dark:hover:border-teal-600";
            if (selected) {
              if (correct) {
                stateClasses = "border-teal-400 bg-teal-50 dark:bg-teal-900/30";
              } else if (chosen) {
                stateClasses = "border-coral-400 bg-coral-50 dark:bg-coral-900/20";
              } else {
                stateClasses = "border-ink-100 dark:border-ink-800 opacity-60";
              }
            }
            return (
              <button
                key={option}
                onClick={() => choose(option)}
                disabled={Boolean(selected)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left text-sm font-medium text-ink-800 dark:text-ink-100 transition-colors ${stateClasses}`}
              >
                {option}
                {selected && correct && <CheckCircle2 size={17} className="text-teal-600 dark:text-teal-300" />}
                {selected && chosen && !correct && <XCircle size={17} className="text-coral-600 dark:text-coral-300" />}
              </button>
            );
          })}
        </div>

        {selected && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center justify-between">
            <span className={`text-sm font-medium ${isCorrect ? "text-teal-600 dark:text-teal-300" : "text-coral-600 dark:text-coral-300"}`}>
              {isCorrect ? "Correct!" : `Not quite — the answer is "${question.answer}".`}
            </span>
            <button
              onClick={next}
              className="px-5 py-2 rounded-full bg-ink-900 dark:bg-teal-500 text-white text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              {step + 1 < QUESTIONS.length ? "Next" : "See results"}
            </button>
          </motion.div>
        )}
      </div>
    </LessonLayout>
  );
}
