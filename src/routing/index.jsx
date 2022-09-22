import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddProduct from '../pages/add-product';
import ErrorPage from '../components/error';
import HomePage from '../pages/home-page';
import ProductDetail from '../pages/product-details';
import EditProduct from '../pages/edit-product';

export const Routing = () => {
    return (
        <div className="container mx-auto px-4">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/add-product' element={<AddProduct />} />
                <Route path='/edit-product/:id' element={<EditProduct />} />
                <Route path='/product-detail/:id' element={<ProductDetail />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}
