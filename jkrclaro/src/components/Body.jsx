import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import PortfolioGravityWebinar from './PortfolioGravityWebinar';
import PortfolioMegaphonely from './PortfolioMegaphonely';

class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/portfolios/gravitywebinar' component={PortfolioGravityWebinar} />
                <Route path='/portfolios/megaphonely' component={PortfolioMegaphonely} />
            </div>
        )
    }
}

export default Body;