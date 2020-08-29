import { Me } from '@/_types/me'

export const SET_ME = 'SET_ME'

export interface MeState {
    me: Me | null
    isFetching: boolean
    error: Error | null
}

export interface SetMeAction {
    type: typeof SET_ME
    payload: {
        me: Me | null
        isFetching: boolean
        error: Error | null
    }
}

export type MeActionTypes = SetMeAction
