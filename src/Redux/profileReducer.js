import {requestUserProfileAPI} from "../Server/Users";

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
    console.log(`userUpdated`)
    return async dispatch => {
        //Будем считать что здесь делается patch запрос на сервер))
        //Он же может решать изменяем ли мы данные или нет
    }
}

export default profileReducer