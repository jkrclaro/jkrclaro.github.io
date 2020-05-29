import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Essays from './components/Essays';
import BenjaminFranklin from './components/Essays/BenjaminFranklin';


class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/essays'} component={Essays} />
                        <Route exact path={process.env.PUBLIC_URL + '/benjamin-franklin'} component={BenjaminFranklin} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
