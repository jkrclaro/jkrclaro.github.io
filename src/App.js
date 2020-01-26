import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Books from './components/Books';

import BenjaminFranklin from './components/Books/BenjaminFranklin';

import HelloWorld from './components/Articles/HelloWorld';

class App extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/articles'} component={Articles} />
                        <Route exact path={process.env.PUBLIC_URL + '/books'} component={Books} />
                        <Route exact path={process.env.PUBLIC_URL + '/books/benjamin-franklin'} component={BenjaminFranklin} />
                        <Route exact path={process.env.PUBLIC_URL + '/articles/hello-world'} component={HelloWorld} /> 
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
