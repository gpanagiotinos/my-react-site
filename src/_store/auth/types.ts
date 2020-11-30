import { Auth } from '@/_types/auth'

export const SET_AUTH = 'SET_AUTH'

export interface AuthState {
    auth: Auth | null
    isFetching: boolean
    error: Error | null
}

export interface SetAuthAction {
    type: typeof SET_AUTH
    payload: {
        auth: Auth | null
        isFetching: boolean
        error: Error | null
    }
}

export type AuthActionTypes = SetAuthAction
