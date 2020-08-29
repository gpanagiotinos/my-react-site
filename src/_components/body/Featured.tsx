import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { setMeAction } from '@/_store/me/actions'
import { MeState } from '@/_store/me/types'
import { RootState } from '@/_store'
import FeaturedView from './FeaturedView'

type Props = {
    state: MeState
    actions?: {
        setMe: typeof setMeAction
    }
}

const Featured: React.FC<Props> = (props: Props) => {
    React.useEffect(() => {
        props.actions?.setMe()
    }, [])
    return <FeaturedView {...props.state.me?.basics} loading={props.state.isFetching.toString()} />
}

function mapStateToProps(state: RootState) {
    return {
        state: { ...state.meState },
    }
}
function mapDispatchToProps(dispatch: Dispatch) {
    return {
        actions: bindActionCreators({ setMe: setMeAction }, dispatch),
    }
}
// interface StateProps {
//     state: MeState
// }
export default connect(mapStateToProps, mapDispatchToProps)(Featured)
