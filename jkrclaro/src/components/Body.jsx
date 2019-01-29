import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Workout from './Workout';


class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
            </div>
        )
    }
}

export default Body;