export const emailValidation = (email: string): string | null => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return null
    }
    if (email.trim() === '') {
        return 'Email is required'
    }
    return 'Please enter a valid email'
}
