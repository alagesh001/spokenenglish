import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  Search,
  MapPin,
  Clock,
  User,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";


export default function WHQuestions() {

  const [tab, setTab] = useState("what");
  const [answers, setAnswers] = useState({});


  const data = {

    what:{
      title:"WHAT",
      icon:Search,

      meaning:
      "WHAT asks about things, actions, objects, or information.",

      formula:
      "WH word + Helping verb + Subject + Verb?",

      examples:[
        {
          question:"What do you eat?",
          answer:"I eat rice."
        },
        {
          question:"What is your name?",
          answer:"My name is Ravi."
        },
        {
          question:"What are you doing?",
          answer:"I am studying."
        }
      ]

    },


    where:{
      title:"WHERE",
      icon:MapPin,

      meaning:
      "WHERE asks about places or locations.",

      formula:
      "Where + Helping verb + Subject + Verb?",

      examples:[
        {
          question:"Where do you live?",
          answer:"I live in Delhi."
        },
        {
          question:"Where is my phone?",
          answer:"It is on the table."
        },
        {
          question:"Where are they going?",
          answer:"They are going to school."
        }
      ]

    },


    when:{
      title:"WHEN",
      icon:Clock,

      meaning:
      "WHEN asks about time or a specific moment.",

      formula:
      "When + Helping verb + Subject + Verb?",

      examples:[
        {
          question:"When do you wake up?",
          answer:"I wake up at 6 AM."
        },
        {
          question:"When is your birthday?",
          answer:"My birthday is in May."
        },
        {
          question:"When will you come?",
          answer:"I will come tomorrow."
        }
      ]

    },


    who:{
      title:"WHO",
      icon:User,

      meaning:
      "WHO asks about people.",

      formula:
      "Who + Verb + Object?",

      examples:[
        {
          question:"Who is your teacher?",
          answer:"Mr Kumar is my teacher."
        },
        {
          question:"Who called you?",
          answer:"My friend called me."
        },
        {
          question:"Who is coming today?",
          answer:"Ravi is coming."
        }
      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"___ is your name?",
      options:["What","Where"],
      answer:"What"
    },

    {
      sentence:"___ do you live?",
      options:["When","Where"],
      answer:"Where"
    },

    {
      sentence:"___ do you wake up?",
      options:["Who","When"],
      answer:"When"
    },

    {
      sentence:"___ is your best friend?",
      options:["Who","What"],
      answer:"Who"
    },

    {
      sentence:"___ are you doing?",
      options:["What","Where"],
      answer:"What"
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

WH QUESTIONS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn how to ask information questions

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
px-7
py-3
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
text-xl
font-bold
">

{current.formula}

</div>


</div>









{/* Visual Structure */}


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

Question Structure

</h2>



<div className="
flex
items-center
justify-center
gap-4
flex-wrap
">


<div className="
bg-purple-600
rounded-xl
p-5
font-bold
">

WH Word

</div>


<ArrowRight/>


<div className="
bg-slate-700
rounded-xl
p-5
">

Helping Verb

</div>


<ArrowRight/>


<div className="
bg-slate-700
rounded-xl
p-5
">

Subject + Verb

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


<div className="space-y-5">


{
current.examples.map((e,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-5
"

>


<h3 className="
text-xl
text-cyan-400
font-bold
">

❓ {e.question}

</h3>


<p className="
mt-3
text-green-400
">

✅ {e.answer}

</p>


</div>


))
}


</div>


</div>









{/* WH Word Map */}

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

Remember WH Words

</h2>



<div className="
grid
md:grid-cols-5
gap-4
">


<div className="
bg-blue-500/20
rounded-xl
p-5
text-center
">

WHAT

<br/>

Thing

</div>


<div className="
bg-green-500/20
rounded-xl
p-5
text-center
">

WHERE

<br/>

Place

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
text-center
">

WHEN

<br/>

Time

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
text-center
">

WHO

<br/>

Person

</div>


<div className="
bg-red-500/20
rounded-xl
p-5
text-center
">

WHY

<br/>

Reason

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

🎯 Choose Correct WH Word

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



<div className="flex gap-3">


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

Memory Trick 🧠

</h2>



<div className="
grid
md:grid-cols-4
gap-5
">


<div className="
bg-blue-500/20
rounded-xl
p-5
">

WHAT

<br/>

📦 Thing

</div>


<div className="
bg-green-500/20
rounded-xl
p-5
">

WHERE

<br/>

📍 Place

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

WHEN

<br/>

⏰ Time

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

WHO

<br/>

👤 Person

</div>


</div>


</div>



</div>

</div>

);

}