import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Library from './Library';
import Blog from './Blog';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';

class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/blog' component={Blog} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/library' component={Library} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}

export default Body;