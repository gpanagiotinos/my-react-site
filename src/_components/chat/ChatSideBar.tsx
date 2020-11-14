import React from 'react'
import { Card, CardHeader } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        minHeight: '80vh',
        toolbar: theme.mixins.toolbar,
        backgroundColor: 'inherit',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRight: 0,
    },
}))
// type Props = {}
const ChatSideBar: React.FC = () => {
    const classes = useStyles()
    return (
        <Card elevation={0} className={classes.container}>
            <CardHeader title="Chat Participants" />
        </Card>
    )
}

export default ChatSideBar
