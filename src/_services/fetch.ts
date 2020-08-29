import fetch from 'cross-fetch'

export async function http<T>(path: string, requestOptions: RequestInit): Promise<T> {
    const data = await fetch(path, requestOptions)
    // const george = await fetch(path, requestOptions)
    // const text = await george.text()
    // console.log(text)
    try {
        const response = await data.json()
        if (!data.ok) {
            throw new Error(response.statusText)
        }
        return response
    } catch (error) {
        throw new Error(error)
    }
}

export async function get<T>(path: string, requestOptions: RequestInit = { method: 'get', mode: 'cors' }): Promise<T> {
    console.log(requestOptions)
    return await http<T>(path, requestOptions)
}

export async function post<T>(
    path: string,
    requestOptions: RequestInit = { method: 'post', mode: 'cors' },
): Promise<T> {
    return await http<T>(path, requestOptions)
}
