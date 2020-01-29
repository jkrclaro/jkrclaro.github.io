import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import Essay from './components/Essay';
import Essays from './components/Essays';
import BenjaminFranklin from './components/Essays/BenjaminFranklin';
import Workspace from './components/Essays/Workspace';

class App extends Component {

    state = {
        essays: [
            // {'url': '/benjamin-franklin', 'component': <Essay title='Benjamin Franklin: An American Life' publishedAt='Jan 25, 2019' readingTime='1m 9s' content={BenjaminFranklin} />},
            {'url': '/workspace', 'component': <Essay title='Workspace' publishedAt='Jan 25, 2019' readingTime='1m 9s' content={Workspace} />}
        ]
    }

    render() {
        const { essays } = this.state;
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar essays={essays} />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/essays'} component={() => <Essays essays={essays} />} />
                        {essays.map((article, index) =>
                            <Route key={index} exact path={process.env.PUBLIC_URL + article.url} component={() => article.component} />
                        )}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
