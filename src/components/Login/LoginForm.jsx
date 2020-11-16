import {correctPassword, correctUsername, maxLengthCreator, requiredField} from "../../validators/loginValidator";
import React, {useState} from "react";
import styles from "./Login.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, passwordInput} from "../../common/FormControls/FormControls";
import formStyles from "../../common/FormControls/FormControls.module.css";

let max150 = maxLengthCreator(150)
let max128 = maxLengthCreator(128)

const LoginForm = (props) => {

    let [typePassword, setTypePassword] = useState("password")

    return <form onSubmit={props.handleSubmit} className={styles.LoginForm}>

        <div className={styles.LoginInputWrapper}>

            <Field component={Input}
                   validate={[requiredField, correctUsername, max150]}
                   name={"username"}
                   placeholder={"Login"}
            />

        </div>

        <div className={styles.LoginInputWrapper}>

            <Field component={passwordInput} type={"text"}
                   name={"password"} placeholder={"Password"}
                   validate={[requiredField, correctPassword, max128]}
                   type={typePassword}
                   setType={setTypePassword}/>

        </div>

        {props.error ?

            <span className={formStyles.Error}>
                {props.error}
            </span>
            :
            null}

        <div>

            <button disabled={props.isSubmitting} className={styles.LoginSubmitButton}>
                Войти в IT
            </button>

        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

export default LoginReduxForm