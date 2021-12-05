import React from 'react'
import Banner from '../../components/Home/Banner'
import Products from '../../components/Home/Products'
import useAsync from '../../hooks/useAsync'
import AllProductsServices from '../../services/AllProductsServices'

const Home = () => {
    const {data, isloading} = useAsync(AllProductsServices.getProducts)
    return (
        <div>
            <Banner/>
            <Products products={data} isLoading={isloading}/>
        </div>
    )
}

export default Home
