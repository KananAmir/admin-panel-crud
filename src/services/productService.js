import axios from 'axios';

const REACT_APP_BASE_URL = 'https://northwind.vercel.app/api/';

export const getProducts = async () => {
    try {
        let response = await axios.get(`${REACT_APP_BASE_URL}products`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProducts = async (data) => {
    try {
        console.log(data);
        await axios.post(`${REACT_APP_BASE_URL}products`, data)
    } catch (error) {
        throw error;
    }
}

export const getProductsDetail = async (id) => {
    try {
        let response = await axios.get(`${REACT_APP_BASE_URL}products/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteProduct = async (id) => {
    try {
        console.log('deleted')
        await axios.delete(`${REACT_APP_BASE_URL}products/${id}`);
    } catch (error) {
        throw error;
    }
}

