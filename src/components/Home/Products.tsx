import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { IProduct } from '../../Types';
import Product from '../Common/Product';
interface IProps{
    products: IProduct[] | null;
    isLoading: boolean;
}
const Products = ({products, isLoading}:IProps) => {
    return (
        <div className="my-5">
            <Container>
                <h2 className="mb-4">Latest Products</h2>
                {!isLoading && (
                    <Row className="align-items-stretch">
                        {products?.map((product: IProduct) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    )
}

export default Products
