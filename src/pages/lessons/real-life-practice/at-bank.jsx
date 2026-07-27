import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  MessageCircle,
  CreditCard,
  Wallet,
  FileText,
  HelpCircle,
  DollarSign,
  LockKeyhole,
  Smartphone
} from "lucide-react";

export default function AtABank() {
  const scenarios = [
    {
      title: "Opening a Bank Account 🏦",
      icon: <Landmark size={28} />,
      question:
        "You want to open a new bank account. Ask a bank employee for information.",
      answer:
        "Good morning. I'd like to open a bank account. Could you please tell me what documents I need?",
      tip:
        "Use 'I'd like to...' when politely explaining what you want to do."
    },

    {
      title: "Asking About Account Types 💳",
      icon: <HelpCircle size={28} />,
      question:
        "You want to know what types of accounts the bank offers.",
      answer:
        "Could you please tell me what types of accounts you offer? I'm looking for an account with low fees.",
      tip:
        "Use 'Could you please tell me...?' when asking a bank employee for information."
    },

    {
      title: "Making a Deposit 💵",
      icon: <DollarSign size={28} />,
      question:
        "You want to deposit money into your bank account.",
      answer:
        "I'd like to make a deposit, please. Could you tell me where I need to fill out the deposit form?",
      tip:
        "Use 'I'd like to make a deposit' to clearly explain your banking request."
    },

    {
      title: "Withdrawing Money 💰",
      icon: <Wallet size={28} />,
      question:
        "You need to withdraw money from your account.",
      answer:
        "I'd like to withdraw some money from my account, please. What do I need to do?",
      tip:
        "Use 'I'd like to withdraw...' when requesting money from your bank account."
    },

    {
      title: "Asking About Your Balance 📊",
      icon: <Wallet size={28} />,
      question:
        "You want to know how much money is currently in your account.",
      answer:
        "Excuse me, could you please check my account balance for me?",
      tip:
        "Use 'Could you please check...?' when politely asking a bank employee to look up information."
    },

    {
      title: "Getting a Bank Card 💳",
      icon: <CreditCard size={28} />,
      question:
        "You have opened an account and need a debit card.",
      answer:
        "I've recently opened an account, and I'd like to get a debit card. How can I apply for one?",
      tip:
        "Use 'How can I apply for...?' when asking about the process of getting a bank service."
    },

    {
      title: "Reporting a Lost Card 🚨",
      icon: <LockKeyhole size={28} />,
      question:
        "You have lost your bank card and need to report it immediately.",
      answer:
        "I've lost my bank card. Could you please block it and help me order a replacement?",
      tip:
        "When reporting a lost card, clearly explain the problem and immediately ask what action should be taken."
    },

    {
      title: "Problem with an ATM 🏧",
      icon: <HelpCircle size={28} />,
      question:
        "An ATM did not give you the money you requested, but your account was charged.",
      answer:
        "Excuse me, I tried to withdraw money from the ATM, but I didn't receive any cash. However, the amount has been deducted from my account. Could you please help me?",
      tip:
        "Explain exactly what happened and mention any important details, such as money being deducted from your account."
    },

    {
      title: "Making an Online Banking Request 📱",
      icon: <Smartphone size={28} />,
      question:
        "You want to start using online banking but don't know how to register.",
      answer:
        "I'd like to set up online banking. Could you please explain how I can register?",
      tip:
        "Use 'Could you please explain how...?' when asking someone to guide you through a process."
    },

    {
      title: "Asking About a Bank Transfer 🔄",
      icon: <FileText size={28} />,
      question:
        "You sent a bank transfer, but the money has not reached the recipient.",
      answer:
        "I made a bank transfer yesterday, but the recipient hasn't received the money yet. Could you please check the status of the transfer?",
      tip:
        "Use the present perfect, 'hasn't received,' to describe something that was expected but has not happened yet."
    },

    {
      title: "Asking About Bank Fees 💵",
      icon: <DollarSign size={28} />,
      question:
        "You want to know if the bank charges a fee for an international transfer.",
      answer:
        "Could you please tell me how much you charge for international transfers? Are there any additional fees?",
      tip:
        "Use 'Are there any additional fees?' to ask about extra costs clearly and politely."
    },

    {
      title: "Complete Bank Conversation 🌟",
      icon: <Landmark size={28} />,
      question:
        "You visit a bank to open an account, ask about fees, get a debit card, and set up online banking.",
      answer:
        "Good morning. I'd like to open a bank account. Certainly. What type of account are you interested in? I'm looking for a basic account with low fees. Could you please tell me what documents I need? You'll need your identification and proof of address. Thank you. I'd also like to get a debit card. How can I apply for one? We can process that for you today. Great. I'd also like to set up online banking. Could you please explain how I can register? Of course. I'll help you set it up. Thank you very much for your help.",
      tip:
        "A natural bank conversation follows this pattern: explain your purpose → ask questions → provide documents → complete the request → confirm the next steps → thank the staff."
    }
  ];

  const phrases = [
    "I'd like to open a bank account.",
    "Could you please tell me what I need?",
    "I'd like to make a deposit.",
    "I'd like to withdraw some money.",
    "Could you check my account balance?",
    "How can I apply for a debit card?",
    "I've lost my bank card.",
    "Could you please block my card?",
    "I'd like to order a replacement card.",
    "Could you help me with this transaction?",
    "Are there any additional fees?",
    "Could you please explain how this works?"
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

            <Landmark
              size={45}
              className="text-indigo-400"
            />

          </div>

          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
          ">
            At a Bank 🏦
          </h1>

          <p className="
            text-slate-300
            mt-4
            text-lg
            max-w-2xl
            mx-auto
          ">
            Practice communicating with bank staff, opening accounts,
            making transactions, solving problems, and asking about
            banking services.
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
              🏦 BANKING SITUATION
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
              🗣️ SAMPLE CONVERSATION
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
              Useful Banking Phrases 💬
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


        {/* Banking Conversation Flow */}

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
            Banking Conversation Flow 🏦
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
              👋 Greet Staff
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🎯 Explain Purpose
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              ❓ Ask Questions
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              📄 Provide Documents
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              💳 Complete Transaction
            </div>

            <ArrowRight size={20} />

            <div className="
              bg-slate-700
              px-5
              py-3
              rounded-xl
            ">
              🙏 Thank Staff
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
            💡 Banking Conversation Tip
          </h3>

          <p className="
            text-slate-200
            text-lg
          ">
            Be clear about what you need, ask questions politely,
            and always confirm important details before completing
            a banking transaction.
          </p>

        </div>

      </div>

    </div>
  );
}