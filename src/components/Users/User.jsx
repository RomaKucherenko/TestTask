import React from "react";
import styles from './Users.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return <div className={styles.User}>

        <NavLink to={"/Profile/" + props.id}>
            <img src="https://static2.clutch.co/s3fs-public/logos/de2c8bde806ea56b7e405a9a86a501be.png?m.QYppUsaGYggvTPcXhRKy0uiVPMYv4Z"/>
        </NavLink>

        <div>
            <span>
                {props.username}, {props.id}
            </span>
        </div>

        <div>
            {props.first_name} {props.last_name}
        </div>

    </div>
}

export default User