import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import { chatService } from '@/_services/chat-mock.service'

import { setCreateChatRoom, setSelectChatRoom } from '@/_store/chat/actions'
import { ListChatRoom, ListChatRooms } from '@/_types/graphql'
// import { Theme, makeStyles } from '@material-ui/core/styles'

type Props = {
    loading: string
    open: boolean
    handleOnClose: () => void
    handleOnCreate: () => void
    actions: {
        setCreateChatRoom: typeof setCreateChatRoom
        setSelectChatRoom: typeof setSelectChatRoom
    }
}
const ChatCreateRoom: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = React.useState(false)
    const [name, setChatRoomName] = React.useState('')
    const [options, setOptions] = React.useState<ListChatRoom[]>([])
    const [loading, setLoading] = React.useState(false)

    const handleTypeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChatRoomName(event.currentTarget.value != null ? event.currentTarget.value : '')
        handleOpenChatRoom(event.target.value)
    }
    const handleOpenChatRoom = (value: string | null) => {
        if (options.length < 2 && !loading && value != null) {
            console.log(name)
            setLoading(true)
            const optionsWithCustomName = [
                ...[
                    {
                        __typename: 'ChatRoom',
                        id: value,
                        name: value,
                        createdAt: 'new',
                        updatedAt: 'new',
                    },
                ],
                ...options,
            ]
            setOptions(optionsWithCustomName as Array<ListChatRoom>)
            chatService
                .getListChatRooms(20, { name: value })
                .then((response) => {
                    const { data } = response as ListChatRooms
                    if (data.listChatRooms.items != null) {
                        const index = data.listChatRooms.items.findIndex((chat) => {
                            if (chat != null) {
                                return chat.name === value
                            }
                            return false
                        })

                        if (index > 0) {
                            const { items } = data.listChatRooms
                            setOptions(items as Array<ListChatRoom>)
                        } else {
                            const { items } = data.listChatRooms
                            const optionsWithCustomName = [
                                ...[
                                    {
                                        __typename: 'ChatRoom',
                                        id: value,
                                        name: value,
                                        createdAt: 'new',
                                        updatedAt: 'new',
                                    },
                                ],
                                ...items,
                            ]
                            setOptions(optionsWithCustomName as Array<ListChatRoom>)
                        }
                    }
                    setOpen(true)
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => setLoading(false))
        }
    }
    const handleSelectChatRoom = (event: React.ChangeEvent<HTMLInputElement>, newValue: ListChatRoom) => {
        if (newValue.createdAt === 'new') {
            props.actions.setCreateChatRoom(newValue)
        } else {
            props.actions.setSelectChatRoom(newValue)
        }
    }
    return (
        <div>
            <Dialog open={props.open} onClose={props.handleOnClose} aria-labelledby="">
                <DialogTitle id="create-chat-room">Create or Login to a Chat Room</DialogTitle>
                <DialogContent>
                    <Autocomplete
                        id="search-chat-rooms"
                        open={open}
                        options={options}
                        loading={loading}
                        getOptionLabel={(option) => option.name}
                        onChange={handleSelectChatRoom}
                        onOpen={() => {
                            handleOpenChatRoom('')
                        }}
                        renderOption={(option) => (
                            <React.Fragment>
                                {option.name}
                                {(() => {
                                    if (option.createdAt === 'new') {
                                        return <Button color="secondary">New</Button>
                                    }
                                    return null
                                })()}
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                onChange={handleTypeName}
                                margin="dense"
                                id="chat-room-name"
                                label="Chat Room Name"
                                type="text"
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />
                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="chat-room-name"
                        label="Chat Room Name"
                        type="text"
                        fullWidth
                    /> */}
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

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators(
            { setCreateChatRoom: setCreateChatRoom, setSelectChatRoom: setSelectChatRoom },
            dispatch,
        ),
    }
}
export default connect(null, mapDispatchToProps)(ChatCreateRoom)
