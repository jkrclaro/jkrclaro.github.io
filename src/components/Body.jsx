import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import Workout from './Workout';
import NotFound from './NotFound';
import BlogList from './Blog/BlogList';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/library'} component={Book} />
                <Route exact path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
                <Route exact path={process.env.PUBLIC_URL + '/journal'} component={BlogList} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Body;