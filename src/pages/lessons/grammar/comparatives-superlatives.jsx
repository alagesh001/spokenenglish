import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  CheckCircle,
  XCircle
} from "lucide-react";

export default function ComparativesSuperlatives() {

  const examples = [
    {
      normal:"Tall",
      comparative:"Taller",
      superlative:"Tallest",
      sentence:"Rahul is tall. Amit is taller. John is the tallest."
    },
    {
      normal:"Fast",
      comparative:"Faster",
      superlative:"Fastest",
      sentence:"A car is fast. A bike is faster. A train is the fastest."
    },
    {
      normal:"Big",
      comparative:"Bigger",
      superlative:"Biggest",
      sentence:"A house is big. A hotel is bigger. A palace is the biggest."
    },
    {
      normal:"Beautiful",
      comparative:"More beautiful",
      superlative:"Most beautiful",
      sentence:"This garden is beautiful. That garden is more beautiful. This is the most beautiful garden."
    }
  ];


  const questions = [

    {
      question:"A lion is ______ than a cat.",
      options:[
        "stronger",
        "strongest",
        "strong"
      ],
      answer:"stronger",
      explanation:
      "We compare two animals, so we use comparative form."
    },

    {
      question:"Mount Everest is the ______ mountain in the world.",
      options:[
        "high",
        "higher",
        "highest"
      ],
      answer:"highest",
      explanation:
      "We compare one thing with all others, so we use superlative."
    },

    {
      question:"This book is ______ than that book.",
      options:[
        "interesting",
        "more interesting",
        "most interesting"
      ],
      answer:"more interesting",
      explanation:
      "For longer adjectives, use more for comparisons."
    },

    {
      question:"Today is the ______ day of my life.",
      options:[
        "happy",
        "happier",
        "happiest"
      ],
      answer:"happiest",
      explanation:
      "The best among many uses superlative."
    },

    {
      question:"A cheetah is the ______ animal.",
      options:[
        "fast",
        "faster",
        "fastest"
      ],
      answer:"fastest",
      explanation:
      "The highest degree uses -est."
    }

  ];


  const [current,setCurrent]=useState(0);
  const [selected,setSelected]=useState("");
  const [show,setShow]=useState(false);
  const [score,setScore]=useState(0);


  const q=questions[current];


  function choose(option){

    if(show) return;

    setSelected(option);
    setShow(true);

    if(option===q.answer){
      setScore(score+1);
    }

  }


  function next(){

    setCurrent(current+1);
    setSelected("");
    setShow(false);

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
max-w-5xl
mx-auto
">


{/* Header */}

<div className="text-center mb-10">

<TrendingUp
size={60}
className="mx-auto text-cyan-400 mb-4"
/>


<h1 className="
text-5xl
font-bold
">

Comparatives & Superlatives

</h1>


<p className="
text-slate-300
mt-4
">

Learn how to compare people, places and things.

</p>


</div>







{/* Explanation */}

<div className="
grid
md:grid-cols-3
gap-6
mb-8
">


<div className="
bg-blue-500/20
rounded-3xl
p-6
">

<h2 className="text-3xl font-bold mb-3">

Positive

</h2>


<p>
Just describing one thing.
</p>


<div className="
bg-slate-800
rounded-xl
p-4
mt-4
">

A tall boy

</div>


</div>





<div className="
bg-green-500/20
rounded-3xl
p-6
">


<h2 className="text-3xl font-bold mb-3">

Comparative

</h2>


<p>
Compare two things.
</p>


<div className="
bg-slate-800
rounded-xl
p-4
mt-4
">

Tall → Taller

<br/>

A is taller than B.

</div>


</div>






<div className="
bg-purple-500/20
rounded-3xl
p-6
">


<h2 className="text-3xl font-bold mb-3">

Superlative

</h2>


<p>
Compare three or more.
</p>


<div className="
bg-slate-800
rounded-xl
p-4
mt-4
">

Tall → Tallest

<br/>

A is the tallest.

</div>


</div>


</div>








{/* Examples */}

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

Examples

</h2>


<div className="
space-y-4
">


{
examples.map(item=>(


<div

key={item.normal}

className="
bg-slate-700
rounded-xl
p-5
"


>


<div className="
flex
justify-between
flex-wrap
text-lg
">


<span>
{item.normal}
</span>


<span>
➡ {item.comparative}
</span>


<span className="text-cyan-400">
➡ {item.superlative}
</span>


</div>


<p className="
mt-3
text-slate-300
">

{item.sentence}

</p>


</div>


))
}


</div>


</div>









{/* Quiz */}


<motion.div

key={current}

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


<div className="
flex
justify-between
mb-6
">

<span>
Question {current+1}/5
</span>

<span>
Score: {score}
</span>

</div>



<h2 className="
text-3xl
mb-8
">

{q.question}

</h2>



<div className="
flex
gap-4
flex-wrap
">


{
q.options.map(option=>(


<button

key={option}

onClick={()=>choose(option)}

disabled={show}

className={`
px-6
py-3
rounded-xl

${
show

?

option===q.answer

?

"bg-green-600"

:

option===selected

?

"bg-red-600"

:

"bg-slate-700"

:

"bg-slate-700 hover:bg-cyan-600"

}

`}

>

{option}

</button>


))
}


</div>





{
show && (

<div className="mt-6">


{
selected===q.answer

?

<div className="text-green-400 flex gap-2">

<CheckCircle/>

Correct

</div>


:

<div className="text-red-400 flex gap-2">

<XCircle/>

Wrong

</div>


}


<div className="
mt-4
bg-cyan-500/10
border
border-cyan-500
rounded-xl
p-4
">

{q.explanation}

</div>



{
current<questions.length-1 &&

<button

onClick={next}

className="
mt-5
bg-cyan-600
px-6
py-3
rounded-xl
"

>

Next →

</button>

}



</div>

)

}


</motion.div>





</div>

</div>

  );

}