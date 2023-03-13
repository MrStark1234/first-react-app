import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light');     //weather dark mode is enable or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  } 

  const toggleMode = () => {
    if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = 'black'
    showAlert('Dark mode has been Enabled', 'success')
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been Enabled', 'success')
    }
  }
  return (
    <>
    
<Navbar title="Text-Utilizer" mode = {mode} toggleMode={toggleMode} aboutText="About Text-Utilizer" />
<Alert alert = {alert} />
<div className="container my-3">

  <Routes>

    <Route exact path ='/' element={<TextForm showAlert={showAlert} heading="Try Text-Utilizer for -- Word Counter | Character Counter | Remove Extra Spaces" mode={mode} />} />

    <Route exact path ='/home' element={<TextForm showAlert={showAlert} heading="Try Text-Utilizer for -- Word Counter | Character Counter | Remove Extra Spaces" mode={mode} />} />

    <Route exact path ='about' element={<About mode={mode} />} />
  
  

</Routes>
</div>

    </>
  );
}

export default App;
