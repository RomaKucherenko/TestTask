import React, {useEffect, useState} from "react";
import {requestUsers} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import User from "./User";
import {sortById} from "../../utils/sortById";
import {NavLink} from "react-router-dom";
import styles from "./Users.module.css"

const useRequestUsers = (requestUsers, token) => {
    useEffect(() => {
        requestUsers(token)
    }, [])
}

const Users = ({requestUsers, users, token}) => {
    let [pageUsers, setPageUsers] = useState(users)
    let [filterValue, setFilterValue] = useState("")
    let [isSortByUp, setIsSortByUp] = useState(false)

    useRequestUsers(requestUsers, token)//Hook RequestUsers

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
            <div>

                <input value={filterValue}
                       onChange={onFilterValueChange}
                       placeholder="Начните вводить Username"
                       className={styles.UsersFilterInput}
                />

                <button onClick={onSortByIdClick}>
                    Sort By Id
                </button>

                <NavLink to="/Users/create">
                    <button>Create new User</button>
                </NavLink>

            </div>

            <div className={styles.Users}>
                <div className={styles.Header}>
                    <div className={styles.User}>
                        <div>id</div>
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
export default connect(mapStateToProps, {requestUsers})(Users)