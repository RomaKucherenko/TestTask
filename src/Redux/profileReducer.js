import {requestUserProfileAPI} from "../Server/Users";
import {updateUserServer} from "../dalApi/dalApi";

const SET_USER_PROFILE = `SET_USER_PROFILE`;

let initialState = {
    userProfile: null, //мы взяли null, чтобы потом if'ом проверить (в ProfileInfo.jsx)
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...action.userProfile}
            }
        }
        default:
            return state
    }
}
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile})

export const requestUserProfile = (userId) => {
    return async dispatch => {
        let response = await requestUserProfileAPI(userId)
        if(response.code === 200){
            dispatch(setUserProfile(response.userData))
        }
        else if(response.code === 401){
        }
    }
}

export const updateUser = userProfile => {
    return async dispatch => {
        let response = await updateUserServer(userProfile)
        return response
    }

}

export default profileReducer