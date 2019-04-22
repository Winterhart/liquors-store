import React from 'react';
import { SearchParamState } from '../../state/SearchParamState';
import {Range} from 'rc-slider';
import {CountryList} from '../common/CountryList';
import {SelectOption} from '../common/SelectOption';
import { GetLiquorsEvent } from '../../../domain/event/GetLiquorsEvent'


export class AdvanceSearch extends React.Component<any,SearchParamState> {

    constructor(props) {
        super(props);
        this.state = {
            isAdvActive: false,
            searchText: '',
            numberOfResult: 10,
            priceRange: [1, 90]
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTextChange(event) {
        this.setState({ searchText: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault()
        const getLiquorsEvent: GetLiquorsEvent = new GetLiquorsEvent();
        getLiquorsEvent.gatherLiquors(this.state, this.props)
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

    handleCountryChoice = (event) => {
        event.preventDefault();
        this.setState({
            country: event.target.value
        });
    }

    handleCategoryChoice = (event) => {
        event.preventDefault();
        this.setState({
            categorie : event.target.value
        });
    }

    handleAvailable(event){
        event.preventDefault();
        const toBool : boolean = (event.target.value === 'true');
        this.setState({
            isAvailable : toBool
        })
    }
    render() {
        const priceMin : number = this.state.priceRange[0];
        const priceMax : number = this.state.priceRange[1];
        let convertedToList: string[] = [];
        for (let c in CountryList) { convertedToList.push(CountryList[c]) }
        return (
            <div className="SearchBar container-fluid">
                <h3 className="h3">Advanced Search </h3>
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
                            <select className="form-control" onChange={(event) => this.handleCountryChoice(event)}>
                                    <option defaultValue=""></option>
                                    {convertedToList.map(
                                        c => <SelectOption key={c} value={c} />
                                    )}
                            </select>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                        <label>Category</label>
                                <select className="form-control catSelect" onChange={(event) => this.handleCategoryChoice(event)}>
                            <option defaultValue=""></option>
                            <option value="Wine">Wine</option>
                            <option value="Beer">Beer</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                            <div className="criteria-box col-lg-6 col-md-12">
                        <label>Availability</label>
                        <select  className="custom-select" onChange={(event) => this.handleAvailable(event)}>
                            <option defaultValue=""></option>
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