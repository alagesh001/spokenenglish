import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  RotateCcw
} from "lucide-react";

import { questions } from "../../../data/data_extras";

export default function GrammarQuiz() {







// Dynamic categories from questions

const categories = [
"All",
...new Set(
questions.map(q=>q.category)
)
];



// Random colors for categories

const colors = [

"from-purple-500 to-indigo-600",
"from-blue-500 to-cyan-600",
"from-green-500 to-emerald-600",
"from-orange-500 to-red-600",
"from-pink-500 to-rose-600",
"from-yellow-500 to-orange-600",
"from-teal-500 to-green-600",
"from-fuchsia-500 to-purple-600"

];


const categoryColors={};


categories.forEach((cat,index)=>{

categoryColors[cat]=
colors[index % colors.length];

});






const [selectedCategory,setSelectedCategory]=useState("All");

const [current,setCurrent]=useState(0);

const [selectedAnswer,setSelectedAnswer]=useState(null);

const [score,setScore]=useState(0);

const [showResult,setShowResult]=useState(false);





const filteredQuestions =

selectedCategory==="All"

?

questions

:

questions.filter(
q=>q.category===selectedCategory
);






const activeColor =

categoryColors[
filteredQuestions[current]?.category
]

||

"from-purple-500 to-indigo-600";








function selectAnswer(index){


setSelectedAnswer(index);


if(
index === filteredQuestions[current].answer
){

setScore(prev=>prev+1);

}


}





function nextQuestion(){


if(current < filteredQuestions.length-1){

setCurrent(current+1);

setSelectedAnswer(null);

}

else{

setShowResult(true);

}


}







function previousQuestion(){


if(current>0){

setCurrent(current-1);

setSelectedAnswer(null);

}


}







function restart(){


setCurrent(0);

setScore(0);

setSelectedAnswer(null);

setShowResult(false);


}









return (

<div className="
min-h-screen
bg-gradient-to-br
from-slate-900
via-purple-950
to-black
text-white
p-6
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


<BookOpen

size={60}

className="
mx-auto
text-purple-400
mb-4
"

/>


<h1 className="
text-5xl
font-bold
">

Quiz 1

</h1>


<p className="
text-slate-300
mt-3
">

Practice English grammar topic by topic

</p>


</div>









{/* Category Dropdown */}


<div className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-6
mb-8
shadow-xl
">


<div className="
flex
justify-between
items-center
mb-4
">


<h2 className="
text-2xl
font-bold
">

Choose Category

</h2>


<div className="
bg-slate-800
px-4
py-2
rounded-full
text-sm
">

{
filteredQuestions.length
}

Questions

</div>


</div>





<select

value={selectedCategory}

onChange={(e)=>{

setSelectedCategory(e.target.value);

setCurrent(0);

setSelectedAnswer(null);

}}

className="
w-full
bg-slate-800
border
border-slate-600
rounded-2xl
px-5
py-4
text-lg
outline-none
focus:ring-2
focus:ring-purple-500
"

>


{

categories.map(cat=>(


<option

key={cat}

value={cat}

>

{
cat==="All"
?
"🌎 All Categories"
:
"📘 "+cat
}

</option>


))

}


</select>



</div>









{/* Empty State */}


{

filteredQuestions.length===0 &&


<div className="
bg-yellow-500/10
border
border-yellow-500
rounded-3xl
p-8
text-center
">


<h2 className="
text-3xl
font-bold
mb-3
">

No Questions Available

</h2>


<p className="
text-slate-300
">

Add questions inside the questions array.

</p>


</div>


}









{/* Quiz */}



{

filteredQuestions.length>0
&&
!showResult

&&


<motion.div

key={current}

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

className="
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-[2rem]
p-8
shadow-2xl
"

>






{/* Top Info */}


<div className="
flex
justify-between
items-center
mb-6
flex-wrap
gap-3
">


<span

className={`
px-5
py-2
rounded-full
bg-gradient-to-r
${activeColor}
font-semibold
shadow-lg
`}
>

📘 {filteredQuestions[current].category}

</span>


<span className="
bg-slate-800
px-4
py-2
rounded-full
">

Question {current+1} / {filteredQuestions.length}

</span>


</div>









{/* Progress */}


<div className="
mb-8
">


<div className="
h-3
bg-slate-800
rounded-full
overflow-hidden
">


<div

className={`
h-full
bg-gradient-to-r
${activeColor}
transition-all
`}

style={{

width:
`${((current+1)/filteredQuestions.length)*100}%`

}}

/>


</div>


</div>









{/* Question */}


<h2 className="
text-3xl
font-bold
mb-8
">

{filteredQuestions[current].question}

</h2>









{/* Options */}


<div className="
space-y-4
">


{

filteredQuestions[current].options.map(
(option,index)=>(


<motion.button

whileHover={{
x:8
}}

key={index}

onClick={()=>selectAnswer(index)}

className={`

w-full
text-left
p-5
rounded-2xl
border
transition-all


${
selectedAnswer===index

?

index===filteredQuestions[current].answer

?

"bg-green-600 border-green-400"

:

"bg-red-600 border-red-400"


:

"bg-slate-800 border-slate-700 hover:bg-slate-700"

}

`}

>


<div className="
flex
gap-4
items-center
">


<div className="
w-8
h-8
rounded-full
bg-black/20
flex
items-center
justify-center
">

{
String.fromCharCode(
65+index
)
}

</div>


{option}


</div>


</motion.button>


)

)

}


</div>









{/* Explanation */}


{

selectedAnswer!==null &&


<div className="
mt-8
bg-green-500/10
border
border-green-500
rounded-2xl
p-6
">


<h3 className="
font-bold
text-xl
mb-2
">

Explanation

</h3>


<p className="
text-slate-200
">

{
filteredQuestions[current].explanation
}

</p>


</div>


}









{/* Navigation */}


<div className="
flex
justify-between
mt-8
">


<button

onClick={previousQuestion}

disabled={current===0}

className="
bg-slate-700
px-6
py-3
rounded-xl
flex
gap-2
disabled:opacity-40
"

>

<ArrowLeft/>

Previous

</button>







<button

onClick={nextQuestion}

disabled={selectedAnswer===null}

className="
bg-purple-600
px-6
py-3
rounded-xl
flex
gap-2
disabled:opacity-40
"

>

Next

<ArrowRight/>

</button>


</div>








</motion.div>


}









{/* Result */}



{

showResult &&


<div className="
bg-white/10
border
border-white/20
rounded-3xl
p-10
text-center
">


<CheckCircle

size={70}

className="
mx-auto
text-green-400
mb-5
"

/>


<h2 className="
text-4xl
font-bold
">

Quiz Completed

</h2>


<p className="
text-2xl
mt-5
">

Score: {score} / {filteredQuestions.length}

</p>





<button

onClick={restart}

className="
mt-8
bg-purple-600
px-6
py-3
rounded-xl
flex
gap-2
mx-auto
"

>


<RotateCcw/>

Restart


</button>


</div>


}







</div>

</div>

);

}