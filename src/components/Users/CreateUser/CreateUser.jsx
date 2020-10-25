import React from "react";
import {connect} from "react-redux";
import CreateUserForm from "./CreateUserForm";
import {createNewUser} from "../../../Redux/usersReducer";
import {NavLink} from "react-router-dom";

const CreateUser = props => {
    return <div>
        <CreateUserForm createNewUser={props.createNewUser}/>
        <NavLink to="/Users">
            <button>Back to Users</button>
        </NavLink>
    </div>
}


export default connect(null, {createNewUser})(CreateUser)