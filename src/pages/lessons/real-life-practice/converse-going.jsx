import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Users,
  Smile,
  Lightbulb,
  Repeat,
  MessageSquare
} from "lucide-react";

export default function KeepingConversationGoing() {
  const scenarios = [
    {
      title: "Asking a Follow-Up Question 🔄",
      icon: <MessageCircle size={28} />,
      question:
        "Someone tells you, 'I went to Goa last weekend.' How can you continue the conversation?",
      answer:
        "Oh, that's nice! What did you do there? Did you enjoy your trip?",
      tip:
        "Ask a question about something the other person has just mentioned. This shows interest and naturally keeps the conversation going."
    },

    {
      title: "Showing Interest 😊",
      icon: <Smile size={28} />,
      question:
        "Your friend says, 'I've started learning to play the guitar.'",
      answer:
        "Really? That's interesting! How long have you been learning? What kind of music do you like to play?",
      tip:
        "Use expressions like 'Really?', 'That's interesting!' and 'Tell me more' to show genuine interest."
    },

    {
      title: "Asking for More Details 🔍",
      icon: <HelpCircle size={28} />,
      question:
        "Someone says, 'I watched a really good movie yesterday.'",
      answer:
        "Oh, really? What movie did you watch? What did you like about it?",
      tip:
        "Ask 'What?', 'Where?', 'When?', 'Who?', or 'Why?' questions to encourage the other person to give more details."
    },

    {
      title: "Talking About Hobbies 🎨",
      icon: <Lightbulb size={28} />,
      question:
        "You discover that someone enjoys photography.",
      answer:
        "That's interesting! What kind of things do you like to photograph? Do you usually take photos with your phone or a camera?",
      tip:
        "When discussing hobbies, ask about preferences, experiences, and how often the person does the activity."
    },

    {
      title: "Connecting to Their Story 🤝",
      icon: <Users size={28} />,
      question:
        "Someone tells you they recently started going to the gym.",
      answer:
        "Oh, I go to the gym too! How often do you go? What kind of exercises do you usually do?",
      tip:
        "Connect their experience to something you know or have experienced. This creates a natural opportunity for more conversation."
    },

    {
      title: "Changing the Topic Naturally 🔄",
      icon: <Repeat size={28} />,
      question:
        "The current topic is coming to an end, and you want to talk about something else.",
      answer:
        "That reminds me, have you made any plans for the weekend?",
      tip:
        "Use phrases like 'That reminds me...' or 'By the way...' to smoothly introduce a new topic."
    },

    {
      title: "Avoiding One-Word Answers 💬",
      icon: <MessageSquare size={28} />,
      question:
        "Someone asks, 'Did you have a good weekend?'",
      answer:
        "Yes, I did! I went out with some friends and we tried a new restaurant. How about you? What did you do?",
      tip:
        "Don't answer with only 'Yes' or 'No.' Add one extra detail and ask a question back."
    },

    {
      title: "Keeping a Conversation Going at Work 🧑‍💼",
      icon: <Users size={28} />,
      question:
        "Your colleague says, 'I'm working on a new project this week.'",
      answer:
        "Oh, really? What is the project about? Is it something similar to what you worked on before?",
      tip:
        "At work, ask open-ended questions about projects, experiences, and responsibilities to continue professional conversations."
    },

    {
      title: "Responding When You Don't Know What to Say 🤔",
      icon: <HelpCircle size={28} />,
      question:
        "The other person finishes speaking, and you aren't sure how to continue.",
      answer:
        "That's interesting. I've never thought about it that way. What made you feel that way?",
      tip:
        "Use a short reaction followed by a question. This gives you time to think while keeping the conversation moving."
    },

    {
      title: "Using Open-Ended Questions ❓",
      icon: <MessageCircle size={28} />,
      question:
        "You want someone to talk more about their recent holiday.",
      answer:
        "How was your holiday? What was the most interesting thing you did there?",
      tip:
        "Open-ended questions beginning with 'How,' 'What,' or 'Why' usually encourage longer answers than questions with only 'Yes' or 'No' answers."
    },

    {
      title: "Complete Conversation Flow 🌟",
      icon: <Users size={28} />,
      question:
        "You meet someone new at a social event. Start a conversation, ask follow-up questions, share something about yourself, and smoothly change the topic.",
      answer:
        "Hi! How do you know the host? Oh, you've worked with him for a few years? That's interesting. What kind of work do you do? I work in software development. I really enjoy it. What do you like most about your job? That sounds great. By the way, have you traveled anywhere recently? I went to Jaipur last month. It was a really interesting trip. Have you ever been there?",
      tip:
        "A natural conversation often follows this pattern: ask → listen → react → ask a follow-up → share something about yourself → ask another question → change the topic naturally."
    }
  ];

  const phrases = [
    "Really? Tell me more.",
    "That's interesting!",
    "How about you?",
    "What happened next?",
    "What was that like?",
    "How did you feel about it?",
    "What made you decide to do that?",
    "How long have you been doing that?",
    "What do you like about it?",
    "That reminds me...",
    "By the way, have you...?",
    "I've never thought about it that way."
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
            Keeping a Conversation Going 💬
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Learn how to ask follow-up questions, show interest,
            share your own experiences, and avoid awkward silence.
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
              💬 CONVERSATION SITUATION
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
                Conversation Tip
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
              Conversation-Saving Phrases 💬
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
            Keep the Conversation Going 🔄
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
              👂 Listen
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              😊 React
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ❓ Ask
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🗣️ Share
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🔄 Follow Up
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💬 Continue
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
            Listen carefully, react naturally, ask a follow-up question,
            and share something about yourself. A good conversation is
            a two-way exchange, not an interview.
          </p>

        </div>

      </div>

    </div>
  );
}