import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Activity,
  Package,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const examples = [
  {
    sentence: "Ravi eats mangoes.",
    subject: "Ravi",
    verb: "eats",
    object: "mangoes",
    explanation:
      "Ravi is doing the action, eats is the action, and mangoes receives the action."
  },
  {
    sentence: "The dog chased the ball.",
    subject: "dog",
    verb: "chased",
    object: "ball",
    explanation:
      "The dog performs the action and the ball receives it."
  },
  {
    sentence: "She reads a book.",
    subject: "She",
    verb: "reads",
    object: "book",
    explanation:
      "She is the doer, reads is the action, and book is the object."
  }
];


export default function SubjectVerbObject(){

const [index,setIndex]=useState(0);
const [type,setType]=useState("subject");
const [message,setMessage]=useState("");

const current=examples[index];

const navigate = useNavigate();

function check(word){

const clean =
word.replace(/[.,!?]/g,"");


if(clean.toLowerCase()===current[type].toLowerCase()){

setMessage("correct");

}

else{

setMessage("wrong");

}

}



const parts=[
{
name:"Subject",
icon:User,
color:"bg-blue-600",
desc:"Who performs the action?"
},
{
name:"Verb",
icon:Activity,
color:"bg-green-600",
desc:"What action happens?"
},
{
name:"Object",
icon:Package,
color:"bg-purple-600",
desc:"Who or what receives the action?"
}
];


return(

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-indigo-950
to-black
text-white
p-8
">

<button
    onClick={() => navigate(-1)}
    className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
  >
    <ArrowLeft size={18} />
    Back
  </button>
<div className="max-w-5xl mx-auto">


{/* Heading */}

<motion.div

initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}

className="text-center mb-10"

>

<h1 className="text-5xl font-bold">
Subject Verb Object
</h1>

<p className="text-slate-300 mt-3 text-lg">
Learn how sentences are formed.
</p>

</motion.div>




{/* Sentence Structure */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
text-center
">


<h2 className="text-3xl font-bold mb-5">
Sentence Pattern
</h2>


<div className="
flex
justify-center
items-center
gap-4
flex-wrap
">


<div className="
bg-blue-600
px-6
py-4
rounded-xl
font-bold
">

Subject

</div>


<div className="text-3xl">
+
</div>


<div className="
bg-green-600
px-6
py-4
rounded-xl
font-bold
">

Verb

</div>


<div className="text-3xl">
+
</div>


<div className="
bg-purple-600
px-6
py-4
rounded-xl
font-bold
">

Object

</div>


</div>


</div>






{/* Explanation Cards */}

<div className="
grid
md:grid-cols-3
gap-5
mb-10
">


{
parts.map((item)=>{

const Icon=item.icon;

return(

<motion.div

whileHover={{scale:1.05}}

key={item.name}

className={`${item.color} rounded-2xl p-6`}

>

<Icon size={40}/>

<h3 className="text-2xl font-bold mt-3">

{item.name}

</h3>


<p className="mt-2">

{item.desc}

</p>


</motion.div>


)

})

}


</div>







{/* Interactive */}

<div className="
bg-white/10
rounded-3xl
p-8
">


<h2 className="text-3xl font-bold mb-5">
🎯 Find the {type}
</h2>



<div className="flex gap-3 mb-8 flex-wrap">


{
["subject","verb","object"].map((item)=>(


<button

key={item}

onClick={()=>{

setType(item);
setMessage("");

}}

className={`px-5 py-2 rounded-xl font-bold ${
type===item
?
"bg-cyan-600"
:
"bg-white/10"
}`}

>

{item}

</button>


))

}


</div>





<div className="
flex
flex-wrap
gap-3
">


{
current.sentence
.split(" ")
.map((word,i)=>(


<motion.button

key={i}

whileHover={{scale:1.1}}

onClick={()=>check(word)}

className="
bg-slate-700
px-5
py-3
rounded-xl
text-lg
"

>

{word}

</motion.button>


))

}


</div>






{
message==="correct" &&

<motion.div

initial={{opacity:0}}

animate={{opacity:1}}

className="
mt-6
bg-green-500/20
border
border-green-500
rounded-xl
p-5
flex
gap-3
"

>

<CheckCircle/>

<div>

<b>Correct!</b>

<p>
{current.explanation}
</p>

</div>

</motion.div>

}




{
message==="wrong" &&

<div className="
mt-6
bg-red-500/20
border
border-red-500
rounded-xl
p-5
flex
gap-3
">

<XCircle/>

Try again!

</div>

}



</div>





<button

onClick={()=>{

setIndex((index+1)%examples.length);
setMessage("");

}}

className="
mt-8
bg-cyan-600
px-6
py-3
rounded-xl
"

>

Next Sentence

</button>




</div>

</div>

)

}