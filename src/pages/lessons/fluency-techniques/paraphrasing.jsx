import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";


export default function ParaphrasingPractice() {


const lessons=[

{
title:"Changing Simple Words 🔄",

original:"I am very tired.",

paraphrase:"I am exhausted.",

explanation:
"Replace common words with similar meaning words.",

practice:[
"I am very happy → I am delighted.",
"It is very big → It is huge."
]

},


{
title:"Changing Sentence Structure 🏗️",

original:"I missed the bus because I woke up late.",

paraphrase:"I woke up late, so I missed the bus.",

explanation:
"Change the order or structure while keeping the same meaning.",

practice:[
"I was hungry because I skipped lunch.",
"I skipped lunch, so I was hungry."
]

},


{
title:"Using Synonyms 📚",

original:"The movie was very interesting.",

paraphrase:"The movie was fascinating.",

explanation:
"Use different words with the same meaning.",

practice:[
"Good → Excellent",
"Important → Essential"
]

},


{
title:"Making It More Natural 🗣️",

original:"I want to know more information.",

paraphrase:"I would like to learn more about it.",

explanation:
"Native speakers often use natural expressions instead of direct translations.",

practice:[
"I want help → I need some assistance.",
"I don't know → I'm not sure."
]

},


{
title:"Shortening Long Sentences ✂️",

original:"Due to the fact that I was busy, I could not attend the meeting.",

paraphrase:"I couldn't attend the meeting because I was busy.",

explanation:
"Make sentences shorter and easier to understand.",

practice:[
"Because of the fact that → Because",
"At this point in time → Now"
]

},


{
title:"Making Sentences Formal 💼",

original:"Can you send me the file?",

paraphrase:"Could you please send me the file?",

explanation:
"Use polite words for professional communication.",

practice:[
"Give me → Could you provide me",
"Tell me → Could you let me know"
]

},


{
title:"Explaining Ideas Differently 💡",

original:"Exercise is good for health.",

paraphrase:"Regular physical activity helps improve our health.",

explanation:
"Expand the idea using different words.",

practice:[
"Reading improves knowledge.",
"Reading helps us learn new things."
]

},


{
title:"Speaking Without Getting Stuck 🎤",

original:"I don't know the answer.",

paraphrase:"I'm not completely sure, but I think the answer might be...",

explanation:
"Use paraphrasing when you forget exact words.",

practice:[
"What is the word?",
"How can I explain this?"
]

}

];



const [step,setStep]=useState(0);

const item=lessons[step];



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


<RefreshCcw

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

Paraphrasing On The Spot

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Say the same idea in different words without stopping.

</p>


</div>







{/* Concept */}

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

Why Paraphrase?

</h2>


<div className="
grid
md:grid-cols-3
gap-4
">


<div className="
bg-red-500/20
rounded-xl
p-4
">

❌ Forget a word

<br/>

"I forgot..."

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-4
">

🤔 Find another way

<br/>

"How can I explain?"
</div>


<div className="
bg-green-500/20
rounded-xl
p-4
">

✅ Keep speaking

<br/>

"Use similar words"
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

{item.title}

</h2>







{/* Original */}

<div className="
bg-red-500/20
rounded-2xl
p-6
mb-5
">


<h3 className="
text-xl
font-bold
mb-3
">

Original Sentence

</h3>


<p className="
text-2xl
">

"{item.original}"

</p>


</div>







<div className="
flex
justify-center
my-4
">


<ArrowRight
size={40}
/>


</div>








{/* Paraphrase */}

<div className="
bg-green-500/20
rounded-2xl
p-6
mb-5
">


<h3 className="
text-xl
font-bold
mb-3
">

New Way To Say It

</h3>


<p className="
text-2xl
">

"{item.paraphrase}"

</p>


</div>







{/* Explanation */}

<div className="
bg-blue-500/20
rounded-2xl
p-5
">


<h3 className="
text-xl
font-bold
mb-2
">

Technique

</h3>


<p>

{item.explanation}

</p>


</div>








{/* Practice */}

<div className="
mt-6
bg-slate-800
rounded-2xl
p-6
">


<h3 className="
text-xl
font-bold
mb-4
">

Try More

</h3>


<div className="
space-y-3
">


{
item.practice.map((p,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-4
"

>

🗣 {p}

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

Speaking Trick

</h3>


<p>

If you forget a word, explain the meaning instead of stopping.

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

step<lessons.length-1

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







{/* Daily Challenge */}

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

1 Minute Paraphrasing Challenge 🎤

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

1️⃣ Read a sentence

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

2️⃣ Change the words

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

3️⃣ Say it naturally

</div>


</div>


</div>






</div>

</div>

);

}