import {requestUserProfileAPI, updateUserAPI} from "../dalApi/dalApi";


const SET_USER_PROFILE = `SET_USER_PROFILE`;
const UPDATE_USER = "UPDATE_USER"

let initialState = {
    userProfile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...action.userProfile}
            }
        }
        case UPDATE_USER:
            return {
                ...state,
                userProfile: {...action.userData}
            }
        default:
            return state
    }
}
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export const requestUserProfile = (userId, token) => {
    return async dispatch => {
        let response = await requestUserProfileAPI(userId, token)
        if(response.status === 200){
            dispatch(setUserProfile(response.data))
        }
    }
}



export const updateUserAction = (userData) => ({type: UPDATE_USER, userData})

export const updateUser = (userData, userId, token)  => {
    return async dispatch => {
        let response = await updateUserAPI(userData, userId, token)
        dispatch(setUserProfile(response.data))
    }
}

export default profileReducer