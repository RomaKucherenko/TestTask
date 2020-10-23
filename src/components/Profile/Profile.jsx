import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {requestUserProfile, updateUser} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import EditProfile from "./ProfileForm";

const Profile = props => {
    let [editStatus, setEditStatus] = useState(false)
    useEffect(() => {
        props.requestUserProfile(props.match.params.userId)
    }, [])
    if (!props.userProfile) return <div>...Loading...</div>
    return <div>
        <div className="userForm">
            {!editStatus ? <div>
                    <div>Username: {props.userProfile.username}</div>
                    <div>Имя: {props.userProfile.first_name}</div>
                    <div>Фамилия: {props.userProfile.last_name}</div>
                    <button onClick={() => setEditStatus(true)}>Change Data</button>
                </div>
                : <div>
                    <EditProfile userProfile={props.userProfile} updateUser={props.updateUser} setEditStatus={setEditStatus}/>
                    <button onClick={() => setEditStatus(false)}>Отменить изменения</button>
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