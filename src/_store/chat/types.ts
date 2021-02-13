import { Message } from '@/_types/chat'
import { ChatUser, StateChatRoom } from '@/_types/graphql'

export const SET_CHAT_ROOM = 'SET_CHAT_ROOM'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const SET_CHAT_USER = 'SET_CHAT_USER'

export interface ChatState {
    chatRoom: StateChatRoom | null
    user: ChatUser | null
    isFetching: boolean
    error: Error | null
}

export interface SetChatRoomAction {
    type: typeof SET_CHAT_ROOM
    payload: {
        chatRoom: StateChatRoom | null
        isFetching: boolean
        error: Error | null
    }
}
export interface SetChatUserAction {
    type: typeof SET_CHAT_USER
    payload: {
        user: ChatUser | null
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

export type ChatActionTypes = SetChatRoomAction | SetChatUserAction | SendMessageAction
