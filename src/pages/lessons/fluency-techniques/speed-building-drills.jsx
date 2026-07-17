import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Timer,
  Mic,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";


export default function SpeedBuildingDrills() {


const drills=[

{
title:"Quick Sentence Building ⚡",

prompt:"Make a sentence using:",

word:"Travel",

example:"I love to travel because I enjoy exploring new places.",

time:10
},


{
title:"Fast Answer Practice 🎤",

prompt:"Answer quickly:",

word:"What do you do?",

example:"I am a software developer and I build web applications.",

time:10
},


{
title:"Describe Your Day 🌅",

prompt:"Speak about:",

word:"Morning routine",

example:"I wake up early, exercise, and start my work.",

time:15
},


{
title:"Opinion Speed Drill 💭",

prompt:"Give your opinion:",

word:"Online learning",

example:"I think online learning is useful because it gives flexibility.",

time:15
},


{
title:"Story Building 📖",

prompt:"Continue the story:",

word:"Yesterday I saw...",

example:"Yesterday I saw an old friend and we talked about our memories.",

time:20
},


{
title:"Question Response 🚀",

prompt:"Answer naturally:",

word:"Why are you learning English?",

example:"I am learning English because I want to communicate confidently.",

time:15
},


{
title:"Describe Without Stopping 🗣️",

prompt:"Speak continuously about:",

word:"Your hometown",

example:"My hometown is a beautiful place with friendly people and interesting places.",

time:30
}


];



const [step,setStep]=useState(0);



const current=drills[step];

const [time,setTime]=useState(current.time);
const [running,setRunning]=useState(false);

useEffect(()=>{

if(!running) return;


if(time===0){

setRunning(false);
return;

}


const timer=setInterval(()=>{

setTime(prev=>prev-1);

},1000);


return ()=>clearInterval(timer);


},[running,time]);




function next(){

if(step<drills.length-1){

setStep(step+1);
setTime(drills[step+1].time);
setRunning(false);

}

}


function start(){

setRunning(true);

}


function stop(){

setRunning(false);

}


function reset(){

setRunning(false);

setTime(current.time);

}




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


<Zap

size={60}

className="
mx-auto
text-yellow-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

Speed Building Drills

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Train your brain to create English sentences faster.

</p>


</div>








{/* Concept */}

<div className="
bg-yellow-500/10
border
border-yellow-500
rounded-3xl
p-6
mb-10
">


<h2 className="
text-3xl
font-bold
mb-4
">

Fluency Formula

</h2>


<div className="
grid
md:grid-cols-3
gap-4
">


<div className="
bg-slate-800
rounded-xl
p-5
text-center
">

Think

<br/>

🧠

</div>


<div className="
bg-slate-800
rounded-xl
p-5
text-center
">

Speak

<br/>

🎤

</div>


<div className="
bg-slate-800
rounded-xl
p-5
text-center
">

Repeat

<br/>

🔁

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
drills.map((d,index)=>(


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







{/* Timer */}

{/* Timer */}

<div className="
bg-red-500/20
rounded-2xl
p-6
text-center
mb-6
">


<Timer

size={45}

className="
mx-auto
mb-3
"

/>


<h1 className="
text-5xl
font-bold
">

{time}s

</h1>



<div className="
flex
justify-center
gap-4
mt-6
">


<button

onClick={start}

disabled={running}

className="
bg-green-600
px-6
py-3
rounded-xl
disabled:opacity-40
"

>

▶ Start

</button>





<button

onClick={stop}

disabled={!running}

className="
bg-red-600
px-6
py-3
rounded-xl
disabled:opacity-40
"

>

⏹ Stop

</button>





<button

onClick={reset}

className="
bg-slate-700
px-6
py-3
rounded-xl
"

>

🔄 Reset

</button>


</div>


</div>








{/* Prompt */}

<div className="
bg-blue-500/20
rounded-2xl
p-6
mb-5
">


<h3 className="
text-xl
font-bold
mb-2
">

Challenge

</h3>


<p>

{current.prompt}

</p>


<h2 className="
text-4xl
font-bold
text-cyan-400
mt-4
">

"{current.word}"

</h2>


</div>








{/* Example */}

<div className="
bg-green-500/20
rounded-2xl
p-6
">


<h3 className="
font-bold
text-xl
mb-2
">

Example Answer

</h3>


<p className="
italic
text-lg
">

"{current.example}"

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

step<drills.length-1

?

<button

onClick={next}

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









{/* Training Rules */}

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

Daily Speed Training

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

⚡ 10 seconds

<br/>

Make sentences

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

🎤 30 seconds

<br/>

Speak continuously

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

🔁 Repeat

<br/>

Increase speed

</div>


</div>


</div>






</div>

</div>


);

}