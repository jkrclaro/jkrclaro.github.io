import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import ReactJS from './components/Notes/ReactJS';


class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/notes'} component={Notes} />
                        <Route exact path={process.env.PUBLIC_URL + '/reactjs'} component={ReactJS} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
