import * as axios from "axios"

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

export const createNewUserAPI = (userData, token) => {
    return instance.post(
        "/api/v1/users/",
        userData,
        {
            headers: {
                authorization: `Token ${token}`
            }
        }).then(
        response => {
            return response
        },
        error => {
            return error.response
        }
    )
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
        error => error.response
    )
}
export const deleteUserAPI = (userId, token) => {
    return instance.delete(
        `/api/v1/users/${userId}/`,
        {
            headers: {
                authorization: `Token ${token}`,
               "Content-Type": "application/json"
            }
        }
    ).then(
        response => response,
        error => error.response
    )
}