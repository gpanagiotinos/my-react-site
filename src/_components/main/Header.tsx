import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import { Theme, makeStyles, useTheme } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'

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
        paddingLeft: '20px',
    },
}))

const Header: React.FC = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <AppBar color="transparent" position="fixed" elevation={0}>
            <Toolbar className={classes.headerToolBar}>
                <Grid
                    justify={useMediaQuery(theme.breakpoints.up('md')) ? 'flex-end' : 'center'}
                    container
                    spacing={useMediaQuery(theme.breakpoints.up('md')) ? 4 : 10}
                >
                    {/* <Grid item className={classes.item}>
                        <Link to="/resume" className={classes.headerToolBar}>
                            resume
                        </Link>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Link to="/" className={classes.headerToolBar}>
                            about
                        </Link>
                    </Grid>
                    <Grid item className={classes.item}>
                        <Link to="/" className={classes.headerToolBar}>
                            blog
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/" className={classes.headerToolBar}>
                            contact
                        </Link>
                    </Grid> */}
                    <Link to="/resume" className={[classes.item, classes.headerToolBar].join(' ')}>
                        resume
                    </Link>
                    <Link to="/" className={[classes.item, classes.headerToolBar].join(' ')}>
                        about
                    </Link>
                    <Link to="/" className={[classes.item, classes.headerToolBar].join(' ')}>
                        blog
                    </Link>
                    <Link to="/" className={[classes.headerToolBar, classes.lastItem].join(' ')}>
                        contact
                    </Link>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header
