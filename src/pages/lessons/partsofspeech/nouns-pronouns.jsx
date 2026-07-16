import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, User, Users, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const lessons = [
  {
    title: "Noun",
    icon: User,
    color: "bg-blue-500",
    definition:
      "A noun is the name of a person, place, animal, or thing.",
    example: "The cat is sleeping.",
    answer: "cat",
    explanation: "Cat is a noun because it names an animal."
  },
  {
    title: "Pronoun",
    icon: Users,
    color: "bg-green-500",
    definition:
      "A pronoun replaces a noun to avoid repeating it.",
    before: "Ravi is playing. Ravi is happy.",
    after: "Ravi is playing. He is happy.",
    example: "Ravi is playing. He is happy.",
    answer: "He",
    explanation:
      "'He' replaces the noun 'Ravi', so it is a pronoun."
  }
];

export default function NounPronounIntro() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");

  const lesson = lessons[index];
const navigate = useNavigate();

  function check(word) {
    const clean = word.replace(/[.,!?]/g, "");

    if (clean === lesson.answer) {
      setMessage("✅ " + lesson.explanation);
    } else {
      setMessage("❌ Try Again");
    }
  }

  const Icon = lesson.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white p-8">
      <div className="max-w-5xl mx-auto">
 <button
    onClick={() => navigate(-1)}
    className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
  >
    <ArrowLeft size={18} />
    Back
  </button>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <BookOpen className="mx-auto text-cyan-400 mb-4" size={52} />

          <h1 className="text-5xl font-bold">
            Nouns & Pronouns
          </h1>

          <p className="text-slate-300 mt-3">
            Learn how pronouns replace nouns.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="grid md:grid-cols-2 gap-5 mb-8">

          {lessons.map((item, i) => {
            const I = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                onClick={() => {
                  setIndex(i);
                  setMessage("");
                }}
                className={`cursor-pointer rounded-2xl p-6 transition ${
                  index === i
                    ? item.color
                    : "bg-white/10"
                }`}
              >
                <I size={42} className="mb-3" />

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>
              </motion.div>
            );
          })}

        </div>

        {/* Lesson */}

        <AnimatePresence mode="wait">

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -70 }}
            className="bg-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-4 mb-5">
              <div className={`${lesson.color} p-3 rounded-xl`}>
                <Icon size={35} />
              </div>

              <h2 className="text-3xl font-bold">
                {lesson.title}
              </h2>
            </div>

            <p className="text-lg text-slate-300 mb-6">
              {lesson.definition}
            </p>

            {lesson.before && (

              <div className="mb-8 space-y-4">

                <div className="bg-red-500/20 border border-red-400 rounded-xl p-4">
                  <h3 className="font-bold mb-2">
                    Without Pronoun
                  </h3>

                  {lesson.before}
                </div>

                <div className="bg-green-500/20 border border-green-400 rounded-xl p-4">
                  <h3 className="font-bold mb-2">
                    With Pronoun
                  </h3>

                  {lesson.after}
                </div>

              </div>

            )}

            {/* Interactive */}

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="font-semibold mb-4">
                Click the highlighted part:
              </h3>

              <div className="flex flex-wrap gap-3">

                {lesson.example.split(" ").map((word, i) => (

                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    onClick={() => check(word)}
                    className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500"
                  >
                    {word}
                  </motion.button>

                ))}

              </div>

            </div>

            {message && (

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 rounded-xl bg-green-500/20 border border-green-400 p-4 flex items-center gap-3"
              >
                <CheckCircle />

                {message}

              </motion.div>

            )}

          </motion.div>

        </AnimatePresence>

        {/* Navigation */}

        <div className="flex justify-between mt-8">

          <button
            disabled={index === 0}
            onClick={() => {
              setIndex(index - 1);
              setMessage("");
            }}
            className="px-6 py-3 rounded-xl bg-slate-700 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            disabled={index === lessons.length - 1}
            onClick={() => {
              setIndex(index + 1);
              setMessage("");
            }}
            className="px-6 py-3 rounded-xl bg-cyan-600 disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
}