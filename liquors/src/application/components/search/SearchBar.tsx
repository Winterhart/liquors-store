import React from 'react'


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
        this.setState({searchText: event.target.value})
        event.preventDefault();
    }

    render(){
        return(
            <div className="SearchBar">
            <form onSubmit={this.handleSubmit}> 
                
            <label>
                Liquor Name
            <input type='text' value={this.state.searchText} onChange={this.handleTextChange} />
            </label>
            <input type='submit' value="Search"/>
            </form>
            </div>
        )
    }
}