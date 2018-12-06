import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';

class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
            </div>
        )
    }
}

export default Body;