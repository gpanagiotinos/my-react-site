import React from 'react'
import ChatSideBar from '@/_components/chat/ChatSideBar'
import ChatBody from '@/_components/chat/ChatBody'
import { Grid } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { ChatMessage, StateChatRoom } from '@/_types/graphql'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: '100%',
        minHeight: '80vh',
        backgroundColor: theme.palette.chat.light,
        margin: '0 10px',
    },
}))

type Props = {
    chatRoom: StateChatRoom
}

const ChatView: React.FC<Props> = (props: Props) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.container} justify="center" alignContent="space-around">
            <Grid xs={3} item>
                <ChatSideBar />
            </Grid>
            <Grid xs={8} item>
                <ChatBody name={props.chatRoom.name} messages={(props.chatRoom.messages as unknown) as ChatMessage[]} />
            </Grid>
        </Grid>
    )
}

export default ChatView
