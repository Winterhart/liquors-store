import React from 'react'
import {getLiquors} from '../../../data-source/services/LiquorsFinder';
import { QueryResult } from '../../../domain/model/QueryResult';
import {SearchBarState} from '../../state/SearchBarState';
import {QueryResultMapper} from '../../../domain/adapters/QueryResultMapper';

export class SearchBar extends React.Component<any,SearchBarState> {

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
        let searchingText : string = this.state.searchText;
        const adapter : QueryResultMapper = new 
            QueryResultMapper();
        getLiquors(searchingText).then(res => {
            const queryResult : QueryResult = adapter.convertToDomainObj(res.data);
            this.props.callBack(queryResult);
        });
        //this.props.callBack(results);
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