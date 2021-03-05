import React from "react";

const MovieSearch = (props) => {
    return (
        <div className='movie-card'>
            <img src={props.posterUrl} />
            <p> {props.title} </p>
            <p> {props.type} </p>
        </div>
    )
}

export default MovieSearch;