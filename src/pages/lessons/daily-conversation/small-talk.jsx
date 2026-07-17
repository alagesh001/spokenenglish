import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Smile,
  Users,
  Coffee,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";


export default function SmallTalkBasics() {

  const [tab, setTab] = useState("greetings");
  const [answers, setAnswers] = useState({});


  const data = {

    greetings: {

      title:"Greetings 👋",
      icon:Smile,

      meaning:
      "Greetings are used to start a conversation and make people comfortable.",


      phrases:[
        {
         situation:"Meeting someone",
          english:"Hi! Nice to meet you.",
          reply:"Nice to meet you too."
        },

        {
          situation:"Morning",
          english:"Good morning!",
          reply:"Good morning!"
        },

        {
          situation:"After a long time",
          english:"It's been a long time!",
          reply:"Yes, it has!"
        }

      ]

    },



    introduction: {

      title:"Introducing Yourself 🙋",
      icon:Users,

      meaning:
      "Use these sentences when you meet someone for the first time.",


      phrases:[

        {
          situation:"Name",
          english:"My name is Ravi.",
          reply:"Nice to meet you Ravi."
        },

        {
          situation:"Work",
          english:"I work as a software developer.",
          reply:"That's interesting!"
        },

        {
          situation:"Place",
          english:"I am from India.",
          reply:"That's great!"
        }

      ]

    },



    daily: {

      title:"Daily Conversation ☕",
      icon:Coffee,

      meaning:
      "Simple questions help continue a friendly conversation.",


      phrases:[

        {
          situation:"Asking about day",
          english:"How is your day going?",
          reply:"My day is going well."
        },

        {
          situation:"Work",
          english:"How was work today?",
          reply:"It was good."
        },

        {
          situation:"Weekend",
          english:"What are your plans for the weekend?",
          reply:"I am planning to relax."
        }

      ]

    },



    followup: {

      title:"Keeping Conversation Going 💬",
      icon:MessageCircle,

      meaning:
      "Good small talk needs follow-up questions.",


      phrases:[

        {
          situation:"Interest",
          english:"What do you like to do?",
          reply:"I like playing tennis."
        },

        {
          situation:"Opinion",
          english:"What do you think about it?",
          reply:"I think it is interesting."
        },

        {
          situation:"Experience",
          english:"Have you been there before?",
          reply:"Yes, I have."
        }

      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"When meeting someone, you say:",
      options:[
        "Nice to meet you",
        "Close the door"
      ],
      answer:"Nice to meet you"
    },


    {
      sentence:"Someone asks 'How are you?' You say:",
      options:[
        "I am good, thank you",
        "I don't know"
      ],
      answer:"I am good, thank you"
    },


    {
      sentence:"To continue a conversation, ask:",
      options:[
        "What are your hobbies?",
        "Go away"
      ],
      answer:"What are your hobbies?"
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

SMALL TALK BASICS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn how to start and continue conversations

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









{/* Conversation Flow */}

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

Conversation Flow

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
rounded-xl
p-5
">

👋 Start

</div>


<ArrowRight/>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

Ask

</div>


<ArrowRight/>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

Respond

</div>


<ArrowRight/>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

Follow Up

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

Useful Expressions

</h2>


<div className="space-y-5">


{
current.phrases.map((p,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-5
"

>


<p className="
text-yellow-400
font-bold
">

Situation: {p.situation}

</p>


<p className="
text-xl
mt-3
">

🗣️ {p.english}

</p>


<p className="
text-green-400
mt-2
">

➡️ {p.reply}

</p>


</div>


))
}


</div>


</div>









{/* Golden Rules */}

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

Small Talk Rules 🧠

</h2>


<ul className="
space-y-3
text-lg
text-slate-300
">


<li>
✅ Ask simple questions
</li>


<li>
✅ Listen and respond
</li>


<li>
✅ Share something about yourself
</li>


<li>
✅ Avoid only yes/no answers
</li>


</ul>


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

🎯 Conversation Practice

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
flex-wrap
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
Try again

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
gap-5
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

👋

<br/>

Greet

</div>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

❓

<br/>

Ask

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

💬

<br/>

Respond

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

➡️

<br/>

Continue

</div>


</div>


</div>



</div>

</div>

);

}