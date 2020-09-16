import React, { Component } from 'react';
import './searchStyles.css'



class search extends Component {
    constructor(props){
        super(props);
        this.state ={value: ''};
    }

    changeValue(event){
        
        this.setState({
            value: event.target.value,
        })
        console.log(this.state.value)
    }

    render() {
        return (
            <div className="searchDiv">
                <h3>{this.state.value.toString()}</h3>
                <input id="search" type="search" onChange={(e)=>this.changeValue(e)} placeholder="Search Jobs"/>
            </div>
            
        )
    }
}

export default search
