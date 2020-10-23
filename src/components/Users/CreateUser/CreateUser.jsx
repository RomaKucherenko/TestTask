import React from "react";
import {getUsernames} from "../../../Redux/Selectors/usersSelector";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import styles from "./CreateUser.module.css"

const CreateUser = props => {
    console.log(props)
    return <div className={styles.CreateUserForm}>
        <CreateUserForm/>
    </div>
}

const mapStateToProps = state => {
    return {
        usernames: getUsernames(state)
    }
}

export default connect(null, null)(CreateUser)