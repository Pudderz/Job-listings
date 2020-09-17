import React from 'react';
import {data} from '../data';
import Search from './searchBar';
import JobBlock from './jobBlock';
import './styles.scss';
const jobs = JSON.parse(data);
let result = true
let listOfTags='';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue: '',
            jobResults: jobs,
        }
    }
    searchChange=(e)=>{
        this.setState({
            searchValue: e,
            jobResults: jobs.filter((item)=>{
                if(e ==='')return true
                else {
                    result =true
                    listOfTags = item.languages.join(' ').toLowerCase() + item.tools.join('').toLowerCase()
                    e.toLowerCase().split(' ').forEach(element => {
                        if(!listOfTags.includes(element)) result=false
                    });   
                    return result
                }
            })
        })
        console.log('searchChange');
    }
    tagClick=(e)=>{
        this.searchChange(`${this.state.searchValue} ${e}`);
    }
    render(){
        return(
            <React.Fragment>
                <div id="headerBackground">
                </div>
               <Search value={this.state.searchValue} onSearchChange={this.searchChange}/>
                {this.state.jobResults.map((job,index)=>{
                    return(
                    <JobBlock key={index} jobDetails={job} onTagClick={this.tagClick}/>
                    )
                })
                } 
            </React.Fragment>
        )
    }
}

export default App