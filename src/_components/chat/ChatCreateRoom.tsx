import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
// import { Theme, makeStyles } from '@material-ui/core/styles'

type Props = {
    loading: string
    open: boolean
    handleOnClose: () => void
    handleOnCreate: () => void
}
const ChatCreateRoom: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleOnClose} aria-labelledby="">
                <DialogTitle id="create-chat-room">Create or Login to a Chat Room</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="chat-room-name"
                        label="Chat Room Name"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleOnClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={props.handleOnCreate} color="default">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ChatCreateRoom
