import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  CheckCircle,
  XCircle,
  Sparkles
} from "lucide-react";


export default function IndirectQuestions() {

  const [tab, setTab] = useState("direct");
  const [answers, setAnswers] = useState({});


  const data = {

    direct: {

      title:"Direct Questions",

      icon:MessageCircle,

      meaning:
      "Direct questions ask information in a simple and direct way. They are common with friends and casual conversations.",


      formula:
      "Question word + Helping verb + Subject + Verb?",


      examples:[

        {
          direct:"Where is the station?",
          polite:""
        },

        {
          direct:"What is your name?",
          polite:""
        },

        {
          direct:"Can you help me?",
          polite:""
        }

      ]

    },



    indirect: {

      title:"Indirect Questions",

      icon:Sparkles,

      meaning:
      "Indirect questions are softer and more polite. We use them when speaking to strangers, teachers, customers, or in formal situations.",


      formula:
      "Polite phrase + Question word + Subject + Verb",


      examples:[

        {
          direct:"Where is the bank?",
          polite:"Could you tell me where the bank is?"
        },

        {
          direct:"What is your name?",
          polite:"May I know what your name is?"
        },

        {
          direct:"Can you help me?",
          polite:"Could you please help me?"
        }

      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"Could you tell me ___ the station is?",
      options:["where","where is"],
      answer:"where"
    },

    {
      sentence:"Do you know ___ he lives?",
      options:["where","where does"],
      answer:"where"
    },

    {
      sentence:"Could you tell me ___ your name is?",
      options:["what","what is"],
      answer:"what"
    },

    {
      sentence:"Do you know ___ they are coming?",
      options:["when","when are"],
      answer:"when"
    }

  ];



  function selectAnswer(index,option){

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

POLITE INDIRECT QUESTIONS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Ask questions politely and naturally

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
px-8
py-4
rounded-xl
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

{
item==="direct"
?
"Direct"
:
"Indirect"
}

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

Structure

</h2>


<div className="
bg-cyan-500/20
border
border-cyan-500
rounded-xl
p-5
text-center
text-xl
font-bold
">

{current.formula}

</div>


</div>









{/* Transformation */}

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

Change Direct → Polite

</h2>



<div className="
space-y-5
">


{

data.indirect.examples.map((item,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-5
"

>


<div className="
text-lg
">

❌ Direct:

<span className="
text-yellow-400
ml-2
">

{item.direct}

</span>

</div>



<ArrowRight
className="
my-3
"
/>



<div className="
text-lg
">

✅ Indirect:

<span className="
text-green-400
ml-2
">

{item.polite}

</span>

</div>



</div>


))

}


</div>


</div>









{/* Important Rule */}

<div className="
bg-purple-500/10
border
border-purple-500
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Important Rule 🧠

</h2>


<p className="
text-xl
text-slate-300
">

In indirect questions, the sentence order changes.

</p>



<div className="
grid
md:grid-cols-2
gap-5
mt-6
">


<div className="
bg-red-500/20
rounded-xl
p-5
">

❌ Direct

<br/>

Where <b>is</b> he?

</div>


<div className="
bg-green-500/20
rounded-xl
p-5
">

✅ Indirect

<br/>

Do you know where he <b>is</b>?

</div>


</div>


</div>









{/* Polite Words */}

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

Polite Starting Phrases

</h2>



<div className="
grid
md:grid-cols-3
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-5
">

Could you tell me...

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

Do you know...

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

May I know...

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

Would you mind telling me...

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

I would like to know...

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

Can you tell me...

</div>


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

🎯 Choose Correct Form

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
text-xl
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

onClick={()=>
selectAnswer(index,option)
}

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
md:grid-cols-3
gap-5
">


<div className="
bg-red-500/20
rounded-xl
p-6
">

Direct

<br/>

Where is he?

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-6
">

Polite Starter

<br/>

Could you tell me...

</div>


<div className="
bg-green-500/20
rounded-xl
p-6
">

Indirect

<br/>

where he is?

</div>


</div>


</div>




</div>

</div>

);

}