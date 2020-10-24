import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import formStyles from "../../../common/FormControls/FormControls.module.css"
import styles from "./CreateUser.module.css"
import {Input, passwordInput} from "../../../common/FormControls/FormControls";
import {
    correctFirstname,
    correctLastname,
    correctPassword,
    correctUsername,
    maxLengthCreator,
    requiredField,
} from "../../../validators/createUserValidator";
import {compose} from "redux";
import validate from "../../../validators/validate";

let max150 = maxLengthCreator(150)
let max30 = maxLengthCreator(30)

const CreateUserForm = (props) => {
    let [typeConfirmPassword, setTypeConfirmPassword] = useState("password")
    let [typePassword, setTypePassword] = useState("password")

    return <form onSubmit={props.handleSubmit}>
        <div>
            <div>
                <label htmlFor="username">Username:</label>
                <Field component={Input}
                       validate={[requiredField, correctUsername, max150]}
                       name="username"
                       id="username"
                       placeholder="Username"
                />
            </div>
            <div>
                <label htmlFor="first_name">Имя:</label>
                <Field component={Input}
                       validate={[requiredField, max30, correctFirstname]}
                       name="first_name"
                       id="first_name"
                       placeholder="Имя"
                />
            </div>
            <div>
                <label htmlFor="last_name">Фамилия:</label>
                <Field component={Input}
                       validate={[requiredField, max150, correctLastname]}
                       name="last_name"
                       id="last_name"
                       placeholder="Фамилия"
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
                />
            </div>
        </div>
        {props.error ? <span className={formStyles.Error}>{props.error}</span> : null}
        <div>
            <button disabled={props.isSubmitting}>CreateUser</button>
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
        props.createNewUser(formData)
    }
    return <CreateUserReduxForm onSubmit={handleSubmit}
                                setSubmitting={setSubmitting}
                                isSubmitting={isSubmitting}/>
}

export default CreateUser

