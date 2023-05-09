export const validateText = (text) => {
    const re = /^[-a-zA-Z\s]*$/;
    return re.test(text);
}

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validatePassword = (password) => {
    const re = /^[^\s]{6,}$/;
    return re.test(password);
}

export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
}