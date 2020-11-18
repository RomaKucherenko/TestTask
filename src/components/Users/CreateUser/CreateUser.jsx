import React from "react";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import {createNewUser} from "../../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import styles from "./CreateUser.module.css"
import {compose} from "redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Logout from "../../Logout/Logout";
import WithSetPathNameInLocalStorage from "../../HOC/withSetPathNameInLocalStorage";

const CreateUser = props => {
    return <div  className={styles.CreateUser}>

        <Logout/>

        <CreateUserForm createNewUser={props.createNewUser}/>

        <NavLink to="/Users">
            <button className={styles.ToUsersButton}>Back to Users</button>
        </NavLink>
    </div>
}

const CreateUserCompose = compose(
    WithSetPathNameInLocalStorage,
    withAuthRedirect
)(CreateUser)

export default connect(null, {createNewUser})(CreateUserCompose)