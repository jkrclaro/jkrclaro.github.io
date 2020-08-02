import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './components/About';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import HowInnovationWorks from './components/Blogs/HowInnovationWorks';


class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={About} />
                        <Route exact path={process.env.PUBLIC_URL + '/blog'} component={Blog} />
                        <Route exact path={process.env.PUBLIC_URL + '/blog/how-innovation-works'} component={HowInnovationWorks} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
