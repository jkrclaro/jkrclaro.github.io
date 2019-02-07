import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import Workout from './Workout';
import NotFound from './NotFound';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route path={process.env.PUBLIC_URL + '/book'} component={Book} />
                <Route path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Body;