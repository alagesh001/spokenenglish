import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Zap,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const adjectiveExamples = [
  {
    sentence: "The red car is fast.",
    answer: "red",
    explanation:
      "Red describes the noun car. Therefore, it is an adjective."
  },
  {
    sentence: "She has a beautiful dress.",
    answer: "beautiful",
    explanation:
      "Beautiful describes the dress."
  },
  {
    sentence: "The tall boy plays cricket.",
    answer: "tall",
    explanation:
      "Tall describes the boy."
  }
];


const adverbExamples = [
  {
    sentence: "The boy runs quickly.",
    answer: "quickly",
    explanation:
      "Quickly describes how the boy runs."
  },
  {
    sentence: "She sings beautifully.",
    answer: "beautifully",
    explanation:
      "Beautifully tells how she sings."
  },
  {
    sentence: "The baby slept peacefully.",
    answer: "peacefully",
    explanation:
      "Peacefully describes the action slept."
  }
];


export default function AdjectivesAdverbs() {

  const [tab,setTab] = useState("adjective");
  const [index,setIndex] = useState(0);
  const [message,setMessage] = useState("");
const navigate = useNavigate();

  const data =
    tab === "adjective"
      ? adjectiveExamples
      : adverbExamples;


  const current = data[index];


  function check(word){

    const clean =
      word.replace(/[.,!?]/g,"");


    if(clean === current.answer){

      setMessage("correct");

    }
    else{

      setMessage("wrong");

    }

  }


  function changeTab(type){

    setTab(type);
    setIndex(0);
    setMessage("");

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

initial={{opacity:0,y:-30}}
animate={{opacity:1,y:0}}

className="text-center mb-10"

>

<h1 className="text-5xl font-bold">
Adjectives & Adverbs
</h1>

<p className="text-slate-300 mt-3">
Learn how words describe nouns and actions.
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

onClick={()=>changeTab("adjective")}

className={`
px-6
py-3
rounded-xl
font-bold
flex
items-center
gap-2
${
tab==="adjective"
?
"bg-orange-500"
:
"bg-white/10"
}
`}

>

<Palette size={20}/>
Adjectives

</button>



<button

onClick={()=>changeTab("adverb")}

className={`
px-6
py-3
rounded-xl
font-bold
flex
items-center
gap-2
${
tab==="adverb"
?
"bg-purple-600"
:
"bg-white/10"
}
`}

>

<Zap size={20}/>
Adverbs

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
tab==="adjective" ?

<>

<h2 className="
text-3xl
font-bold
text-orange-400
mb-3
">
🎨 Adjective
</h2>


<p className="text-lg text-slate-300">

An adjective describes a noun.
It tells us more about a person, place, animal, or thing.

</p>


<div className="
grid
md:grid-cols-3
gap-4
mt-6
">


{
["red","big","beautiful"].map(word=>(

<div
key={word}
className="
bg-orange-500
rounded-xl
p-4
text-center
font-bold
text-xl
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
text-purple-400
mb-3
">
⚡ Adverb
</h2>


<p className="text-lg text-slate-300">

An adverb describes a verb.
It tells us how, when, or where an action happens.

</p>


<div className="
grid
md:grid-cols-3
gap-4
mt-6
">


{
["quickly","slowly","beautifully"].map(word=>(

<div
key={word}
className="
bg-purple-600
rounded-xl
p-4
text-center
font-bold
text-xl
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
tab==="adjective"
?
"Adjective"
:
"Adverb"
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

{
current.explanation
}

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

setIndex(
(index+1)%data.length
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