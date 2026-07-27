import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CloudSun,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Umbrella
} from "lucide-react";

export default function TalkingAboutWeather() {
  const scenarios = [
    {
      title: "Starting a Conversation ☀️",
      icon: <CloudSun size={28} />,
      question: "It's a beautiful day today, isn't it?",
      answer:
        "Yes, it is! The weather is really nice today. It's sunny and warm.",
      tip:
        "Weather is a common topic for starting casual conversations. You can use phrases like 'Nice day, isn't it?' or 'Beautiful weather today!'"
    },

    {
      title: "Talking About the Temperature 🌡️",
      icon: <Thermometer size={28} />,
      question: "How's the weather outside?",
      answer:
        "It's quite warm outside today. The temperature is around 30 degrees, but there's a nice breeze.",
      tip:
        "Use 'It's...' to describe the weather: 'It's warm,' 'It's cold,' or 'It's freezing.'"
    },

    {
      title: "Talking About Sunny Weather ☀️",
      icon: <Sun size={28} />,
      question: "It's so sunny today. Do you like this kind of weather?",
      answer:
        "Yes, I do. I really enjoy sunny weather because I can spend more time outdoors.",
      tip:
        "Give a reason when expressing your opinion. Try using 'because' to connect your ideas."
    },

    {
      title: "Talking About Rain 🌧️",
      icon: <CloudRain size={28} />,
      question: "Do you think it's going to rain today?",
      answer:
        "I think so. The sky is very cloudy, and it looks like it might rain later.",
      tip:
        "Use 'It looks like...' when making a prediction based on what you can see."
    },

    {
      title: "Talking About Wind 💨",
      icon: <Wind size={28} />,
      question: "It's quite windy today, isn't it?",
      answer:
        "Yes, it is. The wind is really strong today. I almost couldn't keep my umbrella open!",
      tip:
        "Use 'It's windy' to describe windy weather. You can also say 'The wind is strong.'"
    },

    {
      title: "Talking About Changing Weather 🔄",
      icon: <CloudSun size={28} />,
      question: "The weather has changed a lot this week, hasn't it?",
      answer:
        "Yes, it has. It was really hot a few days ago, but now it's much cooler and more comfortable.",
      tip:
        "Use 'It was...' to talk about past weather and 'Now it's...' to compare it with the present."
    },

    {
      title: "Talking About the Forecast ☔",
      icon: <Umbrella size={28} />,
      question: "Have you checked the weather forecast for tomorrow?",
      answer:
        "Yes. It's supposed to rain tomorrow morning, but it should be sunny in the afternoon.",
      tip:
        "Use 'It's supposed to...' when talking about what the weather forecast predicts."
    },

    {
      title: "Talking About Your Favorite Weather 🌤️",
      icon: <Sun size={28} />,
      question: "What's your favorite kind of weather?",
      answer:
        "I prefer cool and slightly cloudy weather. I don't like it when it's too hot because I feel uncomfortable.",
      tip:
        "Use 'I prefer...' or 'I like...' when talking about your weather preferences."
    },

    {
      title: "Making Plans Based on Weather 🌧️",
      icon: <CloudRain size={28} />,
      question: "Should we go for a walk this afternoon?",
      answer:
        "I'd love to, but it looks like it's going to rain. Maybe we should wait until tomorrow when the weather is better.",
      tip:
        "Use weather conditions to explain your plans. Try phrases like 'It looks like...' and 'Maybe we should...'"
    },

    {
      title: "Complete Weather Conversation 🌟",
      icon: <CloudSun size={28} />,
      question: "Hi! How's the weather today?",
      answer:
        "Hi! It's really nice today. It's sunny but not too hot, and there's a cool breeze. I heard it's supposed to rain tomorrow, though. Really? That's a shame. I was planning to go for a walk. Maybe you should go today while the weather is good. That's a good idea. I'll probably go this afternoon.",
      tip:
        "A natural weather conversation can follow this pattern: comment on the weather → share your opinion → talk about the forecast → connect the weather to your plans."
    }
  ];

  const phrases = [
    "How's the weather today?",
    "It's a beautiful day, isn't it?",
    "It's really hot today.",
    "It's quite cold outside.",
    "It's sunny and warm.",
    "It looks like it's going to rain.",
    "I think it's going to be cloudy.",
    "There's a nice breeze today.",
    "The weather has been great lately.",
    "What's the forecast for tomorrow?",
    "I prefer cool weather.",
    "I hope the weather stays nice."
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

            <CloudSun
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            Talking About the Weather 🌤️
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice making casual conversations about weather,
            sharing opinions, discussing forecasts, and making plans.
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


        {/* Weather Conversation Flow */}

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
            Casual Weather Conversation Flow 🌤️
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
              🌤️ Comment
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💬 Respond
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              😊 Share Opinion
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ☔ Discuss Forecast
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📅 Talk About Plans
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}