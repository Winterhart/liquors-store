import React from 'react'
import {getLiquors} from '../../../data-source/services/LiquorsFinder';

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
        getLiquors(searchingText);
    }

    render(){
        return(
            <div className="SearchBar">
            <h3>Search</h3>
            <form onSubmit={this.handleSubmit}> 
                
            <label>
                Liquor Name
            <input type='text' value={this.state.searchText} onChange={this.handleTextChange} />
            </label>
            <input type='submit' value="Search" onSubmit={this.handleSubmit}/>
            </form>
            </div>
        )
    }
}