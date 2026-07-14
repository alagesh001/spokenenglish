import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, CheckCircle2 } from "lucide-react";
import LessonLayout from "../LessonLayout";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const vowels = ["A", "E", "I", "O", "U"];

export default function VowelsAndConsonants() {
  const [selected, setSelected] = useState(null);

  return (
    <LessonLayout>
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold text-center">
          Vowels & Consonants
        </h2>

        <p className="text-center mt-3 text-gray-500">
          Click any letter to discover whether it is a vowel or a consonant.
        </p>

        <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-4 mt-10">

          {letters.map((letter) => {
            const isSelected = selected === letter;
            const isVowel = vowels.includes(letter);

            return (
              <motion.button
                key={letter}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelected(letter)}
                className={`
                  h-16 rounded-2xl font-bold text-2xl transition-all

                  ${
                    isSelected
                      ? isVowel
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                      : "bg-white dark:bg-zinc-900 border"
                  }
                `}
              >
                {letter}
              </motion.button>
            );
          })}
        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 rounded-3xl p-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-center"
          >
            <h1 className="text-7xl font-bold">{selected}</h1>

            <p className="mt-5 text-2xl font-semibold">
              {vowels.includes(selected)
                ? "This is a Vowel"
                : "This is a Consonant"}
            </p>

            <div className="mt-6 flex justify-center">
              <CheckCircle2 size={40} />
            </div>

            <p className="mt-4 opacity-90">
              {vowels.includes(selected)
                ? "Vowels are A, E, I, O and U. They are produced with an open airflow."
                : "Consonants are all the remaining letters. They are produced by partially or completely blocking the airflow."}
            </p>
          </motion.div>
        )}

        {/* <div className="mt-10 flex justify-center">
          <button
            onClick={() => setSelected(null)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div> */}

      </div>
    </LessonLayout>
  );
}