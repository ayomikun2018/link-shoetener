import Shortener from "./Shortener";
import Result from './Result';
import './App.css';
import { useState } from "react";
import Background from "./Background";
function App() {

  const [input,setInput]= useState('')
  const [inputValue, setInputValue] = useState('')

const getInput = (e)=>{
  setInput(e.target.value)
 
}

const handleSubmission=(e)=>{
  e.preventDefault();
  setInputValue(input)
   setInput('')
}

  return (
    <div className="App">
    <header>Welcome! Where all the link shortening happens</header>
   
    <Shortener getInput={getInput} input={input}  formSubmitHandler={handleSubmission} inputValue={inputValue}/>
    <Background/>
    <Result inputValue={inputValue}/>
    </div>
  );
}

export default App;
