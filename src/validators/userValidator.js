export const requiredField = value => {
    if (value) return undefined
    return "This field is required"
}
export const maxLengthCreator = maxLength => value => {
    //!!!!!Очень интересный момент - проверка на value, undef value or not!!!!!
    //Потому что если будет value = null, то null.length выдаст ошибку
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined

}
export const correctUsername = username => {
    if (/^[\w.@+-]+$/.test(username)) return undefined
    return "Entered incorrect data. Use only Letters, digits and @/./+/-/_ "
}
export const correctFirstname = firstname => {
    if (/^[a-zA-Z]+$/.test(firstname)) return undefined
    return "Только буквы латинского алфавита."
}
export const correctLastname = lastname => {
    if (/^[a-zA-Z]+$/.test(lastname)) return undefined
    return "Только буквы латинского алфавита."
}
