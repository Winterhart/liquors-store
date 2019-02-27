import React from 'react'
import { QueryResult } from '../../../domain/model/QueryResult';
import { LiquorCard } from './LiquorCard'

export interface LiquorListProps {
    queryData : QueryResult;
}

export class LiquorList extends React.Component<LiquorListProps, {}> {

    constructor(props: LiquorListProps){
        super(props);
        const numberOfResult : number = props.queryData.numberOfResult;
        console.log("results: ");
        console.log(numberOfResult);
    }



    render(){
        return (
            <div className="row">
                {this.props.queryData.Liquors.map(
                    l => <LiquorCard key={l.name} Liquor={l} />
                )}
            </div>
        )
    }
}