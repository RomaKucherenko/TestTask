const validate = values => {
    console.log(`validate`, values)
    const errors = {};

    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password mismatched" ;
    }

    return errors;
};

export default validate;