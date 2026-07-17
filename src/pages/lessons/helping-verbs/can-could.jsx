import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Brain,
  CheckCircle,
  XCircle,
  ArrowRight,
  CalendarDays,
  MessageCircle,
} from "lucide-react";


export default function CanCould() {

  const [tab, setTab] = useState("can");
  const [answers, setAnswers] = useState({});


  const data = {

    can: {

      title:"CAN",
      icon:Sparkles,

      subtitle:
      "Present ability, permission and possibility",

      meaning:
      "CAN is used when someone is able to do something, asks permission, or talks about something possible.",


      formula:
      "Subject + can + Verb (base form)",


      uses:[
        {
          title:"Ability 💪",
          text:"I can swim."
        },
        {
          title:"Permission 🙋",
          text:"Can I open the door?"
        },
        {
          title:"Possibility 🔮",
          text:"It can happen."
        }
      ],


      examples:[
        "I can speak English.",
        "She can drive a car.",
        "Can I use your phone?",
        "It can happen anytime."
      ]

    },




    could: {

      title:"COULD",
      icon:Brain,

      subtitle:
      "Past ability, polite requests and future possibilities",


      meaning:
      "COULD is the past form of CAN. It is also used for polite requests and uncertain future possibilities.",


      formula:
      "Subject + could + Verb (base form)",


      uses:[
        {
          title:"Past Ability 🕰️",
          text:"I could run fast when I was young."
        },
        {
          title:"Polite Request 🙏",
          text:"Could you help me?"
        },
        {
          title:"Future Possibility 🔮",
          text:"It could rain tomorrow."
        }
      ],


      examples:[
        "I could swim when I was five.",
        "Could you open the window?",
        "She could join us later.",
        "We could travel next year."
      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"I ___ play football when I was 10.",
      options:["can","could"],
      answer:"could"
    },

    {
      sentence:"She ___ speak three languages.",
      options:["can","could"],
      answer:"can"
    },


    {
      sentence:"___ you please help me?",
      options:["Can","Could"],
      answer:"Could"
    },


    {
      sentence:"It ___ rain tomorrow.",
      options:["can","could"],
      answer:"could"
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

CAN & COULD

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Modal verbs for ability, permission and possibility

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
Object.keys(data).map(item=>(


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
x:50
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-50
}}

>




{/* Intro */}

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









{/* Flow */}


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
justify-center
items-center
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









{/* COULD Future Section */}

{
tab==="could" && (

<div className="
bg-purple-500/10
border
border-purple-500
rounded-3xl
p-8
mb-8
">


<div className="
flex
items-center
gap-3
mb-5
">

<CalendarDays/>

<h2 className="
text-3xl
font-bold
">

Could for Future Possibility

</h2>

</div>



<p className="
text-slate-300
text-lg
mb-5
">

COULD means something may happen in the future,
but we are not sure.

</p>



<div className="
space-y-4
">


<div className="
bg-slate-700
rounded-xl
p-5
">

🌧️ It <b className="text-purple-400">
could rain
</b> tomorrow.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

✈️ We <b className="text-purple-400">
could travel
</b> next year.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

👩 She <b className="text-purple-400">
could join
</b> us later.

</div>


</div>


</div>

)

}









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



<div className="flex gap-3">


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

✨

<br/>

<b>CAN</b>

<br/>

Present ability

<br/>

"I can swim"

</div>



<div className="
bg-purple-500/20
rounded-xl
p-6
">

🧠

<br/>

<b>COULD</b>

<br/>

Past ability + polite request + future possibility

<br/>

"It could rain"

</div>



</div>


</div>



</div>

</div>

);

}