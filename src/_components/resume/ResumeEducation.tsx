import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { CustomTypography } from '@/_components/general'
import ResumeBody from '@/_components/resume/ResumeBody'
import { Education } from '@/_types/me'

const useStyles = makeStyles((theme: Theme) => ({
    education: {
        position: 'relative' as const,
        paddingBottom: '10px',
        marginBottom: '20px',
        minWidth: '100%',
    },
    educationBorder: {
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
        minWidth: '100%',
        fontSize: '15px',
        fontWeight: 400,
        color: theme.palette.resume.dark,
    },
}))

type Props = {
    loading: string
    education?: Education[] | null
}

const ResumeEducation: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <ResumeBody title={'Education'} loading={props.loading}>
            <Grid container direction="column" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={0}>
                {(() => {
                    if (props.education != null) {
                        const workLength = props.education != null ? props.education.length : 0
                        return props.education.map((education, index) => {
                            return (
                                <Grid
                                    className={
                                        index < workLength - 1
                                            ? [classes.education, classes.educationBorder].join(' ')
                                            : classes.education
                                    }
                                    key={education.institution}
                                    item
                                    xs={12}
                                >
                                    <Grid container justify="space-between" spacing={1}>
                                        <CustomTypography
                                            className={classes.title}
                                            loading={props.loading}
                                        >{`${education.institution}`}</CustomTypography>
                                        <CustomTypography
                                            className={classes.subtitle}
                                            loading={props.loading}
                                        >{`${education.startDate} - ${education.endDate}`}</CustomTypography>
                                    </Grid>
                                    <CustomTypography
                                        className={classes.subtitle}
                                        loading={props.loading}
                                    >{`${education.area}`}</CustomTypography>
                                    <CustomTypography
                                        className={classes.summary}
                                        loading={props.loading}
                                    >{`${education.summary}`}</CustomTypography>
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

export default ResumeEducation
