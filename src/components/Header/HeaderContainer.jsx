import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from './../../Redux/authReducer';
import { getAuth, logout } from './../../Redux/authReducer';
import { getUserProfile } from '../../Redux/profileReducer';

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
export default connect(mapStateToProps, {setAuthUserData, getAuth, getUserProfile, logout })(HeaderContainer);