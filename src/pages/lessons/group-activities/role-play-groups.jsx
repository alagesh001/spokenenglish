import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Mic
} from "lucide-react";


export default function GroupRolePlay() {


const scenarios=[

{
title:"Restaurant Role Play 🍽️",

roles:[
"Customer",
"Waiter",
"Friend"
],

situation:
"You are at a restaurant with your friend. Order food, ask questions, and request the bill.",

customer:
"I would like to see the menu, please.",

waiter:
"Sure. Today's special is grilled chicken.",

friend:
"That sounds good. Let's try it.",

goal:
"Practice ordering, asking questions, and polite requests."
},



{
title:"Airport Role Play ✈️",

roles:[
"Passenger",
"Airport Staff",
"Security Officer"
],

situation:
"You are travelling abroad. Complete check-in and ask for help.",

customer:
"Excuse me, where is the check-in counter?",

waiter:
"Go straight and turn left.",

friend:
"Do you have your passport ready?",

goal:
"Practice travel conversations."
},



{
title:"Job Interview Role Play 💼",

roles:[
"Interviewer",
"Candidate",
"Observer"
],

situation:
"You are attending a job interview.",

customer:
"Tell me about yourself.",

waiter:
"I am a software developer with experience in building applications.",

friend:
"Your answer was clear and confident.",

goal:
"Practice professional speaking."
},



{
title:"Doctor Visit Role Play 🏥",

roles:[
"Doctor",
"Patient",
"Assistant"
],

situation:
"You are visiting a doctor because you are not feeling well.",

customer:
"I have been feeling sick for two days.",

waiter:
"Can you describe your symptoms?",

friend:
"Please take the medicine regularly.",

goal:
"Practice explaining problems and asking questions."
},



{
title:"Office Meeting Role Play 🏢",

roles:[
"Manager",
"Employee",
"Team Member"
],

situation:
"Discuss a project update with your team.",

customer:
"I have completed the first task.",

waiter:
"Great. What challenges did you face?",

friend:
"We can help you with the remaining work.",

goal:
"Practice workplace communication."
}


];


const [step,setStep]=useState(0);

const current=scenarios[step];



return(

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


<Users

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

Group Role Play

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Practice real conversations by acting different roles.

</p>


</div>








{/* How it works */}

<div className="
bg-indigo-500/10
border
border-indigo-500
rounded-3xl
p-6
mb-10
">


<h2 className="
text-3xl
font-bold
mb-4
">

How To Practice

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

1️⃣ Choose roles

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

2️⃣ Act the situation

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

3️⃣ Switch roles

</div>


</div>


</div>








{/* Progress */}

<div className="
flex
justify-center
gap-3
flex-wrap
mb-8
">


{
scenarios.map((s,index)=>(


<div

key={index}

className={`
w-10
h-10
rounded-full
flex
items-center
justify-center

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
text-4xl
font-bold
mb-6
">

{current.title}

</h2>








{/* Situation */}

<div className="
bg-blue-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-2
">

Situation

</h3>


<p>

{current.situation}

</p>


</div>








{/* Roles */}

<div className="
bg-purple-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-4
">

Choose Roles

</h3>



<div className="
flex
flex-wrap
gap-3
">


{
current.roles.map(role=>(


<div

key={role}

className="
bg-slate-700
px-5
py-3
rounded-xl
"

>

🎭 {role}

</div>


))
}


</div>


</div>









{/* Conversation */}

<div className="
space-y-4
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

🧑 Person 1:

<br/>

{current.customer}

</div>




<div className="
bg-yellow-500/20
rounded-xl
p-5
">

🧑 Person 2:

<br/>

{current.waiter}

</div>





<div className="
bg-blue-500/20
rounded-xl
p-5
">

🧑 Person 3:

<br/>

{current.friend}

</div>


</div>









{/* Goal */}

<div className="
mt-6
bg-cyan-500/10
border
border-cyan-500
rounded-2xl
p-5
flex
gap-3
">


<MessageCircle/>

<div>

<h3 className="
font-bold
">

Speaking Goal

</h3>


<p>

{current.goal}

</p>


</div>


</div>









{/* Challenge */}

<div className="
mt-6
bg-slate-800
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-3
">

Improvisation Challenge 🎤

</h3>


<p>

Change the conversation. Add your own questions and responses.

</p>


<div className="
mt-4
flex
gap-3
items-center
text-cyan-400
">

<Mic/>

Speak for 1 minute without stopping.

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

step<scenarios.length-1

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









{/* Practice Rules */}

<div className="
mt-10
bg-green-500/10
border
border-green-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Role Play Rules

</h2>


<ul className="
space-y-3
text-lg
">


<li>
✅ Do not read everything. Speak naturally.
</li>


<li>
✅ Change roles after each round.
</li>


<li>
✅ Add your own questions.
</li>


<li>
✅ Focus on communication, not perfection.
</li>


</ul>


</div>






</div>

</div>

);

}