import React from 'react';
import { SearchParamState } from '../../state/SearchParamState';
import { QueryResult } from '../../../domain/model/QueryResult';
import { QueryResultMapper } from '../../../domain/adapters/QueryResultMapper';
import { LiquorsFinder } from '../../../data-source/services/LiquorsFinder';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';

export class AdvanceSearch extends React.Component<any,SearchParamState> {

    constructor(props) {
        super(props);
        this.state = {
            isAdvActive: false,
            searchText: '',
            numberOfResult: 10,
            priceRange: [10, 90]
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTextChange(event) {
        this.setState({ searchText: event.target.value });
    }

    handleSubmit(event) {
        const finder: LiquorsFinder = new LiquorsFinder();
        event.preventDefault();
        const adapter: QueryResultMapper = new
            QueryResultMapper();
        finder.findLiquors(this.state).then(res => {
            const queryResult: QueryResult = adapter.convertToDomainObj(res.data);
            this.props.callBack(queryResult);
        });
        //this.props.callBack(results);
    }

    handlePriceChange = (data) => {
        this.setState({
            priceRange: data
        })
    }

    handleResultsChange(event) {
        event.preventDefault();
        this.setState({
            numberOfResult: event.target.id
        })
    }

    handleAvailable(event){
        event.preventDefault();
        this.setState({
            isAvailable : event.target.value
        })
    }

    render() {
        const priceMin : number = this.state.priceRange[0];
        const priceMax : number = this.state.priceRange[1];
        return (
            <div className="SearchBar container-fluid">
                <h3 className="h3">Advance Search Liquors</h3>
                <div className="mx-auto">
                    <form onSubmit={this.handleSubmit}>
                    <div className="row">
                            <div className="criteria-box col-lg-6 col-md-12">
                        <div className="form-group">
                            <label>Search Text:</label>
                            <br/>
                            <br/>
                            <input type='text' className="searchText form-control" value={this.state.searchText} onChange={this.handleTextChange} />
                        </div>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                            <div className="form-group">
                                    <label>Price:</label>
                                    <br/>
                                    <label>{priceMin} <span>$</span> to {priceMax} <span> </span> $ </label> 
                                    <Range min={0} max={100} allowCross={false}
                                     onChange={this.handlePriceChange} value={this.state.priceRange} defaultValue={[10,90]}  />
                            </div>
                    </div>
                    <div className=" criteria-box col-lg-6 col-md-12">
                            <label>Country</label>
                            <select className="form-control">
                            <option>Canada</option>
                            <option>France</option>
                            </select>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                        <label>Category</label>
                        <select className="form-control">
                            <option>Wine</option>
                            <option>Beer</option>
                            <option>Other</option>
                        </select>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                        <label>Availability</label>
                        <select  className="custom-select" onChange={(event) => this.handleAvailable(event)}>
                            <option value="true">Available Now!</option>
                            <option value="false">Coming Soon!</option>
                         </select>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                        <label>Number of Results : {this.state.numberOfResult}</label>
                        <div className="button-box">
                                    <button id="10" onClick={(event) => this.handleResultsChange(event)} className="btn btn-light" >10</button>
                                    <button id="25" onClick={(event) => this.handleResultsChange(event)} className="btn btn-light" >25</button>
                                    <button id="50" onClick={(event) => this.handleResultsChange(event)} className="btn btn-light" >50</button>
                        </div>
      
                    </div>
                            <div className="criteria-box col-lg-12 col-md-12">
                        <button className="btn btn-primary"  type='submit' onClick={this.handleSubmit}>
                            Search
                        </button>
                    </div>
                    </div>


                    </form>
                </div>


            </div>
        )
    }
} 