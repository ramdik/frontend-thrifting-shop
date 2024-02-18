import { useEffect, useState } from "react"
import { getProductList, searchProducts } from "../../middlewares/get-api"
import CardProduct from "../Card/CardProduct"
import productData from "../../middlewares/dummyApi"
import './SearchBar.css'

const SearchBar = () => {

    /* const [thriftProducts, setThriftProducts] = useState()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductList();
                setThriftProducts(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
        
    },[])

    console.log({thriftProducts: typeof(thriftProducts)}) */

    /* const ThriftProductList = () => {
        return thriftProducts.map((product, i) => {
            return (
                <div className="wraper" key={i}>

                    <p>{product.posts}</p>
                </div>
            )
        })
    } */

    /* const handleInputChange = (event) => {
        const { value } = event.target;
        search(value);
    }; */
    return (
        <div className="SearchBar-wrapper">
            <input
                type="text"
                placeholder="cari berita antara"
            //onChange={handleInputChange}
            />
            {/* <ThriftProductList /> */}
            <div className="productData">
                {console.log(productData.id)}
                {productData.map(productData => {
                    return (
                        <CardProduct
                            key={productData.id}
                            image={productData.image}
                            name={productData.name}
                            price={productData.price}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchBar;