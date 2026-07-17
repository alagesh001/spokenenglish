import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function AirportConversation() {

  const scenarios = [

    {
      title:"At the Check-in Counter 🎫",

      staff:
      "Good morning. May I see your passport and ticket?",

      passenger:
      "Good morning. Here is my passport and ticket.",

      tip:
      "Use polite greetings and give your documents when requested."
    },


    {
      title:"Checking Baggage 🧳",

      staff:
      "How many bags are you checking in?",

      passenger:
      "I have one suitcase and one hand bag.",

      tip:
      "Use 'I have...' when talking about your belongings."
    },


    {
      title:"Choosing a Seat 💺",

      staff:
      "Would you like a window seat or an aisle seat?",

      passenger:
      "I would like a window seat, please.",

      tip:
      "Use 'I would like...' for polite requests."
    },


    {
      title:"Security Check 🔍",

      officer:
      "Please remove your laptop and liquids from your bag.",

      passenger:
      "Sure. I will remove them now.",

      tip:
      "Follow instructions and respond politely."
    },


    {
      title:"Finding the Gate 🚪",

      staff:
      "Your boarding gate is Gate 25. Boarding starts in 30 minutes.",

      passenger:
      "Thank you. Could you tell me where Gate 25 is?",

      tip:
      "Use 'Could you tell me...?' when asking for information."
    },


    {
      title:"Boarding the Flight ✈️",

      staff:
      "May I see your boarding pass?",

      passenger:
      "Sure. Here is my boarding pass.",

      tip:
      "Keep your travel documents ready."
    },


    {
      title:"Lost Baggage Problem 🧳",

      staff:
      "How can I help you?",

      passenger:
      "My baggage is missing. Could you please help me find it?",

      tip:
      "Explain problems clearly and ask politely for help."
    },


    {
      title:"Asking During Flight ☁️",

      staff:
      "Would you like something to drink?",

      passenger:
      "Yes, please. Could I have some water?",

      tip:
      "Use 'Could I have...?' for polite requests."
    }


  ];



  const [step,setStep]=useState(0);

  const current=scenarios[step];



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
max-w-5xl
mx-auto
">


{/* Header */}

<div className="
text-center
mb-10
">


<Plane
size={60}
className="
mx-auto
text-cyan-400
mb-4
"
/>


<h1 className="
text-5xl
font-bold
">

At the Airport ✈️

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Practice a complete airport conversation.

</p>


</div>






{/* Steps */}

<div className="
flex
flex-wrap
justify-center
gap-3
mb-10
">


{
scenarios.map((item,index)=>(

<div

key={index}

className={`
px-4
py-2
rounded-xl

${
index===step

?
"bg-cyan-600"

:

index<step

?
"bg-green-600"

:

"bg-slate-700"

}

`}

>

{index+1}

</div>

))
}


</div>






<motion.div

key={step}

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

className="
bg-white/10
border
border-white/20
rounded-3xl
p-8
"

>


<h2 className="
text-3xl
font-bold
mb-8
">

{current.title}

</h2>





{/* Conversation */}


<div className="
space-y-5
">


<div className="
bg-green-500/20
rounded-2xl
p-5
">


<h3 className="
text-xl
font-bold
mb-2
">

👨‍✈️ Airport Staff

</h3>


<p className="
text-lg
">

{current.staff || current.officer}

</p>


</div>





<div className="
bg-blue-500/20
rounded-2xl
p-5
">


<h3 className="
text-xl
font-bold
mb-2
">

🧑 Passenger

</h3>


<p className="
text-lg
">

{current.passenger}

</p>


</div>


</div>







{/* Tip */}

<div className="
mt-8
bg-cyan-500/10
border
border-cyan-500
rounded-2xl
p-5
flex
gap-3
">


<MessageCircle
className="text-cyan-400"
/>


<div>

<h3 className="
font-bold
">

Language Tip

</h3>


<p>

{current.tip}

</p>


</div>


</div>







{/* Useful Phrases */}

<div className="
mt-8
bg-slate-800
rounded-2xl
p-6
">


<h3 className="
text-2xl
font-bold
mb-4
">

Useful Airport Phrases

</h3>


<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-slate-700
p-4
rounded-xl
">

"Where is the check-in counter?"

</div>


<div className="
bg-slate-700
p-4
rounded-xl
">

"Can I have a window seat?"

</div>


<div className="
bg-slate-700
p-4
rounded-xl
">

"Where is my boarding gate?"

</div>


<div className="
bg-slate-700
p-4
rounded-xl
">

"My baggage is missing."

</div>


</div>


</div>






{/* Navigation */}

<div className="
flex
justify-between
mt-8
">


<button

disabled={step===0}

onClick={()=>setStep(step-1)}

className="
bg-slate-700
px-6
py-3
rounded-xl
disabled:opacity-40
"

>

Previous

</button>





{

step < scenarios.length-1

?

<button

onClick={()=>setStep(step+1)}

className="
bg-cyan-600
px-6
py-3
rounded-xl
flex
gap-2
items-center
"

>

Next

<ArrowRight/>

</button>


:

<div className="
bg-green-600
px-6
py-3
rounded-xl
flex
gap-2
items-center
">

<CheckCircle/>

Completed

</div>


}



</div>




</motion.div>






{/* Flow */}

<div className="
mt-10
bg-blue-500/10
border
border-blue-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Airport Journey Flow

</h2>


<div className="
flex
flex-wrap
justify-center
gap-4
items-center
">


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🎫 Check-in
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🧳 Baggage
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🔍 Security
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🚪 Gate
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
✈️ Boarding
</div>


</div>


</div>



</div>

</div>

  );
}