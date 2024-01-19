import axios from 'axios';

export const getMovieDetails = async () => {
    const apiKey = process.env.REACT_APP_MOVIE_API_KEY 
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {
          genre: "Horror"
        },
        headers: {
          'X-RapidAPI-Key': '98b9bc0556msh35a2fed1367384bp18f272jsnbb389d92e80c',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data.results
      } catch (error) {
          console.error(error);
      }
    };
    
    
