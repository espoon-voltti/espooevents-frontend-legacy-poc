import constants from '../constants'

import {clearUserData, receiveUserData} from './user'
import {mockUser} from '../../__mocks__/mockData'

export function setFlashMsg(msg, style = 'message', data = {}) {
    // type can be 'message' or 'error'
    return {
        type: constants.APP_SET_FLASHMSG,
        msg: msg,
        style: style,
        data: data,
        sticky: data.sticky,
    }
}

export function clearFlashMsg() {
    return {
        type: constants.APP_CLEAR_FLASHMSG,
    }
}

export function confirmAction(
    msg,
    style = 'warning',
    actionButtonLabel,
    data = {}
) {
    // type can be 'message' or 'error'
    //
    // data is an obj {
    //    action: function to run if confirmed
    // }
    return {
        type: constants.APP_CONFIRM_ACTION,
        msg: msg,
        style: style,
        actionButtonLabel: actionButtonLabel,
        data: data,
    }
}

export function doAction(data) {
    if (data && data.action && typeof data.action === 'function') {
        data.action()
    }

    return {
        type: constants.APP_DO_ACTION,
    }
}

export function cancelAction() {
    return {
        type: constants.APP_CANCEL_ACTION,
    }
}

export function showLogin() {
    return {
        type: constants.DISPLAY_LOGIN,
    }
}

export function hideLogin() {
    return {
        type: constants.HIDE_LOGIN,
    }
}

export function makeLoginVisible() {
    return dispatch => {
        // dispatch(showLogin())
        dispatch({type: constants.DISPLAY_LOGIN})
    }
}

export function makeLoginInvisible() {
    return dispatch => {
        dispatch({type: constants.HIDE_LOGIN})
    }
}

export function login() {
    return dispatch => {
        // dispatch(showLogin())
        dispatch({
            type: constants.RECEIVE_USERDATA,
            payload: mockUser,
        })
        dispatch({type: constants.HIDE_LOGIN})
    }
}

export function logout() {
    localStorage.removeItem('apikey')
    return dispatch => {
        dispatch(clearUserData())
    }
}
