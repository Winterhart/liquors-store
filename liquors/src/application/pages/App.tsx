import React, { Component } from 'react';
import logo from '../../assets/images/liquors-store.svg';
import '../../assets/css/App.css';
import {SearchBar} from '../components/search/SearchBar';
import {LiquorList} from '../components/liquor/LiquorList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={logo} className="d-inline-block align-top iconn" alt=""/>
          </a>
        </nav>
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
        </div>
        <div className="container">
          <LiquorList/>
        </div>
      </div>
    );
  }
}

export default App;
