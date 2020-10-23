import React, { ReactNode } from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { CustomTypography } from '@/_components/general'
const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontSize: '19px',
        fontWeight: 500,
        fontStyle: 'italic',
    },
}))
type Props = {
    title: string
    loading: string
    children?: ReactNode | null
}

const ResumeBody: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={4}>
            <Grid item xs={2}>
                <CustomTypography className={classes.title} loading={props.loading}>
                    {props.title}
                </CustomTypography>
            </Grid>
            <Grid item xs={10}>
                {props.children}
            </Grid>
        </Grid>
    )
}
export default ResumeBody
