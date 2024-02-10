import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL

export const getNewsList = async () => {
    const news = await axios.get(`${baseUrl}`)
    console.log({listNews: news.data,
    enviro: `${baseUrl}`})
}