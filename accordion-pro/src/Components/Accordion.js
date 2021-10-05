import React,{useState}from 'react'
import data from "./data.js";
import SingleAcco from './SingleAcco.js';

const Accordion = () => {
  const[questions, setQuestions] = useState(data);
  console.log(questions);
  return (
    <main> 
      <h1 className="title"> Why you should learn JavaScript?</h1>
      <div className="bar"></div>
     <section className="container">
          <h2>Why you should learn JavaScript </h2>
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
