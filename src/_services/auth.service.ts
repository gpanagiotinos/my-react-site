import { post } from './fetch'
import { Login } from '@/_types/auth'
import config from '@/configuration/config'

export const authService = {
    login,
    session,
}

async function login<T>(login: Login): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            ...login,
        }),
    }
    return await post(`${config.API_URL}login`, requestOptions)
}

async function session<T>(): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return await post(`${config.API_URL}session`, requestOptions)
}
