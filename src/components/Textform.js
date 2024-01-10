import React, { useState } from "react";
import "./Textform.css";
export default function Textform(props) {
  const ConvertUpCase = () => {
    //console.log('button was clicked');
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1000);
    };

  const ConvertLoCase = () => {
    //console.log('button was clicked');
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1000);
  };
  const Convert = () => {
    //console.log('button was clicked');
    let tmp = text.trim();
    let words = tmp.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    tmp = "";
    words.forEach((c) => {
     
      tmp += c + " ";
    });
    setText(tmp);
  };

  const ReverseHandle = () => {
    //console.log('button was clicked');
    let str = "";
    for (let i = text.length - 1; i >= 0; i--) {
      str += text[i];
    }
    while (str[0] === " ") str = str.slice(1);
    setText(str);
    props.showAlert("String Reversed","success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1000);
  };
    const [myStyle , setStyle] =useState({
        display:"none"
    });
  const CountVowel = (e) => {
    setStyle({
      display:"block"
    });
    setText(text.trim());
    let c = 0;
    for (let i = 0; i < text.length; i++) {
      let ch = text[i];
      if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u" ||
        ch === "A" ||
        ch === "E" ||
        ch === "I" ||
        ch === "O" ||
        ch === "U"
      )
        c++;
    }
    console.log(c);
    setcount(c);
  };

  const onChangeHandler = (e) => {
    //console.log('change handled');

    setText(e.target.value);
    setStyle({
      display:"none"
    });
  };
  const CopyText = () => {
    let str = document.getElementById("myBox");
    str.select();
    navigator.clipboard.writeText(str.value);
  };

  const ClearText = () =>{
    setText('');
  }
  const [text, setText] = useState("");
  const [count, setcount] = useState(0);
  //text='Heyy'; wrong way to assign
  //setText('Like this') ; correct way
  //console.log(props.Color);

  return (
    <div style={{color:props.Color==='white'?'black':'white'}}>
      <div className="container">
        <div className="mb-3">
          <h3>{props.heading}:</h3>
          <textarea
            className="form-control"
            onChange={onChangeHandler}
            value={text}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.Color,color:props.Color==='grey'?'white':'black',cursor:'pointer'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={ConvertUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={ConvertLoCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={Convert}>
          Proper indendation
        </button>
        <button className="btn btn-primary mx-2" onClick={ReverseHandle}>
          Reverse String
        </button>
        <button className="btn btn-primary mx-2" onClick={CountVowel}>
          Vowel count
        </button>
        <button className="btn btn-primary mx-2" onClick={CopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={ClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>
          {text.trim()===""?0:text.trim().split(" ").length} words , {text.trim().length} characters
        </p>
        <p>Can be read in {text.trim()===""?0:0.008 * text.trim().split(" ").length} minutes</p>
        <div style={myStyle}>
          <p>
            No of vowels: {count} , No of consonents: {text.trim().length - count}
          </p>
        </div>
      </div>
      <div className="container my2">
        <h3>Preview</h3>
        <p>{text.length===0||text.trim().length===0?"Enter text to preview!":text}</p>
      </div>
    </div>
  );
  }

