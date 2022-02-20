import React from 'react';
import Movie from './Movie';

const MovieList = () => {
	return (
		<div>
			<div>
				<h1 className='display-1 text-center'>
					Movies Galore
				</h1>
				<Movie />
			</div>
		</div>
	);
};

export default MovieList;