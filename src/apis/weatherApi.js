import axios from "axios"

export const getWeatherDetails = async () => {
    try {
        const reqUrl = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=latur`
        const response = await axios.get(reqUrl);
        console.log(process.env.REACT_APP_WEATHER_API_KEY)
        return response;
    } catch (error) {
        console.log("weather" + error)
    }
}