import { ChatRoom, Message } from '@/_types/chat'

export const SET_CHAT_ROOM = 'SET_CHAT_ROOM'
export const SEND_MESSAGE = 'SEND_MESSAGE'

export interface ChatState {
    chatRoom: ChatRoom | null
    isFetching: boolean
    error: Error | null
}

export interface SetChatRoomAction {
    type: typeof SET_CHAT_ROOM
    payload: {
        chatRoom: ChatRoom
        isFetching: boolean
        error: Error | null
    }
}

export interface SendMessageAction {
    type: typeof SEND_MESSAGE
    payload: {
        message: Message
    }
}

export type ChatActionTypes = SetChatRoomAction | SendMessageAction
