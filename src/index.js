import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {store, history} from './store';
import { Router, Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Login from './containers/Login';
// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');



render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

                <IndexRoute component={Login}/>
                <Route path="login" component={Login} />
                <Route path="/app" component={Login} />


            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);