import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Clock,
  MapPin,
  Users,
  Lightbulb
} from "lucide-react";

export default function MakingPlans() {
  const scenarios = [
    {
      title: "Making a Weekend Plan 📅",
      icon: <CalendarDays size={28} />,
      question: "What are you doing this weekend?",
      answer:
        "I don't have any plans yet. Would you like to do something together this weekend?",
      tip:
        "Use 'Would you like to...?' or 'Do you want to...?' when suggesting an activity."
    },

    {
      title: "Suggesting an Activity 💡",
      icon: <Lightbulb size={28} />,
      question: "What should we do this weekend?",
      answer:
        "How about going to the movies? There is a new movie playing at the cinema near us.",
      tip:
        "Use 'How about + verb-ing?' to make a casual suggestion."
    },

    {
      title: "Making a Different Suggestion 🤝",
      icon: <Users size={28} />,
      question: "Would you like to go to the movies?",
      answer:
        "I'd love to, but I watched a movie recently. How about going to a restaurant instead?",
      tip:
        "If you don't like an idea, respond politely and suggest an alternative."
    },

    {
      title: "Choosing What to Do 🗣️",
      icon: <Lightbulb size={28} />,
      question: "Should we go to the restaurant or order food at home?",
      answer:
        "I think we should go to the restaurant. It would be nice to go out and spend some time together.",
      tip:
        "Use 'I think we should...' to express your opinion when making a decision together."
    },

    {
      title: "Deciding on a Time 🕐",
      icon: <Clock size={28} />,
      question: "What time should we meet?",
      answer:
        "How about meeting at 7 o'clock? Does that work for you?",
      tip:
        "Use 'How about...?' and 'Does that work for you?' when discussing a suitable time."
    },

    {
      title: "Deciding on a Place 📍",
      icon: <MapPin size={28} />,
      question: "Where should we meet?",
      answer:
        "Let's meet at the coffee shop near the city center. It's easy for both of us to get there.",
      tip:
        "Use 'Let's...' to make a direct suggestion about what you can do together."
    },

    {
      title: "Confirming the Plan ✅",
      icon: <CheckCircle size={28} />,
      question: "So, are we meeting at 7 o'clock at the coffee shop?",
      answer:
        "Yes, that's right. Let's meet there at 7 o'clock. I'll see you then!",
      tip:
        "Repeat the important details when confirming a plan: the activity, time, and place."
    },

    {
      title: "Changing a Plan 🔄",
      icon: <CalendarDays size={28} />,
      question: "Are we still going to the restaurant tonight?",
      answer:
        "Actually, can we change our plan? I have a lot of work to finish. Could we meet tomorrow instead?",
      tip:
        "Use 'Can we change our plan?' or 'Could we... instead?' when you need to change an arrangement."
    },

    {
      title: "Complete Planning Conversation 🌟",
      icon: <CalendarDays size={28} />,
      question: "What should we do this Saturday?",
      answer:
        "How about going to the new restaurant downtown? I'd love to try it. What time would you like to meet? How about 7 o'clock? That works for me. Let's meet at the coffee shop first and then go to the restaurant together. Great! It's a plan. I'll see you on Saturday.",
      tip:
        "A natural planning conversation follows this order: suggest an idea → discuss alternatives → choose an activity → decide the time and place → confirm the plan."
    }
  ];

  const phrases = [
    "Would you like to...?",
    "Do you want to...?",
    "How about...?",
    "Why don't we...?",
    "What do you think about...?",
    "I think we should...",
    "I'd rather...",
    "That sounds great!",
    "That works for me.",
    "Does that work for you?",
    "Let's meet at...",
    "I'll see you then!"
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

            <CalendarDays
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Making Plans 📅
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice discussing ideas, making suggestions,
            choosing activities, and deciding what to do together.
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
              🧑 QUESTION
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


        {/* Planning Flow */}

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
            Planning Conversation Flow 🗓️
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
              💡 Suggest
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🗣️ Discuss
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🤝 Decide
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🕐 Set Time
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📍 Choose Place
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ✅ Confirm
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}