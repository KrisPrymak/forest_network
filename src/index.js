import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 3, message: "it is my first post", likesCount: 0 },
  { id: 2, message: "pumpimpampampimpum", likesCount: 120 },
  { id: 1, message: "lalolalolaolaod", likesCount: 10 },
];

let dialogs = [
  { id: 1, name: "Kesha" },
  { id: 2, name: "Lalka" },
  { id: 3, name: "Musya" },
  { id: 4, name: "Kiska" },
  { id: 5, name: "Gosha" },
];

let messages = [
  { id: 1, message: "hello, how are you" },
  { id: 1, message: "Yo yo yo" },
  { id: 1, message: "lalalal lolo" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
