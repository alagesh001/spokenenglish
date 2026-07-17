import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb
} from "lucide-react";

export default function CommonGrammarMistakes() {


const mistakes = [

{
wrong:"He go to school every day.",
correct:"He goes to school every day.",
rule:"With he/she/it in simple present, add 's' or 'es' to the verb."
},

{
wrong:"I am agree with you.",
correct:"I agree with you.",
rule:"Agree is a verb. Do not use 'am' before it."
},

{
wrong:"She don't like coffee.",
correct:"She doesn't like coffee.",
rule:"Use doesn't with he/she/it."
},

{
wrong:"I have two brother.",
correct:"I have two brothers.",
rule:"More than one person needs plural form."
},

{
wrong:"He is good in English.",
correct:"He is good at English.",
rule:"Use 'good at' for skills."
},

{
wrong:"I am living here since 2020.",
correct:"I have been living here since 2020.",
rule:"Use present perfect continuous with since/for."
},

{
wrong:"Yesterday I go to market.",
correct:"Yesterday I went to the market.",
rule:"Past time needs past tense."
},

{
wrong:"She can sings well.",
correct:"She can sing well.",
rule:"After modal verbs (can, will, should), use base verb."
},

{
wrong:"I didn't went there.",
correct:"I didn't go there.",
rule:"After did/didn't, use base verb."
},

{
wrong:"He is married with her.",
correct:"He is married to her.",
rule:"The correct phrase is married to."
}

];



const quiz=[

{
question:"Choose the correct sentence:",
options:[
"He don't play football.",
"He doesn't play football."
],
answer:"He doesn't play football."
},

{
question:"Choose the correct sentence:",
options:[
"I went yesterday.",
"I go yesterday."
],
answer:"I went yesterday."
},

{
question:"Choose the correct sentence:",
options:[
"She can dance.",
"She can dances."
],
answer:"She can dance."
},

{
question:"Choose the correct sentence:",
options:[
"I have two cars.",
"I have two car."
],
answer:"I have two cars."
}

];



const [tab,setTab]=useState("learn");

const [current,setCurrent]=useState(0);

const [selected,setSelected]=useState("");

const [show,setShow]=useState(false);

const [score,setScore]=useState(0);



function answer(option){

if(show)return;

setSelected(option);
setShow(true);

if(option===quiz[current].answer){
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


<div className="max-w-6xl mx-auto">


{/* Header */}

<div className="text-center mb-10">


<AlertTriangle

size={60}

className="mx-auto text-yellow-400 mb-4"

/>


<h1 className="
text-5xl
font-bold
">

Common Grammar Mistakes

</h1>


<p className="
text-slate-300
mt-4
">

Learn mistakes and improve your English.

</p>


</div>





{/* Tabs */}

<div className="
flex
justify-center
gap-4
mb-8
">


<button

onClick={()=>setTab("learn")}

className={`
px-6 py-3 rounded-xl

${tab==="learn"
?
"bg-cyan-600"
:
"bg-slate-700"
}

`}

>

Learn Mistakes

</button>



<button

onClick={()=>setTab("quiz")}

className={`
px-6 py-3 rounded-xl

${tab==="quiz"
?
"bg-cyan-600"
:
"bg-slate-700"
}

`}

>

Practice

</button>



</div>





{
tab==="learn"

?

<div className="
space-y-5
">


{
mistakes.map((item,index)=>(


<motion.div

key={index}

initial={{opacity:0,y:20}}

animate={{opacity:1,y:0}}

className="
bg-white/10
border
border-white/20
rounded-2xl
p-6
"

>


<h2 className="
text-xl
font-bold
mb-3
">

Mistake {index+1}

</h2>



<div className="
bg-red-500/20
rounded-xl
p-4
mb-3
">

❌ {item.wrong}

</div>


<div className="
bg-green-500/20
rounded-xl
p-4
mb-4
">

✅ {item.correct}

</div>



<div className="
bg-cyan-500/10
border
border-cyan-500
rounded-xl
p-4
flex
gap-3
">

<Lightbulb/>

{item.rule}

</div>



</motion.div>


))
}


</div>


:


<div className="
bg-white/10
rounded-3xl
p-8
">


<div className="
flex
justify-between
mb-6
">

<span>
Question {current+1}/{quiz.length}
</span>

<span>
Score: {score}
</span>


</div>



<h2 className="
text-3xl
mb-8
">

{quiz[current].question}

</h2>




<div className="
space-y-4
">


{
quiz[current].options.map(option=>(


<button

key={option}

onClick={()=>answer(option)}

disabled={show}

className={`
w-full
text-left
p-4
rounded-xl

${
show

?

option===quiz[current].answer

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
show &&

<div className="mt-6">


{

selected===quiz[current].answer

?

<div className="
text-green-400
flex
gap-2
">

<CheckCircle/>

Correct!

</div>


:

<div className="
text-red-400
flex
gap-2
">

<XCircle/>

Incorrect

</div>


}




{

current<quiz.length-1 &&

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

}



</div>

}



</div>

</div>

);

}