import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'

export function routers(routes, history) {
    return <Router history={history} >
        <ScrollToTop>
            <Switch>
                {
                    routes.map(settings => <Route exact { ...settings } key={settings.path} />)
                }
            </Switch>
        </ScrollToTop>
    </Router>
};