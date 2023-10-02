import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Ameer from './components/Ameer';
import Navbar from './components/Navbar';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState('Enable DarkMode');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setText('Enable LightMode');
      showAlert("DarkMode has been Enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText('Enable DarkMode');
      showAlert("LightMode has been Enabled", "Success");
    }
  };

  return (
    <>
       <Navbar mode={mode} togglemode={toggleMode} text={text} />
      <Alert alert={alert} />
      
      
      <Ameer mode={mode} showAlert={showAlert} />
      </>
  );
}
export default App;