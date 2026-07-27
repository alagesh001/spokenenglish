import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  HelpCircle,
  Users
} from "lucide-react";

export default function ExpressingOpinions() {
  const scenarios = [
    {
      title: "Giving Your Opinion 💭",
      icon: <MessageCircle size={28} />,
      question: "What do you think about online learning?",
      answer:
        "I think online learning is very useful because it allows students to learn from anywhere.",
      tip:
        "Use 'I think...' when you want to introduce your personal opinion."
    },

    {
      title: "Explaining Why 🤔",
      icon: <Lightbulb size={28} />,
      question: "Why do you think online learning is useful?",
      answer:
        "I think it is useful because students can study at their own pace and access lessons whenever they want.",
      tip:
        "Use 'because' to explain the reason behind your opinion."
    },

    {
      title: "Agreeing With Someone 👍",
      icon: <ThumbsUp size={28} />,
      question: "I think learning English through conversation is the best way to improve speaking skills.",
      answer:
        "I completely agree. I think speaking regularly helps learners become more confident.",
      tip:
        "Use 'I agree,' 'I completely agree,' or 'That's a good point' when you share the same opinion."
    },

    {
      title: "Partly Agreeing 🤝",
      icon: <Users size={28} />,
      question: "I think working from home is always better than working in an office.",
      answer:
        "I agree to some extent, but I think it depends on the type of work. Some jobs are easier to do in an office.",
      tip:
        "Use 'I agree to some extent' or 'It depends' when you agree with only part of someone's opinion."
    },

    {
      title: "Disagreeing Politely 👎",
      icon: <ThumbsDown size={28} />,
      question: "I think social media is bad for everyone.",
      answer:
        "I understand your point, but I don't completely agree. I think social media can be useful if people use it responsibly.",
      tip:
        "When disagreeing, be polite. Try 'I understand your point, but...' instead of simply saying 'You're wrong.'"
    },

    {
      title: "Giving a Strong Opinion 💪",
      icon: <MessageCircle size={28} />,
      question: "What do you think about regular exercise?",
      answer:
        "In my opinion, regular exercise is extremely important because it helps people stay healthy and reduces stress.",
      tip:
        "Use 'In my opinion...' to introduce a clear personal viewpoint."
    },

    {
      title: "Comparing Opinions ⚖️",
      icon: <HelpCircle size={28} />,
      question: "Which is better: studying alone or studying with a group?",
      answer:
        "Personally, I prefer studying with a group because we can share ideas and help each other. However, studying alone can be better when I need to concentrate.",
      tip:
        "Use 'Personally, I prefer...' to express your preference and explain your reasons."
    },

    {
      title: "Asking Someone's Opinion ❓",
      icon: <HelpCircle size={28} />,
      question: "What do you think about this idea?",
      answer:
        "I think it's a good idea. It could save us time and make the process more efficient. What do you think?",
      tip:
        "Use 'What do you think?' or 'What's your opinion?' to invite someone else to share their thoughts."
    },

    {
      title: "Changing Your Opinion 🔄",
      icon: <Lightbulb size={28} />,
      question: "Did you always think that learning English was important?",
      answer:
        "Not really. I used to think it wasn't necessary, but I've changed my mind because English is useful for work, travel, and communication.",
      tip:
        "Use 'I used to think...' and 'I've changed my mind' when explaining how your opinion has changed."
    },

    {
      title: "Complete Opinion Conversation 🌟",
      icon: <MessageCircle size={28} />,
      question: "What do you think about working from home?",
      answer:
        "In my opinion, working from home has many advantages because it saves commuting time and gives people more flexibility. I agree, but I think it can sometimes be difficult to communicate with your team. That's a good point. I think it depends on the person and the type of job. Exactly. So, overall, I think working from home is a good option, but it isn't suitable for everyone.",
      tip:
        "A natural opinion conversation follows this pattern: give your opinion → explain why → agree or disagree → give another reason → reach a balanced conclusion."
    }
  ];

  const phrases = [
    "I think...",
    "I believe...",
    "In my opinion...",
    "In my view...",
    "Personally, I think...",
    "I feel that...",
    "I completely agree.",
    "That's a good point.",
    "I agree to some extent.",
    "It depends on the situation.",
    "I understand your point, but...",
    "I don't completely agree."
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
            Expressing Opinions 💭
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice sharing your opinions, explaining your reasons,
            agreeing, disagreeing politely, and discussing different views.
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


          {/* Question / Opinion Prompt */}

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
              🧑 OPINION PROMPT
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
              Useful Opinion Phrases 💬
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


        {/* Opinion Conversation Flow */}

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
            Opinion Conversation Flow 💭
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
              💭 Give Opinion
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💡 Explain Why
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
              🌟 Conclude
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}