import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Portfolio from './Portfolio';
import PortfolioLightdeo from './PortfolioLightdeo';
import PortfolioMegaphonely from './PortfolioMegaphonely';
import PortfolioWorkout from './PortfolioWorkout';
import PortfolioEirand from './PortfolioEirand';

class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/portfolios/eirand' component={PortfolioEirand} />
                <Route path='/portfolios/lightdeo' component={PortfolioLightdeo} />
                <Route path='/portfolios/megaphonely' component={PortfolioMegaphonely} />
                <Route path='/portfolios/workout' component={PortfolioWorkout} />
            </div>
        )
    }
}

export default Body;