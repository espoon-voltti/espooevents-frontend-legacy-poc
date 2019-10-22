import constants from '../constants.js'
import fetch from 'isomorphic-fetch'
import {get} from 'lodash'

// Handled by the user reducer
export function receiveUserData(data) {
    return {
        type: constants.RECEIVE_USERDATA,
        payload: data,
    }
}

// Handled by the user reducer
export function clearUserData() {
    return {
        type: constants.CLEAR_USERDATA,
    }
}

// Adds an expiration time for user and saves it to localStorage.
function saveUserToLocalStorage(user) {
    let modifiedUser = Object.assign({}, user)

    let expiryDate = new Date()
    let expiryTime = appSettings.local_storage_user_expiry_time || 12
    expiryDate.setHours(expiryDate.getHours() + expiryTime)
    modifiedUser.localStorageExpires = expiryDate.toISOString()
    localStorage.setItem('user', JSON.stringify(modifiedUser))
}

export function retrieveUserFromSession() {
    return dispatch => {
        return fetch('/auth/me?' + +new Date(), {
            method: 'GET',
            credentials: 'same-origin',
        })
            .then(response => {
                return response.json()
            })
            .then(user => {
                if (user.token) {
                    const settings = {
                        headers: {
                            // Authorization: 'JWT ' + user.token,
                        },
                    }
                    return fetch(
                        `${appSettings.api_base}/user/${user.username}/`,
                        settings
                    )
                        .then(response => {
                            return response.json()
                        })
                        .then(userJSON => {
                            let mergedUser = Object.assign({}, user, {
                                organization: get(
                                    userJSON,
                                    'organization',
                                    null
                                ),
                                adminOrganizations: get(
                                    userJSON,
                                    'admin_organizations',
                                    null
                                ),
                                organizationMemberships: get(
                                    userJSON,
                                    'organization_memberships',
                                    null
                                ),
                            })

                            saveUserToLocalStorage(mergedUser)
                            return dispatch(receiveUserData(mergedUser))
                        })
                } else {
                    // dispatch(login())
                }
            })
    }
}

export function login() {
    return dispatch => {
        return new Promise(resolve => {}).then(() => {
            return dispatch(retrieveUserFromSession())
        })
    }
}

export function logout() {
    localStorage.removeItem('apikey')
    return dispatch => {
        dispatch(clearUserData())
    }
}

export function loggedInUser() {
    return localStorage.getItem('apikey') ? true : false
}

