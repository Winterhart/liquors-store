import React from 'react'
import { LiquorProductor } from '../../../domain/model/LiquorProductor';

export interface LiquorProductorProps{
    productor: LiquorProductor;
}
export class LiquorProductorSection extends React.Component<LiquorProductorProps, {}>{
    constructor(props: LiquorProductorProps){
        super(props);
    }

    render(){
        return(

            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Company:</b><span> </span>{this.props.productor.name}
                </li>
                <li className="list-group-item">
                    <b>Country:</b><span> </span>{this.props.productor.country}
                </li>
                <li className="list-group-item">
                    <b>Region:</b><span> </span>{this.props.productor.region}
                </li>
                <li className="list-group-item">
                    <b>Year:</b><span> </span>{this.props.productor.year}
                </li>
                <li className="list-group-item">
                    <b>Cepage:</b><span> </span>{this.props.productor.cepage}
                </li>

            </ul>
        )
    }
}