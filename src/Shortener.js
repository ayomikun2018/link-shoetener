import React from "react";


export default function Shortener({input, getInput, formSubmitHandler,inputValue}) {
 
  return (
    <form  onSubmit={formSubmitHandler} className= 'only-form'> 
        <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
      <input type="text" placeholder="Paste a link here to shorten it!" onChange={getInput} value={input}></input>
      <button type="submit" >Shorten</button>
        {/* {inputValue} */}
    </div>
    
    </form>
  );
}
