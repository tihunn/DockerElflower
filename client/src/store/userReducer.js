import {userAPI} from "../http/userAPI";

const initialState = {
    user: {
        email: "null",
        role: "null"
    },
    isAuth: false
}

export let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setUser":
            return {
                ...state,
                user: {...action.user}
            }
        case "setIsAuth":
            return {
                ...state,
                isAuth: action.isAuth
            }
    }
    return state
}

const setUser = (user) => ({type: "setUser", user})
const setIsAuth = (isAuth) => ({type: "setIsAuth", isAuth})



export const checkUser = () => (dispatch) => {
    userAPI.checkAuth().then(userDecoded => {
        dispatch( setUser(userDecoded) )
        dispatch( setIsAuth(true) )
    })
}
export const loginOrReg = (email, password, isLogin) => (dispatch) => {
    userAPI.loginOrReg(email, password, isLogin).then(userDecoded => {
        dispatch( setUser(userDecoded) )
        dispatch( setIsAuth(true) )
    })
}
export const logOut = () => (dispatch) => {
    dispatch( setUser({}) )
    dispatch( setIsAuth(false) )
}