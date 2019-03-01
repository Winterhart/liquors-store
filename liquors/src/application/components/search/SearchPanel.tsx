import React from 'react';
import {SearchBar} from './SearchBar';
import { AdvanceSearch } from './AdvanceSearch';
import { SearchParamState } from '../../state/SearchParamState';


export class SearchPanel extends React.Component<any, SearchParamState >{
    constructor(props){
        super(props);

        this.state = {
            isAdvActive : false,
            searchText: '',
            numberOfResult: 10,
            priceRange: [0,999]
        }
    }
    

    renderSearchPanel = (event) => {
        event.preventDefault();
        this.setState({
            isAdvActive : false
        })
    }

    renderAdvSearchPanel = (event) => {
        event.preventDefault();
        this.setState({
            isAdvActive: true
        })
    }

    render(){
        return(
            <div>
                <div className="list-group-horizontal row" >
                    <div className="col-md-6">
                        <a
                            className="list-group-item btn btn-info"
                            onClick={this.renderSearchPanel}>
                            Search
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a
                            className="list-group-item btn btn-info"
                            onClick={this.renderAdvSearchPanel}>
                            Advanced Search
                        </a>

                    </div>


                </div>
                <div className="tab-content">
                    {this.state.isAdvActive ?
                         (
                            <AdvanceSearch callBack={this.props.callbackRelay} />
                         ) : 
                         (
                                <SearchBar callBack={this.props.callbackRelay} />

                         )}
                </div>



            </div>

        );
    }
}