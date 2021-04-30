const SignUpValidation = (data) => {

    let errors = {};

    if(!data.fullname) {
        errors.fullname = 'Name is required.';
    }
    if(!data.email) {
        errors.email = 'Email is required.';
    }
    // else if(!/\+@\s+\.\s+/.test(data.email)) {
    //     errors.email = 'Email is invalid.';
    // }

    if(!data.password) {
        errors.password = 'Password is required.';
    }else if(data.password.length < 6 ) {
        errors.password = 'Password must not be less than 6.';
    }

    return errors;
}

export default SignUpValidation;