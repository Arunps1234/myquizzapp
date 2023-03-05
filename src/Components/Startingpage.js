import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./Startingpage.css"
import {AiOutlineCloseCircle, AiOutlineCheckCircle} from "react-icons/ai";
import SmallScreen from './Smallscreen';


const Startingpage = ({ setStartingpage, setShowQuestionpage, topscore, username, setUsername }) => {



    const [ready, setReady] = useState(false)
    const[disbled, setDisabled]=useState(true)
    const[error, setError]=useState(false)
    const[inputicons, setinputicons]=useState(true)
    const[name, setname]=useState("")
    setUsername(name)


    useEffect(() => {
        if (name.trim().length >=2) {
            setinputicons(false)
        }
        else{
            setinputicons(true)
        }
    })

    const Questionpage=()=>{
        if(name.trim().length <2){
            setError(true);
            setStartingpage(true)
            
        }
        else{
            setShowQuestionpage(true);
            setStartingpage(false)
        }
    }

    return (
        <>
        <div className='mains'>
            <Card >

            <h1 className='header'>Welcome to quizz Game!</h1>
           
           <div> <h3 className='primary_text'>Please enter your name.</h3>
            <input type='text' placeholder='Username' className='username_input' value={name} onChange={e => setname(e.target.value)} required />
           { inputicons ? 
           
            <AiOutlineCloseCircle style={{position:'relative', top:'-120px',right:'140px', float:'right', fontSize:'25px' , color:'red', borderRadius:'50%', border:'none', cursor:'text'}}/>
         :  <AiOutlineCheckCircle style={{position:'relative', top:'-120px',right:'140px', float:'right', fontSize:'25px' , color:'green', borderRadius:'50%', border:'none', cursor:'text'}}/>
           
}
            </div>
        {error &&
              <span style={{color:'red', position:'absolute', top:'300px', left:'220px'}}>Please Enter valid Username!</span>
        }
            <button className='start_btn' onClick={Questionpage} >Let's Play</button>
            <p className='Top_score'>Top score: <span>{topscore}</span></p>
        </Card>
        </div>
      <SmallScreen/>
       </> 
    )
}

export default Startingpage