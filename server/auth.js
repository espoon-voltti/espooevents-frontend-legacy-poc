import {Passport} from 'passport'
import HelsinkiStrategy from 'passport-helsinki'
import _debug from 'debug'

const debug = _debug('auth')
const basicAuth = require('express-basic-auth')

export function getPassport(settings) {
    const passport = new Passport()

    const helsinkiStrategy = new HelsinkiStrategy(
        {
            clientID: settings.helsinkiAuthId,
            clientSecret: settings.helsinkiAuthSecret,
            callbackURL: settings.publicUrl + '/auth/login/helsinki/return',
        },
        (accessToken, refreshToken, profile, done) => {
            debug('access token:', accessToken)
            debug('refresh token:', refreshToken)
            debug('acquiring token from api...')

            helsinkiStrategy.getAPIToken(
                accessToken,
                settings.helsinkiTargetApp,
                token => {
                    profile.token = token
                    return done(null, profile)
                }
            )
        }
    )

    passport.use(helsinkiStrategy)

    passport.serializeUser((user, done) => done(null, user))
    passport.deserializeUser((user, done) => done(null, user))

    return passport
}

export function addAuth(server, passport, settings) {
    server.get(
        '/auth/login/helsinki',
        basicAuth({
            users: {
                admin: process.env.ESPOOEVENTS_AUTH_KEY,
            },
        }),
        (req, res) => {
            res.send({apikey: process.env.ESPOOEVENTS_API_KEY})
        }
    )
}
