import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  History,
  Sunrise,
  Coffee,
  School,
  Moon,
  CheckCircle,
  XCircle,
} from "lucide-react";

const routine = [
  {
    time: "Yesterday 6:00 AM",
    icon: Sunrise,
    sentence: "I woke up at 6:00 AM."
  },
  {
    time: "Yesterday 7:00 AM",
    icon: Coffee,
    sentence: "I ate breakfast."
  },
  {
    time: "Yesterday 9:00 AM",
    icon: School,
    sentence: "I went to school."
  },
  {
    time: "Yesterday 9:00 PM",
    icon: Moon,
    sentence: "I went to bed."
  }
];

const quiz = [
  {
    question: "Which sentence talks about something that already happened?",
    options: [
      "I played football yesterday.",
      "I play football every day.",
      "I will play football tomorrow."
    ],
    answer: 0
  },
  {
    question: "Which sentence is in the Past Simple Tense?",
    options: [
      "She drank milk.",
      "She drinks milk.",
      "She will drink milk."
    ],
    answer: 0
  },
  {
    question: "Which sentence tells about yesterday?",
    options: [
      "They visited the zoo yesterday.",
      "They visit the zoo every Sunday.",
      "They will visit the zoo next week."
    ],
    answer: 0
  }
];

export default function PastSimple() {

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
    <div className="min-h-screen bg-gradient-to-br from-orange-950 via-slate-900 to-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <History
            size={55}
            className="mx-auto text-orange-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Past Simple Tense
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            We use the <b>Past Simple Tense</b> to talk about actions
            that <span className="text-orange-300 font-semibold">already happened</span>.
          </p>

        </motion.div>

        {/* Yesterday Timeline */}

        <h2 className="text-3xl font-bold mb-5">
          What I Did Yesterday
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

                <div className="bg-orange-500 p-4 rounded-xl">
                  <Icon size={30} />
                </div>

                <div>

                  <h3 className="font-bold text-orange-300">
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
            🎯 Choose the Past Tense Sentence
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
              Correct! The action happened in the past.
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
            className="mt-6 bg-orange-500 hover:bg-orange-400 px-6 py-3 rounded-xl"
          >
            Next Question
          </button>

        </div>

        {/* Remember */}

        <div className="mt-10 bg-orange-500/10 border border-orange-500 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Remember
          </h2>

          <ul className="space-y-2 text-slate-300 list-disc ml-6">
            <li>Use Past Simple for completed actions.</li>
            <li>Use words like yesterday, last week, last year.</li>
            <li>Many verbs change to their past form.</li>
          </ul>

          <div className="mt-5 bg-slate-800 rounded-xl p-4">
            ✅ I played football yesterday.<br />
            ✅ She went to school.<br />
            ✅ We watched a movie last night.
          </div>

        </div>

      </div>
    </div>
  );
}