import React from 'react';

function Featured(props){
    if(props.featured){
        return(
            <p>Featured</p>
        )
    }
    return(<React.Fragment/>)
}

export default Featured;