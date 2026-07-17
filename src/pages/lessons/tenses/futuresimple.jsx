import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Sunrise,
  BookOpen,
  Utensils,
  Moon,
  CheckCircle,
  XCircle,
} from "lucide-react";

const plans = [
  {
    time: "Tomorrow 6:00 AM",
    icon: Sunrise,
    sentence: "I will wake up at 6:00 AM."
  },
  {
    time: "Tomorrow 7:00 AM",
    icon: Utensils,
    sentence: "I will eat breakfast."
  },
  {
    time: "Tomorrow 9:00 AM",
    icon: BookOpen,
    sentence: "I will go to school."
  },
  {
    time: "Tomorrow 9:00 PM",
    icon: Moon,
    sentence: "I will go to bed."
  }
];

const quiz = [
  {
    question: "Which sentence talks about the future?",
    options: [
      "I will play football tomorrow.",
      "I play football every day.",
      "I played football yesterday."
    ],
    answer: 0
  },
  {
    question: "Which sentence is in the Future Simple Tense?",
    options: [
      "She will visit her grandmother.",
      "She visits her grandmother.",
      "She visited her grandmother."
    ],
    answer: 0
  },
  {
    question: "Which sentence tells about tomorrow?",
    options: [
      "They will travel tomorrow.",
      "They travel every week.",
      "They travelled last week."
    ],
    answer: 0
  }
];

export default function FutureSimple() {

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <Rocket
            size={55}
            className="mx-auto text-indigo-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Future Simple Tense
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            We use the <b>Future Simple Tense</b> to talk about
            <span className="text-indigo-300 font-semibold"> future plans</span>,
            <span className="text-indigo-300 font-semibold"> predictions</span>,
            and things that
            <span className="text-indigo-300 font-semibold"> will happen</span>.
          </p>

        </motion.div>

        {/* Tomorrow's Plan */}

        <h2 className="text-3xl font-bold mb-5">
          My Plans for Tomorrow
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-10">

          {plans.map((item, i) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/10 rounded-2xl p-6 flex items-center gap-5"
              >

                <div className="bg-indigo-600 p-4 rounded-xl">
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="font-bold text-indigo-300">
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
            🎯 Choose the Future Tense Sentence
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
              Correct! This sentence talks about the future.
            </motion.div>

          )}

          {result === "wrong" && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 bg-red-500/20 border border-red-500 rounded-xl p-4 flex items-center gap-3"
            >
              <XCircle />
              Try again.
            </motion.div>

          )}

          <button
            onClick={next}
            className="mt-6 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl"
          >
            Next Question
          </button>

        </div>

        {/* Remember */}

        <div className="mt-10 bg-indigo-500/10 border border-indigo-500 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Remember
          </h2>

          <ul className="space-y-2 text-slate-300 list-disc ml-6">
            <li>Use Future Simple for future plans.</li>
            <li>Use <b>will + base verb</b>.</li>
            <li>Common time words: tomorrow, next week, next month, later, soon.</li>
          </ul>

          <div className="mt-5 bg-slate-800 rounded-xl p-4">
            ✅ I will play football tomorrow.<br />
            ✅ She will visit her grandmother.<br />
            ✅ We will watch a movie next week.
          </div>

        </div>

      </div>
    </div>
  );
}