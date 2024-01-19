import axios from "axios"

export const getWeatherDetails = async () => {
    try {
        const reqUrl = "http://api.weatherapi.com/v1/current.json?key=c3ec091e36f64ca997964016241701&q=latur"
        const response = await axios.get(reqUrl);
        console.log( response.data.location.localtime)
        return response;
    } catch (error) {
        console.log("weather" + error)
    }
}