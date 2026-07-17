import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  MessageCircle
} from "lucide-react";


export default function GroupStorytelling() {


const stories=[

{
title:"The Lost Phone 📱",

starter:
"Yesterday, I was walking in the park when I found a phone on a bench.",

roles:[
"Person 1: Start the story",
"Person 2: Add a problem",
"Person 3: Add a solution"
],

ideas:[
"Who owns the phone?",
"What happens next?",
"How does the story end?"
],

tip:
"Use past tense to describe events."
},



{
title:"The Unexpected Trip ✈️",

starter:
"My friends and I planned a weekend trip, but something surprising happened.",

roles:[
"Person 1: Describe the trip",
"Person 2: Add an unexpected event",
"Person 3: Create the ending"
],

ideas:[
"Where did they go?",
"What problem happened?",
"How did they solve it?"
],

tip:
"Use connectors like suddenly, then, finally."
},



{
title:"The Mystery Box 📦",

starter:
"When I opened the old box, I couldn't believe what I saw inside.",

roles:[
"Person 1: Describe the box",
"Person 2: Reveal the mystery",
"Person 3: Explain the ending"
],

ideas:[
"Where was the box found?",
"What was inside?",
"Why was it important?"
],

tip:
"Use imagination and descriptive words."
},



{
title:"A Big Achievement 🏆",

starter:
"After many months of hard work, I finally achieved my goal.",

roles:[
"Person 1: Explain the goal",
"Person 2: Describe the challenges",
"Person 3: Celebrate the success"
],

ideas:[
"What was the goal?",
"What difficulties happened?",
"How did they feel?"
],

tip:
"Use emotions to make stories interesting."
},



{
title:"The Strange Meeting 🤝",

starter:
"I met someone interesting while waiting at the bus stop.",

roles:[
"Person 1: Introduce the person",
"Person 2: Continue the conversation",
"Person 3: Finish the story"
],

ideas:[
"Who was the person?",
"What did they discuss?",
"What happened later?"
],

tip:
"Use dialogue to make stories realistic."
}


];



const [step,setStep]=useState(0);

const current=stories[step];



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


<BookOpen

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

Group Storytelling

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Build stories together and improve speaking creativity.

</p>


</div>








{/* Story Formula */}

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
mb-5
">

Story Building Formula

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

👤

<br/>

Character

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

📍

<br/>

Place

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

⚡

<br/>

Problem

</div>


<div className="
bg-slate-700
rounded-xl
p-5
text-center
">

✅

<br/>

Solution

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
stories.map((s,index)=>(


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









{/* Story Starter */}

<div className="
bg-blue-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-3
">

Story Starter

</h3>


<p className="
text-xl
italic
">

"{current.starter}"

</p>


</div>









{/* Roles */}

<div className="
bg-green-500/20
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-4
flex
gap-2
">

<Users/>

Group Roles

</h3>



<div className="
space-y-3
">


{
current.roles.map((role,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

🎭 {role}

</div>


))
}


</div>


</div>









{/* Story Ideas */}

<div className="
bg-slate-800
rounded-2xl
p-6
mb-6
">


<h3 className="
text-xl
font-bold
mb-4
">

Things To Add

</h3>


<div className="
space-y-3
">


{
current.ideas.map((idea,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

💡 {idea}

</div>


))
}


</div>


</div>









{/* Speaking Skills */}

<div className="
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

Story Tip

</h3>


<p>

{current.tip}

</p>


</div>


</div>









{/* Conversation Practice */}

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

<MessageCircle/>

Group Challenge

</h3>


<p>

Each person speaks for 30 seconds. Do not stop the story. Continue from where the previous person ended.

</p>


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

step<stories.length-1

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