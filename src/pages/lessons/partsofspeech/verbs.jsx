import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Play,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const examples = [
  {
    sentence: "The boy runs fast.",
    answer: "runs",
    explanation: "Runs is the verb because it shows the action."
  },
  {
    sentence: "Birds fly in the sky.",
    answer: "fly",
    explanation: "Fly tells us what the birds do."
  },
  {
    sentence: "The baby sleeps peacefully.",
    answer: "sleeps",
    explanation: "Sleeps is an action performed by the baby."
  },
  {
    sentence: "She writes a letter.",
    answer: "writes",
    explanation: "Writes tells us the action."
  },
  {
    sentence: "The dog barked loudly.",
    answer: "barked",
    explanation: "Barked is the action."
  }
];

export default function Verbs() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [correct, setCorrect] = useState(0);
const [verbType, setVerbType] = useState("action");
  const current = examples[index];
const navigate = useNavigate();

  function check(word) {
    const clean = word.replace(/[.,!?]/g, "");

    if (clean === current.answer) {
      setMessage("correct");
      setCorrect(correct + 1);
    } else {
      setMessage("wrong");
    }
  }

  function next() {
    setMessage("");

    if (index < examples.length - 1)
      setIndex(index + 1);
    else
      setIndex(0);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black text-white p-8">
         <button
    onClick={() => navigate(-1)}
    className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
  >
    <ArrowLeft size={18} />
    Back
  </button>
<div className="flex justify-center gap-4 mb-10">

  <button
    onClick={() => setVerbType("action")}
    className={`px-6 py-3 rounded-xl font-bold transition ${
      verbType === "action"
        ? "bg-cyan-600"
        : "bg-white/10 hover:bg-white/20"
    }`}
  >
    🏃 Action Verbs
  </button>


  <button
    onClick={() => setVerbType("be")}
    className={`px-6 py-3 rounded-xl font-bold transition ${
      verbType === "be"
        ? "bg-purple-600"
        : "bg-white/10 hover:bg-white/20"
    }`}
  >
    🔵 Be Verbs
  </button>

</div>
{
verbType === "action" && (
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-10"
        >
          <Activity
            size={55}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Action Verbs
          </h1>

          <p className="text-slate-300 mt-3 text-lg">
            Verbs are <b>action words</b>. They tell us what someone
            or something <b>does</b>.
          </p>
        </motion.div>
{/* Verb Type Tabs */}


        {/* Examples */}

        <div className="grid md:grid-cols-4 gap-5 mb-10">

          {[
            "Run",
            "Jump",
            "Eat",
            "Write"
          ].map((item) => (

            <motion.div
              key={item}
              whileHover={{
                scale: 1.05,
                rotate: 1
              }}
              className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-lg"
            >
              <Play
                className="mx-auto mb-3 text-cyan-400"
              />

              <h3 className="text-2xl font-bold">
                {item}
              </h3>

              <p className="text-slate-300 mt-2">
                Action Verb
              </p>

            </motion.div>

          ))}

        </div>

        {/* Interactive */}

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 70
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -70
            }}
            className="bg-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >

            <h2 className="text-3xl font-bold mb-5">
              🎯 Find the Verb
            </h2>

            <p className="text-slate-300 mb-5">
              Click the action word.
            </p>

            <div className="flex flex-wrap gap-3">

              {current.sentence.split(" ").map((word, i) => (

                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: .9 }}
                  onClick={() => check(word)}
                  className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg"
                >
                  {word}
                </motion.button>

              ))}

            </div>

            {message === "correct" && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 bg-green-500/20 border border-green-500 rounded-xl p-5 flex gap-3 items-center"
              >
                <CheckCircle />

                <div>
                  <b>Correct!</b>

                  <p>{current.explanation}</p>
                </div>

              </motion.div>

            )}

            {message === "wrong" && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 bg-red-500/20 border border-red-500 rounded-xl p-5 flex gap-3 items-center"
              >
                <XCircle />

                Try again! Remember, a verb shows an action.
              </motion.div>

            )}

          </motion.div>

        </AnimatePresence>

        {/* Footer */}

        <div className="flex justify-between items-center mt-8">

          <div className="text-xl">
            ⭐ Score : {correct}
          </div>

          <button
            onClick={next}
            className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl flex items-center gap-2"
          >
            Next Example

            <ArrowRight size={18} />

          </button>

        </div>

        {/* Summary */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-cyan-500/10 border border-cyan-500 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold mb-3">
            Remember
          </h2>

          <ul className="space-y-2 text-slate-300 list-disc ml-5">
            <li>A verb tells us what someone or something does.</li>
            <li>Most sentences have at least one verb.</li>
            <li>Examples: run, jump, eat, sing, write, sleep.</li>
          </ul>

        </motion.div>

      </div>
)}
{/* Be Verbs */}
{
verbType === "be" && (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="mt-12"
>
  <h2 className="text-3xl font-bold text-center mb-4">
    Be Verbs (State of Being)
  </h2>

  <p className="text-center text-slate-300 max-w-3xl mx-auto mb-8">
    Not all verbs show an action. Some verbs simply tell us what a person or
    thing <span className="font-bold text-cyan-400">is</span> or
    <span className="font-bold text-cyan-400"> was</span>. These are called
    <span className="font-bold text-cyan-400"> Be Verbs</span>.
  </p>

  {/* Be Verb Cards */}

  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 mb-10">
    {["am", "is", "are", "was", "were", "be", "being", "been"].map((verb) => (
      <motion.div
        key={verb}
        whileHover={{ scale: 1.08 }}
        className="bg-purple-600 rounded-xl p-4 text-center font-bold text-xl shadow-lg"
      >
        {verb}
      </motion.div>
    ))}
  </div>

  {/* Examples */}

  <div className="grid md:grid-cols-2 gap-6">

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-2xl p-6 border border-purple-500"
    >
      <h3 className="text-xl font-bold mb-3 text-purple-300">
        Example 1
      </h3>

      <p className="text-2xl">
        She <span className="text-yellow-300 font-bold">is</span> a doctor.
      </p>

      <p className="mt-4 text-slate-300">
        <b>is</b> does not show an action. It tells us what she is.
      </p>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 rounded-2xl p-6 border border-purple-500"
    >
      <h3 className="text-xl font-bold mb-3 text-purple-300">
        Example 2
      </h3>

      <p className="text-2xl">
        They <span className="text-yellow-300 font-bold">were</span> happy.
      </p>

      <p className="mt-4 text-slate-300">
        <b>were</b> tells us their state in the past. It is a Be Verb.
      </p>
    </motion.div>

  </div>

  {/* Remember */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="mt-8 bg-purple-500/20 border border-purple-500 rounded-2xl p-6"
  >
    <h3 className="text-2xl font-bold mb-3">
      Remember
    </h3>

    <p className="text-slate-300">
      Verbs are of two common types:
    </p>

    <ul className="list-disc ml-6 mt-3 space-y-2 text-slate-300">
      <li>
        <span className="font-bold text-cyan-300">Action Verbs</span> →
        run, jump, eat, write
      </li>

      <li>
        <span className="font-bold text-purple-300">Be Verbs</span> →
        am, is, are, was, were, be, being, been
      </li>
    </ul>
  </motion.div>

</motion.div>
)}
    </div>
  );
}