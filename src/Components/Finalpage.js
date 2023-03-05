import React, { useState, useRef } from 'react'
import "./Finalpage.css"
import Card from './Card'

const Finalpage=({score,username, setFinalpage, setStartingpage, setScore})=>{

const Playagain=()=>{
setModalpop(true)
}

const CloseX=()=>{
    setModalpop(false)
}
function Clickno(){
    setModalpop(false)
}
function Clickyes(){
setModalpop(false);
setFinalpage(false);
setStartingpage(true);
setScore(0)
}

const ref=useRef()
 const[modelpop, setModalpop]=useState(false)

 const clickOutside=(e)=>{
    if(ref.current && ! ref.current.contains(e.target)){
        setModalpop(false)
    }
 }


 var message;
 if (score===1000){
    
    message="Congratulations, You done a good job!"
    
 }
 else if (score==700 || score==800 || score==900){
    message="Alomost, lets try again!"
 }
 else if (score==500){
message="Try it Again"
 }
 else{
    message="Better luck next time"
 }

 document.addEventListener("click", clickOutside, true)
    return(
<Card>
<h1 className='heading'>{message}, {username} </h1>

<h3 className='primary_text'>Your final score is:</h3>

<h3 className='final_score'>{score} /1000</h3>

<button className='play_again_btn' onClick={Playagain}>Play Again</button>


{ modelpop &&
<div className='model' ref={ref}>
    <div className='close' onClick={CloseX}>X</div>
    <h5 className='head'>Hey {username}, You're final score is {score}</h5>
    <br/><br/>
    <h6 class="doyou">Do you want to play again ?</h6>

    <button className='nobtn' onClick={Clickno}>No</button>
    <button className='yesbtn' onClick={Clickyes}>Yes</button>


</div>
}
</Card>
    )
}

export default Finalpage