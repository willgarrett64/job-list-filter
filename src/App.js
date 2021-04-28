import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/header/Header';
import JobList from './components/job-list/JobList';
import FilterList from './components/filter-list/FilterList';

const jobList = require('./docs/data.json');

function App() {
  const [filterTags, setFilterTags] = useState([])
  const [jobsToDisplay, setJobsToDisplay] = useState([])

  // function to filter down the list of all jobs to only those that match all language/tools filters selected by the user
  const filterJobs = () => {
    const displayJobs = jobList.filter(job => {
      let matchAll = true;
      filterTags.forEach(filter => {
        if (!job.languages.includes(filter) && !job.tools.includes(filter) && job.role !== filter && job.level !== filter) {
          matchAll = false;
        }
      });
      return matchAll;
    });
    setJobsToDisplay(displayJobs)    
  }

  // re-call filterJobs every time any filters change. 
  useEffect(() => {
    filterJobs()
  }, [filterTags])

  return (
    <div className="App">
      <Header />
      <FilterList filterTags={filterTags} setFilterTags={setFilterTags} />
      <JobList jobList={jobsToDisplay} setFilterTags={setFilterTags} />
    </div>
  );
}

export default App;
