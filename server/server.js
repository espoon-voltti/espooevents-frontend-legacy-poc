/* eslint-disable no-console */

import path from 'path'
import bodyParser from 'body-parser'
import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'

import getSettings from './getSettings'
import indexTemplate from './renderIndexTemplate'
import { getPassport, addAuth } from './auth'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../config/webpack/dev.js'

const settings = getSettings()
const app = express()
const passport = getPassport(settings)
const router = express.Router()

if(process.env.NODE_ENV !== 'development') {
    app.use('/', express.static(path.resolve(__dirname, '..', 'dist')));
    app.get('/', function (req, res) {
        res.sendfile(path.resolve(__dirname, '..', 'dist'));
    });
} else {
    const compiler = webpack(config)
    app.use(webpackMiddleware(compiler));
    app.use(webpackHotMiddleware(compiler));
}

router.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')   
    res.end(indexTemplate)
} )

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({name: 's', secret: settings.sessionSecret, maxAge: 86400 * 1000}));

app.use(passport.initialize());
app.use(passport.session());
addAuth(app, passport, settings);

console.log('Starting server at port', settings.port);
app.listen(settings.port);
