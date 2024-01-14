// import logo from './logo.svg';
import About from "./About";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
// import { Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  };
  const changeMode = () => {
    //console.log('called' + mode)
    if (mode === "light") 
    {
      document.title="TextUtils: Dark Mode";
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setColor("grey");
      showAlert("Dark Mode is enabled", "success");
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    } 
    else 
    {
      document.title="TextUtils: Light Mode";
      setMode("light");
      document.body.style.backgroundColor = "white";
      setColor("white");
      showAlert("Light Mode is enabled", "primary");
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
  };

  const changeColor = (e) => {
    //console.log(e.target.id);
    if (e.target.id === "1") 
    {
      if (document.body.style.backgroundColor === "red") 
      {
        document.title="TextUtils: Light Mode";
        showAlert("Light Mode is enabled", "primary");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
        document.body.style.backgroundColor = "white";
        setColor("white");
        
      } 
      else 
      {
        document.title="TextUtils: Red Mode";
        document.body.style.backgroundColor = "red";
        setColor("red");
        showAlert("Danger Mode is enabled", "primary");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
      
      }
    } 
    else if (e.target.id === "2") 
    {
      if (document.body.style.backgroundColor === "green") 
      {
        document.title="TextUtils: Light Mode";
        document.body.style.backgroundColor = "white";
        setColor("white");
        showAlert("Light Mode is enabled", "primary");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
        
      } 
      else 
      {
        document.title="TextUtils: Green Mode";
        document.body.style.backgroundColor = "green";
        setColor("green");
        showAlert("Green Mode is enabled", "success");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
      
      }
    } 
    else
     {
      if (document.body.style.backgroundColor === "purple") 
      {
        document.title="TextUtils: Light Mode";
        document.body.style.backgroundColor = "white";
        setColor("white");
        showAlert("Light Mode is enabled", "primary");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
        
      } 
      else 
      {
        document.title="TextUtils: Purple Mode";
        document.body.style.backgroundColor = "purple";
        setColor("purple");
        showAlert("Purple Mode is enabled", "primary");
        setTimeout(() => {
          setAlert(null);
        }, 1000);
      
      }
    }
  };
  // document.body.style.backgroundColor='black';

  return (
  <>
      <Navbar
        title="Textutils"
        about="Crushes"
        link="About"
        anlink="Gallery"
        mode={mode}
        toggleMode={changeMode}
        changeColor={changeColor}
        Color={color}
      />
      <Alert alert={alert} />
        
        <div className="container my-3">
        {/* <Routes>
        <Route path='/about' element={<About/>}/>
        
        <Route path='/' element={
         <Textform
          heading="Enter your comments here"
          Color={color}
          mode={mode}
          showAlert={showAlert}
          setAlert={setAlert}
          />}/>
        </Routes> */}
         <Textform
          heading="Enter your comments here"
          Color={color}
          mode={mode}
          showAlert={showAlert}
          setAlert={setAlert}
          />
          {/* <About/>  */}
       </div> 
       </> 
  );
}
export default App;
