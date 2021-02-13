import { ChatUser } from '@/_types/graphql'
export interface Message {
    id: string
    userId: string
    chatRoomId: string
    content: string
    createdAt: string
    updatedAt: string
}

export interface ChatRoom {
    id: string
    name: string
    user: ChatUser | null
    messages: Array<Message>
}
