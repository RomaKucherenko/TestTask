export const requiredField = value => {
    if (value) return undefined
    return "This field is required"
}

export const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined

}

export const correctUsername = username => {
    if (/^[\w.@+-]+$/.test(username)) return undefined
    return "Entered incorrect data."
}

export const correctFirstname = firstname => {
    if (/^[a-zA-Z]+$/.test(firstname)) return undefined
    return "Только буквы."
}

export const correctLastname = lastname => {
    if (/^[a-zA-Z]+$/.test(lastname)) return undefined
    return "Только буквы."
}

export const correctPassword = password => {
    //Длина пароля 8 символов, 1 цифра, 1 заглавная
    if (/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) return undefined
    return "Entered incorrect data."
}