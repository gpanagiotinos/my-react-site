import meReducer from '@/_store/me/reducers'
import chatReducer from '@/_store/chat/reducers'
import authReducer from '@/_store/auth/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type RootState = ReturnType<typeof rootReducer> & ReturnType<typeof meReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

const rootReducer = combineReducers({
    meState: meReducer,
    chatState: chatReducer,
    authState: authReducer,
})

// const loggerMiddleware = createLogger()

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
