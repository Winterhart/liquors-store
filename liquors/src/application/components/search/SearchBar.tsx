import React from 'react'
import { SearchParamState } from '../../state/SearchParamState';
import {GetLiquorsEvent} from '../../../domain/event/GetLiquorsEvent'

export class SearchBar extends React.Component<any,SearchParamState> {

    constructor(props){
        super(props);
        this.state = {
            isAdvActive: false,
            searchText: '',
            numberOfResult: 10,
            priceRange: [0,999]
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleTextChange(event){
        event.preventDefault()
        this.setState({searchText: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        const getLiquorsEvent : GetLiquorsEvent = new GetLiquorsEvent();
        getLiquorsEvent.gatherLiquors(this.state, this.props)
    }

    render(){
        return(
            <div className="SearchBar container-fluid">
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