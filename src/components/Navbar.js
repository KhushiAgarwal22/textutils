import React from "react";
import PropTypes from "prop-types"; //impt
import './NavBar.css';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link'
//import { BrowserRouter as Router } from "react-router-dom"
export default function Navbar(props) {
  //changing light dark mode
  // const ChangeMode = () => {
  //   if (
  //     document.getElementById("root").style.backgroundColor === "cyan" ||
  //     document.getElementById("root").style.backgroundColor === ""
  //   ) {
  //     console.log(document.getElementById("root").style.backgroundColor);
  //     document.getElementById("root").style.backgroundColor = "darkblue";
  //     document.getElementById("root").style.color = "white";
  //     document.getElementById("dark/light").style.backgroundColor = "black";
  //     document.getElementById("dark/light").style.color = "white";
  //     document.getElementById("dark/light").innerText = "Light Mode";
  //     document.getElementById("nav").setAttribute("data-bs-theme", "dark");
  //   } else {
  //     document.getElementById("root").style.backgroundColor = "cyan";
  //     document.getElementById("root").style.color = "black";
  //     document.getElementById("dark/light").style.backgroundColor = "lightgrey";
  //     document.getElementById("dark/light").style.color = "black";
  //     document.getElementById("dark/light").innerText = "Dark Mode";
  //     document.getElementById("nav").setAttribute("data-bs-theme", "lightgrey");
  //   }
  // };
  //usestates can also be used
  // const [mystyle,setMystyle]= useState{
  //       color:'blue',
  //       backgroundColor:'white'
  // }
  return (
    <>
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${props.mode}`}
      id="nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.link}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.about}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Sidharth Malhotra
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Kartik Goenka
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Taylor Zakhar Parez
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Gavin Caselgno
                  </a>
                </li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <a className={`nav-link disabled text-${props.mode==='light'?'dark':'light'}`} aria-disabled="true" href="/">
                {props.anlink}
              </a>
            </li> */}
            {/* <li>
              <button
                className={`btn btn-${props.mode==='light'?'dark':'light'} mx-2 my-1`}
                id="dark/light"
                onClick={ChangeMode}
              >
                Dark Mode
              </button>
            </li> */}
            <li>
              <div className="form-check form-switch my-2 mx-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">
                   Enable Dark Mode
                </label>
              </div>
            </li>
          </ul>
          <div className="colors">
            <button type="button" onClick={props.changeColor} id="1" className="btn btn-danger butt mx-2"></button>
            <button type="button" onClick={props.changeColor} id="2" className="btn btn-success butt mx-2"></button>
            <button type="button" onClick={props.changeColor} id="3" className="btn btn-primary butt butt2 mx-2"></button>

          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  link: PropTypes.string,
  anlink: PropTypes.string,
};
