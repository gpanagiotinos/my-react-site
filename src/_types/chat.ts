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
    messages: Array<Message>
}
