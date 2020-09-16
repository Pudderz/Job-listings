import React from 'react'

function Tag(props){
    let listItems = [];
    listItems.push(props.role)
    listItems.push(props.level);
    props.languages.forEach(element => listItems.push(element));
    props.tools.forEach(element => listItems.push(element));
    return(<React.Fragment>
                {listItems.map((info, index)=>{
                    return(<p key = {index.toString()}>{info}</p>) 
                })}
            </React.Fragment>
    )             
}

export default Tag;