import React, {useState} from 'react'
import Card from './Card'
import "./Question.css"
import {AiOutlineCloseCircle, AiOutlineCheckCircle} from "react-icons/ai";


const Question=({
    questionIndex, setQuestionIndex , questions , setShowQuestionpage , setFinalpage ,  score  , setScore 


})=>{

    // for correct answer the icon

const[correct, setCorrect]=useState(false)

//For Wrong answer the icon
const[wronganswer, setWronganswer]=useState(false)

const handClick=(correctanswer)=>{
if(questionIndex<9){
    if(correctanswer){
        setScore((score)=>(score+=100));
        setCorrect(true)

       setTimeout(()=>{
        setCorrect(false)

       },1500) 
    
    }
    else{
        setWronganswer(true);
        setTimeout(()=>{
            setWronganswer(false)
        },1000)
    }
    setTimeout(()=>{
    setQuestionIndex((prevIndex)=>prevIndex+1);
    },2000)
}
else{
    if(correctanswer){
        setScore((score)=>(score+=100));
    }

    setShowQuestionpage(false);
    setFinalpage(true)
}
}


    return(
<Card>

<h1 className='question'> {questions[questionIndex].questionText}</h1>

<div className='answers'>
{questions[questionIndex].answers.map((answer,index)=>(
    <div className='answer' key={index} onClick={()=>handClick(answer.correctAnswer)}><p>{answer.answerText}</p></div>
))}
</div>

<p className='score'>
    score: <span>{score}</span>
</p>


<p className='question-number'>

    Question <span>{questionIndex+1}</span>/10
</p>

{ correct &&
    <AiOutlineCheckCircle className='success'/> }
    
    { wronganswer &&
    <AiOutlineCloseCircle className='wrong'/>
    }
</Card>
    )
}

export default Question