import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  XCircle,
  Lightbulb,
  ArrowRight,
  RotateCcw
} from "lucide-react";

export default function GuessVocabularyContext() {

  const questions = [

    {
      sentence:"Ravi was exhausted after running 10 kilometers.",
      word:"exhausted",
      options:["Very tired","Very happy","Very hungry","Very angry"],
      answer:"Very tired",
      explanation:"Running a long distance makes people tired."
    },

    {
      sentence:"The little girl was terrified when she saw the snake.",
      word:"terrified",
      options:["Very scared","Very calm","Very excited","Very sleepy"],
      answer:"Very scared",
      explanation:"Seeing a snake can make people feel scared."
    },

    {
      sentence:"The glass is fragile, so carry it carefully.",
      word:"fragile",
      options:["Easy to break","Very expensive","Heavy","Very clean"],
      answer:"Easy to break",
      explanation:"Something carried carefully usually breaks easily."
    },

    {
      sentence:"The room was enormous. It could fit 100 people.",
      word:"enormous",
      options:["Very big","Very small","Very noisy","Very dark"],
      answer:"Very big",
      explanation:"A room for 100 people must be very big."
    },

    {
      sentence:"Sara whispered because the baby was sleeping.",
      word:"whispered",
      options:["Spoke softly","Shouted","Laughed","Cried"],
      answer:"Spoke softly",
      explanation:"People speak softly near sleeping babies."
    },

    {
      sentence:"The water was freezing, so nobody wanted to swim.",
      word:"freezing",
      options:["Very cold","Very hot","Dirty","Blue"],
      answer:"Very cold",
      explanation:"People avoid swimming in very cold water."
    },

    {
      sentence:"The old bridge collapsed during the heavy rain.",
      word:"collapsed",
      options:["Fell down","Was painted","Was cleaned","Was opened"],
      answer:"Fell down",
      explanation:"Heavy rain caused the bridge to fall."
    },

    {
      sentence:"The boy was starving because he had not eaten all day.",
      word:"starving",
      options:["Very hungry","Very sleepy","Very tired","Very rich"],
      answer:"Very hungry",
      explanation:"Not eating all day makes someone very hungry."
    },

    {
      sentence:"She purchased a new laptop yesterday.",
      word:"purchased",
      options:["Bought","Lost","Sold","Fixed"],
      answer:"Bought",
      explanation:"Purchasing means buying something."
    },

    {
      sentence:"The teacher praised Rahul for his hard work.",
      word:"praised",
      options:["Complimented","Punished","Ignored","Questioned"],
      answer:"Complimented",
      explanation:"Teachers praise students for good work."
    },

    {
      sentence:"The road was crowded with hundreds of people.",
      word:"crowded",
      options:["Full of people","Empty","Clean","Dangerous"],
      answer:"Full of people",
      explanation:"Hundreds of people make a place crowded."
    },

    {
      sentence:"The children were delighted with their gifts.",
      word:"delighted",
      options:["Very happy","Very sad","Very angry","Very tired"],
      answer:"Very happy",
      explanation:"People are delighted when they receive gifts."
    },

    {
      sentence:"Please remain silent during the exam.",
      word:"silent",
      options:["Quiet","Fast","Busy","Happy"],
      answer:"Quiet",
      explanation:"Students must stay quiet during exams."
    },

    {
      sentence:"The puppy was curious and looked inside every box.",
      word:"curious",
      options:["Wanted to know more","Very sleepy","Very hungry","Very angry"],
      answer:"Wanted to know more",
      explanation:"Curious people like discovering things."
    },

    {
      sentence:"The athlete was determined to win the race.",
      word:"determined",
      options:["Strongly decided","Confused","Afraid","Lazy"],
      answer:"Strongly decided",
      explanation:"Determined people never give up easily."
    }

  ];

  const [current,setCurrent]=useState(0);
  const [selected,setSelected]=useState("");
  const [showAnswer,setShowAnswer]=useState(false);
  const [score,setScore]=useState(0);

  const q=questions[current];

  function choose(option){

    if(showAnswer) return;

    setSelected(option);
    setShowAnswer(true);

    if(option===q.answer){
      setScore(score+1);
    }

  }

  function nextQuestion(){

    setSelected("");
    setShowAnswer(false);

    setCurrent(current+1);

  }

  function restart(){

    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowAnswer(false);

  }

  if(current===questions.length){

    return(

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black flex items-center justify-center text-white">

        <div className="bg-white/10 rounded-3xl p-10 text-center w-[500px]">

          <BookOpen size={70} className="mx-auto text-cyan-400 mb-5"/>

          <h1 className="text-4xl font-bold mb-5">
            Quiz Finished
          </h1>

          <div className="text-3xl mb-8">
            Score
          </div>

          <div className="text-6xl font-bold text-green-400 mb-8">
            {score} / {questions.length}
          </div>

          <button
          onClick={restart}
          className="bg-cyan-600 px-8 py-4 rounded-xl font-bold flex gap-3 items-center mx-auto">

            <RotateCcw/>

            Restart

          </button>

        </div>

      </div>

    );

  }

  return(

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-black text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">

          <BookOpen
          size={60}
          className="mx-auto text-cyan-400 mb-5"/>

          <h1 className="text-5xl font-bold">
            Guess Vocabulary in Context
          </h1>

          <p className="text-slate-300 mt-3">
            Read the sentence and guess the meaning of the highlighted word.
          </p>

        </div>

        <div className="bg-slate-800 rounded-full h-3 overflow-hidden mb-8">

          <div

          className="bg-cyan-500 h-full"

          style={{
            width:`${((current+1)/questions.length)*100}%`
          }}

          />

        </div>

        <div className="flex justify-between mb-6 text-lg">

          <div>

            Question <b>{current+1}</b> of <b>{questions.length}</b>

          </div>

          <div>

            Score : <b>{score}</b>

          </div>

        </div>

        <motion.div

        key={current}

        initial={{opacity:0,x:40}}

        animate={{opacity:1,x:0}}

        className="bg-white/10 rounded-3xl border border-white/20 p-8"

        >

          <h2 className="text-2xl font-bold mb-6">

            What does the highlighted word mean?

          </h2>

          <div className="text-2xl leading-10 mb-8">

            {q.sentence.replace(
              q.word,
              `🔵 ${q.word.toUpperCase()}`
            )}

          </div>

          {/* Continue in Part 2 */}
                    <div className="grid md:grid-cols-2 gap-4">
            {q.options.map((option) => (
              <button
                key={option}
                onClick={() => choose(option)}
                disabled={showAnswer}
                className={`p-4 rounded-xl text-lg font-medium transition-all ${
                  showAnswer
                    ? option === q.answer
                      ? "bg-green-600 border-2 border-green-400"
                      : option === selected
                      ? "bg-red-600 border-2 border-red-400"
                      : "bg-slate-700 border border-slate-600"
                    : "bg-slate-700 hover:bg-cyan-600 border border-slate-600 hover:border-cyan-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              {selected === q.answer ? (
                <div className="bg-green-500/10 border border-green-500 rounded-2xl p-6 mb-5">
                  <div className="flex items-center gap-3 text-green-400 text-2xl font-bold">
                    <CheckCircle />
                    Correct!
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/10 border border-red-500 rounded-2xl p-6 mb-5">
                  <div className="flex items-center gap-3 text-red-400 text-2xl font-bold mb-2">
                    <XCircle />
                    Incorrect
                  </div>
                  <p className="text-slate-300">
                    Correct answer: <b className="text-green-400">{q.answer}</b>
                  </p>
                </div>
              )}

              <div className="bg-cyan-500/10 border border-cyan-500 rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 text-cyan-400 text-xl font-bold mb-3">
                  <Lightbulb />
                  Context Clue
                </div>

                <p className="text-lg text-slate-200 leading-8">
                  {q.explanation}
                </p>
              </div>

              <button
                onClick={nextQuestion}
                className="w-full bg-cyan-600 hover:bg-cyan-700 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors"
              >
                {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                <ArrowRight size={20} />
              </button>
            </motion.div>
          )}
        </motion.div>

        <div className="mt-8 bg-cyan-500/10 border border-cyan-500 rounded-3xl p-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Lightbulb className="text-cyan-400" />
            How to Guess a Word
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <div className="font-semibold">Read</div>
              <div className="text-sm text-slate-400 mt-1">Read the whole sentence.</div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <div className="font-semibold">Find Clues</div>
              <div className="text-sm text-slate-400 mt-1">Look for actions, feelings, and results.</div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <div className="font-semibold">Guess</div>
              <div className="text-sm text-slate-400 mt-1">Choose the closest meaning.</div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">4️⃣</div>
              <div className="font-semibold">Check</div>
              <div className="text-sm text-slate-400 mt-1">Compare with the explanation.</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-400">
          <p>
            Tip: Don't translate every word. Use the <span className="text-cyan-400 font-semibold">context around the word</span> to understand its meaning.
          </p>
        </div>
      </div>
    </div>
  );
}