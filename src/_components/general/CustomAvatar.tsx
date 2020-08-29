import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Avatar, { AvatarProps } from '@material-ui/core/Avatar'

type Props = AvatarProps & {
    loading: string
    width: string | number
    height: string | number
}

const CustomAvatar: React.FC<Props> = (props: Props) => {
    if (props.loading === 'true') {
        return <Skeleton variant="circle" width={props.width} height={props.height} />
    }
    return <Avatar {...props} />
}

export default CustomAvatar
