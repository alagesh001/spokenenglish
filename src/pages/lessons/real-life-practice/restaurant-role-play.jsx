import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Utensils,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from "lucide-react";


export default function RestaurantConversation() {


const [step,setStep]=useState(0);


const scenarios=[

{
title:"Greeting the Waiter 👋",

waiter:
"Good evening! Welcome to our restaurant. How can I help you?",

customer:
"Good evening. I would like a table for two, please.",

tip:
"Use polite greetings when entering a restaurant."
},


{
title:"Asking About Menu 📖",

waiter:
"Here is our menu. Would you like to see today's specials?",

customer:
"Yes, please. What do you recommend?",

tip:
"You can ask about dishes before ordering."
},


{
title:"Ordering Food 🍽️",

waiter:
"What would you like to order?",

customer:
"I would like a vegetable pasta and a glass of orange juice, please.",

tip:
"Use 'I would like...' to order politely."
},


{
title:"Changing Your Order 🔄",

waiter:
"Would you like to try our special spicy chicken today?",

customer:
"Thank you, but I would prefer the pasta.",

tip:
"You can politely refuse suggestions."
},


{
title:"Requesting the Bill 💳",

waiter:
"Did you enjoy your meal?",

customer:
"Yes, it was delicious. Could I have the bill, please?",

tip:
"Use 'Could I have...' for polite requests."
}


];





const current=scenarios[step];




return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-orange-950
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


<Utensils

size={60}

className="
mx-auto
text-orange-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

At a Restaurant 🍽️

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Practice a complete restaurant conversation.

</p>


</div>







{/* Progress */}


<div className="
flex
justify-center
gap-3
mb-10
flex-wrap
">


{
scenarios.map((item,index)=>(


<div

key={index}

className={`
px-4
py-2
rounded-xl

${
index===step
?
"bg-orange-600"
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
text-3xl
font-bold
mb-8
">

{current.title}

</h2>






{/* Conversation */}


<div className="
space-y-5
">


<div className="
bg-green-500/20
rounded-2xl
p-5
">


<h3 className="
font-bold
text-xl
mb-2
">

👨‍🍳 Waiter

</h3>


<p className="
text-lg
">

{current.waiter}

</p>


</div>





<div className="
bg-blue-500/20
rounded-2xl
p-5
">


<h3 className="
font-bold
text-xl
mb-2
">

🧑 Customer

</h3>


<p className="
text-lg
">

{current.customer}

</p>


</div>


</div>







{/* Useful Pattern */}


<div className="
mt-8
bg-cyan-500/10
border
border-cyan-500
rounded-2xl
p-5
flex
gap-3
">


<MessageCircle
className="
text-cyan-400
"
/>


<div>

<h3 className="
font-bold
mb-1
">

Language Tip

</h3>


<p>

{current.tip}

</p>


</div>


</div>








{/* Practice */}


<div className="
mt-8
bg-slate-800
rounded-2xl
p-6
">


<h3 className="
text-2xl
font-bold
mb-4
">

Try Different Sentences

</h3>


<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-4
">

"I would like..."

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"Could I have...?"

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"What do you recommend?"

</div>


<div className="
bg-slate-700
rounded-xl
p-4
">

"Could we get the bill?"

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

step<scenarios.length-1

?

<button

onClick={()=>setStep(step+1)}

className="
bg-orange-600
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









{/* Full Scenario */}


<div className="
mt-10
bg-orange-500/10
border
border-orange-500
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Complete Restaurant Flow

</h2>


<div className="
flex
flex-wrap
justify-center
gap-4
text-lg
">


<div className="
bg-slate-700
px-5
py-3
rounded-xl
">

👋 Greeting

</div>


<ArrowRight/>


<div className="
bg-slate-700
px-5
py-3
rounded-xl
">

📖 Menu

</div>


<ArrowRight/>


<div className="
bg-slate-700
px-5
py-3
rounded-xl
">

🍽 Order

</div>


<ArrowRight/>


<div className="
bg-slate-700
px-5
py-3
rounded-xl
">

💳 Bill

</div>


</div>


</div>





</div>

</div>

);

}