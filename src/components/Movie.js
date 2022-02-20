import React from 'react';
import movieArray from './MovieArray';
import Review from './Review';

const Movie = () => {
	return (
		<div className='movie-display'>
			{movieArray.map((movie) => (
				<React.Fragment>
					<div
						key={movie.id}
						className='movie-col mt-2 col col-4'>
						<img
							src={movie.movieImage}
							alt='movie poster'
						/>
						<p className='movie-listing'>
							{movie.movieName}
							<br />
							 {movie.releaseDate}
							<br />
							Rated {movie.movieRating}
							<br />
						</p>
						<>
							<Review />
						</>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default Movie;