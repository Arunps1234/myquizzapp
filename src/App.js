import logo from './logo.svg';
import './App.css';
import Startingpage from './Components/Startingpage';
import Questionpage from './Components/Questionpage';
import Question from './Components/Question';
import Finalpage from './Components/Finalpage';
import { useState } from 'react';

function App() {
  const[showStartingpage, setStartingpage]=useState(true)
  const[showQuestionPage, setShowQuestionpage]=useState(false)
  const[showfinalpage, setFinalpage]=useState(false)



  const[score, setScore]=useState(0)
  const[topscore, setTopScore]=useState(0)

  const[username, setUsername]=useState('')
  return (
<React.Fragment>
{showStartingpage && <Startingpage
setStartingpage={setStartingpage}
setShowQuestionpage={setShowQuestionpage}
topscore={topscore}
username={username}
setUsername={setUsername}

/>}


{showQuestionPage && <Questionpage
score={score}
setScore={setScore}
setShowQuestionpage={setShowQuestionpage}
setFinalpage={setFinalpage}

/>}
{showfinalpage && <Finalpage
score={score}
setScore={setScore}
topscore={topscore}
setTopScore={setTopScore}
setStartingpage={setStartingpage}
setFinalpage={setFinalpage}
username={username}
setUsername={setUsername}




/>}


</React.Fragment>
  );
}

export default App;
