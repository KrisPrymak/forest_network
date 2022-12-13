import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from './../../Redux/authReducer';
import { getAuth } from './../../Redux/authReducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, {setAuthUserData, getAuth})(HeaderContainer);