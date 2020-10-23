import React from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Link } from '@material-ui/core'
import { CustomTypography } from '@/_components/general'
import { AddressFilter, PhoneFilter } from '@/_helpers'
import { Address } from '@/_types/me'

const useStyles = makeStyles((theme: Theme) => ({
    name: {
        fontSize: '24px',
        fontWeight: 500,
    },
    title: {
        fontSize: '19px',
        fontWeight: 400,
        fontStyle: 'italic',
    },
    button: {
        backgroundColor: theme.palette.resume.dark,
        color: 'white',
    },
    email: {
        fontSize: '15px',
        fontWeight: 400,
        color: theme.palette.resume.dark,
    },
}))

type Props = {
    firstName?: string | null
    lastName?: string | null
    title?: string | null
    email?: string | null
    mobile?: string | null
    address?: Address | null
    loading: string
}
const handleDownloadPDF = (id: string, firstName?: string | null, lastName?: string | null, title?: string | null) => {
    const input = document.getElementById(id)
    const button = document.getElementById('download_pdf_cv')
    const myMm = document.getElementById('myMm')
    if (input != null && myMm != null && button != null) {
        const inputHeightMm = Math.floor(input.offsetHeight / myMm.offsetHeight)
        const a4WidthMm = 210
        const a4HeightMm = 297
        const a4HeightPx = myMm.offsetHeight * a4HeightMm
        const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm / a4HeightMm) + 1
        console.log(a4HeightPx, numPages, inputHeightMm, a4HeightMm)

        // input.style.width = `${a4HeightPx}px`
        button.style.display = 'none'
        html2canvas(input, {
            scale: 2,
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            button.style.display = 'inline-block'
            let pdf = null
            if (inputHeightMm > a4HeightMm) {
                // elongated a4 (system print dialog will handle page breaks)
                pdf = new jsPDF('p', 'mm', [inputHeightMm + 16, a4WidthMm])
            } else {
                // standard a4
                pdf = new jsPDF()
            }
            const width = pdf.internal.pageSize.getWidth()
            const height = pdf.internal.pageSize.getHeight()
            pdf.addImage(imgData, 'PNG', 0, 0, width, height)
            pdf.save(`${firstName}_${lastName}_${title}_CV`)
            input.style.width = '50%'
        })
    }
}

const ResumeHeader: React.FC<Props> = (props: Props) => {
    const classes = useStyles()
    return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" wrap="nowrap" spacing={0}>
            <Grid item xs={6}>
                <Grid container direction="column" justify="flex-start" alignItems="flex-start" wrap="nowrap">
                    <CustomTypography className={classes.name} loading={props.loading}>
                        {props.firstName} {props.lastName}
                    </CustomTypography>
                    <CustomTypography className={classes.title} loading={props.loading}>
                        {props.title}
                    </CustomTypography>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-end"
                    alignContent="stretch"
                    wrap="nowrap"
                >
                    <Button
                        id="download_pdf_cv"
                        onClick={() => handleDownloadPDF('my_cv_pdf', props.firstName, props.lastName, props.title)}
                        variant="contained"
                        className={classes.button}
                        disableElevation
                    >
                        {'Download PDF'}
                    </Button>
                    <div id="myMm" style={{ height: '1mm' }} />
                    <Link
                        target="_blank"
                        component="a"
                        className={classes.email}
                        href={props.email != null ? `mailto:${props.email}` : '#'}
                    >
                        {props.email != null ? props.email : ''}
                    </Link>
                    <CustomTypography className={classes.email} loading={props.loading}>
                        {props.mobile != null ? PhoneFilter(props.mobile) : null}
                    </CustomTypography>
                    <CustomTypography className={classes.email} loading={props.loading}>
                        {props.address != null ? AddressFilter(props.address) : null}
                    </CustomTypography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ResumeHeader
