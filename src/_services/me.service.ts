import { post } from './fetch'
import config from '@/configuration/config'

export const meService = {
    me,
}

async function me<T>(): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }
    return await post(`${config.API_URL}me`, requestOptions)
}
