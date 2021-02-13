import * as APIt from '@/_services/chat.service'

export type ChatUser = Omit<Exclude<APIt.GetUserQuery['getUser'], null>, '__typename'>

export type GetChatUser = {
    data: {
        getUser: ChatUser
    }
}

export type ChatMessage = Omit<Exclude<APIt.GetMessageQuery['getMessage'], null>, '__typename'>

export type ChatRoom = Omit<Exclude<APIt.GetChatRoomQuery['getChatRoom'], null>, '__typename'>
export type GetChatRoom = {
    data: {
        getChatRoom: ChatRoom
    }
}
export type StateChatRoom = {
    id: string
    messages: ListMessages | null
    createdAt: string
    updatedAt: string
    name: string
    participants: ListUsers | null
}

export type ListChatRoom = Omit<Exclude<APIt.GetChatRoomQuery['getChatRoom'], null>, 'messages' | 'participants'>

export type ListChatRooms = {
    data: {
        listChatRooms: Omit<Exclude<APIt.ListChatRoomsQuery['listChatRooms'], null>, '__typename'>
    }
}

export type ListUsers = Omit<
    Exclude<APIt.ListUsersQuery['listUsers'], null>,
    'messages' | 'participants' | '__typename'
>

export type ListChatUsers = {
    data: {
        listUsers: Omit<Exclude<APIt.ListUsersQuery['listUsers'], null>, '__typename'>
    }
}

export type ListMessages = Omit<
    Exclude<APIt.ListMessagesQuery['listMessages'], null>,
    'messages' | 'participants' | '__typename'
>

export type ListChatMessages = {
    data: {
        listMessages: Omit<Exclude<APIt.ListMessagesQuery['listMessages'], null>, '__typename'>
    }
}

export type ChatFilters = {
    id?: string
    name?: string
}
