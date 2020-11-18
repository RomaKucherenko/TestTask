import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {nullUserAction, requestUserProfile, updateUser} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import EditProfile from "./ProfileForm";
import styles from "./Profile.module.css"
import withAuthRedirect from "../HOC/withAuthRedirect";
import Logout from "../Logout/Logout";

const Profile = ({requestUserProfile, match, userProfile, updateUser, token, nullUserAction}) => {
    let [isEditing, setEditing] = useState(false)

    const killUserData = () => {
        nullUserAction()
    }

    const onEditProfileCancelClick = () => {
        setEditing(false)
    }

    const onEditProfileSuccess = () => {
        setEditing(false)
    }

    useEffect(() => {
        requestUserProfile(match.params.userId, token)

        return killUserData()
    }, [match.params.userId])

    if (!userProfile) {
        return <div>...Loading...</div>
    }

    return <div className={styles.Profile}>
        <Logout/>
        <div>
            {isEditing ?
                <EditProfile userProfile={userProfile}
                             updateUser={updateUser}
                             onCancelClick={onEditProfileCancelClick}
                             onSuccess={onEditProfileSuccess}
                             token={token}
                             userId={match.params.userId}/>
                :
                <div className={styles.ProfileInfo}>
                    <div>Username: {userProfile.username}</div>
                    <div>Имя: {userProfile.first_name}</div>
                    <div>Фамилия: {userProfile.last_name}</div>
                    <div>is_active: {`${userProfile.is_active}`}</div>
                    <div>is_superuser: {`${userProfile.is_superuser}`}</div>
                    <div>last_login: {userProfile.last_login}</div>
                    <button className={styles.EditButton} onClick={() => setEditing(true)}>Edit</button>
                </div>
            }
        </div>

        <NavLink to="/Users">
            <button className={styles.ToUsersButton}>Back to Users</button>
        </NavLink>

    </div>
}

let mapStateToProps = state => {
    return {
        userProfile: state.profile.userProfile,
        token: state.auth.token
    }
}

const profileCompose = compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {requestUserProfile, updateUser, nullUserAction})
)(Profile)
export default profileCompose