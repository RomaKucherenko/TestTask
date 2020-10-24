import * as axios from "axios"
import {createUserAPI} from "../Server/Users";

const instance = axios.create({
    baseURL:"https://emphasoft-test-assignment.herokuapp.com/"
})

export const loginAPI = (username, password) => {
    //Я делаю запрос и возвращаю ответ. С этим ответом я не провожу манипуляций
    return instance.post("api-token-auth/",{username, password}).then(
        response => {
            return response
        },
        error => {
            return error.response.status
        }
    )
}
export const requestUsersServer = () => {
    instance.get("/api/v1/users/", {
    }).then(
        response => console.log(response)
    )
}
export const createNewUserServer = async userData => {
    return await createUserAPI(userData)
}
export const updateUserServer = userData => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('userUpdate'),1000)
    })
}