import React from 'react';
import logo from '../../assets/images/liquors-store.svg';
import '../../assets/css/App.css';
import {LiquorList} from '../components/liquor/LiquorList';
import { ApplicationInitialState } from '../state/AppInitialState';
import {ApplicationState} from '../state/ApplicationState';
import {EmptyResults} from '../components/common/EmptyResults';
import { SearchPanel } from '../components/search/SearchPanel';
import 'rc-slider/assets/index.css';

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
    const hasResults : boolean = this.state.queryResults.numberOfResult > 0;
    return (
      <div className='App'>
        <nav className='navbar navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img src={logo} className='d-inline-block align-top iconn' alt=''/>
          </a>
        </nav>
        <div className='container app-section'>
          <img src={logo} className='App-logo' alt='logo' />
          <SearchPanel callbackRelay={this.queryCallback} />
        </div>
        <div className='container-fluid app-section'>
          {hasResults ? (<LiquorList queryData={this.state.queryResults} />) : (<EmptyResults/>) }
          
        </div>
      </div>
    );
  }
}

export default App;
