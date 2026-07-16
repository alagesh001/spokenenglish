import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  BookOpen,
  User,
  Activity,
  Palette,
  Zap,
  CheckCircle
} from "lucide-react";

const lessons = [
  {
    title: "Noun",
    icon: User,
    color: "bg-blue-500",
    text: "A noun is the name of a person, place, animal, or thing.",
    sentence: "Books are useful.",
    answer: "Books",
    explanation:
      "Book is a noun because it is a thing."
  },
  {
    title: "Verb",
    icon: Activity,
    color: "bg-green-500",
    text: "A verb is an action word.",
    sentence: "Ravi plays with a dog.",
    answer: "plays",
    explanation:
      "Plays is a verb because it shows an action."
  },
  {
    title: "Adjective",
    icon: Palette,
    color: "bg-orange-500",
    text: "An adjective describes a noun.",
    sentence: "The red car is fast.",
    answer: "red",
    explanation:
      "Red describes the car."
  },
  {
    title: "Adverb",
    icon: Zap,
    color: "bg-purple-500",
    text: "An adverb describes a verb.",
    sentence: "The boy runs quickly.",
    answer: "quickly",
    explanation:
      "Quickly tells us how the boy runs."
  }
];

export default function PartsOfSpeechIntro() {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
const navigate = useNavigate();
  const lesson = lessons[index];

  function check(word) {
    if (word.replace(".", "") === lesson.answer) {
      setMessage("✅ Correct! " + lesson.explanation);
    } else {
      setMessage("❌ Try Again");
    }
  }

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <BookOpen size={50} className="mx-auto text-cyan-400 mb-3" />
          <h1 className="text-5xl font-bold">
            Parts of Speech
          </h1>
          <p className="text-slate-300 mt-3">
            Learn Nouns, Verbs, Adjectives and Adverbs interactively.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {lessons.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                key={i}
                onClick={() => {
                  setIndex(i);
                  setMessage("");
                }}
                className={`cursor-pointer rounded-2xl p-5 ${
                  index === i
                    ? item.color
                    : "bg-white/10"
                }`}
              >
                <Icon size={40} className="mb-3" />
                <h2 className="text-xl font-bold">
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
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            className="bg-white/10 rounded-3xl p-8 backdrop-blur-lg"
          >

            <h2 className="text-3xl font-bold mb-3">
              {lesson.title}
            </h2>

            <p className="text-lg text-slate-300 mb-6">
              {lesson.text}
            </p>

            <div className="bg-slate-800 rounded-xl p-5">

              <p className="mb-4 font-semibold">
                Click the correct word:
              </p>

              <div className="flex flex-wrap gap-3">
                {lesson.sentence.split(" ").map((word, i) => (

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .9 }}
                    key={i}
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
                className="mt-6 bg-green-600/20 border border-green-500 rounded-xl p-4 flex items-center gap-3"
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