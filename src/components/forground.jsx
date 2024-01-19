import React, {useState} from "react";
import Card from "./card"; 

function Foreground (){

  // const ref = useRef(null)

const data = [
  {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.", fileSize : '.9mb', close : true, tag:{isOpen : true, tagTitle : 'Download Now', tagColor : 'green'} },
  {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.", fileSize : '.9mb', close : true, tag:{isOpen : true, tagTitle : 'Download Now', tagColor : 'blue'} },
  {desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.", fileSize : '.9mb', close : false, tag:{isOpen : false, tagTitle : 'Upload', tagColor : 'green'} }
]

return(
  <div className="fixed z-[3] top-0 left-0 w-full h-full bg-zinc-900/10 flex gap-5 flex-wrap p-5">
   {data.map((item, index)=>(
     <Card data={item} />  
   ))}
  </div>
)
}

export default Foreground