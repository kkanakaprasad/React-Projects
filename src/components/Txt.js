import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  
  const resetbutton =()=>{
    let resetcontant =""
    setText(resetcontant)
  } 
  const removeExtraSpaces=()=>{
    let removeSpace =text.split(/[ ]+/);
    setText(removeSpace.join(" "))
  }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
  }

  
  return (
    <>
      <div className='container my-4 'style={{color: props.changemode==='dark'?'white':'#042743'}}>
        <h1 style={{color: props.changemode==='dark'?'white':'#042743'}}>{props.title} </h1>
        <div className="form-floating">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" >
              Entere Text Below
            </label>
            <textarea 
              className="form-control" 
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"  style={{backgroundColor: props.changemode==='dark'?'#042743':'white', color: props.changemode==='dark'?'white':'#042743'}} 
            ></textarea>
          </div>
        </div>
        <button
          type="button"
          onClick={handleUpClick}
          className="btn btn-primary my-3 mx-2"
        >
          Change to UpperCases
        </button>
        <button
          type="button"
          onClick={handleOnClick}
          className="btn btn-primary my-3 mx-2"
        >
          Change to LowerCase
        </button>
        <button
          type="button"
          onClick= {handleCopy}
          className="btn btn-primary my-3 mx-2"
        >
          Copy
        </button>
        <button
          type="button"
          onClick={removeExtraSpaces}
          className="btn btn-primary my-3 mx-2"
        >
          Remove Extra space
        </button>
        <button
          type="button"
          onClick={resetbutton}
          className="btn btn-primary my-3 mx-2"
        >
          Reset
        </button>
        <div>
        <h7 className="mx-4">Characters Count {text.length}</h7>
        <h7> Number Of Words{text.split(" ").length}</h7>
        </div>
        <div className="my-2">
          preview  
          <div className="my-2">{text}
          </div>
        </div>
      </div>
    </>
  );
}
