import './index.scss'

import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {Button} from 'material-ui'
import {push} from 'react-router-redux'
import PropTypes from 'prop-types'

import {setFlashMsg as setFlashMsgAction, clearFlashMsg as clearFlashMsgAction} from '../../actions/app'

import CONSTANTS from '../../constants'

class EventCreated extends React.Component {

    UNSAFE_componentWillMount() {
        const {match, setFlashMsg, clearFlashMsg, routerPush} = this.props
        if(match.params.action !== CONSTANTS.EVENT_CREATION.UPDATE) {
            let headerTranslationId = this.getEventHeaderTranslationId()
            setFlashMsg(headerTranslationId, CONSTANTS.EVENT_CREATION.SUCCESS)
            clearFlashMsg()
            routerPush(`/event/${this.props.match.params.eventId}`)
        }
    }

    goToBrowsing() {
        this.props.routerPush(`/`)
    }

    getActionButtons() {
        let buttonStyle = {
            height: '72px',
            margin: '0 10px',
        }

        return (
            <div className="actions">
                <Button raised onClick={e => this.goToBrowsing(e)} style={buttonStyle} color="accent">Palaa takaisin tapahtumiin</Button>
            </div>
        )
    }

    getEventHeaderTranslationId() {
        const EVENT_CREATION = CONSTANTS.EVENT_CREATION
        const {events: {event}, match} = this.props

        let headerTranslationId

        switch(this.props.match.params.action) {
            case EVENT_CREATION.CREATE:
                headerTranslationId = typeof event.super_event === 'object' ? 
                    EVENT_CREATION.CREATE_SUCCESS : EVENT_CREATION.MULTIPLE_EVENTS_SUCCESS
                break;
            case EVENT_CREATION.UPDATE:
                headerTranslationId = EVENT_CREATION.UPDATE_SUCCESS
                break;
            case EVENT_CREATION.CANCEL:
                headerTranslationId = EVENT_CREATION.CANCEL_SUCCESS
                break;
            case EVENT_CREATION.DELETE:
                headerTranslationId = EVENT_CREATION.DELETE_SUCCESS
                break;
            case EVENT_CREATION.SAVE_DRAFT:
                headerTranslationId = EVENT_CREATION.SAVE_DRAFT_SUCCESS
                break;
            case EVENT_CREATION.SAVE_PUBLIC:
                headerTranslationId = EVENT_CREATION.SAVE_PUBLIC_SUCCESS
                break;
            default:
                headerTranslationId = EVENT_CREATION.DEFAULT_SUCCESS

        }
        return headerTranslationId
    }

    render() {
        if(this.props.match.params.action === 'delete') {
            let headerTranslationId = this.getEventHeaderTranslationId()
            return (
                <div className="event-page">
                    <div className="container header">
                        <h1>
                            <FormattedMessage id={`${headerTranslationId}`} />
                        </h1>
                        { this.getActionButtons() }
                    </div>
                </div>
            )
        }
        else {
            return (<div>Loading</div>)
        }

    }
}

EventCreated.propTypes = {
    match: PropTypes.object,
    setFlashMsg: PropTypes.func,
    clearFlashMsg: PropTypes.func,
    events: PropTypes.object,
    routerPush: PropTypes.func,
}

const mapStateToProps = (state) => ({
    events: state.events,
    routing: state.routing,
    user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
    setFlashMsg: (id, status) => dispatch(setFlashMsgAction(id, status)),
    clearFlashMsg: ()=> setTimeout(()=>{
        dispatch(clearFlashMsgAction())
    }, 5000),
    routerPush: (url) => dispatch(push(url)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(EventCreated)



