import thunk from 'redux-thunk';
import { browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

import { importAll } from '../utils/fs'

const reducers = Object.values(importAll(require.context('./reducers/', false, /\.(js)$/)))
    .reduce((acc, value) => ({ ...acc, ...value.default }), {})

const combinedReducers = {
    routing,
    ...reducers
}

export const store = createStore(combineReducers(combinedReducers), applyMiddleware(thunk))
export const history = syncHistoryWithStore(browserHistory, store)