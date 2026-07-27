import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Clock,
  Phone,
  RefreshCw,
  XCircle,
  MapPin
} from "lucide-react";

export default function MakingAppointments() {
  const scenarios = [
    {
      title: "Making an Appointment 📅",
      icon: <CalendarDays size={28} />,
      question: "I'd like to make an appointment. Is that possible?",
      answer:
        "Of course. What would you like to make an appointment for?",
      tip:
        "Use 'I'd like to make an appointment' when you want to schedule a meeting or visit."
    },

    {
      title: "Explaining the Reason 🗣️",
      icon: <MessageCircle size={28} />,
      question: "What would you like to make an appointment for?",
      answer:
        "I'd like to make an appointment with the doctor for a regular check-up.",
      tip:
        "Use 'I'd like to...' to clearly explain the purpose of your appointment."
    },

    {
      title: "Choosing a Date 📆",
      icon: <CalendarDays size={28} />,
      question: "When would you like to come in?",
      answer:
        "I'd like to come in next Monday, if possible. Do you have any appointments available that day?",
      tip:
        "Use 'I'd like to...' and 'Do you have anything available...?' when asking about available dates."
    },

    {
      title: "Choosing a Time 🕐",
      icon: <Clock size={28} />,
      question: "We have an appointment available at 10 a.m. Does that work for you?",
      answer:
        "Yes, 10 a.m. works perfectly for me. Could you please book that time?",
      tip:
        "Use 'Does that work for you?' to check if a suggested time is convenient."
    },

    {
      title: "Confirming the Details ✅",
      icon: <CheckCircle size={28} />,
      question: "So, your appointment is next Monday at 10 a.m. Is that correct?",
      answer:
        "Yes, that's correct. My appointment is next Monday at 10 a.m. Thank you.",
      tip:
        "Repeat the date and time to make sure all the appointment details are correct."
    },

    {
      title: "Changing an Appointment 🔄",
      icon: <RefreshCw size={28} />,
      question: "I'd like to change my appointment. Is that possible?",
      answer:
        "Yes, I'd like to reschedule my appointment from Monday to Wednesday, if possible.",
      tip:
        "Use 'I'd like to reschedule...' when you want to change the date or time of an appointment."
    },

    {
      title: "Finding Another Time 🕐",
      icon: <Clock size={28} />,
      question: "Unfortunately, Wednesday is fully booked. Would Thursday work for you?",
      answer:
        "Yes, Thursday works for me. Do you have anything available in the afternoon?",
      tip:
        "Use 'Would... work for you?' and 'Do you have anything available...?' to find another suitable time."
    },

    {
      title: "Cancelling an Appointment ❌",
      icon: <XCircle size={28} />,
      question: "I'd like to cancel my appointment. What should I do?",
      answer:
        "I'd like to cancel my appointment for tomorrow at 10 a.m. I'm sorry, but I won't be able to attend.",
      tip:
        "Be clear and polite when cancelling. You can say 'I'd like to cancel...' or 'I won't be able to attend.'"
    },

    {
      title: "Asking to Reschedule 📅",
      icon: <RefreshCw size={28} />,
      question: "Why do you need to cancel the appointment?",
      answer:
        "Something unexpected has come up, so I can't make it tomorrow. Could I reschedule it for next week?",
      tip:
        "Use 'Something has come up' when you need to explain that an unexpected situation has changed your plans."
    },

    {
      title: "Appointment Location 📍",
      icon: <MapPin size={28} />,
      question: "Could you tell me where the appointment will take place?",
      answer:
        "Sure. Your appointment will be at our main office on Park Street, next to the city library.",
      tip:
        "Use 'Could you tell me where...?' when politely asking for location information."
    },

    {
      title: "Complete Appointment Conversation 🌟",
      icon: <CalendarDays size={28} />,
      question: "I'd like to make an appointment for next week.",
      answer:
        "Of course. What day would you prefer? I'd prefer Wednesday. We have an appointment available at 3 p.m. Does that work for you? Yes, that's perfect. Could you please book it for me? Certainly. Your appointment is next Wednesday at 3 p.m. Thank you. You're welcome. We look forward to seeing you.",
      tip:
        "A natural appointment conversation follows this pattern: explain the reason → choose a date → choose a time → confirm the details."
    }
  ];

  const phrases = [
    "I'd like to make an appointment.",
    "I'd like to schedule an appointment.",
    "Is there anything available on...?",
    "What time would be convenient?",
    "Does that work for you?",
    "Could you please book that time?",
    "I'd like to reschedule my appointment.",
    "Could we change the appointment to...?",
    "Something has come up.",
    "I won't be able to attend.",
    "I'd like to cancel my appointment.",
    "Could I reschedule it for next week?"
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
            Making Appointments 📅
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice scheduling appointments, choosing a suitable
            time, changing plans, and cancelling politely.
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
              🧑 CONVERSATION
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


        {/* Appointment Flow */}

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
            Appointment Conversation Flow 📅
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
              📞 Request
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📅 Choose Date
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🕐 Choose Time
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

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🔄 Reschedule
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ❌ Cancel
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}