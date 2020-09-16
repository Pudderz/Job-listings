import React, { Component } from 'react';
import './searchStyles.css'



class search extends Component {

    changeValue(event){
        this.props.onSearchChange(event)
    }

    render() {
        return (
                <input id="search" type="search" onChange={(e)=>this.changeValue(e)} placeholder="Search Jobs"/>
            
        )
    }
}

export default search
