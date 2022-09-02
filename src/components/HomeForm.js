import React, {useState} from 'react'

export default function HomeForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        // console.log("Button was clicked");
        let newText ="";
    setText(newText);
}
    const handleOnchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]= useState('');
  return (
    <div>
        <h1>{props.heading}</h1>
          {/* <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div> */}
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnchange} placeholder="Enter your text" id="exampleFormControlTextarea1" row="1"></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>Upper Case</button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-3" onClick={handleLoClick}>Lower Case</button>
          <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read (Average Reading Speed)</p>
            <h2>Preview</h2>
            <p>{text}</p>
          </div>
    </div>
  )   
}

