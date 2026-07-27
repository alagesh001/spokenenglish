import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  FileWarning,
  RefreshCw,
  HandHelping
} from "lucide-react";

export default function MakingComplaints() {
  const scenarios = [
    {
      title: "Making a Polite Complaint 🗣️",
      icon: <MessageCircle size={28} />,
      question:
        "You ordered food at a restaurant, but your order has not arrived after a long time.",
      answer:
        "Excuse me, I'm sorry to bother you, but we've been waiting for our food for quite a while. Could you please check on our order?",
      tip:
        "Start politely with 'Excuse me' or 'I'm sorry to bother you' before explaining the problem."
    },

    {
      title: "Complaining About a Product 📦",
      icon: <FileWarning size={28} />,
      question:
        "You bought a product online, but it arrived damaged.",
      answer:
        "I'm afraid there's a problem with the product I received. It arrived damaged. Could you please arrange a replacement?",
      tip:
        "Use 'I'm afraid there's a problem...' to introduce a complaint in a polite and professional way."
    },

    {
      title: "Complaining About Poor Service ⚠️",
      icon: <AlertCircle size={28} />,
      question:
        "You received poor service at a hotel.",
      answer:
        "I'm sorry, but I'm not happy with the service. I requested room cleaning this morning, but nobody has come yet. Could you please look into this?",
      tip:
        "Clearly explain what happened and what you expected to happen."
    },

    {
      title: "Reporting a Problem at Work 🧑‍💼",
      icon: <AlertCircle size={28} />,
      question:
        "A computer system at work has stopped working and is affecting your tasks.",
      answer:
        "I'm having a problem with the computer system. It has stopped working, and I can't access the files I need. Could someone please take a look at it?",
      tip:
        "When making a workplace complaint, focus on the problem and its impact rather than blaming someone."
    },

    {
      title: "Complaining About Noise 🔊",
      icon: <MessageCircle size={28} />,
      question:
        "Your neighbors are making loud noise late at night.",
      answer:
        "I'm sorry to bother you, but the noise has been quite loud, especially late at night. Would you mind keeping the volume down, please?",
      tip:
        "Use 'Would you mind...?' to make a polite request when asking someone to change their behavior."
    },

    {
      title: "Complaining About a Delay ⏰",
      icon: <RefreshCw size={28} />,
      question:
        "Your delivery is several days late.",
      answer:
        "Excuse me, I was expecting my delivery a few days ago, but it still hasn't arrived. Could you please check the status of my order?",
      tip:
        "Mention the expected time and explain how long the delay has been."
    },

    {
      title: "Requesting a Refund 💳",
      icon: <HandHelping size={28} />,
      question:
        "You paid for a service that was not provided as promised.",
      answer:
        "I'm afraid the service I received wasn't what I was promised. Since the service wasn't completed, could I please get a refund?",
      tip:
        "Clearly explain why you are requesting a refund and use 'Could I please...?' for a polite request."
    },

    {
      title: "Requesting a Replacement 🔄",
      icon: <RefreshCw size={28} />,
      question:
        "You received the wrong item in your order.",
      answer:
        "I'm sorry, but I received the wrong item. I ordered a black shirt, but I received a blue one. Could you please send me the correct item?",
      tip:
        "Give specific details about what you ordered and what you actually received."
    },

    {
      title: "Following Up on a Complaint 📞",
      icon: <HelpCircle size={28} />,
      question:
        "You complained about a problem last week, but nobody has responded.",
      answer:
        "Hello, I'm calling to follow up on a complaint I made last week. I haven't received any update yet. Could you please tell me the current status?",
      tip:
        "Use 'I'm calling to follow up...' when contacting someone about an unresolved complaint."
    },

    {
      title: "Staying Calm During a Complaint 🧘",
      icon: <MessageCircle size={28} />,
      question:
        "The person you're speaking to doesn't immediately solve your problem.",
      answer:
        "I understand that these things can take time, but I would really appreciate it if you could find a solution as soon as possible.",
      tip:
        "Stay calm and focus on finding a solution. Avoid shouting, insulting, or blaming the other person."
    },

    {
      title: "Complete Complaint Conversation 🌟",
      icon: <HandHelping size={28} />,
      question:
        "You booked a hotel room, but when you arrive, the room is not ready and the staff cannot give you a clear answer.",
      answer:
        "Excuse me, I'm afraid there's a problem with my booking. I booked a room for today, but it's still not ready. I've already been waiting for over an hour. I understand, and I'm sorry about the delay. Could you please tell me how much longer I need to wait? I understand your situation, but I really need a solution. Would it be possible to give me another room or provide some alternative accommodation? Let me check what I can do. Thank you. I appreciate your help.",
      tip:
        "A natural complaint follows this pattern: explain the problem → give specific details → describe the impact → make a polite request → listen to the response → find a solution."
    }
  ];

  const phrases = [
    "Excuse me, but there's a problem.",
    "I'm afraid there's a problem with...",
    "I'm sorry, but I'm not happy with...",
    "I'd like to make a complaint.",
    "Could you please look into this?",
    "Could you please check what happened?",
    "Would you mind helping me with this?",
    "Could you please arrange a replacement?",
    "Could I please get a refund?",
    "I'd appreciate it if you could help.",
    "I'd like to speak to a manager, please.",
    "Could you please find a solution?"
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
            Making Complaints 🗣️
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice explaining problems clearly, making polite complaints,
            and requesting practical solutions.
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
            bg-red-500/10
            border
            border-red-500/30
            rounded-2xl
            p-5
            mb-5
          ">

            <h3 className="
              text-sm
              font-bold
              text-red-400
              mb-2
            ">
              ⚠️ SITUATION / PROBLEM
            </h3>

            <p className="
              text-lg
              md:text-xl
              leading-relaxed
            ">
              {current.question}
            </p>

          </div>


          {/* Sample Complaint */}

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
              🗣️ POLITE COMPLAINT / REQUEST
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
              Useful Complaint Phrases 💬
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


        {/* Complaint Conversation Flow */}

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
            Making a Complaint Flow 🗣️
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
              ⚠️ Explain Problem
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📋 Give Details
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🙋 Request Solution
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
              🤝 Resolve
            </div>

          </div>

        </div>


        {/* Golden Rule */}

        <div className="
          mt-8
          bg-green-500/10
          border
          border-green-500/30
          rounded-3xl
          p-6
          text-center
        ">

          <h3 className="
            text-xl
            font-bold
            text-green-400
            mb-2
          ">
            💡 Golden Rule
          </h3>

          <p className="
            text-slate-200
            text-lg
          ">
            Explain the problem clearly, stay calm, and focus on
            requesting a solution instead of blaming the other person.
          </p>

        </div>

      </div>

    </div>
  );
}