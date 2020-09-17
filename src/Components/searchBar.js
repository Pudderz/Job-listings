import React, { Component } from 'react';
import './searchStyles.css'

const options = [
    {value:'frontend', label: 'Frontend', },
    {value:'backend', label: 'Backend', },
    {value:'fullstack', label: 'Fullstack', },
    {value:'junior', label: 'Junior', },
    {value:'midweight', label: 'Midweight', },
    {value:' senior', label: ' Senior', },
    {value:'python', label: 'Python', },
    {value:'ruby', label: 'Ruby', },
    {value:'javascript', label: 'JavaScript', },
    {value:'html', label: 'HTML', },
    {value:'css', label: 'CSS', },
    {value:'react,', label: 'React,', },
    {value:'sass', label: 'Sass', },
    {value:' vue', label: ' Vue', },
    {value:'django', lable:'Django'},
    {value:'ror', lable:'RoR'},
]
class search extends Component {
    changeValue(event){
        console.log(event.target.value)
        this.props.onSearchChange(event.target.value)
    }

    render() {
        return (
            <div>
            {/* <Select options={options} onChange={(e)=>this.changeValue(e)} isMulti /> */}
            {/* <input id="search" type="search" onChange={(e)=>this.changeValue(e)} placeholder="Search Jobs"/>  */}
            
            <input list="searches" value={this.props.value} name="options" id="search" onChange={(e)=>this.changeValue(e)} placeholder="Search Category" multiple/>
                <datalist id="searches">
                    <option value="fullstack"/>
                    <option value="midweight"/>
                    <option value="junior"/>  
                    <option value="python"/>
                <option value="ruby"/>
                <option value="css"/>
                <option value="javascript"/>
                </datalist>
            </div>
        )
    }
}

export default search
