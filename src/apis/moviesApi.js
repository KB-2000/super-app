import axios from 'axios';

export const getMovieDetails = async (genre) => {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY 
    const reqUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${genre}`
      try {
          const response = await axios.request(reqUrl);
          return response.data.Search
      } catch (error) {
          console.error("error " +error);
      }
    };
    
    
