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
    },
}))

const Header: React.FC = () => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <AppBar color="transparent" position="fixed" elevation={0}>
            <Toolbar className={classes.headerToolBar}>
                <Grid
                    justify={useMediaQuery(theme.breakpoints.up('md')) ? 'flex-end' : 'flex-start'}
                    container
                    spacing={4}
                >
                    <Grid item>
                        <Link to="/resume" className={classes.headerToolBar}>
                            resume
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/" className={classes.headerToolBar}>
                            about
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/" className={classes.headerToolBar}>
                            blog
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link to="/" className={classes.headerToolBar}>
                            contact
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header
