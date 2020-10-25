import {createSelector} from "reselect";

const getUsersSelector = (state) => state.users.users

export const getUsernames = createSelector(getUsersSelector,
    (users) => {
        //Функция создавалсь для того чтобы в комппоненту(createUserForm) подгружать usernames и в компоненте
            // проверять уникальность введенного юзернеймма, но было решено оставить эту логику серверу
        return users.map(u => u.username)
})