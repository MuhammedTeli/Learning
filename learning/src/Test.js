import React, { useState } from 'react'

export const Test = () => {
    const value = [
        "Star Wars", "Return of the Jedi", "Empire Strikes Back",
      ]
      const [ movies, setMovies ] = useState(value);
    return (
        <div>
            {movies.map((movie) => {
       return <div key={movie}>{movie}</div>;
     })}
        </div>
    )
}
