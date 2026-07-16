import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle,
  MinusCircle,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const examples = [
  {
  positive: "I play football.",
  negativeWords: [
    "I",
    "do not",
    "play",
    "football."
  ],
  answer: "do not",
  explanation:
    "'do not' makes the sentence negative."
},
  {
  positive: "She likes coffee.",
  negativeWords: [
    "She",
    "does not",
    "like",
    "coffee."
  ],
  answer: "does not",
  explanation:
    "'does not' makes the sentence negative."
},
{
  positive: "They are happy.",
  negativeWords: [
    "They",
    "are not",
    "happy."
  ],
  answer: "are not",
  explanation:
    "'are not' makes the sentence negative."
},
 {
  positive: "He is a doctor.",
  negativeWords: [
    "He",
    "is not",
    "a",
    "doctor."
  ],
  answer: "is not",
  explanation:
    "'is not' makes the sentence negative."
},
  {
    positive: "We played cricket.",
  negativeWords: [
    "We",
    "did not",
    "play",
    "cricket."
  ],
  answer: "did not",
    explanation:
    "'did not' makes the sentence negative."
}
];


export default function NegativeSentences(){

const [index,setIndex]=useState(0);
const [message,setMessage]=useState("");

const current=examples[index];
const navigate = useNavigate();


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



return(

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-red-950
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


<XCircle
size={55}
className="mx-auto text-red-400 mb-4"
/>


<h1 className="text-5xl font-bold">
Negative Sentences
</h1>


<p className="text-slate-300 mt-3 text-lg">
Learn how to change positive sentences into negative sentences.
</p>


</motion.div>





{/* Formula */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
">


<h2 className="text-3xl font-bold mb-5">
How to make a Negative Sentence?
</h2>


<div className="
grid
md:grid-cols-3
gap-5
">


<div className="
bg-blue-600
rounded-xl
p-5
text-center
">

Positive

<br/>

I play.

</div>



<div className="
bg-red-600
rounded-xl
p-5
text-center
">

Add

<br/>

do not / does not / not

</div>



<div className="
bg-green-600
rounded-xl
p-5
text-center
">

Negative

<br/>

I do not play.

</div>


</div>


</div>







{/* Rules */}

<div className="
bg-white/10
rounded-3xl
p-8
mb-8
">


<h2 className="text-3xl font-bold mb-5">
Negative Rules
</h2>


<div className="grid md:grid-cols-3 gap-5">


<div className="bg-red-500/20 rounded-xl p-5">

<h3 className="font-bold text-xl">
Action Verbs
</h3>

<p className="mt-2">
do not<br/>
does not<br/>
did not
</p>

</div>



<div className="bg-purple-500/20 rounded-xl p-5">

<h3 className="font-bold text-xl">
Be Verbs
</h3>

<p className="mt-2">
am not<br/>
is not<br/>
are not<br/>
was not
</p>

</div>



<div className="bg-yellow-500/20 rounded-xl p-5">

<h3 className="font-bold text-xl">
Remember
</h3>

<p className="mt-2">
Add "not" to show denial.
</p>

</div>


</div>


</div>






{/* Interactive */}


<div className="
bg-white/10
rounded-3xl
p-8
">


<h2 className="text-3xl font-bold mb-5">
🎯 Find the Negative Word
</h2>


<div className="
flex
items-center
gap-3
flex-wrap
mb-6
">


<div className="
bg-green-600
px-5
py-3
rounded-xl
">

{current.positive}

</div>


<ArrowRight/>


<div className="
bg-red-600
px-5
py-3
rounded-xl
">

 {current.negativeWords.join(" ")}
</div>


</div>



<p className="mb-4 text-slate-300">
Click the word that makes the sentence negative.
</p>


<div className="
flex
flex-wrap
gap-3
">


{
current.negativeWords.map((word, i) => (


<motion.button

key={i}

whileHover={{
scale:1.1
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

<div className="
mt-6
bg-green-500/20
border
border-green-500
rounded-xl
p-5
flex
gap-3
">

<CheckCircle/>

<div>

<b>Correct!</b>

<p>
{current.explanation}
</p>

</div>

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
p-5
flex
gap-3
">

<XCircle/>

Find the word that makes the sentence negative.

</div>

}


</div>






<div className="
mt-8
bg-yellow-500/20
border
border-yellow-400
rounded-2xl
p-6
">


<div className="flex gap-3 items-center">

<Lightbulb/>

<h2 className="text-2xl font-bold">
Remember
</h2>

</div>


<ul className="
list-disc
ml-6
mt-3
space-y-2
">

<li>
I do not play.
</li>

<li>
She does not sing.
</li>

<li>
They are not ready.
</li>

<li>
He is not tired.
</li>

</ul>


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

Next Example

</button>



</div>

</div>

)

}