import { AuthActionTypes, AuthState, SET_AUTH } from './types'

const initialState: AuthState = {
    auth: null,
    isFetching: false,
    error: null,
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.payload.auth,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }

        default:
            return {
                ...state,
            }
    }
}

export default authReducer
