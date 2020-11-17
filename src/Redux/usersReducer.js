import {createNewUserAPI, requestUsersAPI} from "../dalApi/dalApi";
import {stopSubmit} from "redux-form";

const SET_USERS = `SET_USERS`
const ADD_NEW_USER = "ADD_NEW_USER"

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
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
export const setUsersAction = (users) => ({type: SET_USERS, users: users})
export const addNewUserAction = (userData) => ({type: ADD_NEW_USER, userData})


export const requestUsers = (token) => {
    return async dispatch => {
        let response = await requestUsersAPI(token)

        if (response.status === 200) {
            dispatch(setUsersAction(response.data))
        }
    }
}


export const createNewUser = userData => async dispatch => {
    let response = await createNewUserAPI(userData)
    if (response.code === 201) {
        dispatch(addNewUserAction(response.data))

    } else if (response.status === 400) {
        let error = Object.values(response.data)[0][0]
        dispatch(stopSubmit("createUser", {_error: error}))
        return error
    }

}

export default usersReducer