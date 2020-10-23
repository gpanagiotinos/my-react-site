import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { setMeAction } from '@/_store/me/actions'
import { MeState } from '@/_store/me/types'
import { RootState } from '@/_store'
import ResumeView from '@/_components/resume/ResumeView'

type Props = {
    state: MeState
    actions?: {
        setMe: typeof setMeAction
    }
}

const Resume: React.FC<Props> = (props: Props) => {
    React.useEffect(() => {
        props.actions?.setMe()
    }, [])
    return (
        <ResumeView
            {...{
                ...props.state.me?.basics,
                skills: props.state.me?.skills,
                work: props.state.me?.work,
                education: props.state.me?.education,
                information: props.state.me?.information,
                interests: props.state.me?.interests,
            }}
            loading={props.state.isFetching.toString()}
        />
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Resume)
