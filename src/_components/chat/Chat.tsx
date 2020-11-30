import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { createChatRoom } from '@/_store/chat/actions'
import { ChatState } from '@/_store/chat/types'
import { RootState } from '@/_store'
import ChatView from '@/_components/chat/ChatView'
import ChatCreateRoom from '@/_components/chat/ChatCreateRoom'

type Props = {
    state: ChatState
    actions: {
        createChatRoom: typeof createChatRoom
    }
}

const Chat: React.FC<Props> = (props: Props) => {
    const [createOpen, setOpenCreateRoom] = React.useState((props.state.chatRoom != null) as boolean)
    const handleCreateOpen = (value: boolean) => {
        setOpenCreateRoom(value)
    }
    const handleCreateRoom = () => {
        console.log('create')
        props.actions.createChatRoom({ id: 'chat-room-id', name: 'george-chat-room', messages: [] }, false, null)
    }
    return (() => {
        if (props.state.chatRoom != null) {
            return <ChatView chatRoom={props.state.chatRoom} />
        }
        return (
            <ChatCreateRoom
                handleOnClose={() => handleCreateOpen(false)}
                handleOnCreate={() => handleCreateRoom()}
                loading={props.state.isFetching.toString()}
                open={!createOpen}
            />
        )
    })()
}
function mapStateToProps(state: RootState) {
    return {
        state: { ...state.chatState },
    }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ createChatRoom: createChatRoom }, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
