import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function AdvancedConditionals() {


const topics=[

{
title:"Zero Conditional 🌱",

formula:"If + Present Simple, Present Simple",

meaning:"Used for facts, rules, and things that are always true.",

example:"If you heat ice, it melts.",

breakdown:[
"If you heat ice → Condition",
"It melts → Result"
]

},


{
title:"First Conditional 🚀",

formula:"If + Present Simple, will + Verb",

meaning:"Used for possible future situations.",

example:"If it rains tomorrow, I will stay at home.",

breakdown:[
"If it rains → Possible condition",
"I will stay → Future result"
]

},


{
title:"Second Conditional 💭",

formula:"If + Past Simple, would + Verb",

meaning:"Used for imaginary or unlikely situations.",

example:"If I won the lottery, I would buy a house.",

breakdown:[
"If I won → Imaginary situation",
"I would buy → Imagined result"
]

},


{
title:"Third Conditional ⏳",

formula:"If + Past Perfect, would have + Past Participle",

meaning:"Used for past situations that did not happen.",

example:"If I had studied, I would have passed the exam.",

breakdown:[
"If I had studied → Past imaginary condition",
"I would have passed → Missed result"
]

},


{
title:"Mixed Conditional 🔀",

formula:"If + Past Perfect, would + Verb",

meaning:"A past action affecting the present.",

example:"If I had learned English earlier, I would speak better now.",

breakdown:[
"Past cause → learned earlier",
"Present result → speak better now"
]

},


{
title:"Unless ⚡",

formula:"Unless = If not",

meaning:"Used to express a negative condition.",

example:"I will go unless it rains.",

breakdown:[
"Unless it rains",
"Means: If it does not rain"
]

},


{
title:"Advanced Inversion 🔥",

formula:"Had / Were / Should + Subject",

meaning:"Formal conditional sentences without 'if'.",

example:"Had I known earlier, I would have helped.",

breakdown:[
"Had I known = If I had known",
"More formal style"
]

}

];



const [current,setCurrent]=useState(0);

const item=topics[current];



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


<GitBranch

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

Advanced Conditionals

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Understand real, imaginary, past and mixed situations.

</p>


</div>







{/* Conditional Map */}

<div className="
grid
md:grid-cols-4
gap-4
mb-10
">


<div className="
bg-green-500/20
rounded-xl
p-4
text-center
">

0️⃣

<br/>

Facts

</div>



<div className="
bg-blue-500/20
rounded-xl
p-4
text-center
">

1️⃣

<br/>

Future

</div>



<div className="
bg-yellow-500/20
rounded-xl
p-4
text-center
">

2️⃣

<br/>

Imaginary

</div>



<div className="
bg-red-500/20
rounded-xl
p-4
text-center
">

3️⃣

<br/>

Past

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
topics.map((x,index)=>(


<div

key={index}

className={`
px-4
py-2
rounded-xl

${
index===current
?
"bg-purple-600"
:
index<current
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

key={current}

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

{item.title}

</h2>







{/* Formula */}


<div className="
bg-slate-800
rounded-2xl
p-6
mb-6
">


<h3 className="
text-2xl
font-bold
mb-3
">

Formula

</h3>


<div className="
bg-black/30
rounded-xl
p-4
text-cyan-400
text-xl
">

{item.formula}

</div>


</div>







{/* Meaning */}

<div className="
bg-blue-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-2xl
font-bold
mb-3
">

When to use?

</h3>


<p className="
text-lg
">

{item.meaning}

</p>


</div>







{/* Example */}

<div className="
bg-green-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-2xl
font-bold
mb-3
">

Example

</h3>


<p className="
text-xl
italic
">

"{item.example}"

</p>


</div>








{/* Breakdown */}

<div className="
bg-slate-800
rounded-2xl
p-6
">


<h3 className="
text-2xl
font-bold
mb-4
">

Sentence Breakdown

</h3>


<div className="
space-y-3
">


{
item.breakdown.map((line,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

➡ {line}

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

Remember

</h3>


<p>

Conditionals show a relationship between a situation and its result.

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

disabled={current===0}

onClick={()=>setCurrent(current-1)}

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

current<topics.length-1

?

<button

onClick={()=>setCurrent(current+1)}

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









{/* Quick Practice */}

<div className="
mt-10
bg-purple-500/10
border
border-purple-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Quick Thinking

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

🌧

<br/>

If it rains...

<br/>

(Real future)

</div>



<div className="
bg-slate-700
rounded-xl
p-5
">

💰

<br/>

If I were rich...

<br/>

(Imaginary)

</div>




<div className="
bg-slate-700
rounded-xl
p-5
">

📚

<br/>

If I had studied...

<br/>

(Past regret)

</div>


</div>


</div>







</div>

</div>

);

}