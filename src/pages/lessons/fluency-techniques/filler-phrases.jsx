import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";


export default function NaturalFillers() {


const fillers=[

{
title:"Thinking Time ⏳",

filler:"Let me think...",

meaning:"Use when you need a few seconds to organize your thoughts.",

example:
"Q: What do you think about online learning?\nA: Let me think... I think online learning is very useful.",

practice:[
"Let me think...",
"That's a good question...",
"Give me a moment..."
]

},


{
title:"Starting an Answer 🗣️",

filler:"Well, ...",

meaning:"A natural way to begin speaking.",

example:
"Well, I think technology has changed our lives.",

practice:[
"Well, I believe...",
"Well, in my opinion...",
"Well, the thing is..."
]

},


{
title:"Showing Uncertainty 🤔",

filler:"I'm not sure, but...",

meaning:"Use when you do not know something exactly.",

example:
"I'm not sure, but I think the meeting is tomorrow.",

practice:[
"I'm not sure, but...",
"I guess...",
"I think maybe..."
]

},


{
title:"Adding More Ideas ➕",

filler:"Also, ...",

meaning:"Use to add another point.",

example:
"I like this city. Also, the food is amazing.",

practice:[
"Also...",
"Another thing is...",
"Besides that..."
]

},


{
title:"Changing Your Thought 🔄",

filler:"Actually, ...",

meaning:"Use when correcting or adding new information.",

example:
"Actually, I changed my mind.",

practice:[
"Actually...",
"To be honest...",
"The thing is..."
]

},


{
title:"Giving Examples 💡",

filler:"For example, ...",

meaning:"Use when explaining with examples.",

example:
"I enjoy outdoor activities. For example, I play tennis.",

practice:[
"For example...",
"For instance...",
"Like..."
]

},


{
title:"Agreeing Naturally 👍",

filler:"Exactly.",

meaning:"A natural way to show agreement.",

example:
"Practice is important. Exactly, it helps us improve.",

practice:[
"Exactly.",
"That's true.",
"I completely agree."
]

},


{
title:"Disagreeing Politely 🤝",

filler:"I see what you mean, but...",

meaning:"Use when you have a different opinion.",

example:
"I see what you mean, but I prefer another option.",

practice:[
"I see your point, but...",
"Maybe, but...",
"I'm not sure about that."
]

},


{
title:"Ending an Answer ✅",

filler:"So, ...",

meaning:"Use to summarize your final point.",

example:
"So, I think learning English every day is important.",

practice:[
"So...",
"Overall...",
"In the end..."
]

}


];



const [step,setStep]=useState(0);

const current=fillers[step];



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


<Mic

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

Natural Filler Words

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Speak smoothly without long pauses.

</p>


</div>







{/* Explanation */}


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

Why use fillers?

</h2>


<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-red-500/20
rounded-xl
p-5
">

❌ Without fillers:

<br/>

"I... I... don't know..."

</div>



<div className="
bg-green-500/20
rounded-xl
p-5
">

✅ With fillers:

<br/>

"Well, let me think..."

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
fillers.map((item,index)=>(


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









{/* Main Filler */}


<div className="
bg-cyan-500/20
rounded-2xl
p-8
text-center
mb-6
">


<p className="
text-slate-300
mb-3
">

Use this phrase:

</p>


<h1 className="
text-5xl
font-bold
text-cyan-400
">

"{current.filler}"

</h1>


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
mb-3
">

Real Speaking Example

</h3>


<p className="
whitespace-pre-line
italic
text-lg
">

{current.example}

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

Practice More

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
flex
gap-3
"

>

<MessageCircle/>

{item}

</div>


))
}


</div>


</div>







{/* Tip */}

<div className="
mt-6
bg-yellow-500/10
border
border-yellow-500
rounded-2xl
p-5
flex
gap-3
">


<Lightbulb
className="text-yellow-400"
/>


<div>

<h3 className="
font-bold
">

Speaking Tip

</h3>


<p>

Do not overuse fillers. Use them naturally to create thinking time.

</p>


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

step<fillers.length-1

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









{/* Practice Routine */}


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

Daily Fluency Training

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

1️⃣ Pick a topic

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

2️⃣ Use 2 fillers

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

3️⃣ Speak for 1 minute

</div>


</div>


</div>





</div>

</div>

);

}