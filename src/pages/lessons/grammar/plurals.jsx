import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function PluralCountableNouns() {

  const examples = [
    { singular: "Book", plural: "Books" },
    { singular: "Apple", plural: "Apples" },
    { singular: "Bus", plural: "Buses" },
    { singular: "Baby", plural: "Babies" },
    { singular: "Child", plural: "Children" },
  ];

  const quiz = [
    {
      question: "Milk is...",
      options: ["Countable", "Uncountable"],
      answer: "Uncountable",
      explanation: "Milk cannot be counted directly."
    },
    {
      question: "Chair is...",
      options: ["Countable", "Uncountable"],
      answer: "Countable",
      explanation: "You can count chairs."
    },
    {
      question: "Choose the plural of 'Baby'.",
      options: ["Babys", "Babies"],
      answer: "Babies",
      explanation: "Words ending in consonant + y become ies."
    },
    {
      question: "Choose the plural of 'Box'.",
      options: ["Boxes", "Boxs"],
      answer: "Boxes",
      explanation: "Words ending in x take es."
    },
    {
      question: "Rice is...",
      options: ["Countable", "Uncountable"],
      answer: "Uncountable",
      explanation: "Rice is treated as an uncountable noun."
    }
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);

  const q = quiz[current];

  function choose(option) {

    if (show) return;

    setSelected(option);
    setShow(true);

    if (option === q.answer) {
      setScore(score + 1);
    }
  }

  function next() {

    setSelected("");
    setShow(false);

    if (current < quiz.length - 1) {
      setCurrent(current + 1);
    }
  }

  return (

    <div className="min-h-screen bg-slate-900 text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <Boxes
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Plural & Countable Nouns
          </h1>

          <p className="text-slate-300 mt-3">
            Learn singular, plural, countable and uncountable nouns.
          </p>

        </div>

        {/* Countable */}

        <div className="bg-blue-500/20 rounded-3xl p-6 mb-6">

          <h2 className="text-3xl font-bold mb-3">
            Countable Nouns
          </h2>

          <p>
            You can count them.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">

            <div className="bg-slate-800 p-3 rounded-xl">
              🍎 1 Apple
            </div>

            <div className="bg-slate-800 p-3 rounded-xl">
              📚 2 Books
            </div>

            <div className="bg-slate-800 p-3 rounded-xl">
              🪑 3 Chairs
            </div>

          </div>

        </div>

        {/* Uncountable */}

        <div className="bg-green-500/20 rounded-3xl p-6 mb-6">

          <h2 className="text-3xl font-bold mb-3">
            Uncountable Nouns
          </h2>

          <p>
            We cannot count them directly.
          </p>

          <div className="mt-4 flex gap-3 flex-wrap">

            <div className="bg-slate-800 p-3 rounded-xl">
              💧 Water
            </div>

            <div className="bg-slate-800 p-3 rounded-xl">
              🥛 Milk
            </div>

            <div className="bg-slate-800 p-3 rounded-xl">
              🍚 Rice
            </div>

          </div>

        </div>

        {/* Plural Examples */}

        <div className="bg-purple-500/20 rounded-3xl p-6 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            Singular → Plural
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            {examples.map((item) => (

              <div
                key={item.singular}
                className="bg-slate-800 rounded-xl p-4 flex justify-between"
              >

                <span>{item.singular}</span>

                <span>➡</span>

                <span className="font-bold text-cyan-400">
                  {item.plural}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Quiz */}

        <motion.div

          key={current}

          initial={{ opacity: 0, x: 40 }}

          animate={{ opacity: 1, x: 0 }}

          className="bg-white/10 rounded-3xl p-8"

        >

          <div className="flex justify-between mb-5">

            <div>
              Question {current + 1} / {quiz.length}
            </div>

            <div>
              Score : {score}
            </div>

          </div>

          <h2 className="text-3xl mb-6">

            {q.question}

          </h2>

          <div className="flex gap-4 flex-wrap">

            {q.options.map(option => (

              <button

                key={option}

                onClick={() => choose(option)}

                disabled={show}

                className={`
                px-6
                py-3
                rounded-xl

                ${
                  show

                    ? option === q.answer

                      ? "bg-green-600"

                      : option === selected

                      ? "bg-red-600"

                      : "bg-slate-700"

                    : "bg-slate-700 hover:bg-cyan-600"
                }

                `}

              >

                {option}

              </button>

            ))}

          </div>

          {show && (

            <div className="mt-6">

              {selected === q.answer ?

                <div className="flex items-center gap-2 text-green-400">

                  <CheckCircle />

                  Correct!

                </div>

                :

                <div className="flex items-center gap-2 text-red-400">

                  <XCircle />

                  Wrong!

                </div>

              }

              <div className="mt-4 bg-cyan-500/10 border border-cyan-500 rounded-xl p-4">

                {q.explanation}

              </div>

              {current < quiz.length - 1 && (

                <button

                  onClick={next}

                  className="mt-5 bg-cyan-600 px-6 py-3 rounded-xl"

                >

                  Next →

                </button>

              )}

            </div>

          )}

        </motion.div>

      </div>

    </div>

  );

}