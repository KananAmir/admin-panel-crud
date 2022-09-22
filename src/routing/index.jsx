import React from 'react';
import { Route, Routes } from "react-router-dom";
import AddProduct from '../pages/add-product';
import ErrorPage from '../components/error';
import HomePage from '../pages/home-page'

export const Routing = () => {
    return (
        <div className="container mx-auto px-4">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/add-product' element={<AddProduct />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    )
}
