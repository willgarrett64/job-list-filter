
import removeIcon from '../../images/icon-remove.svg';

function FilterTag({ filter, filterTags, setFilterTags }) {
  
  const removeFilter = filterToRemove => {
    const newFilterTags = filterTags.filter(el => el !== filterToRemove)
    setFilterTags(newFilterTags)
  }

  const handleClick = e => {
    const filterToRemove = e.target.parentNode.firstChild.innerHTML;
    removeFilter(filterToRemove)
  }

  return (
    <div className="tag light">
      <p>{filter}</p>
      <img className="clear hover" src={removeIcon} onClick={handleClick} />
    </div>
  );
}

export default FilterTag;
