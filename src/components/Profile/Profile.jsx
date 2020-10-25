import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {requestUserProfile, updateUser} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import EditProfile from "./ProfileForm";

const Profile = props => {
    let [isEditing, setEditing] = useState(false)
    const onEditProfileCancelClick = () => {
        setEditing(false)
    }

    const onEditProfileSuccess = () => {
        setEditing(false)
    }

    useEffect(() => {
        props.requestUserProfile(props.match.params.userId)
    }, [])

    if (!props.userProfile) {
        return <div>...Loading...</div>
    }

    return <div>
        <div className="userForm">
            {isEditing ?
                <EditProfile userProfile={props.userProfile}
                             updateUser={props.updateUser}
                             onCancelClick={onEditProfileCancelClick}
                             onSuccess={onEditProfileSuccess}
                             userId={props.match.params.userId}/>
                :
                <div>
                    <div>Username: {props.userProfile.username}</div>
                    <div>Имя: {props.userProfile.first_name}</div>
                    <div>Фамилия: {props.userProfile.last_name}</div>
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
        userProfile: state.profile.userProfile
    }
}

const profileCompose = compose(
    withRouter,
    connect(mapStateToProps, {requestUserProfile, updateUser})
)(Profile)
export default profileCompose