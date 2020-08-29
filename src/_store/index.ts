import meReducer from '@/_store/me/reducers'
import { combineReducers, createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

export type RootState = ReturnType<typeof rootReducer> & ReturnType<typeof meReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

const rootReducer = combineReducers({
    meState: meReducer,
})

// const loggerMiddleware = createLogger()

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
