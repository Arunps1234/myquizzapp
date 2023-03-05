import React, { useState } from 'react'
import "./Questionpage.css"
import {questions} from "./Data.js"
import Question from './Question'



const Questionpage=({score, setScore , setShowQuestionpage , setFinalpage})=>{


    const[questionIndex, setQuestionIndex]=useState(0);

    return(
        <div>
<Question
questionIndex={questionIndex}
setQuestionIndex={setQuestionIndex}
questions={questions}
setShowQuestionpage={setShowQuestionpage}
setFinalpage={setFinalpage}
score={score}
setScore={setScore}

/>
        </div>
    )
}

export default Questionpage