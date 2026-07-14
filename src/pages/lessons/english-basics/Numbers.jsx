import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw } from "lucide-react";
import LessonLayout from "../LessonLayout";

const ones = [
  { n: 1, word: "One" },
  { n: 2, word: "Two" },
  { n: 3, word: "Three" },
  { n: 4, word: "Four" },
  { n: 5, word: "Five" },
  { n: 6, word: "Six" },
  { n: 7, word: "Seven" },
  { n: 8, word: "Eight" },
  { n: 9, word: "Nine" },
];

const teens = [
  { n: 10, word: "Ten" },
  { n: 11, word: "Eleven" },
  { n: 12, word: "Twelve" },
  { n: 13, word: "Thirteen" },
  { n: 14, word: "Fourteen" },
  { n: 15, word: "Fifteen" },
  { n: 16, word: "Sixteen" },
  { n: 17, word: "Seventeen" },
  { n: 18, word: "Eighteen" },
  { n: 19, word: "Nineteen" },
];

const tens = [
  { n: 20, word: "Twenty" },
  { n: 30, word: "Thirty" },
  { n: 40, word: "Forty" },
  { n: 50, word: "Fifty" },
  { n: 60, word: "Sixty" },
  { n: 70, word: "Seventy" },
  { n: 80, word: "Eighty" },
  { n: 90, word: "Ninety" },
];

export default function NumbersLesson() {
  const [tensValue, setTensValue] = useState(20);
  const [onesValue, setOnesValue] = useState(1);

  const tensWord = tens.find((t) => t.n === tensValue)?.word || "";
  const onesWord = ones.find((o) => o.n === onesValue)?.word || "";
const [selected, setSelected] = useState(null);
  return (
    <LessonLayout>
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-bold text-center">
          Numbers 1 – 100
        </h1>

        <div className="rounded-2xl p-6 bg-teal-50 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-3">Step 1 : Learn 1–9</h2>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
  {ones.map((o) => (
    <motion.button
      key={o.n}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(o.n)}
      className={`rounded-xl p-4 text-center border transition-all ${
        selected === o.n
          ? "bg-teal-500 text-white border-teal-500 shadow-lg"
          : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
      }`}
    >
      <div className="text-2xl font-bold">{o.n}</div>
      <div>{o.word}</div>
    </motion.button>
  ))}
</div>
        </div>

        <div className="rounded-2xl p-6 bg-blue-50 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-3">
            Step 2 : Learn 10–19
          </h2>

         <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
  {teens.map((o) => (
    <motion.button
      key={o.n}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(o.n)}
      className={`rounded-xl p-4 text-center border transition-all ${
        selected === o.n
          ? "bg-blue-500 text-white border-blue-500 shadow-lg"
          : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
      }`}
    >
      <div className="text-2xl font-bold">{o.n}</div>
      <div>{o.word}</div>
    </motion.button>
  ))}
</div>
        </div>

        <div className="rounded-2xl p-6 bg-purple-50 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold mb-4">
            Step 3 : Learn the Tens
          </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {tens.map((t) => (
    <motion.button
      key={t.n}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(t.n)}
      className={`rounded-xl p-4 text-center border transition-all ${
        selected === t.n
          ? "bg-purple-500 text-white border-purple-500 shadow-lg"
          : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
      }`}
    >
      <div className="text-2xl font-bold">{t.n}</div>
      <div>{t.word}</div>
    </motion.button>
  ))}
</div>
        </div>

        <motion.div
          layout
          className="rounded-3xl bg-gradient-to-r from-teal-500 to-cyan-500 text-white p-8"
        >
          <h2 className="text-3xl font-bold mb-6">
            Build Any Number
          </h2>

          <div className="flex flex-wrap gap-6">

            <div>
              <p className="mb-2">Choose Tens</p>

              <select
                value={tensValue}
                onChange={(e) => setTensValue(Number(e.target.value))}
                className="text-black rounded-lg px-3 py-2"
              >
                {tens.map((t) => (
                  <option key={t.n} value={t.n}>
                    {t.n}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p className="mb-2">Choose Ones</p>

              <select
                value={onesValue}
                onChange={(e) => setOnesValue(Number(e.target.value))}
                className="text-black rounded-lg px-3 py-2"
              >
                {ones.map((o) => (
                  <option key={o.n} value={o.n}>
                    {o.n}
                  </option>
                ))}
              </select>
            </div>

          </div>

          <div className="mt-8 text-center">

            <div className="text-6xl font-bold">
              {tensValue + onesValue}
            </div>

            <ArrowRight className="mx-auto my-4" size={40} />

            <div className="text-3xl">
              {tensWord} {onesWord}
            </div>

          </div>
        </motion.div>

       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  {[
    ["100", "One Hundred"],
    ["101", "One Hundred One"],
    ["102", "One Hundred Two"],
    ["110", "One Hundred Ten"],
    ["125", "One Hundred Twenty Five"],
    ["250", "Two Hundred Fifty"],
    ["500", "Five Hundred"],
    ["999", "Nine Hundred Ninety Nine"],
  ].map(([num, text]) => (
    <motion.button
      key={num}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(Number(num))}
      className={`rounded-xl p-4 text-left border transition-all ${
        selected === Number(num)
          ? "bg-amber-500 text-white border-amber-500 shadow-lg"
          : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
      }`}
    >
      <div className="font-bold">{num}</div>
      <div className="text-sm">{text}</div>
    </motion.button>
  ))}
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
  {[
    ["1000", "One Thousand"],
    ["1001", "One Thousand One"],
    ["1050", "One Thousand Fifty"],
    ["1100", "One Thousand One Hundred"],
    ["2500", "Two Thousand Five Hundred"],
    ["9999", "Nine Thousand Nine Hundred Ninety Nine"],
  ].map(([num, text]) => (
    <motion.button
      key={num}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setSelected(Number(num))}
      className={`rounded-xl p-4 text-left border transition-all ${
        selected === Number(num)
          ? "bg-green-500 text-white border-green-500 shadow-lg"
          : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
      }`}
    >
      <div className="font-bold">{num}</div>
      <div className="text-sm">{text}</div>
    </motion.button>
  ))}
</div>
      </div>
    </LessonLayout>
  );
}