import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Sunrise,
  Coffee,
  School,
  Moon,
  CheckCircle,
  XCircle,
} from "lucide-react";

const routine = [
  {
    time: "6:00 AM",
    icon: Sunrise,
    sentence: "I wake up at 6:00 AM."
  },
  {
    time: "7:00 AM",
    icon: Coffee,
    sentence: "I eat breakfast."
  },
  {
    time: "9:00 AM",
    icon: School,
    sentence: "I go to school."
  },
  {
    time: "9:00 PM",
    icon: Moon,
    sentence: "I go to bed."
  }
];

const quiz = [
  {
    question: "Which sentence talks about a daily routine?",
    options: [
      "I eat breakfast every morning.",
      "I ate breakfast yesterday.",
      "I will eat breakfast tomorrow."
    ],
    answer: 0
  },
  {
    question: "Which sentence is in the Present Simple Tense?",
    options: [
      "She played tennis.",
        "She plays tennis.",
      "She will play tennis."
    ],
    answer: 1
  },
  {
    question: "Which sentence shows a habit?",
    options: [
     
      "They went to school yesterday.",
       "They go to school every day.",
      "They will go tomorrow."
    ],
    answer: 1
  }
];

export default function PresentSimple() {

  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");

  function check(answer) {
    if (answer === quiz[index].answer)
      setResult("correct");
    else
      setResult("wrong");
  }

  function next() {
    setResult("");
    setIndex((index + 1) % quiz.length);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <Clock3
            size={55}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Present Simple Tense
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            We use the <b>Present Simple Tense</b> to talk about our
            <span className="text-cyan-300 font-semibold"> daily routines</span>
            {" "}and{" "}
            <span className="text-cyan-300 font-semibold">habits</span>.
          </p>

        </motion.div>

        {/* Routine */}

        <h2 className="text-3xl font-bold mb-5">
          My Daily Routine
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          {routine.map((item, i) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 rounded-2xl p-6 flex items-center gap-5"
              >

                <div className="bg-cyan-600 p-4 rounded-xl">
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="font-bold text-cyan-300">
                    {item.time}
                  </h3>

                  <p className="text-lg">
                    {item.sentence}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Quiz */}

        <div className="bg-white/10 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-5">
            🎯 Choose the Correct Sentence
          </h2>

          <p className="text-xl mb-6">
            {quiz[index].question}
          </p>

          <div className="space-y-3">

            {quiz[index].options.map((item, i) => (

              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => check(i)}
                className="w-full bg-slate-700 hover:bg-slate-600 p-4 rounded-xl text-left"
              >
                {item}
              </motion.button>

            ))}

          </div>

          {result === "correct" && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-green-500/20 border border-green-500 rounded-xl p-4 flex items-center gap-3"
            >
              <CheckCircle />
              <span>
                Correct! Present Simple is used for routines and habits.
              </span>
            </motion.div>

          )}

          {result === "wrong" && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-red-500/20 border border-red-500 rounded-xl p-4 flex items-center gap-3"
            >
              <XCircle />
              <span>Try again.</span>
            </motion.div>

          )}

          <button
            onClick={next}
            className="mt-6 bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl"
          >
            Next Question
          </button>

        </div>

        {/* Remember */}

        <div className="mt-10 bg-cyan-500/10 border border-cyan-500 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Remember
          </h2>

          <ul className="space-y-2 text-slate-300 list-disc ml-6">
            <li>Use Present Simple for daily routines.</li>
            <li>Use it for habits.</li>
            <li>Use it for facts and general truths.</li>
          </ul>

          <div className="mt-5 bg-slate-800 rounded-xl p-4">
            ✅ I wake up early.<br />
            ✅ She goes to school.<br />
            ✅ They play football every day.
          </div>

        </div>

      </div>

    </div>
  );
}