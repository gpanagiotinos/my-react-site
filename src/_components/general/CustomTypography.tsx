import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography, { TypographyProps } from '@material-ui/core/Typography'

type Props = TypographyProps & {
    loading: string
}

const CustomTypography: React.FC<Props> = (props: Props) => {
    if (props.loading === 'true') {
        return <Skeleton className={props.className} />
    }
    return <Typography {...props}>{props.children}</Typography>
}
export default CustomTypography
