import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  User,
  Activity,
  CheckCircle,
  XCircle,
  Lightbulb
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const examples = [
  {
    sentence: "I play football.",
    subject: "I",
    verb: "play",
    explanation:
      "This is a simple sentence because it has one subject and one main verb."
  },
  {
    sentence: "The dog runs.",
    subject: "dog",
    verb: "runs",
    explanation:
      "The dog is the subject and runs is the verb."
  },
  {
    sentence: "She is happy.",
    subject: "She",
    verb: "is",
    explanation:
      "The sentence uses a be verb to describe a state."
  },
  {
    sentence: "Birds fly.",
    subject: "Birds",
    verb: "fly",
    explanation:
      "A simple sentence can be short but still have complete meaning."
  }
];


export default function SimpleSentences(){

const [index,setIndex]=useState(0);
const [message,setMessage]=useState("");

const current=examples[index];
const navigate = useNavigate();


function check(word,type){

const clean =
word.replace(/[.,!?]/g,"");


if(clean===current[type]){

setMessage("correct");

}
else{

setMessage("wrong");

}

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
<button
    onClick={() => navigate(-1)}
    className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
  >
    <ArrowLeft size={18} />
    Back
  </button>

<div className="max-w-5xl mx-auto">


{/* Header */}

<motion.div

initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}

className="text-center mb-10"

>


<MessageSquare
size={55}
className="mx-auto text-cyan-400 mb-4"
/>


<h1 className="text-5xl font-bold">
Simple Sentences
</h1>


<p className="text-slate-300 mt-3 text-lg">
Learn how to create clear and complete sentences.
</p>


</motion.div>





{/* Definition */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
">


<h2 className="text-3xl font-bold mb-4">
What is a Simple Sentence?
</h2>


<p className="text-slate-300 text-lg">

A simple sentence expresses one complete idea.
It usually contains:

</p>



<div className="
flex
justify-center
gap-4
flex-wrap
mt-6
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
=

</div>



<div className="
bg-purple-600
px-6
py-4
rounded-xl
font-bold
">

Complete Meaning

</div>


</div>


</div>






{/* Components */}


<div className="
grid
md:grid-cols-3
gap-5
mb-10
">


<motion.div

whileHover={{scale:1.05}}

className="
bg-blue-600
rounded-2xl
p-6
"

>

<User size={40}/>

<h3 className="text-2xl font-bold mt-3">
Subject
</h3>

<p>
Who or what the sentence talks about.
</p>

</motion.div>




<motion.div

whileHover={{scale:1.05}}

className="
bg-green-600
rounded-2xl
p-6
"

>

<Activity size={40}/>

<h3 className="text-2xl font-bold mt-3">
Verb
</h3>

<p>
Shows the action or state.
</p>

</motion.div>




<motion.div

whileHover={{scale:1.05}}

className="
bg-yellow-600
rounded-2xl
p-6
"

>

<Lightbulb size={40}/>

<h3 className="text-2xl font-bold mt-3">
Complete Idea
</h3>

<p>
The sentence should make sense.
</p>

</motion.div>


</div>






{/* Interactive */}

<div className="
bg-white/10
rounded-3xl
p-8
">


<h2 className="text-3xl font-bold mb-5">
🎯 Identify Sentence Parts
</h2>


<p className="text-slate-300 mb-5">
Click the subject or verb.
</p>



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

className="
bg-slate-700
px-5
py-3
rounded-xl
"

onClick={()=>{

if(
word.replace(/[.,!?]/g,"")
===
current.subject
){

check(word,"subject");

}
else if(
word.replace(/[.,!?]/g,"")
===
current.verb
){

check(word,"verb");

}
else{

setMessage("wrong");

}

}}

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

Try clicking the subject or verb.

</div>

}


</div>






<button

onClick={()=>{

setIndex(
(index+1)%examples.length
);

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