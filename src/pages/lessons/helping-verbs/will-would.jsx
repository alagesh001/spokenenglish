import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Brain,
  CheckCircle,
  XCircle,
  ArrowRight,
  MessageCircle,
  Clock
} from "lucide-react";


export default function WillWould() {

  const [tab, setTab] = useState("will");
  const [answers, setAnswers] = useState({});


  const data = {

    will: {

      title:"WILL",
      icon:Sun,

      subtitle:
      "Future decisions, promises, and predictions",

      meaning:
      "WILL is used when we talk about the future, something we decide, promise, or expect to happen.",


      formula:
      "Subject + will + Verb (base form)",


      uses:[
        {
          title:"Future Action 🔮",
          text:"I will call you tomorrow."
        },

        {
          title:"Prediction 🌤️",
          text:"It will rain tomorrow."
        },

        {
          title:"Promise 🤝",
          text:"I will help you."
        }
      ],


      examples:[
        "I will visit my friend tomorrow.",
        "She will start a new job next month.",
        "We will win the match.",
        "I will always support you."
      ]

    },



    would: {

      title:"WOULD",
      icon:Brain,

      subtitle:
      "Polite requests, imagined situations, and future from the past",


      meaning:
      "WOULD is the past form of WILL. It is also used for polite requests and unreal situations.",


      formula:
      "Subject + would + Verb (base form)",


      uses:[

        {
          title:"Polite Future Request 🙏",
          text:"Would you help me?"
        },

        {
          title:"Imaginary Situation 💭",
          text:"I would travel the world if I had money."
        },

        {
          title:"Future in the Past 🕰️",
          text:"He said he would come."
        }

      ],


      examples:[
        "Would you like some tea?",
        "I would buy a car if I had money.",
        "She said she would call me.",
        "Would you open the door?"
      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"I ___ call you tomorrow.",
      options:["will","would"],
      answer:"will"
    },


    {
      sentence:"___ you like some coffee?",
      options:["Will","Would"],
      answer:"Would"
    },


    {
      sentence:"She said she ___ come later.",
      options:["will","would"],
      answer:"would"
    },


    {
      sentence:"I ___ help you with your work.",
      options:["will","would"],
      answer:"will"
    },


    {
      sentence:"I ___ travel more if I had time.",
      options:["will","would"],
      answer:"would"
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

<div className="
text-center
mb-10
">

<h1 className="
text-5xl
font-bold
">

WILL & WOULD

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn future, requests and imaginary situations

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
["will","would"].map(item=>(


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








{/* Sentence Structure */}


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








{/* Uses */}


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








{/* Will vs Would Comparison */}


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

WILL vs WOULD

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

WILL

</h3>


<p className="mt-3">

Future is more certain.

</p>


<p className="
mt-3
">

I will go tomorrow.

</p>


</div>





<div className="
bg-purple-500/20
border
border-purple-500
rounded-xl
p-6
">


<h3 className="
text-2xl
font-bold
">

WOULD

</h3>


<p className="mt-3">

Polite or imaginary.

</p>


<p className="
mt-3
">

I would go if I had time.

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



<div className="flex gap-3 flex-wrap">


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

☀️

<br/>

<b>WILL</b>

<br/>

Certain Future

<br/>

"I will go"

</div>



<div className="
bg-purple-500/20
rounded-xl
p-6
">

💭

<br/>

<b>WOULD</b>

<br/>

Polite / Imaginary

<br/>

"I would go"

</div>



</div>


</div>



</div>

</div>

);

}