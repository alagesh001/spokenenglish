import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  ThumbsUp
} from "lucide-react";


export default function FriendlyDebate() {


const debates=[

{
title:"Remote Work vs Office Work 💻",

topic:"Is remote work better than working from an office?",

sideA:"Remote work is better because it saves travel time and gives flexibility.",

sideB:"Office work is better because people can collaborate easily.",

phrases:[
"I understand your point, but...",
"I agree to some extent, however...",
"From my perspective...",
"The reason I think this is..."
]

},


{
title:"Online Learning vs Classroom 🎓",

topic:"Can online learning replace traditional classrooms?",

sideA:"Online learning is convenient and accessible from anywhere.",

sideB:"Classrooms provide better interaction with teachers.",

phrases:[
"That is an interesting point.",
"I see what you mean, but...",
"Another factor to consider is..."
]

},


{
title:"Social Media 📱",

topic:"Is social media more helpful or harmful?",

sideA:"Social media helps people connect and share information.",

sideB:"Social media can waste time and affect mental health.",

phrases:[
"One advantage is...",
"One disadvantage is...",
"I would argue that..."
]

},


{
title:"Exercise and Health 🏋️",

topic:"Should everyone exercise regularly?",

sideA:"Exercise improves physical and mental health.",

sideB:"People have different priorities and schedules.",

phrases:[
"I strongly believe...",
"In my experience...",
"However, we should also consider..."
]

},


{
title:"AI Technology 🤖",

topic:"Will AI improve our future?",

sideA:"AI can make work faster and solve complex problems.",

sideB:"AI may replace some jobs and create challenges.",

phrases:[
"The main reason is...",
"For example...",
"I respect your opinion, but..."
]

}


];


const [step,setStep]=useState(0);

const current=debates[step];



return(

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-purple-950
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
text-purple-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

Friendly Debate Practice

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn to share opinions, disagree politely, and support ideas.

</p>


</div>









{/* Debate Rules */}

<div className="
bg-purple-500/10
border
border-purple-500
rounded-3xl
p-6
mb-10
">


<h2 className="
text-3xl
font-bold
mb-4
">

Debate Formula

</h2>


<div className="
grid
md:grid-cols-4
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-4
text-center
">

💭

<br/>

Opinion

</div>


<div className="
bg-slate-700
rounded-xl
p-4
text-center
">

➡️

<br/>

Reason

</div>


<div className="
bg-slate-700
rounded-xl
p-4
text-center
">

💡

<br/>

Example

</div>


<div className="
bg-slate-700
rounded-xl
p-4
text-center
">

🤝

<br/>

Response

</div>


</div>


</div>









{/* Progress */}

<div className="
flex
justify-center
gap-3
mb-8
flex-wrap
">


{
debates.map((d,index)=>(


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
"bg-purple-600"
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









{/* Topic */}

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

Debate Question

</h3>


<p className="
text-2xl
">

{current.topic}

</p>


</div>









{/* Two Sides */}

<div className="
grid
md:grid-cols-2
gap-6
mb-6
">


<div className="
bg-green-500/20
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-3
">

🟢 Side A

</h3>


<p>

{current.sideA}

</p>


</div>





<div className="
bg-red-500/20
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-3
">

🔴 Side B

</h3>


<p>

{current.sideB}

</p>


</div>


</div>









{/* Speaking Patterns */}

<div className="
bg-yellow-500/10
border
border-yellow-500
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-4
flex
gap-2
">

<Lightbulb/>

Useful Debate Phrases

</h3>


<div className="
space-y-3
">


{
current.phrases.map((phrase,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

💬 {phrase}

</div>


))
}


</div>


</div>









{/* Practice Activity */}

<div className="
mt-6
bg-cyan-500/10
border
border-cyan-500
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-3
flex
gap-2
">

<ThumbsUp/>

Challenge

</h3>


<p>

Pick one side. Speak for 60 seconds:
</p>


<ul className="
mt-3
space-y-2
">


<li>
1️⃣ State your opinion
</li>


<li>
2️⃣ Give one reason
</li>


<li>
3️⃣ Give an example
</li>


<li>
4️⃣ Respond to the opposite side
</li>


</ul>


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

step<debates.length-1

?

<button

onClick={()=>setStep(step+1)}

className="
bg-purple-600
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







</div>

</div>

);

}