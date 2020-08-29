import React from 'react'
import { connect } from 'react-redux'
import { MeState } from '@/_store/me/types'
import { RootState } from '@/_store'
import { Grid, AppBar, Link } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { MaterialIcon, CustomTypography } from '@/_components/general'

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        marginBottom: '5px',
    },
    footerAppBar: {
        top: 'auto',
        bottom: 0,
    },
    title: {
        fontWeight: 700,
        fontSize: '1em',
    },
    subtitle: {
        fontWeight: 500,
        fontSize: '0.8em',
        color: theme.palette.text.secondary,
    },
    fullNameFooter: {
        paddingBottom: '5px',
        position: 'relative' as const,
        zIndex: 1,
        '&:before': {
            content: '""',
            position: 'absolute' as const,
            left: 'calc(50% - 50px)',
            bottom: 0,
            height: '20px',
            width: '100px' /* or 100px */,
            borderBottom: `2px solid ${theme.palette.text.secondary}`,
        },
    },
    emailFooter: {
        marginBottom: '5px',
    },
    linkedInIcon: {
        marginRight: '8px',
        fontSize: 30,
        '&:hover': {
            color: '#0072b1',
        },
    },
    gitHubIcon: {
        fontSize: 29,
        '&:hover': {
            color: '#211f1f',
        },
    },
    linkIcons: {
        color: theme.palette.divider,
    },
}))

type Props = {
    state: MeState
}

const Footer: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault()

    return (
        <AppBar color="transparent" elevation={0} position="fixed" className={classes.footerAppBar}>
            <Grid container alignContent="center" className={classes.footer}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={4} className={classes.fullNameFooter}>
                            <CustomTypography
                                className={classes.title}
                                align="center"
                                loading={props.state.isFetching.toString()}
                                color="initial"
                            >
                                {props.state.me?.basics.firstName} {props.state.me?.basics.lastName}
                            </CustomTypography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={4} className={classes.emailFooter}>
                            <CustomTypography
                                align="center"
                                loading={props.state.isFetching.toString()}
                                color="initial"
                            >
                                <Link
                                    target="_blank"
                                    component="a"
                                    className={classes.subtitle}
                                    href={
                                        props.state.me?.basics.email != null
                                            ? `mailto:${props.state.me?.basics.email}`
                                            : '#'
                                    }
                                >
                                    {props.state.me?.basics.email != null ? props.state.me?.basics.email : ''}
                                </Link>
                            </CustomTypography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignContent="center">
                        <Grid item xs={4}>
                            <CustomTypography loading={props.state.isFetching.toString()} align="center">
                                {props.state.me?.basics.socials.map(({ network, url }, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            target="_blank"
                                            component="a"
                                            className={classes.linkIcons}
                                            href={url != null ? url : '#'}
                                        >
                                            <MaterialIcon icon={network} />
                                        </Link>
                                    )
                                })}
                            </CustomTypography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
}

function mapStateToProps(state: RootState) {
    return {
        state: { ...state.meState },
    }
}
export default connect(mapStateToProps)(Footer)
