import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Book from './Book';
import Workout from './Workout';
import NotFound from './NotFound';
import BlogList from './Blog/BlogList';
import HelloWorld from './Blog/HelloWorld';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route path={process.env.PUBLIC_URL + '/book'} component={Book} />
                <Route path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
                <Route path={process.env.PUBLIC_URL + '/blog'} component={BlogList} />
                <Route path={process.env.PUBLIC_URL + '/hello-world'} exact component={HelloWorld} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Body;