import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './index.scss'
import { deleteProduct, getProducts } from '../../services/productService';

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const HomePage = () => {

    const [products, setproducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts().then(res => setproducts(res));
        setIsLoading(false);

    }, [])

    const handleDelete = (id) => {
        deleteProduct(id).then(() => getProducts().then(res => setproducts(res)))
    }



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Product Name</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Supplier Contact Name</TableCell>
                        <TableCell align="left">Edit Product</TableCell>
                        <TableCell align="left">Delete Product</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products && products.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.id}
                            </TableCell>
                            <TableCell align="left">{product.name}</TableCell>
                            <TableCell align="left">{product.unitPrice}</TableCell>
                            <TableCell align="left">{product?.supplier?.contactName}</TableCell>
                            <TableCell align="left"><Button variant="contained" style={{ backgroundColor: "#10b981", color: "white" }}>Edit</Button></TableCell>
                            <TableCell align="left"><Button variant="contained" style={{ backgroundColor: "#e11d48", color: "white" }} onClick={() => handleDelete(product.id)} >Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default HomePage