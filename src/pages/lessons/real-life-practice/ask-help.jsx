import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Users,
  Lightbulb,
  AlertCircle,
  HandHelping
} from "lucide-react";

export default function AskingForHelp() {
  const scenarios = [
    {
      title: "Asking for Help Politely 🤝",
      icon: <HandHelping size={28} />,
      question:
        "You are having trouble understanding something. What would you say?",
      answer:
        "Excuse me, could you please help me with this? I'm not sure I understand how it works.",
      tip:
        "Use 'Could you please help me?' to make a polite request for assistance."
    },

    {
      title: "Asking Someone to Explain 💡",
      icon: <Lightbulb size={28} />,
      question:
        "Your teacher has explained a topic, but you still don't understand it.",
      answer:
        "I'm sorry, I didn't quite understand that. Could you please explain it again?",
      tip:
        "Use 'Could you please explain it again?' when you need someone to repeat or clarify something."
    },

    {
      title: "Asking for Directions 🧭",
      icon: <HelpCircle size={28} />,
      question:
        "You are in a new place and can't find the train station.",
      answer:
        "Excuse me, could you please tell me how to get to the train station?",
      tip:
        "Start with 'Excuse me' to politely get someone's attention before asking for help."
    },

    {
      title: "Asking for Technical Help 💻",
      icon: <HelpCircle size={28} />,
      question:
        "Your computer is not working properly. You need help from a colleague.",
      answer:
        "Could you help me with my computer? It's not working properly, and I can't figure out what's wrong.",
      tip:
        "Clearly explain what the problem is after asking for help."
    },

    {
      title: "Asking for Help at Work 🧑‍💼",
      icon: <Users size={28} />,
      question:
        "You have been given a task, but you are unsure how to complete it.",
      answer:
        "Could you please help me understand this task? I'm not completely sure what I need to do.",
      tip:
        "Be specific about what you need help with instead of simply saying 'I need help.'"
    },

    {
      title: "Asking Someone to Repeat 🔄",
      icon: <MessageCircle size={28} />,
      question:
        "Someone gives you instructions, but you didn't hear everything clearly.",
      answer:
        "Sorry, could you please repeat that? I didn't hear the last part.",
      tip:
        "Use 'Could you please repeat that?' when you need someone to say something again."
    },

    {
      title: "Asking for a Small Favor 🙋",
      icon: <HandHelping size={28} />,
      question:
        "You need someone to help you carry a heavy box.",
      answer:
        "Could you do me a favor? Would you mind helping me carry this box?",
      tip:
        "Use 'Could you do me a favor?' or 'Would you mind...?' when asking someone for a favor."
    },

    {
      title: "Asking for Immediate Help ⚠️",
      icon: <AlertCircle size={28} />,
      question:
        "You have an urgent problem and need someone's help immediately.",
      answer:
        "Could you please help me right away? There's a problem with the system, and I don't know how to fix it.",
      tip:
        "Clearly explain the urgency and briefly describe the problem so the other person knows how to help."
    },

    {
      title: "Responding to an Offer of Help 😊",
      icon: <CheckCircle size={28} />,
      question:
        "Someone notices that you are struggling and asks, 'Can I help you?'",
      answer:
        "Yes, please. I could really use some help with this. Thank you so much.",
      tip:
        "When accepting help, say 'Yes, please' and explain what assistance you need."
    },

    {
      title: "Politely Refusing Help 🙏",
      icon: <MessageCircle size={28} />,
      question:
        "Someone offers to help, but you have already solved the problem.",
      answer:
        "Thank you for offering, but I think I've got it now. I really appreciate your help.",
      tip:
        "Thank the person for offering even if you don't need their help."
    },

    {
      title: "Complete Help Conversation 🌟",
      icon: <HandHelping size={28} />,
      question:
        "You are working on a project and don't understand how to use a new tool. Ask your colleague for help.",
      answer:
        "Excuse me, could you help me with this tool? I'm not sure how to use this feature. Of course. What are you trying to do? I'm trying to create a report, but I can't find the right option. I see. Let me show you how it works. That would be great. Thank you so much for your help! You're welcome. Let me know if you need anything else.",
      tip:
        "A natural help conversation follows this pattern: get attention → ask politely → explain the problem → listen to the solution → thank the person."
    }
  ];

  const phrases = [
    "Could you please help me?",
    "Excuse me, could you help me?",
    "Can you help me with this?",
    "Would you mind helping me?",
    "Could you please explain this?",
    "Could you repeat that, please?",
    "I'm not sure I understand.",
    "I'm having trouble with this.",
    "Could you show me how to do it?",
    "Would you mind showing me?",
    "I could really use some help.",
    "Thank you so much for your help."
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

            <HandHelping
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Asking for Help 🤝
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice asking for assistance clearly and politely,
            explaining problems, requesting clarification,
            and responding to offers of help.
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


          {/* Situation */}

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
              🧑 SITUATION
            </h3>

            <p className="
              text-lg
              md:text-xl
              leading-relaxed
            ">
              {current.question}
            </p>

          </div>


          {/* Sample Response */}

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
              🗣️ SAMPLE RESPONSE
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


        {/* Asking for Help Flow */}

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
            Asking for Help Conversation Flow 🤝
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
              👋 Get Attention
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🙋 Ask Politely
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ⚠️ Explain Problem
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              👂 Listen
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💡 Follow Instructions
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🙏 Say Thank You
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}