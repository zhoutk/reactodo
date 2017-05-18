import {Route} from 'react-router-dom';

import { App } from './containers';
import Home from './components/Home';
import Stuff from './components/Stuff';
import Contact from './components/Contact';

export default (
    <Router>
        <App>                                                 //react-router v4允许在Router下放任意标签，也可象我这样放自定义组件
            <Route exact path="/" component={Home} />         //exact是指path进行精确匹配，若不加，根目录会与任何路径都匹配。
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
        </App>
    </Router>
);
