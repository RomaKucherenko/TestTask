import {connect} from "react-redux"
import React, {useEffect, useState} from "react"
import {login, setTestMode} from "../../Redux/authReducer";
import styles from "./Login.module.css"
import {compose} from "redux";
import LoginReduxForm from "./LoginForm";


const Login = (props) => {
    let [isSubmitting, setSubmitting] = useState(false)

    const onSubmit = (formData) => {
        setSubmitting(true)
        let {username, password} = formData

        props.login(username, password).finally(_ => {
                setSubmitting(false)
            }
        ).then(() => {
                props.history.push('/Users')
            }
        )
    }

    const onLoginTestModeClick = () => {
        props.setTestMode()
        props.history.push('/Users')
    }
    return (
        <div className={styles.Login}>
            <h1 className={styles.LoginHeading}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}
                            setSubmitting={setSubmitting}
                            isSubmitting={isSubmitting}
                            onTestModeClick={onLoginTestModeClick}/>
        </div>
    )
}
const loginCompose = compose(
    connect(null, {login, setTestMode})
)(Login)

export default loginCompose