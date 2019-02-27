import React from 'react';

export class EmptyResults extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="emptyResults alert alert-light" role="alert">Empty Results </div>
        )
    }
}