import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Image,
  X,
  MessageCircle
} from "lucide-react";


export default function PictureDescription() {
const [loaded,setLoaded]=useState({});

const images = [

{
id:1,
url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
title:"Nature Scene",
description:"Describe the trees, sky, and environment."
},

{
id:2,
url:"https://images.unsplash.com/photo-1497366811353-6870744d04b2",
title:"Office",
description:"Describe the people and workplace."
},

{
id:3,
url:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
title:"Beach",
description:"Describe the sea, sand, and weather."
},

{
id:4,
url:"https://images.unsplash.com/photo-1517849845537-4d257902454a",
title:"Dog",
description:"Describe the animal and surroundings."
},

{
id:5,
url:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
title:"Learning",
description:"Describe what the person is doing."
},

{
id:6,
url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
title:"Restaurant",
description:"Describe the place and people."
},

{
id:7,
url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
title:"Forest",
description:"Describe nature and atmosphere."
},

{
id:8,
url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470",
title:"Mountain",
description:"Describe the landscape."
},

{
id:9,
url:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
title:"Person",
description:"Describe appearance and emotions."
},

{
id:10,
url:"https://images.unsplash.com/photo-1504150558240-0b4fd8946624",
title:"City",
description:"Describe buildings and traffic."
},

{
id:11,
url:"https://images.unsplash.com/photo-1511512578047-dfb367046420",
title:"Gaming",
description:"Describe the activity."
},

{
id:12,
url:"https://images.unsplash.com/photo-1488646953014-85cb44e25828",
title:"Travel",
description:"Describe the journey."
},

{
id:13,
url:"https://images.unsplash.com/photo-1519681393784-d120267933ba",
title:"Snow",
description:"Describe the weather."
},

{
id:14,
url:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
title:"Coffee",
description:"Describe the objects and place."
},

{
id:15,
url:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
title:"Team",
description:"Describe the group activity."
}

];



const [selected,setSelected]=useState(null);



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
max-w-7xl
mx-auto
">


{/* Header */}

<div className="
text-center
mb-10
">

<Image
size={60}
className="
mx-auto
text-cyan-400
mb-4
"
/>


<h1 className="
text-5xl
font-bold
">

Picture Description Practice

</h1>


<p className="
text-slate-300
mt-4
text-lg
">

Click any picture and describe what you see

</p>


</div>







{/* Gallery */}


<div className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-5
gap-5
">


{
images.map(img=>(


<motion.div

key={img.id}



onClick={()=>setSelected(img)}

className="
cursor-pointer
transition-transform
duration-300
hover:scale-105
bg-white/10
rounded-2xl
overflow-hidden
border
border-white/20
"


>

<div className="relative">

    {!loaded[img.id] && (
        <div className="absolute inset-0 animate-pulse bg-slate-700"/>
    )}

    <img
        src={img.url}
        loading="lazy"
        decoding="async"
        onLoad={()=>
            setLoaded(prev=>({...prev,[img.id]:true}))
        }
        className={`w-full h-40 object-cover transition-opacity duration-500 ${
            loaded[img.id] ? "opacity-100" : "opacity-0"
        }`}
    />

</div>


<div className="
p-3
">


<h3 className="
font-bold
">

{img.title}

</h3>


</div>


</motion.div>


))
}


</div>









{/* Preview Modal */}


<AnimatePresence>


{
selected && (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}

className="
fixed
inset-0
bg-black/80
flex
items-center
justify-center
p-6
z-50
"


>


<motion.div

initial={{
scale:0.8
}}

animate={{
scale:1
}}

className="
bg-slate-900
rounded-3xl
max-w-4xl
w-full
p-6
border
border-white/20
"

>


{/* Close */}

<button

onClick={()=>
setSelected(null)
}

className="
absolute
right-8
top-8
bg-red-500
p-3
rounded-full
"

>

<X/>

</button>





<img

src={`${selected.url}`}
alt={selected.title}

className="
w-full
h-[450px]
object-cover
rounded-2xl
"

/>





<h2 className="
text-3xl
font-bold
mt-6
">

{selected.title}

</h2>




<div className="
mt-5
bg-cyan-500/10
border
border-cyan-500
rounded-xl
p-5
flex
gap-3
items-center
">


<MessageCircle
className="
text-cyan-400
"
/>


<p className="
text-lg
">

{selected.description}

</p>


</div>





<div className="
mt-6
bg-slate-800
rounded-xl
p-5
">


<h3 className="
font-bold
text-xl
mb-3
">

Speak About This Picture:

</h3>


<ul className="
list-disc
ml-5
text-slate-300
space-y-2
">

<li>
What can you see?
</li>

<li>
Where is this place?
</li>

<li>
What are people doing?
</li>

<li>
How do you feel about this picture?
</li>

</ul>


</div>





</motion.div>


</motion.div>

)

}


</AnimatePresence>



</div>

</div>


);


}