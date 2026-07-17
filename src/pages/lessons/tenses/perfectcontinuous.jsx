import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Timer,
  History,
  Rocket,
  Repeat,
} from "lucide-react";

export default function PerfectContinuousTenses() {

  const [tab, setTab] = useState("present");

  const tabs = [
    {
      id: "present",
      title: "Present Perfect Continuous",
      icon: Repeat,
      color: "bg-green-500",
      border: "border-green-500",
      heading: "Present Perfect Continuous",
      subtitle: "Actions that started in the past and are continuing now."
    },
    {
      id: "past",
      title: "Past Perfect Continuous",
      icon: History,
      color: "bg-orange-500",
      border: "border-orange-500",
      heading: "Past Perfect Continuous",
      subtitle: "Actions that continued for some time before another past action."
    },
    {
      id: "future",
      title: "Future Perfect Continuous",
      icon: Rocket,
      color: "bg-blue-500",
      border: "border-blue-500",
      heading: "Future Perfect Continuous",
      subtitle: "Actions that will continue up to a specific time in the future."
    }
  ];


  const current = tabs.find((t) => t.id === tab);


  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-black text-white p-8">

      <div className="max-w-6xl mx-auto">


        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <Timer
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Perfect Continuous Tenses
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Learn how to describe actions that continue over a period of time.
          </p>

        </motion.div>


        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {tabs.map((item)=>{

            const Icon = item.icon;

            return (

              <button
                key={item.id}
                onClick={()=>setTab(item.id)}
                className={`px-6 py-3 rounded-xl flex items-center gap-3 transition ${
                  tab === item.id
                  ? `${item.color}`
                  : "bg-slate-800 hover:bg-slate-700"
                }`}
              >

                <Icon size={20}/>

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
        Subject + has/have been + Verb + ing
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">

        <li>
          To describe an action that <b>started in the past and is still continuing now</b>.
        </li>

        <li>
          It focuses on the <b>duration of an action</b>.
        </li>

        <li>
          Common words: <b>since</b>, <b>for</b>, <b>all day</b>, <b>recently</b>, <b>lately</b>.
        </li>

      </ul>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Line
      </h3>

      <div className="flex items-center justify-center gap-4">

        <div className="bg-slate-700 rounded-xl p-4">
          Past
        </div>

        <div className="text-3xl">
          ─────────
        </div>

        <div className="bg-green-500/20 border border-green-500 rounded-xl p-4">
          Now
          <br />
          <b>Still happening</b>
        </div>

      </div>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>


      <div className="space-y-3">

        <div className="bg-green-500/20 rounded-xl p-4">
          👦 I <b>have been studying</b> for two hours.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👧 She <b>has been working</b> here since 2022.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          👨 They <b>have been playing</b> football all evening.
        </div>

        <div className="bg-green-500/20 rounded-xl p-4">
          📚 We <b>have been learning</b> English for three months.
        </div>

      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Present Perfect Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action that shows something continuing until now.
      </p>


      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          She
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          has been reading
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          a book
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-green-600">
          for two hours
        </button>

      </div>


      <div className="mt-5 bg-green-500/20 border border-green-500 rounded-xl p-4">

        ✔ <b>has been reading</b> is the Present Perfect Continuous verb because the action started in the past and is continuing now.

      </div>

    </div>


    {/* Remember */}

    <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>


      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>
          Use <b>has/have been + verb + ing</b>.
        </li>

        <li>
          It shows <b>duration</b> of an action.
        </li>

        <li>
          Use <b>for</b> for a period of time.
        </li>

        <li>
          Use <b>since</b> for a starting point.
        </li>

      </ul>


      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I have been waiting for one hour.<br />
        ✅ She has been cooking since 5 PM.<br />
        ✅ They have been playing since morning.

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
        Subject + had been + Verb + ing
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">

        <li>
          To describe an action that <b>continued for some time before another past action</b>.
        </li>

        <li>
          It focuses on the <b>duration of an activity in the past</b>.
        </li>

        <li>
          Common words: <b>for</b>, <b>since</b>, <b>before</b>, <b>when</b>, <b>until</b>.
        </li>

      </ul>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Line
      </h3>

      <div className="flex items-center justify-center gap-4 text-center">

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl p-4">
          Past Action
          <br />
          <b>Had been happening</b>
        </div>

        <div className="text-3xl">
          →
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          Another Past Event
        </div>

      </div>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>


      <div className="space-y-3">

        <div className="bg-orange-500/20 rounded-xl p-4">
          👦 I <b>had been studying</b> for two hours before my friend arrived.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👧 She <b>had been working</b> there for five years before she moved.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👨 They <b>had been playing</b> football before it started raining.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          🚗 We <b>had been driving</b> for three hours before we stopped.
        </div>

      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Past Perfect Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action that continued before another past event.
      </p>


      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          They
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          had been playing
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          football
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          before dinner
        </button>

      </div>


      <div className="mt-5 bg-orange-500/20 border border-orange-500 rounded-xl p-4">

        ✔ <b>had been playing</b> is the Past Perfect Continuous verb because the action continued before another past event.

      </div>

    </div>


    {/* Remember */}

    <div className="bg-orange-500/10 border border-orange-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>


      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>
          Use <b>had been + verb + ing</b>.
        </li>

        <li>
          It describes a continuing action before another past action.
        </li>

        <li>
          Use <b>for</b> to show duration.
        </li>

        <li>
          Use <b>since</b> to show the starting point.
        </li>

      </ul>


      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I had been waiting for one hour before the bus came.<br />
        ✅ She had been studying since morning before the exam started.<br />
        ✅ They had been working all day before they rested.

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
        Subject + had been + Verb + ing
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">

        <li>
          To describe an action that <b>continued for some time before another past action</b>.
        </li>

        <li>
          It focuses on the <b>duration of an activity in the past</b>.
        </li>

        <li>
          Common words: <b>for</b>, <b>since</b>, <b>before</b>, <b>when</b>, <b>until</b>.
        </li>

      </ul>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Line
      </h3>

      <div className="flex items-center justify-center gap-4 text-center">

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl p-4">
          Past Action
          <br />
          <b>Had been happening</b>
        </div>

        <div className="text-3xl">
          →
        </div>

        <div className="bg-slate-700 rounded-xl p-4">
          Another Past Event
        </div>

      </div>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>


      <div className="space-y-3">

        <div className="bg-orange-500/20 rounded-xl p-4">
          👦 I <b>had been studying</b> for two hours before my friend arrived.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👧 She <b>had been working</b> there for five years before she moved.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          👨 They <b>had been playing</b> football before it started raining.
        </div>

        <div className="bg-orange-500/20 rounded-xl p-4">
          🚗 We <b>had been driving</b> for three hours before we stopped.
        </div>

      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Past Perfect Continuous Verb
      </h3>

      <p className="text-slate-300 mb-5">
        Click the action that continued before another past event.
      </p>


      <div className="flex flex-wrap gap-3">

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          They
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          had been playing
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          football
        </button>

        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-orange-600">
          before dinner
        </button>

      </div>


      <div className="mt-5 bg-orange-500/20 border border-orange-500 rounded-xl p-4">

        ✔ <b>had been playing</b> is the Past Perfect Continuous verb because the action continued before another past event.

      </div>

    </div>


    {/* Remember */}

    <div className="bg-orange-500/10 border border-orange-500 rounded-2xl p-6">

      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>


      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>
          Use <b>had been + verb + ing</b>.
        </li>

        <li>
          It describes a continuing action before another past action.
        </li>

        <li>
          Use <b>for</b> to show duration.
        </li>

        <li>
          Use <b>since</b> to show the starting point.
        </li>

      </ul>


      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I had been waiting for one hour before the bus came.<br />
        ✅ She had been studying since morning before the exam started.<br />
        ✅ They had been working all day before they rested.

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
        Subject + will have been + Verb + ing
      </div>

    </div>


    {/* Explanation */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        When do we use it?
      </h3>

      <ul className="list-disc ml-6 space-y-3 text-slate-300">

        <li>
          To describe an action that <b>will continue for a period of time before a specific future moment</b>.
        </li>

        <li>
          It focuses on the <b>duration of a future activity</b>.
        </li>

        <li>
          Common words: <b>for</b>, <b>since</b>, <b>by the time</b>, <b>next year</b>, <b>by tomorrow</b>.
        </li>

      </ul>

    </div>


    {/* Timeline */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Time Line
      </h3>


      <div className="flex items-center justify-center gap-4 text-center">

        <div className="bg-slate-700 rounded-xl p-4">
          Now
        </div>


        <div className="text-3xl">
          →
        </div>


        <div className="bg-blue-500/20 border border-blue-500 rounded-xl p-4">
          Future Action
          <br />
          <b>Will have been happening</b>
        </div>


      </div>

    </div>


    {/* Examples */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h3 className="text-2xl font-semibold mb-4">
        Examples
      </h3>


      <div className="space-y-3">


        <div className="bg-blue-500/20 rounded-xl p-4">
          👦 I <b>will have been studying</b> for three hours by 8 PM.
        </div>


        <div className="bg-blue-500/20 rounded-xl p-4">
          👧 She <b>will have been working</b> here for ten years next month.
        </div>


        <div className="bg-blue-500/20 rounded-xl p-4">
          👨 They <b>will have been playing</b> football for two hours by evening.
        </div>


        <div className="bg-blue-500/20 rounded-xl p-4">
          🚗 We <b>will have been travelling</b> for five days by tomorrow.
        </div>


      </div>

    </div>


    {/* Activity */}

    <div className="bg-slate-800 rounded-2xl p-6 mb-8">


      <h3 className="text-2xl font-semibold mb-4">
        🎯 Find the Future Perfect Continuous Verb
      </h3>


      <p className="text-slate-300 mb-5">
        Click the action that will continue for a period of time in the future.
      </p>


      <div className="flex flex-wrap gap-3">


        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          She
        </button>


        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          will have been working
        </button>


        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          here
        </button>


        <button className="bg-slate-700 px-5 py-3 rounded-xl hover:bg-blue-600">
          for ten years
        </button>


      </div>


      <div className="mt-5 bg-blue-500/20 border border-blue-500 rounded-xl p-4">

        ✔ <b>will have been working</b> is the Future Perfect Continuous verb because the action will continue up to a future time.

      </div>


    </div>


    {/* Remember */}

    <div className="bg-blue-500/10 border border-blue-500 rounded-2xl p-6">


      <h3 className="text-2xl font-semibold mb-4">
        Remember
      </h3>


      <ul className="list-disc ml-6 space-y-2 text-slate-300">

        <li>
          Use <b>will have been + verb + ing</b>.
        </li>

        <li>
          It describes the <b>duration of a future action</b>.
        </li>

        <li>
          Usually used with a future time reference.
        </li>

        <li>
          It answers the question: <b>"How long will something have been happening?"</b>
        </li>

      </ul>


      <div className="mt-5 bg-slate-800 rounded-xl p-4">

        ✅ I will have been working for 5 hours by 6 PM.<br />
        ✅ She will have been studying for three years next month.<br />
        ✅ They will have been living here since 2020.

      </div>


    </div>


  </>
)}
      </div>

    </div>

  );

}