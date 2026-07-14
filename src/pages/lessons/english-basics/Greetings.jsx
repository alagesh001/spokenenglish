import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Sun, Moon, Smile } from "lucide-react";
import LessonLayout from "../LessonLayout";

const greetings = [
  {
    id: 1,
    title: "Hello",
    greeting: "Hello!",
    response: "Hello! How are you?",
    usage: "A polite greeting that can be used anytime.",
    icon: Handshake,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Hi",
    greeting: "Hi!",
    response: "Hi! Nice to see you.",
    usage: "Informal greeting for friends and classmates.",
    icon: Smile,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Good Morning",
    greeting: "Good Morning!",
    response: "Good Morning! Have a nice day.",
    usage: "Used before 12 PM.",
    icon: Sun,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    title: "Good Afternoon",
    greeting: "Good Afternoon!",
    response: "Good Afternoon!",
    usage: "Used from 12 PM to around 5 PM.",
    icon: Sun,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Good Evening",
    greeting: "Good Evening!",
    response: "Good Evening!",
    usage: "Used after 5 PM.",
    icon: Moon,
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: 6,
    title: "Good Night",
    greeting: "Good Night!",
    response: "Good Night. See you tomorrow.",
    usage: "Used when leaving or before sleeping.",
    icon: Moon,
    color: "from-slate-700 to-slate-900",
  },
  {
    id: 7,
    title: "How are you?",
    greeting: "How are you?",
    response: "I'm fine, thank you. How about you?",
    usage: "A common way to ask about someone's well-being.",
    icon: Smile,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 8,
    title: "Nice to Meet You",
    greeting: "Nice to meet you.",
    response: "Nice to meet you too.",
    usage: "Used when meeting someone for the first time.",
    icon: Handshake,
    color: "from-teal-500 to-cyan-500",
  },
];

export default function EverydayGreetings() {
  const [selected, setSelected] = useState(greetings[0]);

  return (
    <LessonLayout>
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Everyday Greetings
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Click any greeting to learn when and how to use it.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-10">

          {greetings.map((item) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelected(item)}
                className={`rounded-2xl p-5 border transition-all
                ${
                  selected.id === item.id
                    ? "border-teal-500 bg-teal-50 dark:bg-zinc-800"
                    : "border-zinc-200 dark:border-zinc-700"
                }`}
              >
                <Icon
                  size={38}
                  className="mx-auto text-teal-500"
                />

                <h3 className="mt-4 font-semibold">
                  {item.title}
                </h3>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            transition={{ duration: 0.3 }}
            className={`mt-10 rounded-3xl bg-gradient-to-r ${selected.color} text-white p-8`}
          >

            <h2 className="text-4xl font-bold">
              {selected.greeting}
            </h2>

            <div className="mt-8">

              <h3 className="font-semibold text-lg">
                Typical Response
              </h3>

              <p className="text-xl mt-2">
                {selected.response}
              </p>

            </div>

            <div className="mt-8">

              <h3 className="font-semibold text-lg">
                When to Use
              </h3>

              <p className="mt-2 opacity-90">
                {selected.usage}
              </p>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>
    </LessonLayout>
  );
}