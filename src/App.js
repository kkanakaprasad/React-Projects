import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Txt';
import Alert from './components/Alert'

// import './App.css';

function App() {
  const [alert, setAlert] =useState(null)
    const showAlert =(alertMsg, alertType)=>{
     setAlert ({ msg:alertMsg,
      type:alertType
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);


    }
  const [changemode, setChangeMode]= useState('light')
  const toggleMode = ()=>{
    if (changemode === 'light'){
      setChangeMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('dark mode has enabled', 'success')
      
    }
    else {
      setChangeMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('white mode has enabled', 'success')
    }
  }
 

  return (
    <>
    <Navbar title="Text Changing Site" about ="Contact us" changemode={changemode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Text title="Text Changer" showAlert={showAlert} changemode={changemode}/>
    {/* <About/>  */}
    
    
    </>
  );
}

export default App;
