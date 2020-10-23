import React, { Suspense } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import { IconProps } from '@material-ui/core/Icon'

type Props = IconProps & {
    icon: string | null
}

const MaterialIcon: React.FC<Props> = (props: Props) => {
    const iconName = props.icon?.replace(/Icon$/, '')
    const IconComponent = React.lazy(() => import(/* webpackMode: "eager" */ `@material-ui/icons/${iconName}`))
    return (
        <Suspense fallback={<Skeleton variant="circle" width={40} height={40} />}>
            <IconComponent {...props} />
        </Suspense>
    )
}

export default MaterialIcon
