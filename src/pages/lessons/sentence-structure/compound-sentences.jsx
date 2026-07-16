import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GitMerge,
  Link,
  CheckCircle,
  XCircle,
  Lightbulb
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const examples = [
  {
    sentence: "I wanted to play, but it rained.",
    part1: "I wanted to play",
    conjunction: "but",
    part2: "it rained",
    explanation:
      "Two complete sentences are joined using 'but'."
  },
  {
    sentence: "She studied hard, so she passed the exam.",
    part1: "She studied hard",
    conjunction: "so",
    part2: "she passed the exam",
    explanation:
      "'So' connects a reason and result."
  },
  {
    sentence: "I like apples, and I like oranges.",
    part1: "I like apples",
    conjunction: "and",
    part2: "I like oranges",
    explanation:
      "'And' joins two similar ideas."
  }
];


export default function CompoundSentences(){

const [index,setIndex]=useState(0);
const [message,setMessage]=useState("");
const navigate = useNavigate();

const current=examples[index];


function check(word){

const clean =
word.replace(/[.,!?]/g,"");


if(clean===current.conjunction){

setMessage("correct");

}
else{

setMessage("wrong");

}

}



return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-purple-950
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

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

className="text-center mb-10"

>


<GitMerge
size={55}
className="mx-auto text-cyan-400 mb-4"
/>


<h1 className="text-5xl font-bold">
Compound Sentences
</h1>


<p className="text-slate-300 mt-3 text-lg">
Join two complete ideas using conjunctions.
</p>


</motion.div>





{/* Explanation */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
">


<h2 className="text-3xl font-bold mb-5">
What is a Compound Sentence?
</h2>


<p className="text-slate-300 text-lg">

A compound sentence contains two independent sentences
joined together by a conjunction.

</p>



<div className="
flex
justify-center
items-center
gap-3
flex-wrap
mt-8
">


<div className="
bg-blue-600
rounded-xl
px-5
py-4
font-bold
">

Complete Idea 1

</div>


<div className="text-3xl">
+

</div>


<div className="
bg-green-600
rounded-xl
px-5
py-4
font-bold
">

Conjunction

</div>


<div className="text-3xl">
+

</div>


<div className="
bg-purple-600
rounded-xl
px-5
py-4
font-bold
">

Complete Idea 2

</div>


</div>


</div>







{/* FANBOYS */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
">


<div className="flex items-center gap-3 mb-5">

<Link className="text-cyan-400"/>

<h2 className="text-3xl font-bold">
Joining Words (FANBOYS)
</h2>

</div>



<div className="
grid
grid-cols-4
md:grid-cols-7
gap-3
">


{
[
"For",
"And",
"Nor",
"But",
"Or",
"Yet",
"So"
].map(word=>(

<div

key={word}

className="
bg-cyan-600
rounded-xl
p-3
text-center
font-bold
"

>

{word}

</div>

))

}


</div>


</div>






{/* Interactive */}

<div className="
bg-white/10
rounded-3xl
p-8
">


<h2 className="text-3xl font-bold mb-5">
🎯 Find the Conjunction
</h2>


<p className="text-slate-300 mb-5">
Click the joining word.
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

whileHover={{
scale:1.1
}}

whileTap={{
scale:.9
}}

onClick={()=>check(word)}

className="
bg-slate-700
px-5
py-3
rounded-xl
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

initial={{
opacity:0
}}

animate={{
opacity:1
}}

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

Try finding the joining word.

</div>

}


</div>






{/* Example Builder */}

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="
mt-8
bg-yellow-500/20
border
border-yellow-400
rounded-2xl
p-6
"

>


<div className="flex gap-3 items-center mb-3">

<Lightbulb/>

<h2 className="text-2xl font-bold">
Remember
</h2>

</div>


<ul className="
list-disc
ml-6
space-y-2
text-slate-200
">

<li>
A compound sentence has two complete thoughts.
</li>

<li>
Use FANBOYS to connect them.
</li>

<li>
Put a comma before the conjunction.
</li>

</ul>


</motion.div>






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

Next Example

</button>



</div>

</div>

);

}