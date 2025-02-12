import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './componets/Box';



function App() {
const [gameArray, setGameArray] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ]);
  console.log(gameArray[0][0], "efef", gameArray[0][1])

  return (
    <div className="App">
      <div>
        player 
      </div>
      <div></div>
      <div className='flex-grid'>
      {new Array(9).fill("").map((some, index)=>{
        return(
        <Box value={gameArray[0][1]}/>
        )
      })}
      </div>
     
    </div>
  );
}

export default App;
