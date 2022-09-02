import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Txt'

// import './App.css';

function App() {
  const [changemode, setChangeMode]= useState('light')
  const toggleMode = ()=>{
    if (changemode === 'light'){
      setChangeMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    }
    else {
      setChangeMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
 

  return (
    <>
    <Navbar title="Text Changing Site" about ="Contact us" changemode={changemode} toggleMode={toggleMode}/>
    <Text title="Text Changer" changemode={changemode}/>
    {/* <About/>  */}
    
    </>
  );
}

export default App;
