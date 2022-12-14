import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import HomeForm from './components/HomeForm';
import Alert from './components/Alert';
import About from './components/About';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [toggleName, setToggleName] = useState('Enable Dark Mode');
  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      setToggleName("Enable Light Mode");
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light');
      setToggleName("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
  <Router>
      <Navbar title="Text-Utility" about="About" mode={mode} toggleMode={toggleMode} lable={toggleName}/>
      <Alert alert={alert}/>
    <div className="container">
      <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}/>         
            <Route exact path="/" element={<HomeForm showAlert={showAlert} heading="Try TextUtility - Word counter, Character counter, Remove extra spaces" mode={mode} label="Enter your Text" />}/>
      </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
