import React from 'react';
const Filter=()=>(
    <aside className='filters'>
        <h2>Filters</h2>
        <div className='filter-group'>
        <h3>category</h3>
        <label><input type="checkbox"/>Men's Clothing</label>
        <label><input type="checkbox"/>women's Clothing</label>
        <label><input type="checkbox"/>Jewery</label>
        <lable><input type="checkbox"/>Electronics</lable>

        </div>
        <div className='filter-group'>
            <h3>Price Range</h3>
            <input type="range" min='0' max="500"/>

        </div>
    </aside>
)
export default Filter;
