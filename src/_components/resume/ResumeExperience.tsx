import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { CustomTypography } from '@/_components/general'
import ResumeBody from '@/_components/resume/ResumeBody'
import { Work } from '@/_types/me'

const useStyle = makeStyles((theme: Theme) => ({
    work: {
        position: 'relative' as const,
        paddingBottom: '10px',
        marginBottom: '20px',
        minWidth: '100%',
    },
    workBorder: {
        '&:before': {
            content: '""',
            position: 'absolute' as const,
            left: 0,
            bottom: 0,
            height: '20px',
            width: '100%',
            borderBottom: `1px solid ${theme.palette.resume.dark}`,
        },
    },
    title: {
        fontSize: '19px',
        fontWeight: 500,
        marginBottom: '5px',
    },
    subtitle: {
        fontSize: '15px',
        fontWeight: 500,
        color: theme.palette.resume.dark,
        marginBottom: '5px',
    },
    summary: {
        fontSize: '15px',
        fontWeight: 400,
        color: theme.palette.resume.dark,
    },
}))

type Props = {
    loading: string
    work?: Work[] | null
}

const ResumeExperience: React.FC<Props> = (props: Props) => {
    const classes = useStyle()
    return (
        <ResumeBody title={'Experience'} loading={props.loading}>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={0}>
                {(() => {
                    if (props.work != null) {
                        const workLength = props.work != null ? props.work.length : 0
                        return props.work.map((work, index) => {
                            return (
                                <Grid
                                    className={
                                        index < workLength - 1
                                            ? [classes.work, classes.workBorder].join(' ')
                                            : classes.work
                                    }
                                    key={work.company}
                                    item
                                    xs={12}
                                >
                                    <Grid container justify="space-between" spacing={1}>
                                        <CustomTypography
                                            className={classes.title}
                                            loading={props.loading}
                                        >{`${work.company}`}</CustomTypography>
                                        <CustomTypography
                                            className={classes.subtitle}
                                            loading={props.loading}
                                        >{`${work.startDate} - ${work.endDate}`}</CustomTypography>
                                    </Grid>
                                    <CustomTypography
                                        className={classes.subtitle}
                                        loading={props.loading}
                                    >{`${work.position}`}</CustomTypography>
                                    <CustomTypography
                                        className={classes.summary}
                                        loading={props.loading}
                                    >{`${work.summary}`}</CustomTypography>
                                </Grid>
                            )
                        })
                    }
                    return null
                })()}
            </Grid>
        </ResumeBody>
    )
}

export default ResumeExperience
