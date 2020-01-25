import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Workout from './components/Workout';
import BenjaminFranklin from './components/Books/BenjaminFranklin';

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className='container mb-3'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/books'} component={Books} />
                        <Route exact path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
                        <Route exact path={process.env.PUBLIC_URL + '/benjamin-franklin'} component={BenjaminFranklin} /> 
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
