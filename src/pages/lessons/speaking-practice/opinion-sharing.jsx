import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  CheckCircle
} from "lucide-react";

export default function SharingOpinions() {

  const opinions = [
    "Remote work is great",
    "Reading books is important",
    "Exercise is healthy",
    "English is useful"
  ];

  const reasons = [
    "it saves time",
    "it improves knowledge",
    "it keeps us fit",
    "it helps us communicate"
  ];

  const examples = [
    "I use that extra time to exercise.",
    "I learn something new every day.",
    "I walk every morning.",
    "I can talk to people from different countries."
  ];

  const [opinion, setOpinion] = useState(opinions[0]);
  const [reason, setReason] = useState(reasons[0]);
  const [example, setExample] = useState(examples[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="text-center mb-10">

          <MessageCircle
            size={60}
            className="mx-auto text-cyan-400 mb-4"
          />

          <h1 className="text-5xl font-bold">
            Sharing Opinions
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Learn to express your opinion using a simple pattern.
          </p>

        </div>

        {/* Formula */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white/10 rounded-3xl p-8 mb-8 border border-white/20"
        >

          <h2 className="text-3xl font-bold mb-6">
            Opinion Formula
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-5 text-xl">

            <div className="bg-cyan-600 px-6 py-4 rounded-xl">
              I think...
            </div>

            ➜

            <div className="bg-green-600 px-6 py-4 rounded-xl">
              because...
            </div>

            ➜

            <div className="bg-purple-600 px-6 py-4 rounded-xl">
              for example...
            </div>

          </div>

        </motion.div>

        {/* Example */}

        <div className="bg-slate-800 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-5">
            Example
          </h2>

          <div className="space-y-4 text-lg">

            <div className="bg-blue-500/20 rounded-xl p-4">
              💬 <b>Opinion:</b> I think remote work is great.
            </div>

            <div className="bg-green-500/20 rounded-xl p-4">
              ✔ <b>Reason:</b> Because it saves commuting time.
            </div>

            <div className="bg-purple-500/20 rounded-xl p-4">
              ⭐ <b>Example:</b> For example, I now use that time to exercise.
            </div>

          </div>

        </div>

        {/* Interactive Builder */}

        <div className="bg-slate-800 rounded-3xl p-8 mb-8">

          <h2 className="text-3xl font-bold mb-6">
            Build Your Opinion
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>

              <h3 className="font-bold mb-3">
                Opinion
              </h3>

              <select
                className="w-full bg-slate-700 rounded-xl p-3"
                value={opinion}
                onChange={(e)=>setOpinion(e.target.value)}
              >
                {opinions.map(item=>(
                  <option key={item}>{item}</option>
                ))}
              </select>

            </div>

            <div>

              <h3 className="font-bold mb-3">
                Reason
              </h3>

              <select
                className="w-full bg-slate-700 rounded-xl p-3"
                value={reason}
                onChange={(e)=>setReason(e.target.value)}
              >
                {reasons.map(item=>(
                  <option key={item}>{item}</option>
                ))}
              </select>

            </div>

            <div>

              <h3 className="font-bold mb-3">
                Example
              </h3>

              <select
                className="w-full bg-slate-700 rounded-xl p-3"
                value={example}
                onChange={(e)=>setExample(e.target.value)}
              >
                {examples.map(item=>(
                  <option key={item}>{item}</option>
                ))}
              </select>

            </div>

          </div>

          <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-2xl p-6">

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb />
              Your Sentence
            </h3>

            <p className="text-xl leading-9">
              <span className="text-cyan-400">
                I think
              </span>{" "}
              <b>{opinion.toLowerCase()}</b>{" "}
              <span className="text-green-400">
                because
              </span>{" "}
              <b>{reason}</b>.{" "}
              <span className="text-purple-400">
                For example,
              </span>{" "}
              <b>{example}</b>
            </p>

          </div>

        </div>

        {/* Practice */}

        <div className="bg-slate-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6">
            Practice Topics
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              "Online learning",
              "Social media",
              "Playing sports",
              "Watching movies",
              "Eating vegetables",
              "Using AI"
            ].map(topic=>(
              <div
                key={topic}
                className="bg-slate-700 rounded-xl p-5"
              >
                <h3 className="font-bold text-xl mb-3">
                  {topic}
                </h3>

                <p className="text-slate-300">
                  Share your opinion using:
                </p>

                <div className="mt-3 space-y-2">

                  <div>I think...</div>

                  <div>Because...</div>

                  <div>For example...</div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Remember */}

        <div className="mt-8 bg-green-500/10 border border-green-500 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-5 flex items-center gap-2">
            <CheckCircle />
            Remember
          </h2>

          <div className="text-xl text-center leading-10">

            <span className="text-cyan-400 font-bold">
              Opinion
            </span>

            {" → "}

            <span className="text-green-400 font-bold">
              Reason
            </span>

            {" → "}

            <span className="text-purple-400 font-bold">
              Example
            </span>

            <div className="mt-5 text-slate-300">

              I think English is useful because it helps me communicate.
              <br />
              For example, I can talk to people from many countries.

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}