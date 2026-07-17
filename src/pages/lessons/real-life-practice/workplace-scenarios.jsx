import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function WorkplaceConversation() {


const scenarios=[

{
title:"Introducing Yourself 👋",

person:
"Hi, welcome to the team. Could you introduce yourself?",

employee:
"Hello. My name is Alex. I recently joined this company as a software developer.",

tip:
"Use simple sentences when introducing yourself."
},


{
title:"Meeting Your Manager 🧑‍💼",

person:
"How are you finding your new role?",

employee:
"I am enjoying it so far. I am learning a lot from the team.",

tip:
"Use positive expressions when talking about your experience."
},


{
title:"Asking for Help 🤝",

person:
"Can I help you with anything?",

employee:
"Yes, could you please explain this task? I am not completely sure about it.",

tip:
"Use 'Could you please...' for polite requests."
},


{
title:"Team Meeting 🗣️",

person:
"What do you think about this idea?",

employee:
"I think it is a good idea because it can save time and improve productivity.",

tip:
"Use opinion patterns: I think..., I believe..., In my opinion..."
},


{
title:"Giving an Update 📊",

person:
"Can you give me an update on your work?",

employee:
"I have completed the first part and I am working on the remaining tasks.",

tip:
"Use present perfect for completed work and present continuous for current work."
},


{
title:"Handling a Problem ⚠️",

person:
"The project deadline is very close. Are there any issues?",

employee:
"Yes, there is a small delay. I am working on solving it as soon as possible.",

tip:
"Explain problems clearly and suggest solutions."
},


{
title:"Requesting Leave 🏖️",

person:
"I need your approval for your leave request.",

employee:
"I would like to take two days off next week due to a personal reason.",

tip:
"Use 'I would like to...' for formal requests."
},


{
title:"Ending a Work Conversation 👋",

person:
"Thank you for your update.",

employee:
"You're welcome. I will keep you updated on the progress.",

tip:
"End professional conversations politely."
}

];



const [step,setStep]=useState(0);

const current=scenarios[step];



return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-indigo-950
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


<Briefcase

size={60}

className="
mx-auto
text-indigo-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

At the Workplace 💼

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Practice professional workplace conversations.

</p>


</div>








{/* Progress */}

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
"bg-indigo-600"

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

🧑‍💼 Colleague / Manager

</h3>


<p className="
text-lg
">

{current.person}

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

👨‍💻 Employee

</h3>


<p className="
text-lg
">

{current.employee}

</p>


</div>


</div>








{/* Language Tip */}

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

Professional Phrases

</h3>



<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-4
">

"Could you please help me?"

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"I would like to discuss this."

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"I have completed the task."

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"Let me check and get back to you."

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
bg-indigo-600
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
bg-indigo-500/10
border
border-indigo-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Workplace Conversation Flow

</h2>


<div className="
flex
flex-wrap
justify-center
gap-4
items-center
">


<div className="bg-slate-700 px-5 py-3 rounded-xl">
👋 Introduction
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🤝 Team Talk
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
📊 Updates
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
⚠️ Problems
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
👋 Closing
</div>


</div>


</div>







</div>

</div>

);

}