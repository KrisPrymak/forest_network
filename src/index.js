import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./Redux/state";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { addPost, updateNewPostText } from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  </React.StrictMode>
);
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
