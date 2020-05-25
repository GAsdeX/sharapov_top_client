import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

export function routers(routes, history) {
    return <Router history={history} >
        <Switch>
            {
                routes.map(settings => <Route exact { ...settings } key={settings.path} />)
            }
        </Switch>
    </Router>
};