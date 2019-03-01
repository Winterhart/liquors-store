import React from 'react';

export interface SelectProps {
    value:string
}

export class SelectOption extends React.Component<SelectProps, {}>{
    constructor(props: SelectProps){
        super(props);
    }

    render(){
        return(
            <option>{this.props.value}</option>
        )
    }
}