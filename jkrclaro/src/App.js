import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';

class App extends Component {

    render() {
        return(
            <HashRouter>
                <div className='main-body jkrclaro-bg'>
                    <div className='sub-body'>
                        <Header />
                        <div className='container'>
                            <Body />
                        </div>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;
