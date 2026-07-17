import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  History,
  Rocket,
} from "lucide-react";

export default function PerfectTenses() {

  const [tab, setTab] = useState("present");

  const tabs = [
    {
      id: "present",
      title: "Present Perfect",
      icon: Clock3,
      color: "bg-green-500",
      border: "border-green-500",
      heading: "Present Perfect",
      subtitle: "Actions completed with a connection to the present."
    },
    {
      id: "past",
      title: "Past Perfect",
      icon: History,
      color: "bg-orange-500",
      border: "border-orange-500",
      heading: "Past Perfect",
      subtitle: "Actions completed before another past action."
    },
    {
      id: "future",
      title: "Future Perfect",
      icon: Rocket,
      color: "bg-blue-500",
      border: "border-blue-500",
      heading: "Future Perfect",
      subtitle: "Actions that will be completed before a future time."
    }
  ];

  const current = tabs.find((t) => t.id === tab);

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <CheckCircle2
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Perfect Tenses
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Learn how to describe completed actions using the Perfect Tenses.
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
                className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all ${
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
        Subject + has / have + Past Participle (V3)
      </div>

    </div>

    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">
        <li>To describe an action that <b>has already happened</b>.</li>
        <li>The exact time is <b>not important</b>.</li>
        <li>The action has a <b>connection to the present</b>.</li>
        <li>Common words: <b>already, yet, just, ever, never, since, for</b>.</li>
      </ul>

    </div>

    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-green-500/20 rounded-xl p-4">
          👦 I <b>have finished</b> my homework.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👧 She <b>has cleaned</b> her room.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👨 They <b>have visited</b> Delhi.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          📚 We <b>have studied</b> English for two years.
        </div>

      </div>

    </div>

    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Present Perfect Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the Present Perfect verb.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          She
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          has completed
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          her
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          homework
        </button>

      </div>

      <div className="mt-5 bg-green-500/20 border border-green-500 rounded-xl p-4">
        ✔ <b>has completed</b> is the Present Perfect verb because the action is completed and connected to the present.
      </div>

    </div>

    {/* Remember */}

    <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="list-disc ml-6 space-y-2 text-slate-300">
        <li>Use <b>has / have + V3</b> (Past Participle).</li>
        <li>Do <b>not</b> mention a finished time like <b>yesterday</b>.</li>
        <li>Use <b>has</b> with <b>He, She, It</b>.</li>
        <li>Use <b>have</b> with <b>I, You, We, They</b>.</li>
      </ul>

      <div className="mt-5 bg-slate-800 rounded-xl p-4">
        ✅ I have eaten breakfast.<br />
        ✅ She has finished her work.<br />
        ✅ They have visited Chennai.
      </div>

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
        Subject + had + Past Participle (V3)
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">
        <li>To describe an action that <b>happened before another action in the past</b>.</li>
        <li>It shows which action happened <b>first</b>.</li>
        <li>Common words: <b>before, after, already, when, by the time</b>.</li>
      </ul>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-orange-500/20 rounded-xl p-4">
          👦 I <b>had finished</b> my homework before I played.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👧 She <b>had left</b> before I arrived.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👨 They <b>had eaten</b> dinner before the movie started.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          ✈️ We <b>had reached</b> the airport before the flight arrived.
        </div>

      </div>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Order
      </h3>

      <div className="flex items-center justify-center gap-4 text-center">

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl p-4">
          First Action
          <br />
          <b>I had finished homework</b>
        </div>

        <div className="text-3xl">
          →
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          Second Action
          <br />
          <b>I played football</b>
        </div>

      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Past Perfect Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the Past Perfect verb.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          They
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          had completed
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          the project
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          before Monday
        </button>

      </div>

      <div className="mt-5 bg-orange-500/20 border border-orange-500 rounded-xl p-4">
        ✔ <b>had completed</b> is the Past Perfect verb because the action happened before another past event.
      </div>

    </div>


    {/* Remember */}

    <div className="bg-orange-500/10 border border-orange-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>Use <b>had + V3</b> for all subjects.</li>

        <li>It talks about the <b>earlier past action</b>.</li>

        <li>Usually there are two past actions.</li>

      </ul>

      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I had eaten before he came.<br />
        ✅ She had finished her work before dinner.<br />
        ✅ They had left when we arrived.

      </div>

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
        Subject + will have + Past Participle (V3)
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">
        <li>To describe an action that <b>will be completed before a future time</b>.</li>
        <li>It shows that something will be finished in the future.</li>
        <li>Common words: <b>by, before, by the time, next week, next year</b>.</li>
      </ul>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>

      <div className="space-y-3">

        <div className="bg-blue-500/20 rounded-xl p-4">
          👦 I <b>will have finished</b> my homework by 8 PM.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          👧 She <b>will have completed</b> the project tomorrow.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          👨 They <b>will have reached</b> home before sunset.
        </div>

        <div className="bg-blue-500/20 rounded-xl p-4">
          📚 We <b>will have learned</b> English by next year.
        </div>

      </div>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Order
      </h3>

      <div className="flex items-center justify-center gap-4 text-center">

        <div className="bg-slate-700 rounded-xl p-4">
          Now
        </div>

        <div className="text-3xl">
          →
        </div>

        <div className="bg-blue-500/20 border border-blue-500 rounded-xl p-4">
          Future Time
          <br />
          <b>I will have finished homework</b>
        </div>

      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Future Perfect Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the Future Perfect verb.
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          I
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          will have completed
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          the work
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          by tomorrow
        </button>

      </div>

      <div className="mt-5 bg-blue-500/20 border border-blue-500 rounded-xl p-4">
        ✔ <b>will have completed</b> is the Future Perfect verb because the action will be finished before a future time.
      </div>

    </div>


    {/* Remember */}

    <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>

      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>Use <b>will have + V3</b>.</li>

        <li>It describes actions that will be completed in the future.</li>

        <li>Usually used with <b>by</b> or <b>before</b>.</li>

      </ul>

      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I will have finished my work by 6 PM.<br />
        ✅ She will have arrived before noon.<br />
        ✅ They will have completed the task next week.

      </div>

    </div>


  </>
)}
      </div>

    </div>

  );

}