import {connect} from "react-redux"
import React, {useEffect, useState} from "react"
import {Field, reduxForm} from "redux-form";
import formStyles from "../../common/FormControls/FormControls.module.css"
import {Input} from "../../common/FormControls/FormControls";
import {correctPassword, correctUsername, maxLengthCreator, requiredField} from "../../validators/loginValidator";
import {login} from "../../Redux/authReducer";
import styles from "./Login.module.css"
import {withRouter} from "react-router-dom";
import {compose} from "redux";

let max150 = maxLengthCreator(150)
let max128 = maxLengthCreator(128)
const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   validate={[requiredField, correctUsername, max150]}
                   name={"username"}
                   placeholder={"Login"}
            />
        </div>
        <div>
            <Field component={Input} type={"text"}
                   name={"password"} placeholder={"Password"}
                   validate={[requiredField, correctPassword, max128]}/>
        </div>
        {props.error ? <span className={formStyles.Error}>{props.error}</span> : null}
        <div>
            <button disabled={props.isSubmitting}>Войти в IT</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

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
    return (
        <div className={styles.Login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} setSubmitting={setSubmitting}
                            isSubmitting={isSubmitting}/>
        </div>
    )
}
const loginCompose = compose(
    connect(null, {login})
)(Login)

export default loginCompose