import React from 'react'

// Stateless component
const Movie = () => {

  return (
    <div>
        <h1>{props.movie.title}</h1>
        <h2>{props.movie.year}-{props.movie.rating}</h2>
        <p>{props.movie.synopsis}</p>
    </div>
  )
}

export default Movie;