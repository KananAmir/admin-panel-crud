import axios from 'axios';

const REACT_APP_BASE_URL = 'http://localhost:5000';

export const getProducts = async () => {
    try {
        let response = await axios.get(REACT_APP_BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProducts = async (data) => {
    try {
        console.log(data);
        await axios.post(REACT_APP_BASE_URL, data)
    } catch (error) {
        throw error;
    }
}
export const editProducts = async (id, data) => {
    try {
        console.log(data);
        await axios.put(`${REACT_APP_BASE_URL}/${id}`, data)
    } catch (error) {
        throw error;
    }
}

export const getProductsDetail = async (id) => {
    try {
        console.log('kanan');
        let response = await axios.get(`${REACT_APP_BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export const deleteProduct = async (id) => {
    try {
        await axios.delete(`${REACT_APP_BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}

