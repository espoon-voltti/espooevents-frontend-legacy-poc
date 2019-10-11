import constants from '../constants'
import moment from 'moment'

export function userMayEdit(user, event) {
    let userMayEdit = false
    const apikey = localStorage.getItem('apikey')
    if (apikey) userMayEdit = true
    return userMayEdit
}

export function eventIsCancelled(event) {
    let eventIsCancelled =
        event && event.event_status == constants.EVENT_STATUS.CANCELLED
    return eventIsCancelled
}

export function eventIsInThePast(event) {
    //Check if event (end time) is in the past. If event is in the past then editing is not allowed
    let eventIsInThePast = false
    if (event && event.end_time) {
        //Convert to moment object
        let endTime = moment(event.end_time, moment.defaultFormatUtc)
        let currentDate = moment()
        if (currentDate.diff(endTime) > 0) {
            //Event is in the past
            eventIsInThePast = true
        }
    }
    return eventIsInThePast
}

export function checkEventEditability(user, event) {
    let eventEditabilityExplanation = ''
    let eventIsInThePast = module.exports.eventIsInThePast(event)
    if (eventIsInThePast) {
        eventEditabilityExplanation =
            'Menneisyydessä olevia tapahtumia ei voi muokata.'
    }
    let eventIsCancelled = module.exports.eventIsCancelled(event)
    if (eventIsCancelled) {
        eventEditabilityExplanation = 'Peruttuja tapahtumia ei voi muokata.'
    }
    let userMayEdit = module.exports.userMayEdit(user, event)
    if (!userMayEdit) {
        eventEditabilityExplanation =
            'Sinulla ei ole oikeuksia muokata tätä tapahtumaa.'
    }
    return {
        eventIsEditable: !eventIsInThePast && !eventIsCancelled && userMayEdit,
        eventEditabilityExplanation,
    }
}
