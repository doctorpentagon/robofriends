import React from 'react';

const Search = ({searchword, searchChange}) =>{
    return (
        <div >
            <input 
            //on"Change" in capital letter
            onChange={searchChange} 
            className='ask' 
            type="search" 
            placeholder ='search robots' 
            />
        </div>
    )
}

export default Search;