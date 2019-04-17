import React from 'react';

export const SearchBox = ({searchChange}) => {
    return (
        <div className="ma1">
            <input type="text" placeholder="Search Robots" className="bg--lightest-green pa1" onChange={searchChange} />
        </div>
    );
}

export default SearchBox;