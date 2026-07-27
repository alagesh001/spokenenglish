import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ThumbsUp,
  ThumbsDown,
  Users,
  Lightbulb,
  Scale
} from "lucide-react";

export default function AgreeingAndDisagreeing() {
  const scenarios = [
    {
      title: "Strongly Agreeing 👍",
      icon: <ThumbsUp size={28} />,
      question:
        "I think learning English through regular conversation is the best way to improve speaking skills.",
      answer:
        "I completely agree. Speaking regularly is one of the best ways to become more confident.",
      tip:
        "Use 'I completely agree' or 'I totally agree' when you strongly share someone's opinion."
    },

    {
      title: "Showing Agreement 😊",
      icon: <ThumbsUp size={28} />,
      question:
        "I think we should start the meeting earlier tomorrow.",
      answer:
        "That's a good idea. I agree with you. Starting earlier will give us more time to discuss everything.",
      tip:
        "Use 'That's a good idea' or 'I agree with you' to show agreement and add a reason."
    },

    {
      title: "Agreeing With a Reason 💡",
      icon: <Lightbulb size={28} />,
      question:
        "I think we should exercise regularly.",
      answer:
        "I agree. Regular exercise is important because it helps us stay healthy and reduces stress.",
      tip:
        "After agreeing, add a reason using 'because' to make your response more natural."
    },

    {
      title: "Partly Agreeing 🤝",
      icon: <Users size={28} />,
      question:
        "I think working from home is always better than working in an office.",
      answer:
        "I agree to some extent, but I think it depends on the type of work. Some jobs are easier to do in an office.",
      tip:
        "Use 'I agree to some extent' or 'That's true, but...' when you agree with only part of an idea."
    },

    {
      title: "Disagreeing Politely 👎",
      icon: <ThumbsDown size={28} />,
      question:
        "I think social media is bad for everyone.",
      answer:
        "I understand your point, but I don't completely agree. I think social media can also be useful when people use it responsibly.",
      tip:
        "Start with 'I understand your point, but...' to make disagreement sound respectful."
    },

    {
      title: "Soft Disagreement 💬",
      icon: <MessageCircle size={28} />,
      question:
        "I think this is the best solution to our problem.",
      answer:
        "I'm not sure I agree. I think we should consider a few other options before making a decision.",
      tip:
        "Use 'I'm not sure I agree' when you want to disagree without sounding too direct."
    },

    {
      title: "Giving Another View 🔄",
      icon: <Scale size={28} />,
      question:
        "I think studying alone is always better than studying with other people.",
      answer:
        "I see what you mean, but I have a different view. I think studying with others can be helpful because we can share ideas.",
      tip:
        "Use 'I have a different view' or 'I see it differently' to introduce another perspective politely."
    },

    {
      title: "Respecting Someone's Opinion 🤝",
      icon: <Users size={28} />,
      question:
        "I think everyone should work from an office.",
      answer:
        "I respect your opinion, but I don't think that's always necessary. Some people can be more productive when working from home.",
      tip:
        "Saying 'I respect your opinion' helps keep the conversation respectful even when you disagree."
    },

    {
      title: "Finding Common Ground 🌟",
      icon: <CheckCircle size={28} />,
      question:
        "I think online learning is convenient, but face-to-face classes are better for communication.",
      answer:
        "I agree with you on that. Online learning is convenient, but I also think face-to-face classes can help students communicate more naturally.",
      tip:
        "Look for something you agree on before adding your own opinion. This makes conversations more positive."
    },

    {
      title: "Complete Agreeing and Disagreeing Conversation 🌟",
      icon: <MessageCircle size={28} />,
      question:
        "I think people should work from home whenever possible.",
      answer:
        "I completely agree that working from home has many benefits. It saves commuting time and can give people more flexibility. That's true, but I'm not sure everyone can work effectively from home. Some people need to work with their team in person. I understand your point, but I think a combination of remote and office work might be the best solution. Yes, I agree. A flexible approach could work well for many people.",
      tip:
        "A natural discussion can follow this pattern: agree → give a reason → partly disagree → explain another view → find common ground."
    }
  ];

  const phrases = [
    "I completely agree.",
    "I totally agree with you.",
    "That's a good point.",
    "That's exactly what I think.",
    "I agree with you.",
    "You're absolutely right.",
    "I agree to some extent.",
    "That's true, but...",
    "I understand your point, but...",
    "I'm not sure I agree.",
    "I see it differently.",
    "I have a different view."
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

            <MessageCircle
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Agreeing and Disagreeing 🤝
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice agreeing, partly agreeing, and disagreeing
            politely while keeping conversations respectful.
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


          {/* Conversation Prompt */}

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
              🧑 SPEAKER A
            </h3>

            <p className="
              text-lg
              md:text-xl
              leading-relaxed
            ">
              {current.question}
            </p>

          </div>


          {/* Response */}

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
              🗣️ SPEAKER B
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


        {/* Conversation Flow */}

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
            Agreeing & Disagreeing Flow 🤝
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
              💭 Listen
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              👍 Agree
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🤝 Partly Agree
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              👎 Disagree Politely
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💡 Give Reason
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🌟 Find Common Ground
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}