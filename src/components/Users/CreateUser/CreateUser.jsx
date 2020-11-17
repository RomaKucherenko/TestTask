import React from "react";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import {createNewUser} from "../../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import styles from "./CreateUser.module.css"

const CreateUser = props => {
    return <div  className={styles.CreateUser}>
        <CreateUserForm createNewUser={props.createNewUser}/>
        <NavLink to="/Users">
            <button className={styles.ToUsersButton}>Back to Users</button>
        </NavLink>
    </div>
}


export default connect(null, {createNewUser})(CreateUser)