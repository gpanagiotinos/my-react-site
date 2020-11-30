import { Card, CardContent, CardHeader, Grid, Button } from '@material-ui/core'
import { Theme, withStyles, createStyles, makeStyles } from '@material-ui/core/styles'
import { CustomTextField } from '@/_components/general'
import { setLoginAction } from '@/_store/auth/actions'
import { emailValidation } from '@/_plugins/form-validation'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { AuthState } from '@/_store/auth/types'
import { RootState } from '@/_store'
import { Redirect } from 'react-router'

const MessageTextField = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiFormLabel-root': {
                color: theme.palette.primary.dark,
            },
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
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
    },
    button: {
        backgroundColor: theme.palette.chat.dark,
        '&:hover': {
            backgroundColor: theme.palette.chat.dark,
        },
    },
    buttonDisabled: {
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
    input: {
        minWidth: '50%',
    },
}))

type Props = {
    state: AuthState
    actions: {
        setLoginAction: typeof setLoginAction
    }
}

const Login: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    const [currentUsername, setCurrentUsername] = React.useState('' as string)
    const [currentPassword, setCurrentPassword] = React.useState('' as string)

    const handleTypeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentUsername(event.currentTarget.value != null ? event.currentTarget.value : '')
    }
    const handleTypePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentPassword(event.currentTarget.value != null ? event.currentTarget.value : '')
    }

    const handleLogin = (username: string, password: string) => {
        if (username.length > 0 && password.length > 0) {
            const isEmail = emailValidation(username)
            if (isEmail != null) {
                props.actions.setLoginAction({
                    username,
                    password,
                })
            } else {
                props.actions.setLoginAction({
                    email: username,
                    password,
                })
            }
        }
    }
    return (() => {
        if (props.state.auth != null) {
            return <Redirect to="/" push />
        }
        return (
            <Grid className={classes.container} container justify="center" alignContent="flex-start">
                <Grid item xs={6}>
                    <Card className={classes.card} elevation={0}>
                        <CardHeader title="Login" />
                        <CardContent>
                            <form>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <MessageTextField
                                            className={classes.input}
                                            size="small"
                                            label="Username or Email"
                                            id="username"
                                            type="text"
                                            value={currentUsername}
                                            variant="outlined"
                                            onChange={handleTypeUsername}
                                            onEnterKey={() => handleLogin(currentUsername, currentPassword)}
                                        ></MessageTextField>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <MessageTextField
                                            className={classes.input}
                                            size="small"
                                            label="Password"
                                            id="password"
                                            type="password"
                                            value={currentPassword}
                                            variant="outlined"
                                            onChange={handleTypePassword}
                                            onEnterKey={() => handleLogin(currentUsername, currentPassword)}
                                        ></MessageTextField>
                                    </Grid>
                                    <Grid item xs={8}></Grid>
                                    <Grid item xs={2}>
                                        <Button
                                            classes={{
                                                disabled: classes.buttonDisabled,
                                            }}
                                            disabled={!(currentUsername.length > 0 && currentPassword.length > 0)}
                                            className={classes.button}
                                            color="primary"
                                            onClick={() => handleLogin(currentUsername, currentPassword)}
                                        >
                                            Login
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    })()
}

function mapStateToProps(state: RootState) {
    return {
        state: { ...state.authState },
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ setLoginAction: setLoginAction }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
