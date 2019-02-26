import React, { Component } from 'react';
import logo from '../../assets/images/liquors-store.svg';
import '../../assets/css/App.css';
import {SearchBar} from '../components/search/SearchBar';
import {LiquorList} from '../components/liquor/LiquorList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h2>Get your liquors</h2>
        </header>
        <div>
          <SearchBar/>
        </div>
        <div>
          <LiquorList/>
        </div>
      </div>
    );
  }
}

export default App;
