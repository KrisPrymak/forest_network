import React from "react";
import { BrowserRouter} from "react-router-dom";
import { addPost, updateNewPostText } from "./Redux/state";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>
  </React.StrictMode>
);
}