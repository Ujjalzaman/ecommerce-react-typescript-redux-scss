import { IProduct } from '../Types'
import requests from './httpService'

class AllProductsServices {
    getProducts(): Promise<IProduct[]> {
        return requests.get(`/product`);
    }
}
export default new AllProductsServices()