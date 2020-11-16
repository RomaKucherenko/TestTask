import { loginAPI } from "../dalApi/dalApi";
import { stopSubmit } from "redux-form";

const SET_AUTH_DATA = "SET_AUTH_DATA"

let initialState = {
    isAuth: true,
    token: "781bd9f1de084f4daa7ba2aa8a71a2eab855354e"
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                token: action.token,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthDataAction = (token) => ({type: SET_AUTH_DATA, token})

export const login = (username, password) => async dispatch => {
    let response = await loginAPI(username, password)

    if (response === 400){
        dispatch(stopSubmit("login", {_error: "Incorrect Username/Password"}))
    }
    else if (response.status === 200){
        dispatch(setAuthDataAction(response.data.token))
    }
}

export default authReducer