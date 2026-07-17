import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Volume2
} from "lucide-react";


export default function SpeakingChunks() {


const chunks=[

{
title:"Starting a Conversation 👋",

chunk:"How are you doing?",

meaning:"A natural way to ask someone how they are.",

example:"Hey John, how are you doing?",

practice:[
"How are you doing?",
"How is everything going?",
"How have you been?"
]

},


{
title:"Giving Your Opinion 💭",

chunk:"I think that...",

meaning:"Use this when sharing your thoughts.",

example:"I think that learning English takes practice.",

practice:[
"I think that this is useful.",
"I believe that this idea works.",
"In my opinion, it is better."
]

},


{
title:"Buying Time While Speaking ⏳",

chunk:"Let me think about that.",

meaning:"Used when you need time to answer.",

example:"Let me think about that. I need more information.",

practice:[
"Let me think.",
"That's a good question.",
"Give me a moment."
]

},


{
title:"Agreeing With Someone 👍",

chunk:"I totally agree with you.",

meaning:"A natural way to show agreement.",

example:"I totally agree with you. Practice is important.",

practice:[
"I agree with you.",
"Exactly!",
"That makes sense."
]

},


{
title:"Disagreeing Politely 🤝",

chunk:"I see your point, but...",

meaning:"A polite way to disagree.",

example:"I see your point, but I have another idea.",

practice:[
"I understand, but...",
"I am not sure about that.",
"Maybe we can try another way."
]

},


{
title:"Explaining Reasons 🔍",

chunk:"The reason is that...",

meaning:"Use it to explain why something happens.",

example:"The reason is that I wanted to improve my skills.",

practice:[
"The reason is that...",
"Because of this...",
"That is why..."
]

},


{
title:"Talking About Experience ⭐",

chunk:"I have been working on...",

meaning:"Used for ongoing experiences.",

example:"I have been working on my communication skills.",

practice:[
"I have been learning...",
"I have been trying...",
"I have been practicing..."
]

},


{
title:"Making Requests 🙏",

chunk:"Could you please...?",

meaning:"A polite request pattern.",

example:"Could you please help me with this task?",

practice:[
"Could you please explain?",
"Could you help me?",
"Would you mind helping me?"
]

},


{
title:"Ending Conversations 👋",

chunk:"It was nice talking to you.",

meaning:"A friendly way to finish a conversation.",

example:"Thanks for your time. It was nice talking to you.",

practice:[
"See you soon.",
"Talk to you later.",
"Have a great day."
]

}

];



const [step,setStep]=useState(0);

const current=chunks[step];



return(

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


<Mic

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

Speaking in Chunks

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn phrases, not individual words. Speak naturally and fluently.

</p>


</div>








{/* Fluency Concept */}


<div className="
bg-cyan-500/10
border
border-cyan-500
rounded-3xl
p-6
mb-10
">


<h2 className="
text-2xl
font-bold
mb-3
">

Why Learn Chunks?

</h2>


<div className="
grid
md:grid-cols-3
gap-4
">


<div className="
bg-slate-800
rounded-xl
p-4
">

❌ Word by word

<br/>

"I + think + this + is..."

</div>


<div className="
bg-slate-800
rounded-xl
p-4
">

✅ Chunk

<br/>

"I think that..."

</div>


<div className="
bg-slate-800
rounded-xl
p-4
">

🗣 Faster speaking

<br/>

Less thinking time

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
chunks.map((x,index)=>(


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
text-4xl
font-bold
mb-6
">

{current.title}

</h2>







{/* Main Chunk */}

<div className="
bg-blue-500/20
rounded-2xl
p-6
mb-5
text-center
">


<p className="
text-slate-300
mb-3
">

Speak this chunk:

</p>


<h3 className="
text-4xl
font-bold
text-cyan-400
">

"{current.chunk}"

</h3>


<button className="
mt-4
bg-cyan-600
px-5
py-3
rounded-xl
flex
gap-2
mx-auto
items-center
">


<Volume2/>

Listen

</button>


</div>








{/* Meaning */}

<div className="
bg-green-500/20
rounded-2xl
p-5
mb-5
">


<h3 className="
text-xl
font-bold
mb-2
">

Meaning

</h3>


<p>

{current.meaning}

</p>


</div>








{/* Example */}

<div className="
bg-slate-800
rounded-2xl
p-5
mb-5
">


<h3 className="
text-xl
font-bold
mb-2
">

Real Conversation

</h3>


<p className="
italic
text-lg
">

"{current.example}"

</p>


</div>








{/* Practice */}

<div className="
bg-purple-500/20
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-4
">

Practice Variations

</h3>


<div className="
space-y-3
">


{
current.practice.map((item,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

🗣 {item}

</div>


))
}


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

step<chunks.length-1

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









{/* Daily Training */}

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

Daily Fluency Practice

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

1️⃣ Read the chunk

<br/>

5 times

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

2️⃣ Create your own sentence

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

3️⃣ Use it in conversation

</div>


</div>


</div>





</div>

</div>

);

}