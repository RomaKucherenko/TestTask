import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import formStyles from "../../../common/FormControls/FormControls.module.css"
import styles from "./CreateUser.module.css"
import {Input, passwordInput} from "../../../common/FormControls/FormControls";
import {correctFirstname,correctLastname,correctPassword,correctUsername,maxLengthCreator,requiredField} from "../../../validators/createUserValidator";
import {compose} from "redux";
import validate from "../../../validators/validate";
import {withRouter} from "react-router-dom";

let max150 = maxLengthCreator(150)
let max30 = maxLengthCreator(30)

const CreateUserForm = (props) => {
    let [typeConfirmPassword, setTypeConfirmPassword] = useState("password")
    let [typePassword, setTypePassword] = useState("password")

    return <form  className={styles.CreateUserForm} onSubmit={props.handleSubmit}>
        <div>

            <div>
                <label htmlFor="username">Username:</label>
                <Field component={Input}
                       validate={[requiredField, correctUsername, max150]}
                       name="username"
                       id="username"
                       placeholder="Username"
                       className={"StyledInput"}
                />
            </div>

            <div>
                <label htmlFor="first_name">Имя:</label>
                <Field component={Input}
                       validate={[requiredField, max30, correctFirstname]}
                       name="first_name"
                       id="first_name"
                       placeholder="Имя"
                       className={"StyledInput"}
                />
            </div>

            <div>
                <label htmlFor="last_name">Фамилия:</label>
                <Field component={Input}
                       validate={[requiredField, max150, correctLastname]}
                       name="last_name"
                       id="last_name"
                       placeholder="Фамилия"
                       className={"StyledInput"}
                />
            </div>

            <div>
                <label htmlFor="password">Пароль:</label>
                <Field component={passwordInput}
                       validate={[requiredField, max150, correctPassword]}
                       name="password"
                       placeholder="Пароль"
                       id="password"
                       type={typePassword}
                       setType={setTypePassword}
                       className={"StyledPasswordInput"}
                />
            </div>

            <div>
                <label htmlFor="confirmPassword">Повторите пароль:</label>
                <Field component={passwordInput}
                       validate={[requiredField, max150, correctPassword]}
                       name="confirmPassword"
                       id="confirmPassword"
                       placeholder="Повторите пароль"
                       type={typeConfirmPassword}
                       setType={setTypeConfirmPassword}
                       className={"StyledPasswordInput"}
                />
            </div>

        </div>

        {props.error ? <span className={formStyles.Error}>{props.error}</span> : null}

        <div>
            <button
                className={styles.CreateUserButton}
                disabled={props.isSubmitting}>CreateUser</button>
        </div>
    </form>
}

const CreateUserReduxForm = compose(
    reduxForm({
        form: "createUser",
        validate
    }))(CreateUserForm)

const CreateUser = (props) => {

    let [isSubmitting, setSubmitting] = useState(false)

    const handleSubmit = (formData) => {
        let {username, last_name, first_name, password} = formData

        props.createNewUser({username, last_name, first_name, password, is_active: true}, props.token).then(
            response => {
                setSubmitting(false)
                if (response === undefined) props.history.push("/Users")
            }
        )
    }

    return <CreateUserReduxForm onSubmit={handleSubmit}
                                setSubmitting={setSubmitting}
                                isSubmitting={isSubmitting}/>
}

export default withRouter(CreateUser)

