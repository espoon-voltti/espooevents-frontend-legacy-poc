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
        return new Promise(resolve => {
            // remove login if somewhere is clicked
            // document.getElementById('login-window').remove()

            let rootLogin = document.createElement('div')
            rootLogin.setAttribute('id', 'login-window')
            document.body.appendChild(rootLogin)

            let welcomeText = document.createElement('div')
            welcomeText.innerHTML = 'Kirjaudu sisään'
            welcomeText.setAttribute('class', 'login-welcome')

            let formWrap = document.createElement('form')
            formWrap.setAttribute('id', 'loginForm')

            let userWrap = document.createElement('div')
            userWrap.setAttribute('class', 'login-block')
            let userField = document.createElement('input')
            userField.setAttribute('type', 'text')
            userField.setAttribute('name', 'username')
            userField.setAttribute('placeholder', 'Käyttäjä')
            userWrap.appendChild(userField)

            let passWrap = document.createElement('div')
            passWrap.setAttribute('class', 'login-block')
            let passField = document.createElement('input')
            passField.setAttribute('type', 'password')
            passField.setAttribute('name', 'password')
            passField.setAttribute('placeholder', 'Salasana')
            passWrap.appendChild(passField)

            let loginButton = document.createElement('input')
            loginButton.setAttribute('type', 'submit')
            loginButton.setAttribute('value', 'Lähetä')
            loginButton.setAttribute('id', 'login-send')

            let warning = document.createElement('div')
            warning.setAttribute('class', 'login-warning')
            warning.innerHTML = 'Väärä salasana tai käyttäjä!'

            formWrap.onsubmit = event => {
                event.preventDefault()
                const username = userField.value
                const password = passField.value
                const credentials = username + ':' + password
                const encodedCredentials = window.btoa(credentials)
                fetch('/auth/login/helsinki', {
                    // method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        Authorization: 'Basic ' + encodedCredentials,
                    },
                    redirect: 'follow', // manual, *follow, error
                    referrer: 'no-referrer', // no-referrer, *client
                })
                    .then(res => {
                        if (res.status === 200) {
                            return res.json()
                        } else {
                            formWrap.appendChild(warning)
                        }
                    })
                    .then(res => {
                        if (res.apikey) {
                            localStorage.setItem('apikey', res.apikey)
                            window.location.reload()
                        }
                    })
            }

            rootLogin.appendChild(welcomeText)
            formWrap.appendChild(userWrap)
            formWrap.appendChild(passWrap)
            formWrap.appendChild(loginButton)
            rootLogin.appendChild(formWrap)

            // Factory approach:
            // let labelTexts = ['username', 'password']

            // const elementFactory = (type, elements) => {
            //     elements.map(elem => {
            //         let element = document.createElement(type)
            //         element.innerHTML = elem
            //         rootLogin.appendChild(element)
            //     })
            // }

            // elementFactory('label', labelTexts)
        }).then(() => {
            return dispatch(retrieveUserFromSession())
        })
    }
}

export function logout() {
    localStorage.removeItem('apikey')
    window.location.reload()
}

export function loggedInUser() {
    return localStorage.getItem('apikey') ? true : false
}
