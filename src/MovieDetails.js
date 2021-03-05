// import PropTypes from 'prop-types';

const MovieDetails = ( { title, posterUrl, rated, runtime, genre = 'Unknown', rating = 0, plot, actors } ) => {
    return (
        <div className ='movie-details'>
            <img src={posterUrl} />
            <div className = 'info'>
                <p>{title}</p>
                <p>{rated}</p>
                <p>{runtime}</p>
                <p>{genre}</p>
                <p>{rating} / 10</p>
                <p><strong>Plot</strong></p>
                <p>{plot}</p>
                <p><strong>Actors</strong></p>
                <p>{actors}</p>
            </div>
        </div>
    );
}

// MovieDetails.propTypes = {
//     posterUrl: PropTypes.string,
//     title: PropTypes.string,
//     rated: PropTypes.string,
//     runtime: PropTypes.number,
//     genre: PropTypes.string,
//     rating: PropTypes.number,
//     plot: PropTypes.string,
//     actors: PropTypes.string,
// }

export default MovieDetails;