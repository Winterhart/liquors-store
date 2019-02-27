import React from 'react'
import { Liquor } from '../../../domain/model/Liquor';
import {LiquorProductorSection} from './LiquorProductorSection';
import {LiquorDetailSection } from './LiquorDetailSection';
import Collapse from 'react-collapsible';
export interface LiquorCardProps {
    Liquor : Liquor;
    LiquorId : string;
}

export class LiquorCard extends React.Component<LiquorCardProps, {}> {

    constructor(props : LiquorCardProps){
        super(props);
    }

    render(){
        return (
            <div className="cardContainer col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="LiquorCard card ">
                    <div className="fixed-container">
                        <img src={this.props.Liquor.imageURL}
                            className="LiquorImage card-img-top" alt="No Image" />
                    </div>
                    <div className="card-body">
                    <h5 className="card-title">{this.props.Liquor.name}</h5>
                    <br/>
                    <Collapse className="collapseButton" trigger="Liquor Details">
                            <LiquorDetailSection details={this.props.Liquor.details} price={this.props.Liquor.price} />
                    </Collapse>
                    <br/>
                    <Collapse className="collapseButton" trigger="Productor Details">
                            <LiquorProductorSection productor={this.props.Liquor.details.productor} />
                    </Collapse>
                    <br/>
                    <a href={this.props.Liquor.url} className="btn btn-info">
                    Buy Now !
                    </a>
                    </div>
                </div>
            </div>
        )
    }

}