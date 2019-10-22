import constants from '../constants'

const initialState = {
    flashMsg: null, // Used to control showing flash messages
    confirmAction: null, // Used to control modal
    isLoginVisible: false,
}

function update(state = initialState, action) {
    if (action.type === constants.APP_SET_FLASHMSG) {
        if (action.msg && action.msg.length) {
            return Object.assign({}, state, {
                flashMsg: {
                    msg: action.msg,
                    style: action.style,
                    data: action.data,
                    sticky: action.sticky,
                    action: action.data.action,
                },
            })
        } else {
            return Object.assign({}, state, {
                flashMsg: null,
            })
        }
    }

    if (action.type === constants.APP_CLEAR_FLASHMSG) {
        return Object.assign({}, state, {
            flashMsg: null,
        })
    }

    if (action.type === constants.APP_CONFIRM_ACTION) {
        if (action.msg && action.msg.length) {
            return Object.assign({}, state, {
                confirmAction: {
                    msg: action.msg,
                    style: action.style,
                    actionButtonLabel: action.actionButtonLabel,
                    data: action.data,
                },
            })
        } else {
            return Object.assign({}, state, {
                confirmAction: null,
            })
        }
    }

    if (action.type === constants.APP_DO_ACTION) {
        // Clear confirmAction data.
        return Object.assign({}, state, {
            confirmAction: null,
        })
    }

    if (action.type === constants.APP_CANCEL_ACTION) {
        // Clear confirmAction data.
        return Object.assign({}, state, {
            confirmAction: null,
        })
    }

    if (action.type === constants.DISPLAY_LOGIN) {
        // Clear confirmAction data.
        return Object.assign({}, state, {
            isLoginVisible: true,
        })
    }

    if (action.type === constants.HIDE_LOGIN) {
        // Clear confirmAction data.
        return Object.assign({}, state, {
            isLoginVisible: false,
        })
    }

    return state
}

export default update
