import Job from '../job/Job'
import './jobList.css'


function JobList({ jobList, setFilterTags }) {
  // map over all the jobs (jobList is only jobs that match filters applied)
  return (
    <div className="job-list">
      {jobList.map(job => {
        return <Job job={job} key={`job-${job.id}`} setFilterTags={setFilterTags} />
      })}
    </div>
  );
}

export default JobList;
