import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";


export default function PhrasalVerbs() {


const verbs=[

{
verb:"Wake up",
meaning:"To stop sleeping",

example:"I wake up at 6 AM every day.",

tip:"Wake + up = start your day."
},


{
verb:"Look for",
meaning:"To search for something",

example:"I am looking for my keys.",

tip:"Use when you are trying to find something."
},


{
verb:"Give up",
meaning:"To stop trying",

example:"Never give up on your dreams.",

tip:"Give up means quit."
},


{
verb:"Pick up",
meaning:"To collect or take something",

example:"I will pick up my friend from the airport.",

tip:"Pick up can mean collect someone/something."
},


{
verb:"Turn on",
meaning:"To start a device",

example:"Please turn on the lights.",

tip:"Turn on = make something work."
},


{
verb:"Turn off",
meaning:"To stop a device",

example:"Please turn off the fan.",

tip:"Turn off = stop something working."
},


{
verb:"Find out",
meaning:"To discover information",

example:"I found out the truth yesterday.",

tip:"Find out means learn something new."
},


{
verb:"Put off",
meaning:"To delay something",

example:"Don't put off your homework.",

tip:"Put off = do later."
},


{
verb:"Run out of",
meaning:"To have no more left",

example:"We ran out of milk.",

tip:"Used when something finishes."
},


{
verb:"Carry on",
meaning:"To continue",

example:"Please carry on with your work.",

tip:"Carry on = continue doing something."
}

];



const [current,setCurrent]=useState(0);

const item=verbs[current];



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


<BookOpen

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

Everyday Phrasal Verbs

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn common verb + particle combinations used in daily English.

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
verbs.map((v,index)=>(


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
index===current

?
"bg-blue-600"

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
text-5xl
font-bold
text-blue-400
mb-8
">

{item.verb}

</h2>








{/* Meaning */}

<div className="
bg-green-500/20
rounded-2xl
p-6
mb-5
">


<h3 className="
text-2xl
font-bold
mb-3
">

Meaning

</h3>


<p className="
text-xl
">

{item.meaning}

</p>


</div>








{/* Example */}

<div className="
bg-slate-800
rounded-2xl
p-6
mb-5
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








{/* Explanation */}

<div className="
bg-yellow-500/10
border
border-yellow-500
rounded-2xl
p-6
flex
gap-3
">


<Lightbulb

className="
text-yellow-400
"

/>


<div>


<h3 className="
font-bold
text-xl
">

Remember

</h3>


<p>

{item.tip}

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

current<verbs.length-1

?

<button

onClick={()=>setCurrent(current+1)}

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









{/* Practice */}

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

Common Patterns

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

Verb + Up

<br/>

Wake up

<br/>

Give up

</div>




<div className="
bg-slate-700
rounded-xl
p-5
">

Verb + Off

<br/>

Turn off

<br/>

Put off

</div>





<div className="
bg-slate-700
rounded-xl
p-5
">

Verb + Out

<br/>

Find out

<br/>

Run out

</div>



</div>


</div>







</div>

</div>


);

}