import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthNavigate } from "../../hoc/withAuthNavigate";
import {
  sendMessage
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};


export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthNavigate
  )
  (Dialogs)

