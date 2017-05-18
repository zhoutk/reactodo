import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {store, history} from './store';
import { Router, Route, IndexRoute } from 'react-router';
import App from './containers';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';
// import routes from './routes';

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/stuff" component={Stuff} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);