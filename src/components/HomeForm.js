import React, {useState} from 'react'

export default function HomeForm(props) {
    const handleUpClick = () => {
        console.log("Button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]= useState('Enter your text');
  return (
    <div>
        <h1>{props.heading}</h1>
          {/* <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div> */}
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
              <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" row="1"></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>Log-In</button>
    </div>
  )   
}

