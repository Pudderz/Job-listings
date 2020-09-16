import React from 'react';
import ReactDOM from 'react-dom';
import JobBlock from './Components/jobBlock'
import * as serviceWorker from './serviceWorker';
import {data} from './data';

let jobs = JSON.parse(data);


ReactDOM.render(
  <React.StrictMode>
    {jobs.map((job,index)=>{
      return(
        <JobBlock key={index} jobDetails={job}/>
      )
    })
    }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
