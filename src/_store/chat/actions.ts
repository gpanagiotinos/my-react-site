import { SET_CHAT_ROOM, SEND_MESSAGE, ChatActionTypes } from './types'
import { ChatRoom, Message } from '@/_types/chat'

export const createChatRoom = (chatRoom: ChatRoom, isFetching: false, error: null): ChatActionTypes => {
    return {
        type: SET_CHAT_ROOM,
        payload: {
            chatRoom,
            isFetching,
            error,
        },
    }
}

export const sendMessage = (message: Message): ChatActionTypes => {
    return {
        type: SEND_MESSAGE,
        payload: {
            message,
        },
    }
}
