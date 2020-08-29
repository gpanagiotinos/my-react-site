import { SET_ME, MeActionTypes } from './types'
import { Me } from '@/_types/me'
import { meService } from '@/_services/me.service'
import { AppThunk } from '@/_store'

export const setMeAction = (): AppThunk => (dispatch) => {
    const initialMe: Me = {
        basics: {
            firstName: null,
            lastName: null,
            website: null,
            summary: null,
            email: null,
            title: null,
            picture: '',
            socials: [],
        },
    }
    dispatch(setMe(initialMe, true, null))
    meService
        .me()
        .then((me: Me) => {
            dispatch(setMe(me, false, null))
        })
        .catch((error) => {
            console.error(error)
            dispatch(setMe(null, false, error))
        })
}

function setMe(me: Me | null, isFetching: boolean, error: Error | null): MeActionTypes {
    return {
        type: SET_ME,
        payload: {
            me,
            isFetching,
            error,
        },
    }
}
