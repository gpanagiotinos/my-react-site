import { ChatState, ChatActionTypes, SET_CHAT_ROOM, SEND_MESSAGE } from './types'

const initialState: ChatState = {
    chatRoom: null,
    isFetching: false,
    error: null,
}

const chatReducer = (state = initialState, action: ChatActionTypes): ChatState => {
    switch (action.type) {
        case SET_CHAT_ROOM:
            return {
                ...state,
                chatRoom: action.payload.chatRoom,
                isFetching: action.payload.isFetching,
                error: action.payload.error,
            }
        case SEND_MESSAGE: {
            if (state.chatRoom != null) {
                const index = state.chatRoom?.messages.findIndex(({ id }) => {
                    return action.payload.message.id === id
                })
                const messages = [...state.chatRoom?.messages]
                if (index < 0) {
                    messages.push(action.payload.message)
                } else {
                    messages[index] = action.payload.message
                }
                return {
                    ...state,
                    chatRoom: {
                        ...state.chatRoom,
                        messages: [...state.chatRoom?.messages, action.payload.message],
                    },
                }
            } else {
                return {
                    ...state,
                }
            }
        }
        default:
            return { ...state }
    }
}

export default chatReducer
