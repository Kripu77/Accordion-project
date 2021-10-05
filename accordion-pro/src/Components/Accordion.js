import React,{useState}from 'react'
import data from "./data.js";
import SingleAcco from './SingleAcco.js';

const Accordion = () => {
  const[questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main> 
      <h1 className="title"> Some cool concpets of JavaScript</h1>
      <div className="bar"></div>
     <section className="container">
       
       {questions.map((value)=>{
      const {id, info, title} =  value;
         return (
           <div key={id}>

            
           <SingleAcco id={id} info={info} title={title}/>
             </div>
         )
       })}


     </section>


    
    </main>
  )
}

export default Accordion
