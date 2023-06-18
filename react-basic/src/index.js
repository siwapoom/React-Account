import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import HelloComponent from "./components/HelloComponent";
import App from './App'
// สร้าง class component

// class HelloComponent extends React.Component{
//   render(){
//     return <h1> Hello react ค้าา</h1>
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HelloComponent/>);
ReactDOM.render(<App/>,document.getElementById("root"));


reportWebVitals();
