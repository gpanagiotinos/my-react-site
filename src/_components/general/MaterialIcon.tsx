import React, { Suspense } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

type Props = {
    icon: string | null
}

const MaterialIcon: React.FC<Props> = (props: Props) => {
    const iconName = props.icon?.replace(/Icon$/, '')
    const IconComponent = React.lazy(() => import(/* webpackMode: "eager" */ `@material-ui/icons/${iconName}`))
    return (
        <Suspense fallback={<Skeleton variant="circle" width={40} height={40} />}>
            <IconComponent />
        </Suspense>
    )
}

export default MaterialIcon
