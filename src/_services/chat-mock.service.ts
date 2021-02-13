import { API } from 'aws-amplify'
import { GraphQLResult } from '@aws-amplify/api'
import { listChatRooms, getUser, getChatRoom, listMessages, listUsers } from '@/graphql/queries'
import { createChatRoom, createUser } from '@/graphql/mutations'
import { Auth } from '@/_types/auth'
import { ChatFilters, ChatRoom } from '@/_types/graphql'
import { CreateChatRoomInput } from '@/_services/chat.service'
import { v4 } from 'uuid'

export const chatService = {
    setCreateUser,
    getChatUser,
    getListChatRooms,
    getListChatMessages,
    getListChatParticipants,
    getChatChatRoom,
    setCreateChatRoom,
}

async function getListChatRooms<T>(limit: number, filters?: ChatFilters): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({ query: listChatRooms, variables: { filters, limit } })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function getListChatMessages<T>(
    limit: number,
    nextToken: string | null,
    filters?: ChatFilters,
): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({ query: listMessages, variables: { filters, limit, nextToken } })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
async function getListChatParticipants<T>(
    limit: number,
    nextToken: string | null,
    filters?: ChatFilters,
): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({ query: listUsers, variables: { filters, limit, nextToken } })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function getChatChatRoom<T>({ id }: ChatRoom): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({ query: getChatRoom, variables: { id } })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function getChatUser<T>({ id }: Auth): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({ query: getUser, variables: { id } })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function setCreateUser<T>({ id, username, email }: Auth): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({
            query: createUser,
            variables: {
                input: {
                    id,
                    username,
                    email,
                },
            },
        })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

async function setCreateChatRoom<T>(chatRoom: CreateChatRoomInput): Promise<GraphQLResult<T>> {
    try {
        const response = await API.graphql({
            query: createChatRoom,
            variables: {
                input: {
                    id: v4(),
                    name: chatRoom.name,
                },
            },
        })
        return response as GraphQLResult<T>
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
