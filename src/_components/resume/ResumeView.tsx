import React from 'react'
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { CustomTypography, MaterialIcon } from '@/_components/general'
import ResumeHeader from '@/_components/resume/ResumeHeader'
import ResumeBody from '@/_components/resume/ResumeBody'
import ResumeExperience from '@/_components/resume/ResumeExperience'
import { Skill, Work, Education, Address, Information, Interest } from '@/_types/me'
import ResumeEducation from './ResumeEducation'

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        height: '100%',
        toolbar: theme.mixins.toolbar,
    },
    file: {
        width: '50%',
        minWidth: '595px',
        backgroundColor: theme.palette.resume.contrastText,
        borderTop: `5px solid ${theme.palette.resume.dark}`,
        marginBottom: '5px',
    },
    item: {
        width: '100%',
        margin: '0 0 20px 0',
        padding: '20px',
        position: 'relative' as const,
    },
    itemBorder: {
        '&:before': {
            content: '""',
            position: 'absolute' as const,
            left: 'calc(10% - 0)',
            bottom: 0,
            height: '20px',
            width: '93%',
            borderBottom: `1px solid ${theme.palette.resume.dark}`,
        },
    },
    profile: {
        fontSize: '15px',
        fontWeight: 400,
    },
    skill: {
        position: 'relative' as const,
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
}))
type Props = {
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    email?: string | null
    summary?: string | null
    mobile?: string | null
    skills?: Skill[] | null
    address?: Address | null
    work?: Work[] | null
    education?: Education[] | null
    information?: Information[] | null
    interests?: Interest[] | null
    loading: string
}

const ResumeView: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <Grid className={classes.container} container justify="center" alignContent="center">
            <Grid id="my_cv_pdf" className={classes.file} container justify="center" alignItems="flex-start">
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeHeader
                        firstName={props.firstName}
                        lastName={props.lastName}
                        title={props.title}
                        email={props.email}
                        mobile={props.mobile}
                        address={props.address}
                        loading={props.loading}
                    />
                </Grid>
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeBody title={'Profile'} loading={props.loading}>
                        <CustomTypography className={classes.profile} loading={props.loading}>
                            {props.summary}
                        </CustomTypography>
                    </ResumeBody>
                </Grid>
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeExperience work={props.work} loading={props.loading} />
                </Grid>
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeBody title={'Technical'} loading={props.loading}>
                        <Grid container spacing={2}>
                            {(() => {
                                if (props.skills != null) {
                                    const skillsLength = props.skills.length
                                    return props.skills.map((skill, index) => {
                                        return (
                                            <Grid
                                                key={skill.name}
                                                className={index < skillsLength - 2 ? classes.skill : ''}
                                                item
                                                xs={4}
                                            >
                                                <CustomTypography className={classes.profile} loading={props.loading}>
                                                    {`${skill.name}(${skill.level?.substring(0, 3)}.)`}
                                                </CustomTypography>
                                            </Grid>
                                        )
                                    })
                                }
                                return null
                            })()}
                        </Grid>
                    </ResumeBody>
                </Grid>
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeEducation education={props.education} loading={props.loading} />
                </Grid>
                <Grid item className={[classes.item, classes.itemBorder].join(' ')} xs={12}>
                    <ResumeBody title={'Interests'} loading={props.loading}>
                        <Grid container spacing={0}>
                            <List dense component="div" disablePadding>
                                {(() => {
                                    if (props.interests != null) {
                                        return props.interests.map((info, index) => {
                                            return (
                                                <ListItem alignItems={'flex-start'} key={info.name}>
                                                    <ListItemIcon>
                                                        <MaterialIcon
                                                            className={classes.profile}
                                                            icon={'FiberManualRecordIcon'}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <CustomTypography
                                                            className={classes.profile}
                                                            loading={props.loading}
                                                        >
                                                            {info.name}
                                                        </CustomTypography>
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                        })
                                    }
                                    return null
                                })()}
                            </List>
                        </Grid>
                    </ResumeBody>
                </Grid>
                <Grid item className={classes.item} xs={12}>
                    <ResumeBody title={'Additional Information'} loading={props.loading}>
                        <Grid container spacing={2}>
                            <List component="div" disablePadding>
                                {(() => {
                                    if (props.information != null) {
                                        return props.information.map((info, index) => {
                                            return (
                                                <ListItem key={info.name}>
                                                    <ListItemIcon>
                                                        <MaterialIcon
                                                            className={classes.profile}
                                                            icon={'FiberManualRecordIcon'}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        <CustomTypography
                                                            className={classes.profile}
                                                            loading={props.loading}
                                                        >
                                                            {info.name}
                                                        </CustomTypography>
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                        })
                                    }
                                    return null
                                })()}
                            </List>
                        </Grid>
                    </ResumeBody>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ResumeView
