import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { CustomTypography, CustomAvatar } from '@/_components/general'
import { Theme, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: '30px auto',
        position: 'relative' as const,
        paddingBottom: '50px',
        zIndex: 1,
        '&:before': {
            content: '""',
            position: 'absolute' as const,
            left: '5%',
            bottom: 0,
            height: '1px',
            width: '90%',
            borderBottom: `2px solid ${theme.palette.text.secondary}`,
        },
    },
    topContainer: {
        paddingBottom: '30px',
        position: 'relative' as const,
        zIndex: 1,
        '&:before': {
            content: '""',
            position: 'absolute' as const,
            left: 0,
            bottom: 0,
            height: '50px',
            width: '100px' /* or 100px */,
            borderBottom: `2px solid ${theme.palette.text.secondary}`,
        },
    },
    bottomContainer: {
        paddingTop: '30px',
    },
    title: {
        fontWeight: 700,
        fontSize: theme.typography.h3.fontSize,
        width: '100%',
    },
    subtitle: {
        marginTop: '5px',
        fontWeight: 900,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.h5.fontSize,
        textTransform: 'uppercase',
        width: '100%',
    },
    description: {
        fontWeight: 500,
        fontSize: theme.typography.h5.fontSize,
        color: theme.palette.text.primary,
    },
    large: {
        width: '120px',
        height: '120px',
    },
}))

type Props = {
    firstName?: string | null
    summary?: string | null
    title?: string | null
    picture?: string | undefined
    loading: string
}
const FeaturedView: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <Grid className={classes.container} container justify="center" alignItems="center">
            <Grid item xs={10}>
                <Grid container justify="space-around">
                    <Grid className={classes.topContainer} item xs={10}>
                        {/* <Typography className={classes.title} component="h2" variant="h3" color="initial">
                            Hi, I am {props.firstName}
                        </Typography> */}
                        <CustomTypography loading={props.loading} className={classes.title}>
                            Hi, I am {props.firstName}
                        </CustomTypography>
                        <CustomTypography loading={props.loading} className={classes.subtitle}>
                            {props.title}
                        </CustomTypography>
                    </Grid>
                    <Grid className={classes.bottomContainer} item xs={10}>
                        <CustomTypography loading={props.loading} className={classes.description}>
                            {props.summary}
                        </CustomTypography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <CustomAvatar
                    loading={props.loading}
                    className={classes.large}
                    src={props.picture}
                    width={120}
                    height={120}
                ></CustomAvatar>
            </Grid>
        </Grid>
    )
}

export default FeaturedView
