import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircleQuestion,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";


export default function TagQuestions() {

  const [tab, setTab] = useState("positive");
  const [answers, setAnswers] = useState({});


  const data = {

    positive: {

      title:"Positive Sentence → Negative Tag",

      meaning:
      "When the main sentence is positive, the tag question becomes negative.",

      formula:
      "Positive sentence + negative helper + subject?",

      examples:[
        {
          sentence:"You are a student, aren't you?",
          explanation:
          "Sentence is positive (are), so tag becomes negative (aren't)."
        },
        {
          sentence:"She likes coffee, doesn't she?",
          explanation:
          "Main verb is likes, so use does in negative form."
        },
        {
          sentence:"They will come, won't they?",
          explanation:
          "Will becomes won't in the tag."
        }
      ]

    },


    negative: {

      title:"Negative Sentence → Positive Tag",

      meaning:
      "When the main sentence is negative, the tag question becomes positive.",

      formula:
      "Negative sentence + positive helper + subject?",

      examples:[
        {
          sentence:"You don't like tea, do you?",
          explanation:
          "Sentence is negative, so tag becomes positive."
        },
        {
          sentence:"She isn't ready, is she?",
          explanation:
          "Isn't changes to is in the tag."
        },
        {
          sentence:"They won't come, will they?",
          explanation:
          "Won't changes to will."
        }
      ]

    }

  };



  const current=data[tab];



  const questions=[

    {
      sentence:"You are happy, ___?",
      options:["aren't you","are you"],
      answer:"aren't you"
    },

    {
      sentence:"She doesn't play tennis, ___?",
      options:["does she","doesn't she"],
      answer:"does she"
    },

    {
      sentence:"They will come, ___?",
      options:["won't they","will they"],
      answer:"won't they"
    },

    {
      sentence:"He isn't a doctor, ___?",
      options:["is he","isn't he"],
      answer:"is he"
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

TAG QUESTIONS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn how to confirm information in conversations

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
item==="positive"
?
"Positive Sentence"
:
"Negative Sentence"
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



{/* Intro */}


<div className="
bg-white/10
border
border-white/20
rounded-3xl
p-8
mb-8
">


<MessageCircleQuestion
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









{/* Visual Rule */}


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

Tag Question Rule

</h2>



<div className="
flex
items-center
justify-center
gap-4
flex-wrap
">


<div className="
bg-green-500/20
border
border-green-500
rounded-xl
p-5
">

Main Sentence

</div>


<ArrowRight/>


<div className="
bg-red-500/20
border
border-red-500
rounded-xl
p-5
">

Opposite Helper

</div>


<ArrowRight/>


<div className="
bg-purple-500/20
border
border-purple-500
rounded-xl
p-5
">

Subject?

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
current.examples.map((item,index)=>(


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

{item.sentence}

</h3>


<p className="
text-slate-300
mt-3
">

💡 {item.explanation}

</p>


</div>


))
}



</div>


</div>









{/* Helper Table */}

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

Common Tag Changes

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

is → isn't

<br/>

isn't → is

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

do → don't

<br/>

don't → do

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

will → won't

<br/>

won't → will

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

🎯 Choose Correct Tag

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
checkAnswer(index,option)
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
md:grid-cols-2
gap-5
">


<div className="
bg-green-500/20
rounded-xl
p-6
">

✅ Positive Sentence

<br/>

+

<br/>

❌ Negative Tag

<br/>

"You are ready, aren't you?"

</div>




<div className="
bg-red-500/20
rounded-xl
p-6
">

❌ Negative Sentence

<br/>

+

<br/>

✅ Positive Tag

<br/>

"You aren't ready, are you?"

</div>


</div>


</div>



</div>

</div>

);

}