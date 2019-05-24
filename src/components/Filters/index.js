import React from 'react';
import './style.scss';

const Filters = (props) => {
  return (
    <div className="input">
      <label className="visually-hidden" htmlFor="filters">Filters</label>
      <input id="filters" value={props.filters} type='text' onChange={props.handleInputContent}/>
    </div>
  );
}
 
export default Filters;