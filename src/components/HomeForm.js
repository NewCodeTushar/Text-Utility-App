import React, {useState} from 'react'

export default function HomeForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("Button was clicked");
        let newText ="";
        setText(newText);
        props.showAlert("Text area cleared", "success");
}
    const handleOnchange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    
    const handleCopy = () =>{
      //  console.log("I am Copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces has been deleted", "success");
    }
    const [text,setText]= useState('');
  return (
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='my-2'>{props.heading}</h1>
          {/* <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div> */}
          <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} placeholder="Enter your text" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" row="5"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Upper Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my 3" onClick={handleLoClick}>Lower Case</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Space</button>
          <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
              <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read (Average Reading Speed)</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
          </div>
    </div>
  )   
}

