//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import HomeForm from './components/HomeForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [toggleName, setToggleName] = useState('Enable Dark Mode');
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      setToggleName("Enable Light Mode");
      document.body.style.backgroundColor ='#042743';
    }
    else{
      setMode('light');
      setToggleName("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="My App" about="About" mode={mode} toggleMode={toggleMode} lable={toggleName}/>
    {/* <Navbar /> */}
    <div className="container">
        <HomeForm heading="Enter Your Text" mode={mode}  label="Enter your Text" />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
