import { SET_CHAT_ROOM, SEND_MESSAGE, SET_CHAT_USER, ChatActionTypes } from './types'
import { Message } from '@/_types/chat'
import {
    ChatUser,
    ChatRoom,
    StateChatRoom,
    GetChatUser,
    ListChatRoom,
    GetChatRoom,
    ListChatUsers,
    ListChatMessages,
} from '@/_types/graphql'
import { chatService } from '@/_services/chat-mock.service'
import { Auth } from '@/_types/auth'
import { AppThunk } from '@/_store'

export const setChatUserAction = (user: Auth): AppThunk => (dispatch) => {
    dispatch(setChatUser(null, true, null))
    chatService
        .getChatUser(user)
        .then((response) => {
            const { data } = response as GetChatUser
            console.log(data)
            dispatch(setChatUser(data.getUser, false, null))
        })
        .catch((error) => {
            console.error(error)
            dispatch(setChatUser(null, false, error))
        })
}
const setChatUser = (user: ChatUser | null, isFetching: boolean, error: Error | null): ChatActionTypes => {
    return {
        type: SET_CHAT_USER,
        payload: {
            user,
            isFetching,
            error,
        },
    }
}

export const setCreateChatRoom = (chatRoom: ListChatRoom): AppThunk => (dispatch) => {
    dispatch(createChatRoom(null, true, null))
    chatService
        .setCreateChatRoom(chatRoom)
        .then((response) => {
            const { data } = response as GetChatRoom
            console.log(data)
            dispatch(
                createChatRoom(
                    {
                        ...data.getChatRoom,
                        messages: null,
                        participants: null,
                    },
                    false,
                    null,
                ),
            )
        })
        .catch((error) => {
            console.error(error)
            dispatch(setChatUser(null, false, error))
        })
}

export const setSelectChatRoom = (chatRoom: ListChatRoom): AppThunk => (dispatch) => {
    dispatch(createChatRoom(null, true, null))
    chatService
        .getChatChatRoom(chatRoom as ChatRoom)
        .then(async (response) => {
            let messages = null
            let participants = null
            const { data } = response as GetChatRoom
            const messagesNextToken = data.getChatRoom.messages?.nextToken
            const participantsNextToken = data.getChatRoom.participants?.nextToken
            if (messagesNextToken != null) {
                messages = (await chatService.getListChatMessages(20, messagesNextToken)) as ListChatMessages
            }
            if (participantsNextToken != null) {
                participants = (await chatService.getListChatParticipants(20, participantsNextToken)) as ListChatUsers
            }
            dispatch(
                createChatRoom(
                    {
                        ...data.getChatRoom,
                        messages: messages != null ? messages.data.listMessages : null,
                        participants: participants != null ? participants.data.listUsers : null,
                    },
                    false,
                    null,
                ),
            )
        })
        .catch((error) => {
            console.error(error)
            dispatch(setChatUser(null, false, error))
        })
}
const createChatRoom = (chatRoom: StateChatRoom | null, isFetching: boolean, error: Error | null): ChatActionTypes => {
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
