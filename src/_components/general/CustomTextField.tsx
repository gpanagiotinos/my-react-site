import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'

type Props = TextFieldProps & {
    onEnterKey: () => void
}

const CustomTextField: React.FC<Props> = (props: Props) => {
    const _onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            // enter key pressed
            event.preventDefault()
            props.onEnterKey()
        }
    }
    return (
        <TextField {...props} onKeyPress={_onKeyPress}>
            {props.children}
        </TextField>
    )
}
export default CustomTextField
