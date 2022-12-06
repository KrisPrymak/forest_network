import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} 
                                                      dispatch={props.dispatch}
                                            />} 
            />
            <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
