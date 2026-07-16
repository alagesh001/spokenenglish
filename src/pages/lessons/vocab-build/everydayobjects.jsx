import { useState } from "react";
import LessonLayout from "../LessonLayout";
import { vocabulary } from "../../../data/data_extras";
import { motion, AnimatePresence } from "framer-motion";
export default function EverydayVocabulary() {
  const [selected, setSelected] = useState(null);
const categories = ["All", ...new Set(vocabulary.map(item => item.category))];
const [selectedIndex, setSelectedIndex] = useState(null);
const [selectedCategory, setSelectedCategory] = useState("All");
const filteredVocabulary =
  selectedCategory === "All"
    ? vocabulary
    : vocabulary.filter(item => item.category === selectedCategory);
  return (
    <LessonLayout>
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Everyday Vocabulary
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Click an object to learn its English name.
        </p>
<div className="flex flex-wrap justify-center gap-3 mt-8">

  {categories.map(category => (
    <button
      key={category}
    onClick={() => {
        setSelectedCategory(category);
        setSelected(null);
      }}
      className={`px-5 py-2 rounded-full font-medium transition-all
        ${
          selectedCategory === category
            ? "bg-teal-500 text-white shadow-lg"
            : "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:bg-teal-50"
        }`}
    >
      {category}
    </button>
  ))}

</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-10">

{filteredVocabulary.map((item, index) => (
            <motion.button
              key={item.word}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIndex(index)}

              className={`rounded-2xl p-5 border transition-all

              ${
                selectedIndex === filteredVocabulary.indexOf(item)
                  ? "bg-teal-500 text-white border-teal-500 shadow-lg"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700"
              }`}
            >

              <img
  src={item.image}
  alt={item.word}
  className="w-16 h-16 mx-auto object-contain"
/>

              <div className="mt-4 font-semibold">
                {item.word}
              </div>

              <div className="text-xs opacity-70 mt-1">
                {item.category}
              </div>

            </motion.button>

          ))}

        </div>
<AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white dark:bg-zinc-900 rounded-3xl p-8 w-full max-w-xl shadow-2xl relative"
      >
        {/* Close */}
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute right-5 top-5 w-10 h-10 rounded-full bg-red-500 text-white"
        >
          ✕
        </button>

        {/* Image */}
        <img
          src={filteredVocabulary[selectedIndex].image}
          alt={filteredVocabulary[selectedIndex].word}
          className="w-64 h-64 mx-auto object-contain"
        />

        {/* Word */}
        <h2 className="text-4xl font-bold text-center mt-6">
          {filteredVocabulary[selectedIndex].word}
        </h2>

        <p className="text-center text-gray-500 mt-2">
          {filteredVocabulary[selectedIndex].category}
        </p>

        {/* Navigation */}
        <div className="flex justify-between mt-10">

          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0
                  ? filteredVocabulary.length - 1
                  : prev - 1
              )
            }
            className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-zinc-800"
          >
            ◀ Previous
          </button>

          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === filteredVocabulary.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="px-6 py-3 rounded-xl bg-teal-500 text-white"
          >
            Next ▶
          </button>

        </div>

        <div className="text-center mt-5 text-gray-500">
          {selectedIndex + 1} / {filteredVocabulary.length}
        </div>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </LessonLayout>
  );
}