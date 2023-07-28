import React from 'react';
import './SearchBox.css';

function SearchBox(props){
    return (
        <div className='search-container'>
            <input onChange={(event)=>{props.handleChange(event.target.value)}} placeholder='Enter keywords' className="search-box" />
        </div>
    );
}

export default SearchBox;