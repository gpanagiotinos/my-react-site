import React from 'react'
import { Grid } from '@material-ui/core'
import Featured from '@/_components/body/Featured'
import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: theme.mixins.toolbar,
}))

const Body: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid container alignContent="center" className={classes.toolbar}>
            <Featured />
            <Grid item xs={12}>
                {/* <div style={{ minHeight: '1000px' }}></div> */}
            </Grid>
        </Grid>
    )
}

export default Body
