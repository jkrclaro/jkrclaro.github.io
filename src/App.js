import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Workout from './components/Workout';
import Essays from './components/Essays';

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className='container'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/essays'} component={Essays} />
                        <Route exact path={process.env.PUBLIC_URL + '/books'} component={Books} />
                        <Route exact path={process.env.PUBLIC_URL + '/workout'} component={Workout} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
