import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Workout from './Workout';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
            </Switch>
        )
    }
}

export default Body;