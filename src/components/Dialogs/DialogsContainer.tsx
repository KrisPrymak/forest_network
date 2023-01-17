import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import { AppStateType } from "../../Redux/reduxStore";
import Dialogs from "./Dialogs";
import { actionsDialogs } from "../../Redux/dialogsReducer";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let sendMessage = actionsDialogs.sendMessage

export default compose<React.ComponentType>(
  connect(mapStateToProps, {sendMessage}),
  withAuthNavigate
  )
  (Dialogs)

