import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleOnClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  
  const resetbutton =()=>{
    let resetcontant =""
    setText(resetcontant)
    props.showAlert("Text was removed", "success");
  } 
  const removeExtraSpaces=()=>{
    let removeSpace =text.split(/[ ]+/);
    setText(removeSpace.join(" "))
    props.showAlert("Extra space was removed!", "success");
  }

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text was coppied!", "success");
  }
  const [text, setText] = useState("");
  
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
        <p className="mx-4">Characters Count {text.length}</p>
        <p className="mx-4">Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  </p>
        </div>
        <div className="my-4">
          Preview  
          <div className="my-4">{text.length>0?text:"Nothing to preview!"}
          </div>
        </div>
      </div>
    </>
  );
}
