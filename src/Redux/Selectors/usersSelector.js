import {createSelector} from "reselect";

const getUsersSelector = (state) => state.users.users

export const getUsernames = createSelector(getUsersSelector,
    (users) => {
        return users.map(u => u.username)
})