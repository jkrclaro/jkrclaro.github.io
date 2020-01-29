import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

import Note from './components/Note';
import Notes from './components/Notes';
import Workspace from './components/Notes/Workspace';

class App extends Component {

    state = {
        notes: [
            {'url': '/workspace', 'component': <Note title='Workspace' publishedAt='Jan 25, 2019' readingTime='1m 9s' content={Workspace} />}
        ]
    }

    render() {
        const { notes } = this.state;
        return(
            <BrowserRouter>
                <div className='container mb-5'>
                    <Navbar notes={notes} />
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                        <Route exact path={process.env.PUBLIC_URL + '/notes'} component={() => <Notes notes={notes} />} />
                        {notes.map((note, index) =>
                            <Route key={index} exact path={process.env.PUBLIC_URL + note.url} component={() => note.component} />
                        )}
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
