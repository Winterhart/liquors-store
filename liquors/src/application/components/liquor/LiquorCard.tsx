import React from 'react'
import { Liquor } from '../../../domain/model/Liquor';


interface LiquorCardProps {
    Liquor : Liquor
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
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                                <b>Price:</b><span> </span>{this.props.Liquor.price}<b>$</b>
                        </li>
                        <li className="list-group-item">
                                <b>Available:</b><span> </span>{this.props.Liquor.details.available}
                        </li>
                        <li className="list-group-item">
                                <b>Category:</b><span> </span>{this.props.Liquor.details.category}
                        </li>
                        <li className="list-group-item">
                                <b>Score:</b><span> </span>{this.props.Liquor.details.score}
                        </li>
                        <li className="list-group-item">
                                <b>Color:</b><span> </span>{this.props.Liquor.details.color}
                        </li>
                        <li className="list-group-item">
                                <b>Price Range:</b><span> </span>{this.props.Liquor.details.averagePrice}
                        </li>
                        <li className="list-group-item">
                                <b>Cork Type:</b><span> </span>{this.props.Liquor.details.bouchonType}
                        </li>
                        <li className="list-group-item">
                                <b>Size:</b><span> </span>{this.props.Liquor.details.size}
                        </li>                                                           
                    </ul>
                    <div className="card-header">
                        Productor Details
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Company:</b><span> </span>{this.props.Liquor.details.productor.name}
                        </li>
                        <li className="list-group-item">
                            <b>Country:</b><span> </span>{this.props.Liquor.details.productor.country}
                        </li>
                        <li className="list-group-item">
                                <b>Region:</b><span> </span>{this.props.Liquor.details.productor.region}
                        </li>
                        <li className="list-group-item">
                            <b>Year:</b><span> </span>{this.props.Liquor.details.productor.year}
                        </li>
                        <li className="list-group-item">
                            <b>Cepage:</b><span> </span>{this.props.Liquor.details.productor.cepage}
                        </li>

                    </ul>
                    <br></br>
                    <a href={this.props.Liquor.url} className="btn btn-info">
                    Buy Now !
                    </a>
                    </div>
                </div>
            </div>
        )
    }

}