import logo from "./../../logo.svg";
import "./App.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Menu from "./../../Chosp/Menu";
// import Router from "./../../Chosp/Router";
// import Router from "./../../Cdept/Router";
// import Router from "./../../Teams/router";
import Router from "./../../Examen/router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Menu/> Chosp*/}
      </header>
      {/* <Router/> Chosp */}
      {/* <Router />
      CDept */}
      {/* <Router />Study */}
      <Router />
    </div>
  );
}

export default App;
