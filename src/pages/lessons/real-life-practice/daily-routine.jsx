import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Coffee,
  Briefcase,
  Moon,
  Clock
} from "lucide-react";

export default function DailyRoutines() {
  const scenarios = [
    {
      title: "Starting Your Day 🌅",
      icon: <Sun size={28} />,
      question: "What time do you usually wake up?",
      answer:
        "I usually wake up at around 6:30 in the morning. I get out of bed, brush my teeth, and wash my face.",
      tip:
        "Use the present simple tense to describe routines and habits. Words like usually, normally, and every day are useful."
    },

    {
      title: "Your Morning Routine ☀️",
      icon: <Coffee size={28} />,
      question: "What do you usually do in the morning?",
      answer:
        "After getting ready, I have a cup of tea and eat breakfast. Then, I check my messages and get ready to start my day.",
      tip:
        "Use sequence words like 'after that', 'then', and 'before' to describe your routine naturally."
    },

    {
      title: "Going to Work or College 🚌",
      icon: <Briefcase size={28} />,
      question: "How do you usually get to work or college?",
      answer:
        "I usually leave home at around 8 o'clock. I take the bus to work, and it takes about thirty minutes to get there.",
      tip:
        "Use 'I take...', 'I go by...', or 'I walk...' when talking about how you travel."
    },

    {
      title: "Your Work or Study Day 💻",
      icon: <Clock size={28} />,
      question: "What do you normally do during the day?",
      answer:
        "I usually start work at 9 o'clock. I attend meetings, work on my tasks, and communicate with my team. I take a short break in the afternoon.",
      tip:
        "Use the present simple for regular activities. Use 'usually', 'often', and 'sometimes' to show how frequently you do something."
    },

    {
      title: "Lunch Break 🍱",
      icon: <Coffee size={28} />,
      question: "What do you usually do during your lunch break?",
      answer:
        "I usually have lunch with my colleagues. Sometimes, we go to a nearby restaurant, but I often bring lunch from home.",
      tip:
        "Use frequency words such as always, usually, often, sometimes, rarely, and never."
    },

    {
      title: "After Work or College 🏠",
      icon: <ArrowRight size={28} />,
      question: "What do you do after work or college?",
      answer:
        "After work, I usually go home and relax for a while. Sometimes, I go to the gym or meet my friends. In the evening, I have dinner with my family.",
      tip:
        "Use 'After + activity' to explain what you do next. For example: 'After work, I go home.'"
    },

    {
      title: "Your Evening Routine 🌆",
      icon: <Moon size={28} />,
      question: "What do you normally do in the evening?",
      answer:
        "In the evening, I usually watch TV or listen to music. I also spend some time reading or learning something new. After dinner, I prepare for the next day.",
      tip:
        "Use 'In the evening' and 'After dinner' to organize your ideas clearly."
    },

    {
      title: "Going to Bed 🌙",
      icon: <Moon size={28} />,
      question: "What time do you usually go to bed?",
      answer:
        "I usually go to bed at around 11 o'clock. Before going to sleep, I check my phone, set my alarm, and think about my plans for the next day.",
      tip:
        "Use 'before + verb-ing' to describe something that happens before another activity."
    },

    {
      title: "A Complete Typical Day 🌟",
      icon: <Sun size={28} />,
      question: "Can you describe a typical day in your life?",
      answer:
        "I usually wake up at around 6:30 in the morning. After getting ready, I have breakfast and leave home at 8 o'clock. I usually start work at 9 and spend the day working on different tasks and attending meetings. I have lunch around 1 o'clock. After work, I go home and relax for a while. Sometimes, I go to the gym or meet my friends. In the evening, I have dinner with my family and spend some time watching TV or reading. I usually go to bed around 11 o'clock.",
      tip:
        "When describing your whole day, organize your answer in order: morning → afternoon → evening → night."
    }
  ];

  const phrases = [
    "I usually wake up at...",
    "I normally start my day by...",
    "After that, I...",
    "Then, I...",
    "I usually go to work by...",
    "It takes me about... minutes.",
    "I often...",
    "Sometimes, I...",
    "I rarely...",
    "After work, I...",
    "In the evening, I...",
    "Before going to bed, I..."
  ];

  const [step, setStep] = useState(0);

  const current = scenarios[step];

  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-slate-900
      via-indigo-950
      to-black
      text-white
      p-6
      md:p-8
    ">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="text-center mb-10">

          <div className="
            w-20
            h-20
            mx-auto
            rounded-3xl
            bg-indigo-600/20
            border
            border-indigo-500/30
            flex
            items-center
            justify-center
            mb-5
          ">

            <Clock
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Talking About Daily Routines 🌅
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice describing your typical day naturally,
            from waking up in the morning to going to bed at night.
          </p>

        </div>


        {/* Progress */}

        <div className="
          flex
          flex-wrap
          justify-center
          gap-3
          mb-10
        ">

          {scenarios.map((item, index) => (

            <button
              key={index}
              onClick={() => setStep(index)}
              className={`
                w-11
                h-11
                rounded-xl
                font-bold
                transition
                ${
                  index === step
                    ? "bg-indigo-600 scale-110"
                    : index < step
                    ? "bg-green-600"
                    : "bg-slate-700 hover:bg-slate-600"
                }
              `}
            >

              {index < step ? (
                <CheckCircle
                  size={20}
                  className="mx-auto"
                />
              ) : (
                index + 1
              )}

            </button>

          ))}

        </div>


        {/* Main Card */}

        <motion.div
          key={step}
          initial={{
            opacity: 0,
            x: 40
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.3
          }}
          className="
            bg-white/10
            border
            border-white/20
            rounded-3xl
            p-6
            md:p-8
          "
        >

          {/* Title */}

          <div className="
            flex
            items-center
            gap-4
            mb-8
          ">

            <div className="
              w-14
              h-14
              rounded-2xl
              bg-indigo-600/20
              flex
              items-center
              justify-center
              text-indigo-400
            ">
              {current.icon}
            </div>

            <div>

              <p className="
                text-sm
                text-indigo-400
                font-semibold
              ">
                STEP {step + 1} OF {scenarios.length}
              </p>

              <h2 className="
                text-2xl
                md:text-3xl
                font-bold
              ">
                {current.title}
              </h2>

            </div>

          </div>


          {/* Question */}

          <div className="
            bg-green-500/10
            border
            border-green-500/30
            rounded-2xl
            p-5
            mb-5
          ">

            <h3 className="
              text-sm
              font-bold
              text-green-400
              mb-2
            ">
              🧑‍💼 QUESTION
            </h3>

            <p className="
              text-lg
              md:text-xl
            ">
              {current.question}
            </p>

          </div>


          {/* Answer */}

          <div className="
            bg-blue-500/10
            border
            border-blue-500/30
            rounded-2xl
            p-5
          ">

            <h3 className="
              text-sm
              font-bold
              text-blue-400
              mb-2
            ">
              🗣️ SAMPLE ANSWER
            </h3>

            <p className="
              text-lg
              md:text-xl
              leading-relaxed
            ">
              {current.answer}
            </p>

          </div>


          {/* Language Tip */}

          <div className="
            mt-8
            bg-cyan-500/10
            border
            border-cyan-500/40
            rounded-2xl
            p-5
            flex
            gap-4
          ">

            <MessageCircle
              className="
                text-cyan-400
                shrink-0
              "
            />

            <div>

              <h3 className="
                font-bold
                text-cyan-400
                mb-1
              ">
                Language Tip
              </h3>

              <p className="text-slate-200">
                {current.tip}
              </p>

            </div>

          </div>


          {/* Useful Phrases */}

          <div className="
            mt-8
            bg-slate-800/80
            rounded-2xl
            p-6
          ">

            <h3 className="
              text-2xl
              font-bold
              mb-5
            ">
              Useful Phrases 💬
            </h3>

            <div className="
              grid
              sm:grid-cols-2
              md:grid-cols-3
              gap-3
            ">

              {phrases.map((phrase, index) => (

                <div
                  key={index}
                  className="
                    bg-slate-700
                    hover:bg-slate-600
                    rounded-xl
                    p-4
                    transition
                  "
                >
                  "{phrase}"
                </div>

              ))}

            </div>

          </div>


          {/* Navigation */}

          <div className="
            flex
            justify-between
            items-center
            mt-8
            gap-4
          ">

            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              className="
                bg-slate-700
                hover:bg-slate-600
                px-5
                py-3
                rounded-xl
                flex
                items-center
                gap-2
                disabled:opacity-40
                transition
              "
            >

              <ArrowLeft size={20} />

              Previous

            </button>


            {step < scenarios.length - 1 ? (

              <button
                onClick={() => setStep(step + 1)}
                className="
                  bg-indigo-600
                  hover:bg-indigo-500
                  px-5
                  py-3
                  rounded-xl
                  flex
                  items-center
                  gap-2
                  transition
                "
              >

                Next

                <ArrowRight size={20} />

              </button>

            ) : (

              <div className="
                bg-green-600
                px-5
                py-3
                rounded-xl
                flex
                items-center
                gap-2
              ">

                <CheckCircle size={20} />

                Completed

              </div>

            )}

          </div>

        </motion.div>


        {/* Daily Routine Flow */}

        <div className="
          mt-10
          bg-indigo-500/10
          border
          border-indigo-500/30
          rounded-3xl
          p-6
          md:p-8
        ">

          <h2 className="
            text-2xl
            md:text-3xl
            font-bold
            mb-6
            text-center
          ">
            Daily Routine Flow 🕐
          </h2>

          <div className="
            flex
            flex-wrap
            justify-center
            items-center
            gap-3
          ">

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🌅 Morning
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🚌 Work / College
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🍱 Afternoon
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🏠 After Work
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🌙 Night
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}