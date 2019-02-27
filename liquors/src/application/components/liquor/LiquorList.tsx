import React from 'react'
import { QueryResult } from '../../../domain/model/QueryResult';
import { LiquorCard } from './LiquorCard'

export interface LiquorListProps {
    queryData : QueryResult;
}

export class LiquorList extends React.Component<LiquorListProps, {}> {

    constructor(props: LiquorListProps){
        super(props);
    }

    createIdFromName(name: string): string{
        const randomNumber: number = Math.floor((Math.random() * 100) + 1);
        return name.replace(/ /g, '') + randomNumber;
    }

    render(){
        return (
            <div>
                <div className="numberResults alert alert-success" role="alert">
                    We found <span> </span> 
                        <b>{this.props.queryData.numberOfResult}</b>
                        <span> </span> item. 
                </div>
                <div className="row">
                    {this.props.queryData.Liquors.map(
                        l => <LiquorCard key={this.createIdFromName(l.name)} Liquor={l} LiquorId={this.createIdFromName(l.name)} />
                    )}
                </div>
            </div>
        )
    }
}