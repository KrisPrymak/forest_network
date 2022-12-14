import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsNavigate = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };

export const withAuthNavigate = (Component) => {
    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to='/login' />
            }
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToPropsNavigate)(NavigateComponent)
}