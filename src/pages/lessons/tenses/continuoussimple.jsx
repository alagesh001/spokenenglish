import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayCircle,
  Clock3,
  History,
  Rocket,
} from "lucide-react";

export default function ContinuousTenses() {
  const [tab, setTab] = useState("present");

  const tabs = [
    {
      id: "present",
      title: "Present Continuous",
      icon: Clock3,
      color: "bg-green-500",
      border: "border-green-500",
      heading: "Present Continuous",
      subtitle: "Actions happening right now."
    },
    {
      id: "past",
      title: "Past Continuous",
      icon: History,
      color: "bg-orange-500",
      border: "border-orange-500",
      heading: "Past Continuous",
      subtitle: "Actions that were happening in the past."
    },
    {
      id: "future",
      title: "Future Continuous",
      icon: Rocket,
      color: "bg-blue-500",
      border: "border-blue-500",
      heading: "Future Continuous",
      subtitle: "Actions that will be happening in the future."
    }
  ];

  const current = tabs.find((t) => t.id === tab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <PlayCircle
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Continuous Tenses
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Learn how to describe actions that are in progress.
          </p>
        </motion.div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {tabs.map((item) => {

            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  tab === item.id
                    ? `${item.color} text-white`
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                <Icon size={20} />
                {item.title}
              </button>
            );

          })}

        </div>

        {/* Content */}

       {tab === "present" && (
  <>

    {/* Formula */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Formula
      </h3>

      <div className="bg-green-500/20 border border-green-500 rounded-xl p-5 text-center text-2xl font-bold">
        Subject + am / is / are + Verb + ing
      </div>

    </div>

    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="space-y-3 text-slate-300 list-disc ml-6">
        <li>To talk about something happening <b>right now</b>.</li>
        <li>To describe an action that is <b>still in progress</b>.</li>
        <li>Look for words like <b>now</b>, <b>right now</b>, <b>at the moment</b>.</li>
      </ul>

    </div>

    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-green-500/20 rounded-xl p-4">
          👦 I <b>am eating</b> breakfast now.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👧 She <b>is reading</b> a book.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👨 They <b>are playing</b> football.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          🐶 The dog <b>is sleeping</b>.
        </div>

      </div>

    </div>

    {/* Interactive */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Present Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action happening now.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          She
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          is reading
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          a
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          book
        </button>

      </div>

      <div className="mt-5 bg-green-500/20 border border-green-500 rounded-xl p-4">
        ✔ <b>is reading</b> is the Present Continuous verb because the action is happening now.
      </div>

    </div>

    {/* Remember */}

    <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="space-y-2 list-disc ml-6 text-slate-300">
        <li>Use <b>am / is / are</b> + <b>verb + ing</b>.</li>
        <li>It describes actions happening <b>right now</b>.</li>
        <li>Examples:
          <ul className="list-disc ml-6 mt-2">
            <li>I am studying.</li>
            <li>She is cooking.</li>
            <li>They are playing.</li>
          </ul>
        </li>
      </ul>

    </div>

  </>
)}
{tab === "past" && (
  <>

    {/* Formula */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Formula
      </h3>

      <div className="bg-orange-500/20 border border-orange-500 rounded-xl p-5 text-center text-2xl font-bold">
        Subject + was / were + Verb + ing
      </div>

    </div>

    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="space-y-3 text-slate-300 list-disc ml-6">
        <li>To describe an action that <b>was happening in the past</b>.</li>
        <li>The action was <b>in progress</b> at a particular time.</li>
        <li>Look for words like <b>yesterday</b>, <b>last night</b>, <b>at 8 PM yesterday</b>, <b>while</b>, and <b>when</b>.</li>
      </ul>

    </div>

    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-orange-500/20 rounded-xl p-4">
          👦 I <b>was studying</b> yesterday evening.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👧 She <b>was cooking</b> dinner.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👨 They <b>were playing</b> football.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          🐶 The dog <b>was sleeping</b> when I came home.
        </div>

      </div>

    </div>

    {/* Interactive */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Past Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action that was happening in the past.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          They
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          were playing
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          football
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          yesterday
        </button>

      </div>

      <div className="mt-5 bg-orange-500/20 border border-orange-500 rounded-xl p-4">
        ✔ <b>were playing</b> is the Past Continuous verb because the action was in progress in the past.
      </div>

    </div>

    {/* Remember */}

    <div className="bg-orange-500/10 border border-orange-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="space-y-2 list-disc ml-6 text-slate-300">
        <li>Use <b>was / were + verb + ing</b>.</li>
        <li>It describes actions that were happening in the past.</li>
        <li>Often used with <b>while</b> and <b>when</b>.</li>
        <li>Examples:
          <ul className="list-disc ml-6 mt-2">
            <li>I was reading a book.</li>
            <li>She was sleeping.</li>
            <li>They were playing football.</li>
          </ul>
        </li>
      </ul>

    </div>

  </>
)}
{tab === "future" && (
  <>

    {/* Formula */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Formula
      </h3>

      <div className="bg-blue-500/20 border border-blue-500 rounded-xl p-5 text-center text-2xl font-bold">
        Subject + will be + Verb + ing
      </div>

    </div>

    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="space-y-3 text-slate-300 list-disc ml-6">
        <li>To describe an action that <b>will be happening in the future</b>.</li>
        <li>The action will be <b>in progress</b> at a specific future time.</li>
        <li>Look for words like <b>tomorrow</b>, <b>next week</b>, <b>at 8 PM tomorrow</b>, and <b>this time tomorrow</b>.</li>
      </ul>

    </div>

    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-blue-500/20 rounded-xl p-4">
          👦 I <b>will be studying</b> tonight.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          👧 She <b>will be cooking</b> dinner.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          👨 They <b>will be playing</b> football tomorrow.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          ✈️ We <b>will be travelling</b> next week.
        </div>

      </div>

    </div>

    {/* Interactive */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Future Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action that will be happening in the future.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          We
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          will be travelling
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          next
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          week
        </button>

      </div>

      <div className="mt-5 bg-blue-500/20 border border-blue-500 rounded-xl p-4">
        ✔ <b>will be travelling</b> is the Future Continuous verb because the action will be in progress in the future.
      </div>

    </div>

    {/* Remember */}

    <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="space-y-2 list-disc ml-6 text-slate-300">
        <li>Use <b>will be + verb + ing</b>.</li>
        <li>It describes actions that will be happening in the future.</li>
        <li>It often mentions a future time.</li>
        <li>Examples:
          <ul className="list-disc ml-6 mt-2">
            <li>I will be studying tonight.</li>
            <li>She will be sleeping.</li>
            <li>They will be playing football tomorrow.</li>
          </ul>
        </li>
      </ul>

    </div>

  </>
)}
      </div>

    </div>
  );
}