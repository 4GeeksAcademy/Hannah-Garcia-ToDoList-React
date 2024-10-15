//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/App.jsx";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);