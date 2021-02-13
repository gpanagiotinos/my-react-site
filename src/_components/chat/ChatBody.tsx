import React from 'react'
import dayjs from 'dayjs'
import { v1 } from 'uuid'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Card, CardActions, CardContent, CardHeader, InputAdornment, FormControl, Paper, Grid } from '@material-ui/core'
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles'
import { MaterialIcon, CustomTypography, CustomTextField } from '@/_components/general'
import { ChatMessage } from '@/_types/graphql'
import { sendMessage } from '@/_store/chat/actions'

const MessageTextField = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: theme.palette.chat.dark,
                    color: theme.palette.chat.dark,
                },
                '&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
                    color: theme.palette.chat.dark,
                    cursor: 'pointer',
                },
            },
        },
    }),
)(CustomTextField)

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        minHeight: '80vh',
        toolbar: theme.mixins.toolbar,
        backgroundColor: 'inherit',
        border: `1px solid ${theme.palette.primary.main}`,
    },
    header: {
        backgroundColor: theme.palette.chat.dark,
        padding: '5px',
        color: theme.palette.chat.contrastText,
    },
    content: {
        width: '100%',
        height: '80%',
        minHeight: '68vh',
        maxHeight: '68vh',
        overflowX: 'auto',
    },
    actions: {
        width: '100%',
        height: '20%',
    },
    form: {
        width: '100%',
    },
    message: {
        color: theme.palette.chat.contrastText,
        fontSize: '14px',
        padding: '10px',
        backgroundColor: theme.palette.chat.dark,
        minHeight: '50px',
    },
    response: {
        color: theme.palette.chat.contrastText,
        fontSize: '14px',
        padding: '10px',
        backgroundColor: theme.palette.primary.dark,
        minHeight: '50px',
    },
    bubbleContainer: {
        padding: '5px',
    },
}))

type Props = {
    name: string
    messages: Array<ChatMessage>
    actions: {
        sendMessage: typeof sendMessage
    }
}

const ChatBody: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    const [currentMessage, setCurrentMessage] = React.useState('' as string)
    // const [messages, setMessages] = React.useState([] as Array<Message>)
    // const [responses, setResponses] = React.useState([] as Array<Message>)
    const handleTypeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(event.currentTarget.value != null ? event.currentTarget.value : '')
    }
    const handleSendMessage = (value: string) => {
        setCurrentMessage('')
        console.log(value)
        props.actions.sendMessage({
            id: v1(),
            userId: '1',
            chatRoomId: 'chat-room-id',
            content: value,
            createdAt: dayjs().format(),
            updatedAt: dayjs().format(),
        })
    }
    return (
        <Card elevation={0} className={classes.container}>
            <CardHeader className={classes.header} title={props.name} />
            <CardContent className={classes.content}>
                <Grid container spacing={1}>
                    {(() => {
                        return props.messages.map((message: ChatMessage, index: number) => {
                            if (message.userId === '1') {
                                return (
                                    <Grid key={`${message.userId}_${index}`} item xs={12}>
                                        <Grid container justify="flex-end" spacing={1}>
                                            <Grid item xs={4} className={classes.bubbleContainer}>
                                                <Paper className={classes.message} elevation={1}>
                                                    <CustomTypography loading={'false'}>
                                                        {message.content}
                                                    </CustomTypography>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            }
                            return (
                                <Grid key={`${message.userId}_${index}`} item xs={12}>
                                    <Grid container justify="flex-start" spacing={1}>
                                        <Grid item xs={4} className={classes.bubbleContainer}>
                                            <Paper className={classes.response} elevation={1}>
                                                <CustomTypography loading={'false'}>{message.content}</CustomTypography>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })
                    })()}
                </Grid>
            </CardContent>
            <CardActions className={classes.actions}>
                <form className={classes.form} noValidate>
                    <FormControl fullWidth>
                        <MessageTextField
                            size="small"
                            id="message"
                            value={currentMessage}
                            variant="outlined"
                            onChange={handleTypeMessage}
                            onEnterKey={() => handleSendMessage(currentMessage)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <MaterialIcon
                                            onClick={() => handleSendMessage(currentMessage)}
                                            icon="SendIcon"
                                        />
                                    </InputAdornment>
                                ),
                            }}
                        ></MessageTextField>
                    </FormControl>
                </form>
            </CardActions>
        </Card>
    )
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ sendMessage: sendMessage }, dispatch),
    }
}
export default connect(null, mapDispatchToProps)(ChatBody)
