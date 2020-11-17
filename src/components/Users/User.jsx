import React from "react";
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";

const User = ({username, first_name, last_name, is_active, is_superuser, last_login, id}) => {
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
            <button className={styles.DeleteButton}>Delete</button>
        </div>

    </div>
}

export default User