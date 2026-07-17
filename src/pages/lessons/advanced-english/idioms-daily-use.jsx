import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function EverydayIdioms() {


const idioms=[

{
idiom:"Break a leg",

meaning:"Good luck",

example:"You have an interview today? Break a leg!",

situation:"Before an important event."
},


{
idiom:"Piece of cake",

meaning:"Something very easy",

example:"The exam was a piece of cake.",

situation:"When something is not difficult."
},


{
idiom:"Hit the nail on the head",

meaning:"Say or do exactly the right thing",

example:"You hit the nail on the head with your answer.",

situation:"When someone is exactly correct."
},


{
idiom:"Under the weather",

meaning:"Feeling sick",

example:"I am feeling under the weather today.",

situation:"When you are not feeling well."
},


{
idiom:"Cost an arm and a leg",

meaning:"Very expensive",

example:"That car costs an arm and a leg.",

situation:"Talking about expensive things."
},


{
idiom:"A blessing in disguise",

meaning:"Something good that seemed bad at first",

example:"Missing that bus was a blessing in disguise because I met my friend.",

situation:"A hidden good result."
},


{
idiom:"Once in a blue moon",

meaning:"Very rarely",

example:"I eat fast food once in a blue moon.",

situation:"Something that happens rarely."
},


{
idiom:"Spill the beans",

meaning:"Reveal a secret",

example:"Who spilled the beans about the surprise party?",

situation:"When someone tells a secret."
},


{
idiom:"Keep an eye on",

meaning:"Watch or take care of something",

example:"Can you keep an eye on my bag?",

situation:"Asking someone to watch something."
},


{
idiom:"Call it a day",

meaning:"Stop working",

example:"We finished the project. Let's call it a day.",

situation:"Ending work or activity."
}


];



const [current,setCurrent]=useState(0);


const item=idioms[current];



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


<MessageCircle

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

Everyday English Idioms

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn common expressions used in daily conversations.

</p>


</div>








{/* Progress */}

<div className="
flex
justify-center
gap-3
flex-wrap
mb-10
">


{
idioms.map((x,index)=>(


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
text-purple-400
mb-6
">

"{item.idiom}"

</h2>







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


<p className="
text-2xl
">

{item.meaning}

</p>


</div>







{/* Situation */}

<div className="
bg-blue-500/20
rounded-2xl
p-5
mb-5
">


<h3 className="
text-xl
font-bold
mb-2
">

When to use?

</h3>


<p>

{item.situation}

</p>


</div>








{/* Example */}

<div className="
bg-slate-800
rounded-2xl
p-5
">


<h3 className="
text-xl
font-bold
mb-3
">

Example

</h3>


<p className="
text-lg
italic
">

"{item.example}"

</p>


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
className="
text-yellow-400
"
/>


<div>

<h3 className="
font-bold
">

Remember

</h3>


<p>

Idioms should not be translated word by word. Learn the meaning as a complete phrase.

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

current<idioms.length-1

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









{/* Practice */}

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

Try Using Idioms

</h2>



<div className="
grid
md:grid-cols-3
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-4
">

Describe something easy

<br/>

👉 Piece of cake

</div>



<div className="
bg-slate-700
rounded-xl
p-4
">

Wish someone luck

<br/>

👉 Break a leg

</div>




<div className="
bg-slate-700
rounded-xl
p-4
">

Say something is rare

<br/>

👉 Once in a blue moon

</div>



</div>


</div>






</div>

</div>


);

}