import { AuthActionTypes, SET_AUTH } from './types'
import { Auth, Login } from '@/_types/auth'
import { authService } from '@/_services/auth.service'
import { AppThunk } from '@/_store'

export const setLoginAction = (login: Login): AppThunk => (dispatch) => {
    dispatch(setAuth(null, true, null))
    authService
        .login(login)
        .then((auth: Auth) => {
            dispatch(setAuth(auth, false, null))
        })
        .catch((error) => {
            console.error(error)
            dispatch(setAuth(null, false, error))
        })
}

export const setSessionAction = (): AppThunk => (dispatch) => {
    dispatch(setAuth(null, true, null))
    authService
        .session()
        .then((auth: Auth) => {
            dispatch(setAuth(auth, false, null))
        })
        .catch((error) => {
            console.error(error)
            dispatch(setAuth(null, false, error))
        })
}

function setAuth(auth: Auth | null, isFetching: boolean, error: Error | null): AuthActionTypes {
    return {
        type: SET_AUTH,
        payload: {
            auth,
            isFetching,
            error,
        },
    }
}
