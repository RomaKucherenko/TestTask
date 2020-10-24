import {requestUserProfileAPI} from "../Server/Users";
import {updateUserServer} from "../dalApi/dalApi";

const SET_USER_PROFILE = `SET_USER_PROFILE`;
const UPDATE_USER = "UPDATE_USER"

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
        case UPDATE_USER:
            return {
                //по идеи нам нужны только id and username значит надо
                // реализовать такую логику что только эти данные мы будем хранить
                ...state,
                userProfile: {...action.userData}
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



export const updateUserAction = (userData) => ({type: UPDATE_USER, userData})
export const updateUser = userData => async dispatch => {
    let response = await updateUserServer(userData)
    dispatch(updateUserAction(response.userData))
}

export default profileReducer