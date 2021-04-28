import JobTags from '../job-tags/JobTags'
import './job.css'

function Job({ job, setFilterTags }) {
  return (
    <div className="job-card">
      <img src={job.logo} alt={`${job.company} logo`} />
      <div className="info">
        <div className="company">
          <h3>{job.company}</h3>
          {job.new && <p className="bubble clear">NEW!</p>}
          {job.featured && <p className="bubble dark">FEATURED</p>}
        </div>
        <h2 className="hover">{job.position}</h2>
        <div className="details">
          <p>{job.postedAt}</p>
          <strong><p>&#183;</p></strong>
          <p>{job.contract}</p>
          <strong><p>&#183;</p></strong>
          <p>{job.location}</p>
        </div>
      </div>
      <JobTags job={job} setFilterTags={setFilterTags} />
    </div>
  );
}

export default Job;
