import React, { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";

// import './App.css';
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// }
//  from "react-router-dom"

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (alertMsg, alertType) => {
    setAlert({ msg: alertMsg, type: alertType });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const [changemode, setChangeMode] = useState("light");
  const toggleMode = () => {
    if (changemode === "light") {
      setChangeMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has enabled", "success");
    } else {
      setChangeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled", "success");
    }
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Text Changing Site"
          about="Contact us"
          changemode={changemode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Text
              title="Text Changer"
              showAlert={showAlert}
              changemode={changemode}
            />

        {/* <About/>  */}
        {/* <Routes>
          <Route path="./components/About" element={<About/>}>
            <About />
          </Route> */}

          {/* <Route path="./components/Text" element={<Text
              title="Text Changer"
              showAlert={showAlert}
              changemode={changemode}
            />}> */}
            
          {/* </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
