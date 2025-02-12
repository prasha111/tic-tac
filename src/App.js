import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Box from './componets/Box';


const winning  = [
  [0,1,2],
  [0,5,8],
  [0,3,6],
  [6,7,8],
  [2,5,8],
  [1,4,7],
  [3,4,5],
  [2,4,6]
]

function App() {
  const [cross, setCross] = useState(true)
const [gameArray, setGameArray] = useState(["","","","","","","","",""]);
  const addClick = (index)=>{
    setGameArray((prev)=>{
      if(prev[index] !== "") return prev
      const ne = [...prev]
      ne[index] = cross?"X":"0";
      return [...ne]
    })
    setCross(()=>!cross)
  }
  useEffect(()=>{
    winning.map((some,index)=>{
      let output = ""+ gameArray[some[0]] + gameArray[some[1]] + gameArray[some[2]];
      console.log(output)
      if(output === "XXX" ){
      console.log("p 1", some)
      }
      if(output === "000"){
        console.log("p 2", some)
      }
    })
  }, [gameArray])
  //console.log(gameArray)
  //console.log(gameArray[0][0], "efef", gameArray[0][1])


  return (
    <div className="App">
      <div>
        player 
      </div>
      <div></div>
      <div className='flex-grid'>
      {gameArray.map((some, index)=>{
        return(
        <Box key={index} onClick={()=>{addClick(index)}} value={gameArray[index]}/>
        )
      })}
      </div>
     
    </div>
  );
}

export default App;
