import React, {useEffect, useState} from "react";
import {requestUsers} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import User from "./User";
import {sortById} from "../../utils/sortById";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.css"
import classNames from "classnames"
import {compose} from "redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import Logout from "../Logout/Logout";
import WithSetPathNameInLocalStorage from "../HOC/withSetPathNameInLocalStorage";

const useRequestUsers = (requestUsers, token) => {
    useEffect(() => {
        requestUsers(token)
    }, [])
}

const useResetSortListener = (users, filterValue, setIsSortByUp) => {
    useEffect(() => {
        setIsSortByUp(null)
    }, [users, filterValue])
}


const Users = ({requestUsers, users, token, ...props}) => {
    let [pageUsers, setPageUsers] = useState(users)
    let [filterValue, setFilterValue] = useState("")
    let [isSortByUp, setIsSortByUp] = useState(null)

    useRequestUsers(requestUsers, token)//Hook RequestUsers

    //Слушаем reset сортировки
    useResetSortListener(users, filterValue, setIsSortByUp)

    useEffect(() => {
        setPageUsers(users)
    }, [users])

    const filterUsers = (users, value) => {
        return users.filter(u => u.username.includes(value))
    }

    const onFilterValueChange = (e) => {
        setFilterValue(e.target.value)
        setPageUsers(filterUsers(users, e.target.value))
    }

    const onSortByIdClick = () => {
        setPageUsers(sortById(pageUsers, isSortByUp))
        setIsSortByUp(!isSortByUp)
    }

    let usersElements = pageUsers.map(u => {
        return <User id={u.id}
                     username={u.username}
                     first_name={u.first_name}
                     last_name={u.last_name}

        />
    })


    return (
        <>
            <Logout/>
            <div className={styles.UsersHeader}>

                <input value={filterValue}
                       onChange={onFilterValueChange}
                       placeholder="Начните вводить Username"
                       className={styles.UsersFilterInput}
                />

                <div
                    className={classNames(styles.SortById, {
                        [styles.ByUp]: isSortByUp === true,
                        [styles.ByDown]: isSortByUp === false
                    })}
                    onClick={onSortByIdClick}>
                    Sort By Id
                </div>

                <NavLink to="/Users/create" className={styles.CreateNewUserLink}>
                    Create new User
                </NavLink>

            </div>

            <div className={styles.Users}>
                <div className={styles.Header}>
                    <div className={styles.User}>
                        <div>Id</div>
                        <div>username</div>
                        <div>first_name</div>
                        <div>last_name</div>
                        <div>ViewProfile</div>
                        <div>Delete</div>
                    </div>
                </div>
                {usersElements}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        token: state.auth.token
    }
}

const UsersCompose = compose(
    WithSetPathNameInLocalStorage,
    withAuthRedirect
)(Users)

export default connect(mapStateToProps, {requestUsers})(UsersCompose)