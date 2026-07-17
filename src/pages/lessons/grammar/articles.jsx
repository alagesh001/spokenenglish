import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  XCircle,
  RotateCcw,
  Lightbulb
} from "lucide-react";

export default function ArticlesLesson() {

  const questions = [

    {
      sentence:"I have ___ apple.",
      answer:"an",
      explanation:"Apple starts with the vowel sound 'a', so use 'an'."
    },

    {
      sentence:"She has ___ dog.",
      answer:"a",
      explanation:"Dog starts with the consonant sound 'd', so use 'a'."
    },

    {
      sentence:"___ sun rises in the east.",
      answer:"the",
      explanation:"There is only one sun, so we use 'the'."
    },

    {
      sentence:"He bought ___ umbrella.",
      answer:"an",
      explanation:"Umbrella begins with a vowel sound."
    },

    {
      sentence:"I saw ___ elephant at the zoo.",
      answer:"an",
      explanation:"Elephant starts with a vowel sound."
    },

    {
      sentence:"She is reading ___ book.",
      answer:"a",
      explanation:"Book starts with a consonant sound."
    },

    {
      sentence:"___ moon looks beautiful tonight.",
      answer:"the",
      explanation:"There is only one moon."
    },

    {
      sentence:"He is ___ engineer.",
      answer:"an",
      explanation:"Engineer starts with a vowel sound."
    },

    {
      sentence:"They live in ___ small house.",
      answer:"a",
      explanation:"Small starts with a consonant sound."
    },

    {
      sentence:"Please close ___ door.",
      answer:"the",
      explanation:"We are talking about a specific door."
    }

  ];

  const [current,setCurrent]=useState(0);
  const [selected,setSelected]=useState("");
  const [show,setShow]=useState(false);
  const [score,setScore]=useState(0);

  const q=questions[current];

  function choose(option){

    if(show) return;

    setSelected(option);
    setShow(true);

    if(option===q.answer){
      setScore(score+1);
    }

  }

  function next(){

    setSelected("");
    setShow(false);

    if(current<questions.length-1){
      setCurrent(current+1);
    }else{
      setCurrent(questions.length);
    }

  }

  function restart(){

    setCurrent(0);
    setSelected("");
    setShow(false);
    setScore(0);

  }

  if(current===questions.length){

    return(

<div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">

<div className="bg-white/10 rounded-3xl p-10 text-center w-[450px]">

<BookOpen size={70} className="mx-auto text-cyan-400 mb-5"/>

<h1 className="text-4xl font-bold mb-4">

Quiz Finished

</h1>

<div className="text-5xl font-bold text-green-400 mb-8">

{score} / {questions.length}

</div>

<button

onClick={restart}

className="bg-cyan-600 px-8 py-4 rounded-xl flex gap-3 items-center mx-auto"

>

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

{/* Header */}

<div className="text-center mb-10">

<BookOpen size={60} className="mx-auto text-cyan-400 mb-4"/>

<h1 className="text-5xl font-bold">

A • An • The

</h1>

<p className="text-slate-300 mt-4 text-lg">

Learn when to use articles correctly.

</p>

</div>

{/* Rules */}

<div className="grid md:grid-cols-3 gap-6 mb-10">

<div className="bg-blue-500/20 rounded-2xl p-6">

<h2 className="text-3xl font-bold mb-4">A</h2>

<p className="text-slate-300">

Use <b>a</b> before words that begin with a consonant sound.

</p>

<div className="mt-4 bg-slate-800 rounded-xl p-3">

✔ a cat<br/>
✔ a boy<br/>
✔ a house

</div>

</div>

<div className="bg-green-500/20 rounded-2xl p-6">

<h2 className="text-3xl font-bold mb-4">An</h2>

<p className="text-slate-300">

Use <b>an</b> before words that begin with a vowel sound.

</p>

<div className="mt-4 bg-slate-800 rounded-xl p-3">

✔ an apple<br/>
✔ an elephant<br/>
✔ an umbrella

</div>

</div>

<div className="bg-purple-500/20 rounded-2xl p-6">

<h2 className="text-3xl font-bold mb-4">The</h2>

<p className="text-slate-300">

Use <b>the</b> for something specific or one of a kind.

</p>

<div className="mt-4 bg-slate-800 rounded-xl p-3">

✔ the sun<br/>
✔ the moon<br/>
✔ the teacher

</div>

</div>

</div>

{/* Formula */}

<div className="bg-cyan-500/10 border border-cyan-500 rounded-3xl p-6 mb-10">

<div className="flex justify-center gap-6 flex-wrap text-xl">

<div className="bg-slate-700 px-5 py-3 rounded-xl">

Consonant → <b>A</b>

</div>

<div className="bg-slate-700 px-5 py-3 rounded-xl">

Vowel Sound → <b>AN</b>

</div>

<div className="bg-slate-700 px-5 py-3 rounded-xl">

Specific → <b>THE</b>

</div>

</div>

</div>

{/* Quiz */}

<motion.div

key={current}

initial={{opacity:0,x:40}}

animate={{opacity:1,x:0}}

className="bg-white/10 rounded-3xl border border-white/20 p-8"

>

<div className="flex justify-between mb-6">

<div>

Question {current+1} / {questions.length}

</div>

<div>

Score : {score}

</div>

</div>

<h2 className="text-3xl mb-8">

{q.sentence}

</h2>

<div className="flex gap-5 flex-wrap">

{["a","an","the"].map(option=>(

<button

key={option}

disabled={show}

onClick={()=>choose(option)}

className={`
px-8
py-4
rounded-xl
font-bold

${
show

?

option===q.answer

?

"bg-green-600"

:

option===selected

?

"bg-red-600"

:

"bg-slate-700"

:

"bg-slate-700 hover:bg-cyan-600"

}

`}

>

{option}

</button>

))}

</div>

{show&&(

<div className="mt-8">

<div className="flex items-center gap-3 text-2xl font-bold">

{

selected===q.answer

?

<>

<CheckCircle className="text-green-400"/>

<span className="text-green-400">

Correct

</span>

</>

:

<>

<XCircle className="text-red-400"/>

<span className="text-red-400">

Incorrect

</span>

</>

}

</div>

<div className="mt-6 bg-cyan-500/10 border border-cyan-500 rounded-2xl p-5">

<div className="flex gap-3 items-center text-cyan-400 font-bold text-xl mb-3">

<Lightbulb/>

Explanation

</div>

{q.explanation}

</div>

<button

onClick={next}

className="mt-6 bg-cyan-600 px-8 py-4 rounded-xl"

>

Next Question →

</button>

</div>

)}

</motion.div>

</div>

</div>

  );

}