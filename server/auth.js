const basicAuth = require('express-basic-auth')

export function addAuth(server) {
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
