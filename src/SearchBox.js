import React from 'react';

// we have two props here to be used in the parent App {searchField, searchChange}.
const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className="pa2">
			<input 
				className="tc pa3 br3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;