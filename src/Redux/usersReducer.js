import {requestUsersAPI} from "../Server/Users";
import {createNewUserServer} from "../dalApi/dalApi";
import {stopSubmit} from "redux-form";

const SET_USERS = `SET_USERS`
const ADD_NEW_USER = "ADD_NEW_USER"

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS:
            return {
                //по идеи нам нужны только id and username значит надо
                // реализовать такую логику что только эти данные мы будем хранить
                ...state,
                users: [...action.users]
            }
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.userData]
            }
        default:
            return state
    }
}
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const addNewUserAction = (userData) => ({type: ADD_NEW_USER, userData})


export const requestUsers = (token = "781bd9f1de084f4daa7ba2aa8a71a2eab855354e") => {
    //token должен зашиваться в cookie
    return async dispatch => {
        let response = await requestUsersAPI(token)
        if (response.code === 200){
            dispatch(setUsers(response.data))
        }
        else if(response.code === 401){
            console.log(response.error)
        }
    }
}

export const createNewUser = userData => async dispatch => {
    let response = await createNewUserServer(userData)
    debugger
    if (response.code === 400){
        dispatch(stopSubmit("login", {_error: "We already have user with this username"}))
    }
    else if (response.code === 200) {
        dispatch(addNewUserAction(userData))
    }
}
export default usersReducer