import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../../apis/moviesApi'
import styles from './Movie.module.css'
import loading from '../../assets/images/loading.gif'
import movieLogo from '../../assets/images/movieLogo.png'

export default function () {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [genre, setGenre] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const genreString = localStorage.getItem("genre");
        const genreArray = genreString.split(",");
        setGenre(genreArray)
        let uniqueMovies = []
        for (const genre of genreArray) {
            const data = await getMovieDetails(genre);
            uniqueMovies = uniqueMovies.concat(data.filter(newMovie => !uniqueMovies.some(existingMovie => existingMovie.imdbID === newMovie.imdbID)));

        }
        setMovies(uniqueMovies)
        // console.log(genreArray)
    }
    useEffect(() => {
        console.log(movies)
    }, [movies])

    return (
        <div className={styles.main}>
            <div className={styles.navbar}>
                <h1>Super app</h1>
                <img onClick={()=>{navigate("/home")}} src={movieLogo} alt="" />
            </div>
            <p className={styles.subHeading}>Entertainment according to your choice</p>
            {genre.map((genreItem, genreIndex) => {
                const startIndex = genreIndex * 10;
                const endIndex = Math.min((genreIndex + 1) * 10, movies.length);

                const genreMovies = [];
                for (let i = startIndex; i < endIndex; i++) {
                    genreMovies.push(movies[i]);
                }

                return (
                    <>
                        <h1>{genreItem}</h1>
                        <div className={{ textAlign: "center" }} key={genreIndex}>

                            {movies.length ? <div className={styles.container}>
                                {genreMovies.map((movie, movieIndex) => (
                                    <div key={movieIndex}>
                                        <img height={"200px"} width={"300px"} src={movie.Poster} alt="" />
                                    </div>
                                ))}
                            </div> : <img height={"100px"} src={loading} alt="" />}
                        </div>
                    </>
                );
            })}
        </div>
    )
}
