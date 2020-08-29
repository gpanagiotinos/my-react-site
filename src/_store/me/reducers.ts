import { MeState, MeActionTypes, SET_ME } from './types'

const initialState: MeState = {
    isFetching: false,
    me: null,
    error: null,
}

const meReducer = (state = initialState, action: MeActionTypes): MeState => {
    switch (action.type) {
        case SET_ME:
            return {
                ...state,
                me: action.payload.me,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }
        default:
            return state
    }
}

export default meReducer
