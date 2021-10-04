import React,{useState} from 'react'
import data from './data.js';
import { GrAddCircle, GrFormSubtract} from "react-icons/gr"

const Accordion = () => {
  const [details, setDetails] = useState(data);
  const[readmore, isReadMore] = useState (false);
  const[click, setClick] = useState(true);

    return (
       <main >

<h1 className="title"> Why you should learn JavaScript?</h1>
<div className="bar"> </div>
<article className="container">
<h2> Some cool concpets of JavaScript</h2>
<section >
{details.map((value)=>{
const {id, title, info } = value;

return( <div key={id} className="item-container">
    <div className="check">
<h1 className="body-title"> {title}</h1>
<p className="info"> {click? `${info}` : ""}</p>
</div>

<button className="icon" onClick={()=>setClick(
    
    !click
    
    )}> {click? <GrAddCircle/> : <GrFormSubtract/>}</button>
</div>)

})}
</section>
</article>
       </main>)
}

export default Accordion
