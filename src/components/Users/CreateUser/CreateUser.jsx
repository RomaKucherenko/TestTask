import React from "react";
import {getUsernames} from "../../../Redux/Selectors/usersSelector";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import styles from "./CreateUser.module.css"
import {createNewUser} from "../../../Redux/usersReducer";

const CreateUser = props => {
    return <div className={styles.CreateUserForm}>
        <CreateUserForm createNewUser={props.createNewUser}/>
    </div>
}

const mapStateToProps = state => {
    return {
        usernames: getUsernames(state)
    }
}

export default connect(null, {createNewUser})(CreateUser)