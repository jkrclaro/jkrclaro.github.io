import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Body/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
