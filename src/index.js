import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store';
import {HashRouter as Router, Route } from 'react-router-dom';
import App from './containers';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';
// import routes from './routes';

render(
    <Provider store={configureStore()}>
        <Router>
            <App>
                <Route exact path="/" component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);