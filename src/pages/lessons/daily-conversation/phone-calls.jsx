import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  User,
  MessageCircle,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";


export default function PhoneCallBasics() {

  const [tab, setTab] = useState("starting");
  const [answers, setAnswers] = useState({});


  const data = {

    starting: {

      title:"Starting a Phone Call 📞",
      icon:Phone,

      meaning:
      "Learn how to greet someone and introduce yourself on a phone call.",


      dialogue:[

        {
          person:"Caller",
          text:"Hello, this is Ravi speaking."
        },

        {
          person:"Receiver",
          text:"Hi Ravi. How can I help you?"
        },

        {
          person:"Caller",
          text:"I would like to ask about your service."
        }

      ]

    },



    asking: {

      title:"Asking for Someone",

      icon:User,

      meaning:
      "Use polite sentences when you want to speak with a person.",


      dialogue:[

        {
          person:"Caller",
          text:"Hello, may I speak with Mr Kumar?"
        },

        {
          person:"Receiver",
          text:"Sure, please hold for a moment."
        },

        {
          person:"Caller",
          text:"Thank you."
        }

      ]

    },



    information: {

      title:"Giving Information",

      icon:MessageCircle,

      meaning:
      "Learn how to provide details clearly during a call.",


      dialogue:[

        {
          person:"Customer",
          text:"I am calling regarding my order."
        },

        {
          person:"Agent",
          text:"Could you please share your order number?"
        },

        {
          person:"Customer",
          text:"Yes, my order number is 12345."
        }

      ]

    },



    ending: {

      title:"Ending a Phone Call",

      icon:Phone,

      meaning:
      "End conversations politely and professionally.",


      dialogue:[

        {
          person:"Caller",
          text:"Thank you for your help."
        },

        {
          person:"Receiver",
          text:"You're welcome."
        },

        {
          person:"Caller",
          text:"Have a nice day. Goodbye."
        }

      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"You want to start a call. You say:",
      options:[
        "Hello, this is Ravi speaking.",
        "Give me your phone."
      ],
      answer:"Hello, this is Ravi speaking."
    },


    {
      sentence:"You want to talk to someone:",
      options:[
        "May I speak with Mr Kumar?",
        "Where are you going?"
      ],
      answer:"May I speak with Mr Kumar?"
    },


    {
      sentence:"Someone helps you. You say:",
      options:[
        "Thank you for your help.",
        "Don't talk."
      ],
      answer:"Thank you for your help."
    },


    {
      sentence:"You need someone to wait:",
      options:[
        "Please hold for a moment.",
        "Close the call."
      ],
      answer:"Please hold for a moment."
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

PHONE CALL ENGLISH

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn real-life telephone conversations

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

Phone Conversation Flow

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

📞 Call

</div>


<ArrowRight/>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

👋 Introduce

</div>


<ArrowRight/>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

💬 Talk

</div>


<ArrowRight/>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

👋 End

</div>


</div>


</div>









{/* Dialogue */}

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

Example Phone Conversation

</h2>


<div className="
space-y-4
">


{
current.dialogue.map((d,index)=>(


<div

key={index}

className={`
rounded-xl
p-5

${
d.person.includes("Caller") ||
d.person.includes("Customer")
?
"bg-blue-500/20"
:
"bg-green-500/20"
}

`}

>


<h3 className="
font-bold
text-xl
">

{
d.person==="Caller"
?
"📞 Caller"
:
"👤 "+d.person
}

</h3>


<p className="
mt-2
text-lg
">

{d.text}

</p>


</div>


))
}



</div>


</div>









{/* Useful Sentences */}

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

Useful Phone Expressions

</h2>



<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 Hello, this is ___ speaking.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 May I speak with ___?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 Could you repeat that, please?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 Please hold for a moment.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 I will call you back.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📞 Thank you for your time.

</div>


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

🎯 Phone Call Practice

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

Phone Call Formula 🧠

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

📞

<br/>

Start

</div>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

👤

<br/>

Identify

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

💬

<br/>

Explain

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

👋

<br/>

Close

</div>


</div>


</div>




</div>

</div>

);

}