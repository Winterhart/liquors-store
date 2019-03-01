import React from 'react'
import { LiquorDetails } from '../../../domain/model/LiquorDetails';

export interface LiquorDetailsProps {
    details : LiquorDetails
}

export class LiquorDetailSection extends React.Component<LiquorDetailsProps, {}>{

    constructor(props: LiquorDetailsProps){
        super(props);
    }

    render(){
        return(
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Available:</b><span> </span>{this.props.details.available}
                </li>
                <li className="list-group-item">
                    <b>Category:</b><span> </span>{this.props.details.category}
                </li>
                <li className="list-group-item">
                    <b>Score:</b><span> </span>{this.props.details.score}
                </li>
                <li className="list-group-item">
                    <b>Color:</b><span> </span>{this.props.details.color}
                </li>
                <li className="list-group-item">
                    <b>Price Range:</b><span> </span>{this.props.details.averagePrice}
                </li>
                <li className="list-group-item">
                    <b>Cork Type:</b><span> </span>{this.props.details.bouchonType}
                </li>
                <li className="list-group-item">
                    <b>Size:</b><span> </span>{this.props.details.size}
                </li>
            </ul>
        )
    }
}