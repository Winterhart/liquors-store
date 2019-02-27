import React, { Component } from 'react';
import logo from '../../assets/images/liquors-store.svg';
import '../../assets/css/App.css';
import {SearchBar} from '../components/search/SearchBar';
import {LiquorList} from '../components/liquor/LiquorList';
import { QueryResult } from '../../domain/model/QueryResult';
import { ApplicationInitialState } from '../state/AppInitialState';
import {ApplicationState} from '../state/ApplicationState';




class App extends React.Component<{}, ApplicationState> {

  constructor(props){
    super(props);
    const initState : ApplicationInitialState = new ApplicationInitialState(); 
    this.state = {
      queryResults : initState.query
    }
  }

  queryCallback = (dataFromSearchBar) => {
    this.setState({queryResults: dataFromSearchBar})
  }

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
          <SearchBar callBack={this.queryCallback} />
        </div>
        <div className="container">
          <LiquorList queryData={this.state.queryResults}/>
        </div>
      </div>
    );
  }
}

export default App;
