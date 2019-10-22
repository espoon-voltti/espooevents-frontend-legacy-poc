import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {makeLoginInvisible, login} from '../../actions/app'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            showWarning: false,
        }
    }

    static contextTypes = {
        dispatch: PropTypes.func,
    }

    dispatchLoginHide = () => {
        this.context.dispatch(makeLoginInvisible())
    }

    dispatchLogin = () => {
        this.context.dispatch(login())
    }

    authenticate(event) {
        event.preventDefault()
        const username = this.state.username
        const password = this.state.password
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
                    // Warn
                    this.setState({showWarning: true})
                }
            })
            .then(res => {
                if (res.apikey) {
                    this.setState({showWarning: false})
                    localStorage.setItem('apikey', res.apikey)
                    this.dispatchLogin()
                    // window.location.reload()
                }
            })
    }

    handleUsername(event) {
        this.setState({username: event.target.value})
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div>
                <div id="login-window">
                    <div
                        className="login-close"
                        onClick={() => this.dispatchLoginHide()}>
                        <svg
                            viewPort="0 0 12 12"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <line
                                x1="1"
                                y1="11"
                                x2="11"
                                y2="1"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <line
                                x1="1"
                                y1="1"
                                x2="11"
                                y2="11"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <div className="login-welcome">
                        <form
                            id="loginForm"
                            onSubmit={event => {
                                this.authenticate(event)
                            }}>
                            <div className="login-block">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Käyttäjä"
                                    onChange={this.handleUsername.bind(this)}
                                />
                            </div>
                            <div className="login-block">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Salasana"
                                    onChange={this.handlePassword.bind(this)}
                                />
                            </div>
                            <input
                                type="submit"
                                id="login-send"
                                value="Lähetä"
                            />
                        </form>
                        {this.state.showWarning ? (
                            <p>Väärä käyttäjätunus tai salasana!</p>
                        ) : (
                            <p>‏‏‎ ‎</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {}

// Adds dispatch to this.props for calling actions, add user from store to props
Login.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Login)
)
