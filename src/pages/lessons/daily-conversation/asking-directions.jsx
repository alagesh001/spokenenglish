import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Navigation,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  XCircle
} from "lucide-react";


export default function AskingDirections() {

  const [tab, setTab] = useState("asking");
  const [answers, setAnswers] = useState({});


  const data = {

    asking: {

      title:"Asking for Directions 📍",
      icon:MapPin,

      meaning:
      "Learn how to politely ask someone for help when you don't know a place.",


      dialogue:[

        {
          person:"Traveler",
          text:"Excuse me, could you tell me how to get to the railway station?"
        },

        {
          person:"Person",
          text:"Sure. Go straight and turn left at the traffic light."
        },

        {
          person:"Traveler",
          text:"Thank you very much."
        }

      ]

    },



    understanding: {

      title:"Understanding Directions 🧭",
      icon:Navigation,

      meaning:
      "Learn common direction words used to explain routes.",


      dialogue:[

        {
          person:"Person",
          text:"Go straight for two blocks."
        },

        {
          person:"Person",
          text:"Turn right after the bank."
        },

        {
          person:"Person",
          text:"The shop is next to the hospital."
        }

      ]

    },



    landmarks: {

      title:"Using Landmarks 🏢",
      icon:MapPin,

      meaning:
      "People often explain directions using nearby places.",


      dialogue:[

        {
          person:"Person",
          text:"The restaurant is opposite the supermarket."
        },

        {
          person:"Person",
          text:"The school is beside the park."
        },

        {
          person:"Person",
          text:"The bank is between the hotel and the mall."
        }

      ]

    },



    clarification: {

      title:"Confirming Directions 💬",
      icon:MessageCircle,

      meaning:
      "Ask again when you don't understand the route.",


      dialogue:[

        {
          person:"Traveler",
          text:"Sorry, could you repeat that?"
        },

        {
          person:"Person",
          text:"Yes. Turn right after the bridge."
        },

        {
          person:"Traveler",
          text:"So I turn right after the bridge, correct?"
        }

      ]

    }

  };



  const current=data[tab];
  const Icon=current.icon;



  const questions=[

    {
      sentence:"You don't know the location. You say:",
      options:[
        "Excuse me, could you help me?",
        "Move away."
      ],
      answer:"Excuse me, could you help me?"
    },


    {
      sentence:"The opposite direction of left is:",
      options:[
        "Right",
        "Straight"
      ],
      answer:"Right"
    },


    {
      sentence:"To ask someone to repeat:",
      options:[
        "Could you repeat that, please?",
        "I don't care."
      ],
      answer:"Could you repeat that, please?"
    },


    {
      sentence:"'Go straight' means:",
      options:[
        "Continue forward",
        "Stop immediately"
      ],
      answer:"Continue forward"
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

ASKING FOR DIRECTIONS

</h1>


<p className="
text-slate-300
text-lg
mt-4
">

Learn how to ask and understand directions

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









{/* Flow */}

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

Direction Conversation Flow

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

👋 Ask

</div>


<ArrowRight/>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

📍 Location

</div>


<ArrowRight/>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

🧭 Route

</div>


<ArrowRight/>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

🙏 Thank

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

Example Conversation

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
d.person==="Traveler"
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
d.person==="Traveler"
?
"🧑 Traveler"
:
"👤 Local Person"
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









{/* Direction Words */}

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

Important Direction Words 🧭

</h2>



<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
bg-slate-700
rounded-xl
p-5
">

⬆️ Go straight

<br/>

Continue forward

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

⬅️ Turn left

<br/>

Left side

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

➡️ Turn right

<br/>

Right side

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 Next to

<br/>

Beside

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

🏢 Opposite

<br/>

Across from

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

🔄 Between

<br/>

In the middle

</div>


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

Useful Expressions

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

📍 Excuse me, where is the bank?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 How can I get to the airport?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 Is it far from here?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 Could you show me on the map?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 Which way should I go?

</div>


<div className="
bg-slate-700
rounded-xl
p-5
">

📍 Thank you for your help.

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

🎯 Direction Practice

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

Direction Formula 🧠

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

Ask politely

</div>


<div className="
bg-blue-500/20
rounded-xl
p-5
">

📍

<br/>

Say place

</div>


<div className="
bg-purple-500/20
rounded-xl
p-5
">

🧭

<br/>

Follow route

</div>


<div className="
bg-yellow-500/20
rounded-xl
p-5
">

🙏

<br/>

Thank

</div>


</div>


</div>




</div>

</div>

);

}