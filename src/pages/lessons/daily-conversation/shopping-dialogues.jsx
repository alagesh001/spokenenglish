import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  MessageCircle,
  CreditCard,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";


export default function ShoppingDialogues() {

  const [tab, setTab] = useState("greeting");
  const [answers, setAnswers] = useState({});


  const data = {

    greeting: {

      title:"Starting a Shopping Conversation 🛒",
      icon:ShoppingBag,

      meaning:
      "Learn how to enter a shop and talk with a salesperson.",


      dialogue:[

        {
          person:"Customer",
          text:"Hello, I am looking for a shirt."
        },

        {
          person:"Shopkeeper",
          text:"Sure. What size do you need?"
        },

        {
          person:"Customer",
          text:"I need a medium size."
        }

      ]

    },



    asking: {

      title:"Asking About Products 🔍",
      icon:MessageCircle,

      meaning:
      "Use these sentences to ask about items, prices, and availability.",


      dialogue:[

        {
          person:"Customer",
          text:"How much is this jacket?"
        },

        {
          person:"Shopkeeper",
          text:"It is 2000 rupees."
        },

        {
          person:"Customer",
          text:"Do you have this in black?"
        }

      ]

    },



    trying: {

      title:"Trying Clothes 👕",
      icon:ShoppingBag,

      meaning:
      "Useful sentences when checking size and fitting.",


      dialogue:[

        {
          person:"Customer",
          text:"Can I try this shirt on?"
        },

        {
          person:"Shopkeeper",
          text:"Yes, the changing room is over there."
        },

        {
          person:"Customer",
          text:"This size is too small. Do you have a bigger one?"
        }

      ]

    },



    payment: {

      title:"Payment & Closing 💳",
      icon:CreditCard,

      meaning:
      "Learn how to complete a purchase politely.",


      dialogue:[

        {
          person:"Customer",
          text:"I would like to buy this."
        },

        {
          person:"Shopkeeper",
          text:"How would you like to pay?"
        },

        {
          person:"Customer",
          text:"I will pay by card."
        }

      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"Customer: How much is this?",
      options:[
        "Asking price",
        "Asking location"
      ],
      answer:"Asking price"
    },


    {
      sentence:"Can I try this on?",
      options:[
        "Checking clothes",
        "Making payment"
      ],
      answer:"Checking clothes"
    },


    {
      sentence:"I would like to buy this.",
      options:[
        "Buying product",
        "Returning product"
      ],
      answer:"Buying product"
    },


    {
      sentence:"Do you have this in blue?",
      options:[
        "Asking availability",
        "Saying goodbye"
      ],
      answer:"Asking availability"
    }


  ];



  function selectAnswer(index,option){

    setAnswers({
      ...answers,
      [index]:option
    });

  }



return (

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
max-w-6xl
mx-auto
">



{/* Header */}

<div className="
text-center
mb-10
">


<h1 className="
text-5xl
font-bold
">

SHOPPING DIALOGUES

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn real-life conversations in a shop

</p>


</div>







{/* Tabs */}

<div className="
flex
justify-center
gap-4
flex-wrap
mb-10
">


{
Object.keys(data).map(item=>(


<button

key={item}

onClick={()=>setTab(item)}

className={`
px-7
py-3
rounded-xl
font-bold
capitalize

${
tab===item
?
"bg-cyan-600"
:
"bg-slate-700"
}

`}

>

{item}

</button>


))
}


</div>









<AnimatePresence mode="wait">


<motion.div

key={tab}

initial={{
opacity:0,
x:40
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-40
}}

>






{/* Introduction */}

<div className="
bg-white/10
border
border-white/20
rounded-3xl
p-8
mb-8
">


<Icon
size={60}
className="
text-cyan-400
mb-5
"
/>


<h2 className="
text-4xl
font-bold
">

{current.title}

</h2>


<p className="
text-xl
text-slate-300
mt-4
">

{current.meaning}

</p>


</div>









{/* Conversation Flow */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

Shopping Conversation Flow

</h2>



<div className="
flex
items-center
justify-center
gap-4
flex-wrap
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

👋 Enter Shop

</div>


<ArrowRight/>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

🔍 Ask

</div>


<ArrowRight/>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

👕 Check Product

</div>


<ArrowRight/>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

💳 Pay

</div>


</div>


</div>









{/* Dialogue */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Example Dialogue

</h2>



<div className="
space-y-4
">


{
current.dialogue.map((d,index)=>(


<div

key={index}

className={`
rounded-xl
p-5

${
d.person==="Customer"
?
"bg-blue-500/20"
:
"bg-green-500/20"
}

`}

>


<h3 className="
font-bold
text-xl
">

{
d.person==="Customer"
?
"🧑 Customer"
:
"🧑‍💼 Shopkeeper"
}

</h3>


<p className="
mt-2
text-lg
">

{d.text}

</p>


</div>


))
}


</div>


</div>









{/* Useful Sentences */}

<div className="
bg-slate-800
rounded-3xl
p-8
mb-8
">


<h2 className="
text-3xl
font-bold
mb-5
">

Useful Shopping Sentences

</h2>



<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 How much is this?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 Do you have this in another color?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 Can I try this on?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 I would like to buy this.

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 Do you accept cards?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

💬 Can I get a discount?

</div>


</div>


</div>









{/* Practice */}

<div className="
bg-slate-800
rounded-3xl
p-8
">


<h2 className="
text-3xl
font-bold
mb-6
">

🎯 Shopping Practice

</h2>



{
questions.map((q,index)=>(


<div

key={index}

className="
bg-slate-700
rounded-xl
p-5
mb-5
"

>


<p className="
text-xl
mb-4
">

{q.sentence}

</p>



<div className="
flex
gap-3
flex-wrap
">


{
q.options.map(option=>(


<button

key={option}

onClick={()=>
selectAnswer(index,option)
}

className="
bg-slate-600
hover:bg-cyan-600
px-5
py-3
rounded-xl
"

>

{option}

</button>


))
}


</div>





{
answers[index] && (

<div className="mt-4">


{
answers[index]===q.answer

?

<div className="
text-green-400
flex
gap-2
">

<CheckCircle/>

Correct

</div>


:

<div className="
text-red-400
flex
gap-2
">

<XCircle/>

Try again

</div>


}


</div>

)

}



</div>


))
}


</div>






</motion.div>

</AnimatePresence>









{/* Memory */}

<div className="
mt-8
bg-cyan-500/10
border
border-cyan-500
rounded-3xl
p-8
text-center
">


<h2 className="
text-3xl
font-bold
mb-6
">

Shopping Memory 🧠

</h2>


<div className="
grid
md:grid-cols-4
gap-5
">


<div className="
bg-green-500/20
rounded-xl
p-5
">

👋

<br/>

Start

</div>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

🔍

<br/>

Ask

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

👕

<br/>

Try

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

💳

<br/>

Pay

</div>


</div>


</div>



</div>

</div>

);

}