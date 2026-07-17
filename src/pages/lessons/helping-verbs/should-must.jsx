import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";


export default function ShouldMust() {

  const [tab, setTab] = useState("should");
  const [answers, setAnswers] = useState({});


  const data = {

    should: {

      title:"SHOULD",
      icon:ShieldCheck,

      subtitle:
      "Advice, recommendations, and things that are a good idea",

      meaning:
      "SHOULD is used when we give advice or say what is the right thing to do. It is not a strong rule.",


      formula:
      "Subject + should + Verb (base form)",


      uses:[
        {
          title:"Advice 💡",
          text:"You should drink more water."
        },

        {
          title:"Recommendation 👍",
          text:"You should watch this movie."
        },

        {
          title:"Expected Action ⏰",
          text:"The bus should arrive soon."
        }

      ],


      examples:[
        "You should exercise every day.",
        "She should study for the exam.",
        "We should help others.",
        "You should see a doctor."
      ]

    },



    must: {

      title:"MUST",
      icon:AlertTriangle,

      subtitle:
      "Strong necessity, rules, and obligations",


      meaning:
      "MUST is used when something is very important, necessary, or required.",


      formula:
      "Subject + must + Verb (base form)",


      uses:[

        {
          title:"Strong Rule 🚨",
          text:"You must wear a helmet."
        },

        {
          title:"Necessity ⭐",
          text:"I must finish my work."
        },

        {
          title:"Strong Advice ⚠️",
          text:"You must visit this place."
        }

      ],


      examples:[
        "You must follow the rules.",
        "I must complete this project.",
        "Students must wear uniforms.",
        "You must take your medicine."
      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"You ___ drink enough water.",
      options:["should","must"],
      answer:"should"
    },

    {
      sentence:"You ___ stop at a red light.",
      options:["should","must"],
      answer:"must"
    },

    {
      sentence:"I ___ complete this work today.",
      options:["should","must"],
      answer:"must"
    },

    {
      sentence:"You ___ try this restaurant.",
      options:["should","must"],
      answer:"should"
    },

    {
      sentence:"Visitors ___ show their ID card.",
      options:["should","must"],
      answer:"must"
    }

  ];



  function checkAnswer(index,option){

    setAnswers({
      ...answers,
      [index]:option
    });

  }



return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-blue-950
to-black
text-white
p-8
">


<div className="
max-w-6xl
mx-auto
">



{/* Header */}

<div className="
text-center
mb-10
">


<h1 className="
text-5xl
font-bold
">

SHOULD & MUST

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn advice, rules and necessity

</p>


</div>






{/* Tabs */}

<div className="
flex
justify-center
gap-5
mb-10
">


{
["should","must"].map(item=>(


<button

key={item}

onClick={()=>setTab(item)}

className={`
px-10
py-4
rounded-xl
text-xl
font-bold

${
tab===item
?
"bg-cyan-600"
:
"bg-slate-700"
}

`}

>

{item.toUpperCase()}

</button>


))
}


</div>







<AnimatePresence mode="wait">


<motion.div

key={tab}

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-40
}}

>



{/* Introduction */}

<div className="
bg-white/10
border
border-white/20
rounded-3xl
p-8
mb-8
">


<Icon
size={60}
className="
text-cyan-400
mb-5
"
/>


<h2 className="
text-4xl
font-bold
">

{current.title}

</h2>


<p className="
text-xl
text-slate-300
mt-4
">

{current.meaning}

</p>


</div>








{/* Formula */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Formula

</h2>


<div className="
bg-cyan-500/20
border
border-cyan-500
rounded-xl
p-5
text-center
text-2xl
font-bold
">

{current.formula}

</div>


</div>








{/* Sentence Pattern */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

Sentence Pattern

</h2>


<div className="
flex
items-center
justify-center
gap-4
flex-wrap
">


<div className="
bg-slate-700
rounded-xl
p-5
">

Subject

</div>


<ArrowRight/>


<div className="
bg-cyan-600
rounded-xl
p-5
font-bold
">

{current.title}

</div>


<ArrowRight/>


<div className="
bg-slate-700
rounded-xl
p-5
">

Verb

</div>


</div>


</div>








{/* Usage */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

When do we use it?

</h2>


<div className="
grid
md:grid-cols-3
gap-5
">


{
current.uses.map((u,i)=>(


<div

key={i}

className="
bg-slate-700
rounded-xl
p-5
"

>

<h3 className="
text-xl
font-bold
">

{u.title}

</h3>


<p className="
text-slate-300
mt-3
">

{u.text}

</p>


</div>


))
}


</div>


</div>







{/* Difference */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

SHOULD vs MUST

</h2>


<div className="
grid
md:grid-cols-2
gap-5
">


<div className="
bg-green-500/20
border
border-green-500
rounded-xl
p-6
">


<h3 className="
text-2xl
font-bold
">

SHOULD 💡

</h3>


<p className="mt-3">

Good idea but not compulsory.

</p>


<p className="mt-3">

"You should exercise."

</p>


</div>





<div className="
bg-red-500/20
border
border-red-500
rounded-xl
p-6
">


<h3 className="
text-2xl
font-bold
">

MUST 🚨

</h3>


<p className="mt-3">

Necessary or required.

</p>


<p className="mt-3">

"You must wear a helmet."

</p>


</div>


</div>


</div>








{/* Examples */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Examples

</h2>


<div className="space-y-4">


{
current.examples.map((e,i)=>(


<div

key={i}

className="
bg-blue-500/20
border
border-blue-500
rounded-xl
p-5
text-xl
"

>

{e}

</div>


))
}


</div>


</div>








{/* Quiz */}

<div className="
bg-slate-800
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

🎯 Practice

</h2>


{
questions.map((q,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-5
mb-5
"

>


<p className="
text-lg
mb-4
">

{q.sentence}

</p>



<div className="
flex
gap-3
">


{
q.options.map(option=>(


<button

key={option}

onClick={()=>checkAnswer(index,option)}

className="
bg-slate-600
hover:bg-cyan-600
px-5
py-3
rounded-xl
"

>

{option}

</button>


))
}


</div>





{
answers[index] && (

<div className="mt-4">


{
answers[index]===q.answer

?

<div className="
text-green-400
flex
gap-2
">

<CheckCircle/>
Correct

</div>


:

<div className="
text-red-400
flex
gap-2
">

<XCircle/>
Answer: {q.answer}

</div>


}


</div>

)

}



</div>


))
}


</div>






</motion.div>


</AnimatePresence>









{/* Memory */}

<div className="
mt-8
bg-cyan-500/10
border
border-cyan-500
rounded-3xl
p-8
text-center
">


<h2 className="
text-3xl
font-bold
mb-6
">

Remember 🧠

</h2>



<div className="
grid
md:grid-cols-2
gap-5
">


<div className="
bg-green-500/20
rounded-xl
p-6
">

💡

<br/>

<b>SHOULD</b>

<br/>

Good idea / Advice

<br/>

"You should sleep early."

</div>




<div className="
bg-red-500/20
rounded-xl
p-6
">

🚨

<br/>

<b>MUST</b>

<br/>

Rule / Necessity

<br/>

"You must wear a helmet."

</div>



</div>


</div>



</div>

</div>

);

}