import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';

class App extends Component {

    render() {
        return(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='main-body jkrclaro-bg'>
                    <div className='sub-body'>
                        <div className='App-header'>
                            <Header />
                        </div>
                        <div className='container'>
                            <Body />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
