import React, { useEffect, useState } from 'react'
import { getMovieDetails } from '../../apis/moviesApi'

export default function () {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const data = await getMovieDetails()
        console.log(data[0].primaryImage.id)
        setMovies(data)
    }
    return (
        <div>
            {movies.map((movie,idx)=>(
               <h1>{movie.primaryImage.id}</h1>
            ))}
            
        </div>
    )
}
