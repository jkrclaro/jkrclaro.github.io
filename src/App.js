import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import Article from './components/Article';
import Articles from './components/Articles';
import BenjaminFranklin from './components/Articles/BenjaminFranklin';
import Workspace from './components/Articles/Workspace';

class App extends Component {

    state = {
        articles: [
            {'url': '/benjamin-franklin', 'component': <Article title='Benjamin Franklin: An American Life' publishedAt='Jan 25, 2019' readingTime='1m 9s' content={<BenjaminFranklin />} />},
            {'url': '/workspace', 'component': <Article title='Workspace' publishedAt='Jan 25, 2019' readingTime='1m 9s' content={<Workspace />} />}
        ]
    }

    render() {
        const { articles } = this.state;
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar articles={articles} />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/articles'} component={() => <Articles articles={articles} />} />
                        {articles.map((article, index) =>
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
