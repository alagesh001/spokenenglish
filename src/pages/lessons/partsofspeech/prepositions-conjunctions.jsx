import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Link,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const prepositionExamples = [
  {
    sentence: "The book is on the table.",
    answer: "on",
    explanation:
      "On shows the relationship between the book and the table."
  },
  {
    sentence: "The cat is under the chair.",
    answer: "under",
    explanation:
      "Under tells the position of the cat."
  },
  {
    sentence: "She walked into the room.",
    answer: "into",
    explanation:
      "Into shows movement from outside to inside."
  }
];


const conjunctionExamples = [
  {
    sentence: "I like tea and coffee.",
    answer: "and",
    explanation:
      "And joins two words: tea and coffee."
  },
  {
    sentence: "He is tired but happy.",
    answer: "but",
    explanation:
      "But connects two opposite ideas."
  },
  {
    sentence: "I stayed home because it rained.",
    answer: "because",
    explanation:
      "Because joins a reason with an action."
  }
];


export default function PrepositionsConjunctions(){

const [tab,setTab]=useState("preposition");
const [index,setIndex]=useState(0);
const [message,setMessage]=useState("");
const navigate = useNavigate();


const data =
tab==="preposition"
?
prepositionExamples
:
conjunctionExamples;


const current=data[index];


function check(word){

const clean =
word.replace(/[.,!?]/g,"");


if(clean===current.answer){

setMessage("correct");

}
else{

setMessage("wrong");

}

}


function switchTab(type){

setTab(type);
setIndex(0);
setMessage("");

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



{/* Heading */}

<motion.div

initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}

className="text-center mb-10"

>

<h1 className="text-5xl font-bold">
Prepositions & Conjunctions
</h1>


<p className="text-slate-300 mt-3">
Learn words that show relationships and connect ideas.
</p>


</motion.div>





{/* Tabs */}


<div className="
flex
justify-center
gap-5
mb-10
">


<button

onClick={()=>switchTab("preposition")}

className={`
px-6
py-3
rounded-xl
font-bold
flex
gap-2
items-center

${
tab==="preposition"
?
"bg-blue-600"
:
"bg-white/10"
}

`}

>

<MapPin size={20}/>
Prepositions

</button>



<button

onClick={()=>switchTab("conjunction")}

className={`
px-6
py-3
rounded-xl
font-bold
flex
gap-2
items-center

${
tab==="conjunction"
?
"bg-green-600"
:
"bg-white/10"
}

`}

>

<Link size={20}/>
Conjunctions

</button>


</div>






{/* Explanation */}

<motion.div

key={tab}

initial={{opacity:0,x:40}}

animate={{opacity:1,x:0}}

className="
bg-white/10
rounded-3xl
p-8
mb-8
"

>


{

tab==="preposition"

?

<>


<h2 className="
text-3xl
font-bold
text-blue-400
mb-3
">

📍 Prepositions

</h2>


<p className="text-slate-300 text-lg">

A preposition shows the relationship between a noun
and another word.

It often tells us about:
<b> place, position, direction, or time.</b>

</p>



<div className="
grid
grid-cols-2
md:grid-cols-5
gap-3
mt-6
">

{

[
"on",
"in",
"under",
"above",
"between"
].map(word=>(

<div

key={word}

className="
bg-blue-600
rounded-xl
p-4
text-center
font-bold
"

>

{word}

</div>

))

}

</div>


</>


:

<>


<h2 className="
text-3xl
font-bold
text-green-400
mb-3
">

🔗 Conjunctions

</h2>


<p className="text-slate-300 text-lg">

A conjunction connects words, phrases,
or sentences together.

</p>



<div className="
grid
grid-cols-2
md:grid-cols-5
gap-3
mt-6
">


{

[
"and",
"but",
"or",
"because",
"so"
].map(word=>(

<div

key={word}

className="
bg-green-600
rounded-xl
p-4
text-center
font-bold
"

>

{word}

</div>

))

}


</div>


</>

}


</motion.div>






{/* Interactive */}

<div className="
bg-white/10
rounded-3xl
p-8
">


<h2 className="text-3xl font-bold mb-5">

🎯 Find the {
tab==="preposition"
?
"Preposition"
:
"Conjunction"
}

</h2>



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

whileTap={{scale:.9}}

onClick={()=>check(word)}

className="
bg-cyan-600
px-4
py-2
rounded-lg
"

>

{word}

</motion.button>


))

}


</div>




{

message==="correct" &&

<div className="
mt-6
bg-green-500/20
border
border-green-500
rounded-xl
p-4
flex
gap-3
">

<CheckCircle/>

{current.explanation}

</div>

}





{

message==="wrong" &&

<div className="
mt-6
bg-red-500/20
border
border-red-500
rounded-xl
p-4
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

setIndex((index+1)%data.length);
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


)

}