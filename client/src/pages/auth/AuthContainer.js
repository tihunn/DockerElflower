import React, {useContext, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../Components/AppRouter/const";
import {connect} from "react-redux";
import Auth from "./Auth";
import {loginOrReg} from "../../store/userReducer";


const AuthContainer = (props) => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    if (props.isAuth) { return <Navigate to={"/"}/> }
    return <Auth isLogin={isLogin} loginOrReg={props.loginOrReg}/>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.user.isAuth
    }
}

export default connect(mapStateToProps, {loginOrReg})(AuthContainer)