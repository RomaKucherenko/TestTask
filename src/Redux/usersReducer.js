import {createNewUserAPI, deleteUserAPI, requestUsersAPI} from "../dalApi/dalApi";
import {stopSubmit} from "redux-form";
import {removeItemById} from "../utils/removeItemByIndex";

const SET_USERS = `SET_USERS`
const ADD_NEW_USER = "ADD_NEW_USER"
const NULL_USERS_DATA = "NULL_USERS_DATA"
const DELETE_USER = "DELETE_USER"

let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.userData]
            }
        case DELETE_USER:
            return {
                ...state,
                users: removeItemById(state.users, action.userId)
            }
        case NULL_USERS_DATA: {
            return {
                users: []
            }
        }
        default:
            return state
    }
}

export const setUsersAction = (users) => ({type: SET_USERS, users: users})
const deleteUserAction = (userId) => ({type: DELETE_USER, userId})
export const addNewUserAction = (userData) => ({type: ADD_NEW_USER, userData})
export const nullUsersDataAction = () => ({type: NULL_USERS_DATA})


export const requestUsers = (token) => {
    return async dispatch => {
        let response = await requestUsersAPI(token)

        if (response.status === 200) {
            dispatch(setUsersAction(response.data))
        }
    }
}


export const createNewUser = (userData, token) => async dispatch => {
    let response = await createNewUserAPI(userData, token)
    if (response.code === 201) {
        dispatch(addNewUserAction(response.data))

    } else if (response.status === 400) {
        let error = Object.values(response.data)[0][0]
        dispatch(stopSubmit("createUser", {_error: error}))
        return error
    }

}

export const deleteUser = (userId, token) => async dispatch => {
    let response = await deleteUserAPI(userId, token)
    if (response.status === 204) {
        dispatch(deleteUserAction(userId))
    }
}

export default usersReducer