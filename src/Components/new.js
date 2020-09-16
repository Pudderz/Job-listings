import React from 'react';

function New(props){
    if(props.new){
        return(
            <p>New!</p>
        )
    }
    return(<React.Fragment/>)
}

export default New;
