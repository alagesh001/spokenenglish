import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  CalendarDays,
  PartyPopper,
  Clock,
  MapPin,
  XCircle
} from "lucide-react";

export default function InvitingSomeone() {
  const scenarios = [
    {
      title: "Inviting Someone to an Event 🎉",
      icon: <PartyPopper size={28} />,
      question: "What are you doing this Saturday?",
      answer:
        "I'm having a small party at my house this Saturday. Would you like to come?",
      tip:
        "Use 'Would you like to...?' to make a polite invitation."
    },

    {
      title: "Inviting a Friend for Dinner 🍽️",
      icon: <Mail size={28} />,
      question: "Would you like to have dinner with me tonight?",
      answer:
        "Sure! I'd love to. What time should we meet?",
      tip:
        "When accepting an invitation, you can say 'I'd love to' or 'That sounds great!'"
    },

    {
      title: "Inviting Someone to the Movies 🎬",
      icon: <PartyPopper size={28} />,
      question: "There's a new movie coming out this weekend. Would you like to watch it with me?",
      answer:
        "That sounds great! I'd love to watch it. When are you free?",
      tip:
        "Use 'Would you like to...?' or 'Do you want to...?' for casual invitations."
    },

    {
      title: "Inviting Someone to a Birthday Party 🎂",
      icon: <PartyPopper size={28} />,
      question: "Are you free next Sunday?",
      answer:
        "Yes, I think so. Why do you ask?",
      tip:
        "You can first check if someone is available before giving them an invitation."
    },

    {
      title: "Giving the Invitation Details 📅",
      icon: <CalendarDays size={28} />,
      question: "So, what is the plan for your birthday?",
      answer:
        "I'm having a birthday party at my house next Sunday. It starts at 6 o'clock in the evening. I'd really like you to come.",
      tip:
        "When inviting someone, include important details such as the event, date, time, and place."
    },

    {
      title: "Accepting an Invitation ✅",
      icon: <CheckCircle size={28} />,
      question: "Would you like to join us for dinner on Saturday?",
      answer:
        "Yes, definitely! Thanks for inviting me. I'd be happy to join you.",
      tip:
        "Show enthusiasm when accepting an invitation with phrases like 'I'd love to' or 'I'd be happy to.'"
    },

    {
      title: "Politely Declining an Invitation ❌",
      icon: <XCircle size={28} />,
      question: "Would you like to come to my party this weekend?",
      answer:
        "Thank you for inviting me. I'd really like to come, but unfortunately, I already have plans that day.",
      tip:
        "When declining, thank the person for the invitation and give a brief reason if appropriate."
    },

    {
      title: "Suggesting Another Time 🔄",
      icon: <Clock size={28} />,
      question: "Would you like to meet for coffee tomorrow afternoon?",
      answer:
        "I'd love to, but I'm busy tomorrow afternoon. Could we meet on Saturday instead?",
      tip:
        "If you cannot accept the suggested time, politely suggest another time or day."
    },

    {
      title: "Confirming the Invitation 📍",
      icon: <MapPin size={28} />,
      question: "Are we still meeting at the restaurant on Saturday?",
      answer:
        "Yes, that's right. We're meeting at 7 o'clock at the Italian restaurant near the city center. I'll see you there!",
      tip:
        "Confirm the important details of an invitation, such as the time and place."
    },

    {
      title: "Complete Invitation Conversation 🌟",
      icon: <PartyPopper size={28} />,
      question: "Would you like to come to my birthday party this Saturday?",
      answer:
        "I'd love to! Thanks for inviting me. What time does it start? The party starts at 7 o'clock at my house. Great! I'll definitely be there. Should I bring anything? No, don't worry. Just bring yourself. Sounds good! I'm looking forward to it.",
      tip:
        "A natural invitation conversation follows this pattern: invite someone → respond → discuss details → accept or decline → confirm the plan."
    }
  ];

  const phrases = [
    "Would you like to...?",
    "Do you want to...?",
    "Would you like to come?",
    "I'd love to!",
    "That sounds great!",
    "I'd be happy to.",
    "Thanks for inviting me.",
    "I'd really like to come.",
    "Unfortunately, I can't make it.",
    "I'm sorry, I already have plans.",
    "Could we meet another day?",
    "I'm looking forward to it!"
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

            <Mail
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Inviting Someone 💌
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice inviting people, accepting invitations,
            politely declining, and responding naturally.
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
              🧑 INVITATION / QUESTION
            </h3>

            <p className="
              text-lg
              md:text-xl
              leading-relaxed
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


        {/* Invitation Flow */}

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
            Invitation Conversation Flow 💌
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
              💌 Invite
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🗣️ Respond
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📅 Discuss Details
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ✅ Accept
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ❌ Decline
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🤝 Confirm
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}