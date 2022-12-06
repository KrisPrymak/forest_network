import React from "react";
import { BrowserRouter} from "react-router-dom";
import { addPost } from "./Redux/state";
import App from "./App";
import ReactDOM from "react-dom/client";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>
);
}