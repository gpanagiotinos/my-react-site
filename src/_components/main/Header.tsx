import React from 'react'
import { AppBar, Toolbar, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    headerToolBar: {
        backgroundColor: theme.palette.background.paper,
        // borderBottom: `1px solid ${theme.palette.divider}`,
    },
}))
const ToolBarButton = withStyles((theme: Theme) => ({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontWeight: 600,
        color: theme.palette.text.secondary,
    },
}))(Button)

const Header: React.FC = () => {
    const classes = useStyles()
    return (
        <AppBar color="transparent" position="fixed" elevation={0}>
            <Toolbar className={classes.headerToolBar}>
                <Grid justify="flex-end" container spacing={4}>
                    <Grid item>
                        <ToolBarButton className={classes.headerToolBar}>resume</ToolBarButton>
                    </Grid>
                    <Grid item>
                        <ToolBarButton className={classes.headerToolBar}>about</ToolBarButton>
                    </Grid>
                    <Grid item>
                        <ToolBarButton className={classes.headerToolBar}>blog</ToolBarButton>
                    </Grid>
                    <Grid item>
                        <ToolBarButton className={classes.headerToolBar}>contact</ToolBarButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Header
