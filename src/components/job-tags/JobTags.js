function Job({ job, setFilterTags }) {
  const handleClick = e => {
    const language = e.target.innerHTML;
    setFilterTags(prev => {
      if (prev.includes(language)) {
        return prev;
      } else {
        return [...prev, language];
      }
    })
  }

  return (
    <div className="job-tags">
      <div className="tag light hover">
        <p onClick={handleClick}>{job.role}</p>
      </div>
      <div className="tag light hover">
        <p onClick={handleClick}>{job.level}</p>
      </div>
      {job.languages.map(lang => {
        return (<div className="tag light hover">
          <p onClick={handleClick}>{lang}</p>
        </div>)
      })}
      {job.tools.map(tools => {
        return (<div className="tag light hover">
          <p onClick={handleClick}>{tools}</p>
        </div>)
      })}
    </div>
  );
}

export default Job;
