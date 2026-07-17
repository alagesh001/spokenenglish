import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Zap,
  Backpack,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";


export default function BeDoHave() {

  const [tab, setTab] = useState("be");
  const [selected, setSelected] = useState(null);


  const data = {

    be: {
      title: "BE Verb",
      icon: User,
      color: "green",
      meaning:
        "BE tells about a person's state, identity, or an action happening now.",

      forms: [
        "am",
        "is",
        "are",
        "was",
        "were"
      ],

      examples: [
        "I am happy.",
        "She is a doctor.",
        "They are playing football."
      ]
    },


    do: {
      title: "DO Verb",
      icon: Zap,
      color: "yellow",
      meaning:
        "DO helps us make questions, negative sentences, and shows actions.",

      forms:[
        "do",
        "does",
        "did"
      ],

      examples:[
        "Do you like coffee?",
        "She does not watch TV.",
        "Did you call me?"
      ]
    },


    have:{
      title:"HAVE Verb",
      icon:Backpack,
      color:"blue",

      meaning:
        "HAVE shows possession and helps to create perfect tenses.",

      forms:[
        "have",
        "has",
        "had"
      ],

      examples:[
        "I have a car.",
        "She has a book.",
        "They have finished the work."
      ]
    }

  };


  const current=data[tab];

  const Icon=current.icon;



  const questions=[

    {
      q:"She ___ a teacher.",
      options:["am","is","are"],
      answer:"is"
    },

    {
      q:"___ you play football?",
      options:["Do","Is","Have"],
      answer:"Do"
    },

    {
      q:"I ___ completed my homework.",
      options:["have","do","am"],
      answer:"have"
    },

    {
      q:"They ___ playing cricket.",
      options:["are","do","has"],
      answer:"are"
    }

  ];



return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-purple-950
to-black
text-white
p-8
">


<div className="
max-w-6xl
mx-auto
">


{/* Header */}

<div className="text-center mb-10">


<h1 className="
text-5xl
font-bold
">

BE • DO • HAVE

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Core Auxiliary Verbs

</p>


</div>





{/* Tabs */}


<div className="
flex
justify-center
gap-4
flex-wrap
mb-10
">


{
Object.keys(data).map(item=>(

<button

key={item}

onClick={()=>setTab(item)}

className={`
px-8
py-4
rounded-xl
font-bold
capitalize

${
tab===item
?
"bg-cyan-600"
:
"bg-slate-700"
}

`}

>

{item}

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


{/* Main Card */}


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
className="text-cyan-400 mb-5"
/>


<h2 className="
text-4xl
font-bold
mb-4
">

{current.title}

</h2>


<p className="
text-xl
text-slate-300
">

{current.meaning}

</p>


</div>







{/* Forms */}


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

Forms

</h2>


<div className="
flex
gap-4
flex-wrap
">


{
current.forms.map(x=>(

<div

key={x}

className="
bg-cyan-500/20
border
border-cyan-500
rounded-xl
px-6
py-3
text-xl
font-bold
"

>

{x}

</div>

))
}


</div>


</div>









{/* Visual Explanation */}


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

How it works

</h2>


<div className="
flex
items-center
justify-center
gap-5
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
">

{current.forms[0]}

</div>


<ArrowRight/>


<div className="
bg-slate-700
rounded-xl
p-5
">

Information

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
bg-slate-700
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






{/* Practice */}


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

🎯 Choose the Correct Verb

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


<h3 className="
text-xl
mb-4
">

{q.q}

</h3>



<div className="
flex
gap-3
flex-wrap
">

{
q.options.map(option=>(


<button

key={option}

onClick={()=>setSelected(option)}

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
selected && (

<div className="mt-4">


{
selected===q.answer
?

<div className="
text-green-400
flex
gap-2
">

<CheckCircle/>

Correct!

</div>


:

<div className="
text-red-400
flex
gap-2
">

<XCircle/>

Correct answer: {q.answer}

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
md:grid-cols-3
gap-5
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

🧍

<br/>

<b>BE</b>

<br/>

Being / State

</div>



<div className="
bg-yellow-500/20
rounded-xl
p-5
">

⚡

<br/>

<b>DO</b>

<br/>

Actions / Questions

</div>



<div className="
bg-blue-500/20
rounded-xl
p-5
">

🎒

<br/>

<b>HAVE</b>

<br/>

Possession / Completed Actions

</div>


</div>


</div>



</div>

</div>

);

}