import React, {useState} from 'react'
import { GrAdd, GrClose} from "react-icons/gr";
const SingleAcco = ({id, info, title}) => {
    const[isClicked, setIsClicked]= useState(false);
    return (
       <article>
       
           <section className="item-container">
               <section>
               <h3>{title}</h3>
               <p>{info}</p>
               </section>
               <section>
                   <button>{isClicked?<GrClose/> : <GrAdd/>}</button>
               </section>
                </section>
       </article>
    )
}

export default SingleAcco
