import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import { Routes, Route } from "react-router-dom";
import ProfileContainer, { withRouter } from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import React from "react";
import { initializeApp } from "./Redux/appReducer";
import { compose } from "redux";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
}
  render() {
    
    // if(!this.props.initialized) {
    //   return <Preloader />
    // }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer isMain={true} />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/music" element={<MusicContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App)
