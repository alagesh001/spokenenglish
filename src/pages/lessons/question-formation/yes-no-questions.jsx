import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react";


export default function YesNoQuestions() {

  const [tab, setTab] = useState("be");
  const [answers, setAnswers] = useState({});


  const data = {

    be: {

      title:"BE Verb Questions",
      icon:HelpCircle,

      formula:
      "BE + Subject + Rest of sentence?",

      explanation:
      "When the sentence has am, is, or are, move BE to the beginning to make a Yes/No question.",


      examples:[
        {
          statement:"She is a doctor.",
          question:"Is she a doctor?"
        },
        {
          statement:"They are playing.",
          question:"Are they playing?"
        },
        {
          statement:"You are ready.",
          question:"Are you ready?"
        }
      ]

    },



    do:{

      title:"DO / DOES Questions",

      icon:HelpCircle,

      formula:
      "Do/Does + Subject + Verb(base form)?",

      explanation:
      "Use DO or DOES when the sentence has an action verb.",


      examples:[
        {
          statement:"You play football.",
          question:"Do you play football?"
        },
        {
          statement:"He likes coffee.",
          question:"Does he like coffee?"
        },
        {
          statement:"They work here.",
          question:"Do they work here?"
        }
      ]

    },



    did:{

      title:"DID Questions",

      icon:HelpCircle,

      formula:
      "Did + Subject + Verb(base form)?",

      explanation:
      "Use DID for past actions. The main verb returns to base form.",


      examples:[
        {
          statement:"You watched a movie.",
          question:"Did you watch a movie?"
        },
        {
          statement:"She visited Delhi.",
          question:"Did she visit Delhi?"
        },
        {
          statement:"They played cricket.",
          question:"Did they play cricket?"
        }
      ]

    },



    modal:{

      title:"Modal Verb Questions",

      icon:HelpCircle,

      formula:
      "Modal + Subject + Verb(base form)?",

      explanation:
      "Modal verbs like can, will, should, must come before the subject.",


      examples:[
        {
          statement:"You can swim.",
          question:"Can you swim?"
        },
        {
          statement:"She will come.",
          question:"Will she come?"
        },
        {
          statement:"You should study.",
          question:"Should you study?"
        }
      ]

    }

  };



  const current=data[tab];



  const questions=[

    {
      sentence:"___ you like tea?",
      options:["Do","Are"],
      answer:"Do"
    },


    {
      sentence:"___ she a teacher?",
      options:["Is","Does"],
      answer:"Is"
    },


    {
      sentence:"___ you play football yesterday?",
      options:["Did","Do"],
      answer:"Did"
    },


    {
      sentence:"___ you help me?",
      options:["Can","Are"],
      answer:"Can"
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

YES / NO QUESTIONS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn how to ask questions that have Yes or No answers

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





{/* Explanation */}


<div className="
bg-white/10
rounded-3xl
border
border-white/20
p-8
mb-8
">


<HelpCircle
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

{current.explanation}

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

Question Formula

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

Sentence Change

</h2>


<div className="
space-y-5
">


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


<div className="
text-lg
">

Normal:

<span className="
text-yellow-400
ml-2
">

{item.statement}

</span>

</div>


<div className="
flex
items-center
gap-3
my-3
">

<ArrowRight/>

</div>



<div className="
text-lg
">

Question:

<span className="
text-green-400
ml-2
font-bold
">

{item.question}

</span>

</div>



</div>


))
}


</div>


</div>









{/* Answer Pattern */}


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

Answer Pattern

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


<h3 className="
text-2xl
font-bold
">

YES Answer ✅

</h3>


<p className="mt-3">

Yes, I do.

<br/>

Yes, she is.

<br/>

Yes, they can.

</p>


</div>




<div className="
bg-red-500/20
rounded-xl
p-6
">


<h3 className="
text-2xl
font-bold
">

NO Answer ❌

</h3>


<p className="mt-3">

No, I don't.

<br/>

No, she isn't.

<br/>

No, they can't.

</p>


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

🎯 Choose the Correct Helper

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

{q.sentence}

</h3>



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
md:grid-cols-4
gap-4
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

AM / IS / ARE

<br/>

⬇️

<br/>

Is she...?

</div>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

DO / DOES

<br/>

⬇️

<br/>

Do you...?

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

DID

<br/>

⬇️

<br/>

Did you...?

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

CAN / WILL

<br/>

⬇️

<br/>

Can you...?

</div>


</div>


</div>



</div>

</div>

);

}