import axios from 'axios'
export const getnewsDetails = async () => {
    try {
        const ap=0;
        const reqUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`  
        const response = await axios.get(reqUrl)
        console.log(process.env.REACT_APP_NEWS_API_KEY)
        return response.data.articles[1]
        
    } catch (error) {
        console.log("failed to fetch")
    }
}
