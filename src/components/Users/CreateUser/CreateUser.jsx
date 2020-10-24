import React from "react";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import styles from "./CreateUser.module.css"
import {createNewUser} from "../../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

const CreateUser = props => {
    return <div className={styles.CreateUserForm}>
        <CreateUserForm createNewUser={props.createNewUser}/>
        <NavLink to="/Users">
            <button>Back to Users</button>
        </NavLink>
    </div>
}


export default connect(null, {createNewUser})(CreateUser)