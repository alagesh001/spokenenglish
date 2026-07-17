import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function DoctorConversation() {


const scenarios=[

{
title:"Making an Appointment 📞",

doctor:
"Hello. How can I help you?",

patient:
"I would like to make an appointment with the doctor, please.",

tip:
"Use 'I would like to...' for polite requests."
},


{
title:"Explaining the Problem 🤒",

doctor:
"What seems to be the problem?",

patient:
"I have a headache and a sore throat.",

tip:
"Use 'I have...' to describe symptoms."
},


{
title:"Talking About Duration ⏳",

doctor:
"How long have you had these symptoms?",

patient:
"I have had this problem for three days.",

tip:
"Use 'for' for a period of time."
},


{
title:"Describing Pain 😣",

doctor:
"Where does it hurt?",

patient:
"My back hurts, especially when I move.",

tip:
"Describe the location and type of pain clearly."
},


{
title:"Doctor Examination 🩺",

doctor:
"I will check your temperature and blood pressure.",

patient:
"Okay, doctor. Please go ahead.",

tip:
"Respond politely during an examination."
},


{
title:"Talking About Medicine 💊",

doctor:
"You should take this medicine twice a day.",

patient:
"How many days should I take it?",

tip:
"Ask questions when you need more information."
},


{
title:"Giving Medical History 📋",

doctor:
"Do you have any allergies?",

patient:
"Yes, I am allergic to some medicines.",

tip:
"Be clear when sharing important information."
},


{
title:"Ending the Visit 👋",

doctor:
"Take rest and come back if you do not feel better.",

patient:
"Thank you, doctor. I will follow your advice.",

tip:
"End conversations politely."
}


];


const [step,setStep]=useState(0);

const current=scenarios[step];



return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-emerald-950
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


<Stethoscope

size={60}

className="
mx-auto
text-emerald-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

At the Doctor's 🩺

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Practice a complete doctor visit conversation.

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
"bg-emerald-600"

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







{/* Doctor */}

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

👨‍⚕️ Doctor

</h3>


<p className="
text-lg
">

{current.doctor}

</p>


</div>







{/* Patient */}


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

🧑 Patient

</h3>


<p className="
text-lg
">

{current.patient}

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







{/* Useful phrases */}

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

Useful Doctor Visit Phrases

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

"I don't feel well."

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"I have a fever."

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"How often should I take this medicine?"

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"Are there any side effects?"

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
bg-emerald-600
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
bg-emerald-500/10
border
border-emerald-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Doctor Visit Flow

</h2>


<div className="
flex
flex-wrap
justify-center
gap-4
items-center
">


<div className="bg-slate-700 px-5 py-3 rounded-xl">
📞 Appointment
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🤒 Symptoms
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
🩺 Check-up
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
💊 Medicine
</div>


<ArrowRight/>


<div className="bg-slate-700 px-5 py-3 rounded-xl">
👋 Follow-up
</div>


</div>


</div>







</div>

</div>

);

}