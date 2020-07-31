import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import TheLeanStartup from './components/Notes/TheLeanStartup';


class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/notes'} component={Notes} />
                        <Route exact path={process.env.PUBLIC_URL + '/notes/the-lean-startup'} component={TheLeanStartup} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
