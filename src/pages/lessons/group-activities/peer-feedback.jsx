import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";


export default function PeerFeedback() {


const lessons=[

{
title:"Giving Positive Feedback 👍",

situation:"Your friend gives a presentation.",

feedback:"Your presentation was very clear and easy to understand.",

pattern:[
"Something I liked was...",
"You did a great job with...",
"I really liked how you..."
],

tip:"Start with something positive before suggesting improvements."
},



{
title:"Giving Suggestions 💡",

situation:"Your friend speaks too fast.",

feedback:"You could try speaking a little slower so everyone can follow.",

pattern:[
"Maybe you could...",
"One thing you can improve is...",
"Have you considered..."
],

tip:"Use suggestions instead of commands."
},



{
title:"Talking About Strengths ⭐",

situation:"Your teammate completed a project.",

feedback:"Your explanation of the project was excellent.",

pattern:[
"Your strongest point was...",
"I noticed that you...",
"You were really good at..."
],

tip:"Mention specific actions, not general statements."
},



{
title:"Constructive Feedback 🔧",

situation:"Someone made mistakes in pronunciation.",

feedback:"Your ideas were good. You can improve by practicing pronunciation more.",

pattern:[
"Your strength is...",
"One area to improve is...",
"Next time, you could..."
],

tip:"Balance positive points with improvement points."
},



{
title:"Asking For Feedback 🗣️",

situation:"You want others to review your speaking.",

feedback:"Could you give me some feedback on my speaking?",

pattern:[
"What did I do well?",
"What can I improve?",
"Do you have any suggestions?"
],

tip:"Receiving feedback helps you improve faster."
}



];


const [step,setStep]=useState(0);

const current=lessons[step];



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


<Users

size={60}

className="
mx-auto
text-blue-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

Giving Peer Feedback

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn how to give helpful and respectful feedback.

</p>


</div>








{/* Feedback Formula */}

<div className="
bg-blue-500/10
border
border-blue-500
rounded-3xl
p-6
mb-10
">


<h2 className="
text-3xl
font-bold
mb-5
">

Feedback Formula

</h2>


<div className="
grid
md:grid-cols-4
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

1️⃣

<br/>

Praise

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

2️⃣

<br/>

Specific Point

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

3️⃣

<br/>

Suggestion

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

4️⃣

<br/>

Encourage

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
lessons.map((x,index)=>(


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
"bg-blue-600"
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
bg-purple-500/20
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









{/* Feedback Example */}

<div className="
bg-green-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-3
">

Example Feedback

</h3>


<p className="
text-xl
italic
">

"{current.feedback}"

</p>


</div>









{/* Sentence Patterns */}

<div className="
bg-slate-800
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

<MessageCircle/>

Useful Sentence Patterns

</h3>


<div className="
space-y-3
">


{
current.pattern.map((p,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

💬 {p}

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

{current.tip}

</p>


</div>


</div>









{/* Activity */}

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

<Star/>

Practice Activity

</h3>


<p>

Choose a partner. Give feedback using:

</p>


<div className="
mt-3
space-y-2
">


<div>
✅ One thing they did well
</div>


<div>
✅ One improvement suggestion
</div>


<div>
✅ One encouragement sentence
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

step<lessons.length-1

?

<button

onClick={()=>setStep(step+1)}

className="
bg-blue-600
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