import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './index.scss'
import { deleteProduct, getProducts } from '../../services/productService';
import Spinner from '../../components/spinner';

const HomePage = () => {

    const [products, setproducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts().then(res => setproducts(res));
        setIsLoading(false);

    }, [])

    const handleDelete = (id) => {
        // deleteProduct(id).then(() => { getData() });
    }

    return (
        <div id='home-page' className='grid place-items-center'>
            {isLoading
                ?
                <Spinner />
                :
                <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Products Price</th>
                            <th>Products Quantity per Unit</th>
                            <th>Edit Product</th>
                            <th>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map(product => (
                            <tr key={product.id} >
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td> {product.unitPrice}</td>
                                <td> {product.quantityPerUnit}</td>
                                {/* <td> <Link to={`${product.id}`}>Link to product</Link></td> */}
                                {/* <td> <Link to={`${product.id}`}>Link to product</Link></td> */}
                                <td style={{ color: 'green', fontWeight: '600' }}>Edit</td>
                                <td style={{ color: 'red', fontWeight: '600' }} onClick={() => handleDelete(product.id)}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

        </div>
    )
}

export default HomePage