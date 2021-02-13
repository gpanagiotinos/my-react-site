import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { setMeAction } from '@/_store/me/actions'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import { Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { RootState } from '@/_store'
import { AuthState } from '@/_store/auth/types'

const useStyles = makeStyles((theme: Theme) => ({
    headerToolBar: {
        backgroundColor: theme.palette.background.paper,
        textDecoration: 'none',
        boxShadow: 'none',
        textTransform: 'none',
        fontWeight: 600,
        color: theme.palette.text.secondary,
        fontSize: '14px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
        },
    },
    item: {
        paddingRight: '40px',
        borderRight: '0',
        [theme.breakpoints.down('md')]: {
            padding: '0 20px',
            borderRight: `2px solid ${theme.palette.text.secondary}`,
        },
    },
    lastItem: {
        paddingLeft: 0,
        [theme.breakpoints.down('md')]: {
            paddingLeft: '20px',
        },
    },
}))

type Props = {
    state: AuthState
    actions?: {
        setMe: typeof setMeAction
    }
}

const Header: React.FC<Props> = (props: Props) => {
    React.useEffect(() => {
        props.actions?.setMe()
    }, [])
    const classes = useStyles()
    const theme = useTheme()
    return (
        <AppBar color="transparent" position="fixed" elevation={0}>
            <Toolbar className={classes.headerToolBar}>
                <Grid
                    justify={useMediaQuery(theme.breakpoints.down('md')) ? 'center' : 'flex-end'}
                    container
                    spacing={useMediaQuery(theme.breakpoints.down('md')) ? 4 : 6}
                >
                    <Grid
                        item
                        component={Link}
                        to="/resume"
                        className={[classes.item, classes.headerToolBar].join(' ')}
                    >
                        resume
                    </Grid>
                    <Grid item component={Link} to="/" className={[classes.item, classes.headerToolBar].join(' ')}>
                        about
                    </Grid>
                    <Grid item component={Link} to="/" className={[classes.item, classes.headerToolBar].join(' ')}>
                        blog
                    </Grid>
                    {/* {(() => {
                        if (props.state.auth != null) {
                            return (
                                <Grid
                                    item
                                    component={Link}
                                    to="/chat"
                                    className={[classes.headerToolBar, classes.lastItem].join(' ')}
                                >
                                    chat
                                </Grid>
                            )
                        }
                        return (
                            <Grid
                                item
                                component={Link}
                                to="/login"
                                className={[classes.headerToolBar, classes.lastItem].join(' ')}
                            >
                                login
                            </Grid>
                        )
                    })()} */}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

function mapStateToProps(state: RootState) {
    return {
        state: { ...state.authState },
    }
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ setMe: setMeAction }, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
