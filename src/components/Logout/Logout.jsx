import React from 'react';
import styles from "./Logout.module.css"
import {connect} from "react-redux";
import {nullUsersDataAction} from "../../Redux/usersReducer";
import {nullAuthDataAction} from "../../Redux/authReducer";
import {nullUserAction} from "../../Redux/profileReducer";

function Logout(props) {
    const logout = () => {
        props.logout()
    }
    return (
        <div className={styles.Logout}>
            <button className={styles.LogoutButton}
                    onClick={logout}>Logout</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(nullUsersDataAction())
            dispatch(nullAuthDataAction())
            dispatch(nullUserAction())
        }
    }
}

export default connect(null, mapDispatchToProps)(Logout);