import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Redirect } from 'react-router'
import { chatService } from '@/_services/chat-mock.service'

import { setChatUserAction } from '@/_store/chat/actions'
import { ChatState } from '@/_store/chat/types'
import { AuthState } from '@/_store/auth/types'
import { RootState } from '@/_store'
import ChatView from '@/_components/chat/ChatView'
import ChatCreateRoom from '@/_components/chat/ChatCreateRoom'

type Props = {
    state: {
        chatState: ChatState
        authState: AuthState
    }
    actions: {
        setChatUserAction: typeof setChatUserAction
    }
}

const Chat: React.FC<Props> = (props: Props) => {
    const [createOpen, setOpenCreateRoom] = React.useState((props.state.chatState.chatRoom != null) as boolean)
    const handleCreateOpen = (value: boolean) => {
        setOpenCreateRoom(value)
    }
    const handleCreateRoom = () => {
        console.log('create')
    }
    React.useEffect(() => {
        if (props.state.authState.auth != null) {
            props.actions.setChatUserAction(props.state.authState.auth)
        }
        chatService
            .getListChatRooms(20, { name: '' })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (() => {
        if (props.state.chatState.chatRoom != null) {
            return <ChatView chatRoom={props.state.chatState.chatRoom} />
        } else if (props.state.authState.auth != null) {
            return (
                <ChatCreateRoom
                    handleOnClose={() => handleCreateOpen(false)}
                    handleOnCreate={() => handleCreateRoom()}
                    loading={props.state.chatState.isFetching.toString()}
                    open={!createOpen}
                />
            )
        } else {
            return <Redirect to="/login" push />
        }
    })()
}
function mapStateToProps(state: RootState) {
    return {
        state: { chatState: { ...state.chatState }, authState: { ...state.authState } },
    }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ setChatUserAction: setChatUserAction }, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
