import './filter.css'


import FilterTag from '../filter-tag/FilterTag'

function FilterList({filterTags, setFilterTags}) {
  const clearAll = () => {
    setFilterTags([]);
  }
  
  return (
    <div className="filter-list">
      {filterTags.map(filter => {
        return <FilterTag filter={filter} filterTags={filterTags} setFilterTags={setFilterTags} key={`filter-${filter}`} />
      })}
      <p className="clear-all hover" onClick={clearAll}>Clear</p>
    </div>
  );
}

export default FilterList;
