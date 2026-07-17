import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Briefcase,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function ToneAndRegister() {


const lessons=[

{
title:"Casual Tone 🧑‍🤝‍🧑",

situation:"Talking with friends",

sentence:"Hey! What's up? Do you want to grab some food?",

explanation:
"Used with friends, family, and people you know well.",

words:[
"Hey",
"What's up?",
"Cool",
"Yeah"
]

},


{
title:"Neutral Tone 🙂",

situation:"Talking with classmates or colleagues",

sentence:"Hi, are you free today? Can we discuss the project?",

explanation:
"Used in normal everyday conversations.",

words:[
"Hi",
"Can we discuss?",
"Thank you",
"Sure"
]

},


{
title:"Formal Tone 💼",

situation:"Workplace, official situations",

sentence:"Good morning. I would like to discuss the project details with you.",

explanation:
"Used with managers, clients, and professional situations.",

words:[
"Good morning",
"I would like to",
"Could you please",
"I appreciate"
]

},


{
title:"Informal vs Formal 🔄",

situation:"Changing the same message",

sentence1:
"Can you send me the file?",

sentence2:
"Could you please send me the file?",

explanation:
"The meaning is the same, but the level of politeness changes."

},


{
title:"Email Register 📧",

situation:"Writing professional emails",

sentence1:
"Hey John, send the report soon.",

sentence2:
"Dear John, could you please send the report at your convenience?",

explanation:
"Emails usually require a more respectful and structured style."
},


{
title:"Customer Conversation 🛒",

situation:"Speaking with customers",

sentence1:
"Wait. I can't help now.",

sentence2:
"I apologize, but I will assist you shortly.",

explanation:
"Customer communication needs patience and politeness."
}

];



const [step,setStep]=useState(0);

const current=lessons[step];



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

Tone & Register

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Learn how to change your English depending on the situation.

</p>


</div>








{/* Tone levels */}

<div className="
grid
md:grid-cols-3
gap-5
mb-10
">


<div className="
bg-green-500/20
rounded-2xl
p-5
text-center
">

<Users
className="mx-auto mb-2"
/>

<h3 className="text-xl font-bold">
Casual
</h3>

<p>
Friends & family
</p>

</div>



<div className="
bg-blue-500/20
rounded-2xl
p-5
text-center
">

<MessageCircle
className="mx-auto mb-2"
/>

<h3 className="text-xl font-bold">
Neutral
</h3>

<p>
Daily conversations
</p>

</div>



<div className="
bg-purple-500/20
rounded-2xl
p-5
text-center
">

<Briefcase
className="mx-auto mb-2"
/>

<h3 className="text-xl font-bold">
Formal
</h3>

<p>
Work & official
</p>

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
px-4
py-2
rounded-xl

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

Situation

</h3>


<p>

{current.situation}

</p>


</div>







{/* Sentences */}

<div className="
space-y-4
">


{
current.sentence &&

<div className="
bg-blue-500/20
rounded-xl
p-5
">

💬 {current.sentence}

</div>

}



{
current.sentence1 &&

<div className="
bg-red-500/20
rounded-xl
p-5
">

❌ {current.sentence1}

</div>

}



{
current.sentence2 &&

<div className="
bg-green-500/20
rounded-xl
p-5
">

✅ {current.sentence2}

</div>

}



</div>








{/* Explanation */}

<div className="
mt-6
bg-cyan-500/10
border
border-cyan-500
rounded-2xl
p-5
">


<h3 className="
font-bold
text-xl
mb-2
">

Why?

</h3>


<p>

{current.explanation}

</p>


</div>









{/* Words */}

{
current.words &&

<div className="
mt-6
bg-slate-800
rounded-2xl
p-5
">


<h3 className="
font-bold
mb-3
">

Common Words

</h3>


<div className="
flex
gap-3
flex-wrap
">


{
current.words.map(word=>(


<span

key={word}

className="
bg-slate-700
px-4
py-2
rounded-xl
"

>

{word}

</span>


))
}


</div>


</div>

}



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








{/* Summary */}

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

Remember

</h2>


<div className="
space-y-3
">


<p>
🧑‍🤝‍🧑 Casual → Friends: "Hey, what's up?"
</p>


<p>
🙂 Neutral → Normal conversations: "Can you help me?"
</p>


<p>
💼 Formal → Work: "Could you please assist me?"
</p>


</div>


</div>





</div>

</div>

);

}