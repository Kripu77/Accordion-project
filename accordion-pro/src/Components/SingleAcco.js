import React, {useState} from 'react'
import { GrAdd, GrClose} from "react-icons/gr";
const SingleAcco = ({id, info, title}) => {
    const[isClicked, setIsClicked]= useState(false);
    return (
       <article>
       
           <section className="item-container">
               <section className="details">
               <h3 className="body-title">{title}</h3>
               <p>{isClicked? <p className="info"> {info} </p> : "" }</p>
               </section>
               <section>
                   <button className="check" onClick={()=>setIsClicked(!isClicked)}>{isClicked?<GrClose/> : <GrAdd/>}</button>
               </section>
                </section>
       </article>
    )
}

export default SingleAcco
