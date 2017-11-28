import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Entran from './Containers/Entran'
import Register from './Containers/Register'
import Find from './Containers/Find'
import Talk from './Containers/Talk'
import User from './Containers/User'

ReactDOM.render(
    <BrowserRouter>
        <div>
            { /*<Link to='/Talk'>talk</Link>
            <Link to='/Find'>find</Link>
            <Link to='/User'>user</Link>*/ }
            <Switch>    
                <Route path='/Talk' component={Talk}></Route>
                <Route path='/Find' component={Find}></Route>
                <Route path='/User' component={User}></Route>
                <Route path='/login' component={Entran}></Route>
                <Route path='/register' component={Register}></Route>

            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
