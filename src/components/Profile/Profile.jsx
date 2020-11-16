import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {requestUserProfile, updateUser} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import EditProfile from "./ProfileForm";

const Profile = ({requestUserProfile, match, userProfile, updateUser, token}) => {
    let [isEditing, setEditing] = useState(false)

    const onEditProfileCancelClick = () => {
        setEditing(false)
    }

    const onEditProfileSuccess = () => {
        setEditing(false)
    }

    useEffect(() => {
        requestUserProfile(match.params.userId, token)
    }, [match.params.userId])

    if (!userProfile) {
        return <div>...Loading...</div>
    }

    return <div>
        <div className="userForm">

            {isEditing ?
                <EditProfile userProfile={userProfile}
                             updateUser={updateUser}
                             onCancelClick={onEditProfileCancelClick}
                             onSuccess={onEditProfileSuccess}
                             token={token}
                             userId={match.params.userId}/>
                :

                <div>
                    <div>Username: {userProfile.username}</div>
                    <div>Имя: {userProfile.first_name}</div>
                    <div>Фамилия: {userProfile.last_name}</div>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            }
        </div>

        <NavLink to="/Users">
            <button>Back to Users</button>
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
    withRouter,
    connect(mapStateToProps, {requestUserProfile, updateUser})
)(Profile)
export default profileCompose