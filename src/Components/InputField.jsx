import React from 'react';

const input= ({label, onchange, value}) =>(
    <div>
      <label>{label}</label>
      <input  type="text" id="searchBar" placeholder="Type to search..."  onchange="searchData()" value={value} />
   
    </div> )
export default input;