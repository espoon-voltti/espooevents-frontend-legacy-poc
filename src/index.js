import React from 'react'
import ReactDOM from 'react-dom'
import {Route} from 'react-router'

import {withRouter} from 'react-router-dom'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider, connect} from 'react-redux'

import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
} from 'react-router-redux'

import thunk from 'redux-thunk'

import reducers from './reducers'

// Views
import App from './views/App'
import Editor from './views/Editor'
import Search from './views/Search'
import Help from './views/Help'
import Event from './views/Event'
import EventCreated from './views/EventCreated'
import EventListingPage from './views/EventListing'

// Actors
import Validator from './actors/validator'

// JA addition
import Serializer from './actors/serializer'

// translation
import IntlProviderWrapper from './components/IntlProviderWrapper'

const history = require('history').createBrowserHistory()

const allReducers = combineReducers(
    Object.assign({}, reducers, {
        router: routerReducer,
    })
)

const allMiddlewares = compose(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history)),
    typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
)

const store = createStore(allReducers, allMiddlewares)

// Setup actor for validation. Actor is a viewless component which can listen to store changes
// and send new actions accordingly. Bind the store as this for function
store.subscribe(_.bind(Validator, null, store))

// JA: Serializing state for debugging
store.subscribe(_.bind(Serializer, null, store))

const LayoutContainer = withRouter(connect()(App))

const Container = () => {
    return (
        <Provider store={store}>
            <IntlProviderWrapper>
                <ConnectedRouter history={history}>
                    <LayoutContainer>
                        <Route exact path="/" component={EventListingPage} />
                        <Route exact path="/event/:eventId" component={Event} />
                        <Route
                            exact
                            path="/event/:action/:eventId"
                            component={Editor}
                        />
                        <Route
                            exact
                            path="/event/done/:action/:eventId"
                            component={EventCreated}
                        />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/help" component={Help} />
                    </LayoutContainer>
                </ConnectedRouter>
            </IntlProviderWrapper>
        </Provider>
    )
}

ReactDOM.render(<Container />, document.getElementById('content'))
