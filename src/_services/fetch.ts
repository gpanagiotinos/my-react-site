import fetch from 'cross-fetch'

export async function http<T>(path: string, requestOptions: RequestInit): Promise<T> {
    const data = await fetch(path, requestOptions)
    // const george = await fetch(path, requestOptions)
    // const text = await george.text()
    // console.log(text)
    console.log(data)
    try {
        if (data.status >= 400 && data.status < 500) {
            const response = await data.json()
            throw new Error(response.message)
        } else if (!data.ok) {
            throw new Error(data.statusText)
        } else {
            const response = await data.json()
            return response
        }
    } catch (error) {
        throw new Error(error)
    }
}

export async function get<T>(path: string, requestOptions: RequestInit = { method: 'get', mode: 'cors' }): Promise<T> {
    return await http<T>(path, requestOptions)
}

export async function post<T>(
    path: string,
    requestOptions: RequestInit = { method: 'post', mode: 'cors', body: null, credentials: 'include' },
): Promise<T> {
    return await http<T>(path, requestOptions)
}
