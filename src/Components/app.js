import React from 'react';
import {data} from '../data';
import Search from './searchBar';
import JobBlock from './jobBlock';
import './styles.css';
const jobs = JSON.parse(data);
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
            searchValue: e.target.value,
            jobResults: jobs.filter((item)=>{
                if(e.target.value ==='')return true
                else if(
                    item.company.toLowerCase().includes(e.target.value.toLowerCase()) 
                    ||item.position.toLowerCase().includes(e.target.value.toLowerCase())
                ) return true
                else return false
                }),
        })
        console.log('searchChange');
    }

    render(){
        return(
            <React.Fragment>
                <div id="headerBackground">
                </div>
               <Search value={this.state.searchValue} onSearchChange={this.searchChange}/>
                {this.state.jobResults.map((job,index)=>{
                    return(
                    <JobBlock key={index} jobDetails={job}/>
                    )
                })
                } 
            </React.Fragment>
        )
    }
}

export default App