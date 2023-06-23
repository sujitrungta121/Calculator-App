import React, { useState } from "react";
import "../src/App.css";
function App(){

  const [result,setResult]=useState("");
  const handleClick=(e)=>{
      setResult(result.concat(e.target.name));

  }

  const clear=()=>{
    setResult("");
  }

  const backSpace=()=>{
    setResult(result.slice(0,-1));
  }

  const calculate=()=>{
    try{
    setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
  }
  return (
    <div className="body">
    <div className="container">
    <form >
      <input type="text" value={result}/>
    </form>
    <div className="keypad">
      <button   className="highlight "onClick={clear} id="clear" >Clear</button>
      <button className="highlight "  onClick={backSpace}  id="backSpace">C</button>
     
      <button  className="highlight " onClick={handleClick} name="+">+</button>
      <button onClick={handleClick} name="1">1</button>
      <button onClick={handleClick} name="2">2</button>
      <button onClick={handleClick} name="3">3</button>
      <button className="highlight " onClick={handleClick} name="-">&ndash;</button>
      <button onClick={handleClick} name="4">4</button>
      <button onClick={handleClick} name="5">5</button>
      <button onClick={handleClick} name="6">6</button>
      <button className="highlight " onClick={handleClick} name="/">&divide;</button>
      <button onClick={handleClick} name="7">7</button>
      <button onClick={handleClick} name="8">8</button>
      <button onClick={handleClick} name="9">9</button>
      
      <button  className="highlight " onClick={handleClick} name="*">&times;</button>
      <button onClick={handleClick} name="0">0</button>
      <button onClick={handleClick} name=".">.</button>
     


      <button  className="highlight "id="result" onClick={calculate}>=</button>
      </div>
    </div>
    </div>
  )

}
export default App;

