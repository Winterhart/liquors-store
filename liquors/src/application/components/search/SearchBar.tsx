import React from 'react'
import {getLiquors} from '../../../data-source/services/LiquorsFinder';
import { QueryResult } from '../../../domain/model/QueryResult';

export interface SearchBarState {
    searchText : string
}

export class SearchBar extends React.Component<{}, SearchBarState> {

    constructor(props){
        super(props);
        this.state = {
            searchText: ''
        };
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleTextChange(event){
        this.setState({searchText: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("search for: ");
        console.log(this.state.searchText);
        let searchingText = this.state.searchText;
        let results : QueryResult =  getLiquors(searchingText);
    }

    render(){
        return(
            <div className="SearchBar">
                <h3 className="h3">Search Liquors</h3>
            <div className="mx-auto">
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                            <input type='text' className="searchText form-control" value={this.state.searchText} onChange={this.handleTextChange} />
                    </div>
                        <button className="btn btn-primary" type='submit' onClick={this.handleSubmit}>
                        Search
                        </button>
                    </form>
            </div>


            </div>
        )
    }
}