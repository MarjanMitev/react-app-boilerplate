import React from 'react';
import FilterLink from '../../containers/todo/FilterLink';

const Filter = () => {
  return (
    <p className="col-md-12">
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
}

export default Filter;
