import React from 'react'
import { connect } from 'react-redux'
import { MeState } from '@/_store/me/types'
import { RootState } from '@/_store'
import ResumeView from '@/_components/resume/ResumeView'

type Props = {
    state: MeState
}

const Resume: React.FC<Props> = (props: Props) => {
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
export default connect(mapStateToProps, null)(Resume)
