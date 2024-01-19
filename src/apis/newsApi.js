import axios from 'axios'
export const getnewsDetails = async () => {
    try {
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`  
        const response = await axios.get(reqUrl)
        // console.log(response.data.articles[1])
        return response.data.articles[1]
        
    } catch (error) {
        console.log("failed to fetch")
    }
}
