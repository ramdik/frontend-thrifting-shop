import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL

//get
export const getProductList = async () => {
    const product = await axios.get(baseUrl)
    /* console.log({listProduct: product.data,
    enviro: `${baseUrl}/otomotif`}) */ //testing
    return product.data
}

//search
export const searchProducts = async (q) => {
    const search = await axios.get(`${baseUrl}/${q}`)
    return search.data
}