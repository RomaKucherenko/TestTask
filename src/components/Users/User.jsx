import React from "react";
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deleteUser} from "../../Redux/usersReducer";

const User = ({username, first_name, last_name, id, token, deleteUser}) => {

    const onDeleteUserClick = () => {
        const conf = window.confirm(`Уверены что хотите удалить пользователя?`);

        if(conf) deleteUser(id, token)
    }

    return <div className={styles.User}>

        <div>{id}</div>
        <div>{username}</div>
        <div>{first_name}</div>
        <div>{last_name}</div>

        <div>
            <NavLink to={"/Profile/" + id}>
                ViewProfile
            </NavLink>
        </div>
        <div>
            <span
                onClick={onDeleteUserClick}
                className={styles.DeleteActionSpan}>
                Delete
            </span>
        </div>

    </div>
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {deleteUser})(User)