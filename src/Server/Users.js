let Users = [
    {id: 1, username: "Roma_roma", first_name: "Roma", last_name: "Kucherenko", password: "testUserPassword1", isActive: true},
    {id: 2, username: "Dima600kg",first_name: "Dmitry", last_name: "Golubochkin", password: "testUserPassword2", isActive: true},
    {id: 3, username: "BigRonnie",first_name: "Ronnie", last_name: "Coleman", password: "testUserPassword3", isActive: true},
    {id: 4, username: "Ingvar",first_name: "Igor", last_name: "Voitenko", password: "testUserPassword4", isActive: true},
    {id: 5, username: "Yuriy_104",first_name: "Yuriy", last_name: "Thursday", password: "testUserPassword5", isActive: true},
    {id: 6, username: "Adil_Jalelov",first_name: "Adil", last_name: "Jalelov", password: "testUserPassword6", isActive: true},
    {id: 7, username: "DimaBicepcs",first_name: "Dima", last_name: "Biceps", password: "testUserPassword7", isActive: true},
    {id: 8, username: "IvanKrasavin",first_name: "Ivan", last_name: "Krasavin", password: "testUserPassword8", isActive: true},
    {id: 9, username: "26_Oleg_26",first_name: "Oleg", last_name: "Nechiporenko", password: "testUserPassword9", isActive: true},
    {id: 10, username: "DenisFit4Life",first_name: "Denis", last_name: "Borisov", password: "testUserPassword10", isActive: true}]
//Псевдозапросы, когда сервер заработает логика запросов и обработки
// их ответов уже будет написана


export const requestUsersAPI = (token) => {
    return new Promise((resolve, reject) => {
        if (token){
            let usersCopy = [...Users]
            resolve({
                data:usersCopy.sort(function func(a, b) {
                    return 0.5 - Math.random()
                }),
                code: 200
            })
        }
        else {
            reject({
                code: 401,
                error: "You are not authorized"})
        }
    })
}
export const requestUserProfileAPI = (userId) => {
    return new Promise((resolve, reject) => {
        if (1){
            resolve({
                userData:Users.map(u => {
                    if(u.id == userId){
                        return u
                    }
                }).filter(element => element)[0],
                code: 200
            })
        }
        else {
            reject({
                code: 401,
                error: "You are not authorized"})
        }
    })
}

window.Users = Users