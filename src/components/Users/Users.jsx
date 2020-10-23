import React, {useEffect, useState} from "react";
import {requestUsers} from "../../Redux/usersReducer";
import {connect} from "react-redux";
import User from "./User";
import {sortById} from "../../utils/sortById";
import {NavLink} from "react-router-dom";

const useRequestUsers = props => {
    useEffect(() => {
        props.requestUsers(props.token)
    }, [])
}
const Users = (props) => {
    let [pageUsers, setPageUsers] = useState(props.users)//PageUsers-отображаемые на UI
    //let [users, setUsers] = useState(props.users) //TRUE Users хранят состояние 10users sorted by id

    let [filterValue, setFilterValue] = useState("")
    useRequestUsers(props)
    useEffect(() => {
        setPageUsers(props.users)
    }, [props.users])

    const filterUsers = (users, value) => {
        return users.filter(u => u.username.includes(value))
    }
    const onFilterValueChange = (e) => {
        setFilterValue(e.target.value)
        setPageUsers(filterUsers(props.users, e.target.value))
    }
    const onSortByIdClick = () => {
        setPageUsers(sortById(pageUsers))
    }
    let usersElements = pageUsers.map(u => {
        return <User id={u.id} username={u.username} first_name={u.first_name} last_name={u.last_name}/>
    })


    return (
        <>
            <div>
                <input value={filterValue} onChange={onFilterValueChange}/>
                <button onClick={onSortByIdClick}>Sort By Id</button>
                <NavLink to="/Users/create">
                    <button>Create new User</button>
                </NavLink>
            </div>
            <div className="Users">
                {usersElements}
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}
export default connect(mapStateToProps, {requestUsers})(Users)