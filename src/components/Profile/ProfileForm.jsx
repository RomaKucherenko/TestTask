import React, {useState} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {
    correctFirstname, correctLastname, correctUsername, maxLengthCreator, requiredField
} from "../../validators/userValidator";
import formStyles from "../../common/FormControls/FormControls.module.css"
import * as underscore from "underscore";
import {checkWhatObjectFieldWasChanged} from "../../utils/checkWhatObjectFieldWasChanged";

let max150 = maxLengthCreator(150)
let max30 = maxLengthCreator(30)

const EditProfileForm = (props) => {

    const onCancelClick = (e) => {
        e.preventDefault()
        props.onCancelClick()
    }
    return <form onSubmit={props.handleSubmit}>
        <div>
            Username:
            <Field component={Input}
                   validate={[requiredField, correctUsername]}
                   name={"username"}
                   placeholder={"Username"}

            />
            Имя:
            <Field component={Input}
                   validate={[requiredField, max30, correctFirstname]}
                   name={"first_name"}
                   placeholder={"Имя"}

            />
            Фамилия:
            <Field component={Input}
                   validate={[requiredField, max150, correctLastname]}
                   name={"last_name"}
                   placeholder={"Фамилия"}
            />
        </div>
        {props.error ? <span className={formStyles.Error}>{props.error}</span> : null}
        <div>
            <button disabled={props.isSubmitting}>Save Changes</button>
            <button onClick={onCancelClick}>CANCEL</button>
        </div>
    </form>
}

const mapStateToProps = state => {
    return {
        initialValues: {
            username: state.profile.userProfile.username,
            first_name: state.profile.userProfile.first_name,
            last_name: state.profile.userProfile.last_name
        }
    }
}

const EditProfileReduxForm = compose(
    connect(mapStateToProps, {}),
    reduxForm({
        form: "editProfile"
    })
)(EditProfileForm)

const EditProfile = (props) => {

    let [isSubmitting, setSubmitting] = useState(false)

    const handleSubmit = (formData) => {

        setSubmitting(true)
        let {username, first_name, last_name} = props.userProfile

        if (underscore.isEqual({username, first_name, last_name}, formData)) {
            setSubmitting(false)
            props.onSuccess()
        } else {
            //Объект в котором только изменившиеся свойства
            const objectWithChangedFields = checkWhatObjectFieldWasChanged(
                formData,
                {username, first_name, last_name}
                )

            props.updateUser(objectWithChangedFields, props.userId, props.token).then(
                //Если response не пустой - есть ошибка. Пустой- всё хорошо. Вызываем onSuccess
                response => {
                    setSubmitting(false)
                    if (response === undefined) props.onSuccess()
                })
        }
    }

    return <EditProfileReduxForm onSubmit={handleSubmit}
                                 isSubmitting={isSubmitting}
                                 onCancelClick={props.onCancelClick}/>
}

export default EditProfile

