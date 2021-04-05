export const requiredField = value => {
    return value ? undefined : 'Это поле обьязательно для заполнения'
}

export const maxLength = length => value => {
    return (value.length > length) ? `Макс. длинна сотсавляет ${length} символов` : undefined
}

export const minLength = length => value => {
    return (value.length < length) ? `Мин. длинна сотсавляет ${length} символов` : undefined
}