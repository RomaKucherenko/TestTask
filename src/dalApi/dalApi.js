import * as axios from "axios"
import {createUserAPI} from "../Server/Users";

const instance = axios.create({
    baseURL: "https://emphasoft-test-assignment.herokuapp.com/"
})

export const loginAPI = (username, password) => {
    return instance.post("api-token-auth/", {username, password}).then(
        response => {
            return response
        },
        error => {
            return error.response.status
        }
    )
}


export const requestUsersAPI = (token) => {
    return instance.get("/api/v1/users/", {
        headers: {
            authorization: `Token ${token}`
        }
    }).then(
        response => {
            return response
        }
    )
}


export const requestUserProfileAPI = (userId, token) => {
    return instance.get(`/api/v1/users/${userId}`, {
        headers: {
            authorization: `Token ${token}`
        }
    }).then(
        response => {
            return response
        }
    )
}
export const createNewUserServer = async userData => {
    return await createUserAPI(userData)
}

export const updateUserAPI = (userData, userId, token) => {
    return instance.patch(
        `/api/v1/users/${userId}/`,
        JSON.stringify(userData),
        {
            headers: {
                authorization: `Token ${token}`,
               "Content-Type": "application/json"
            }
        }
    ).then(
        response => response,
        error => {
            return error
        }
    )

    // return fetch(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/${userId}/`, {
    //     method: `PATCH`,
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         authorization: `Token ${token}`,
    //
    //     },
    //     body: JSON.stringify(userData)
    // })

}