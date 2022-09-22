import React, { useState, useEffect } from 'react'
// import { productFormValidation } from './schema/index'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addProducts } from '../../services/productService'
import './index.scss'

const AddProduct = () => {

  const [data, setData] = useState({});

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      productName: '',
      price: '',
      supplierContactName: '',
    },
    // validationSchema: productFormValidation,
    onSubmit: values => addProducts(values),
  });

  return (
    <div id='add-product'>
      <form id='product-form' onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          value={values.productName}
          onChange={handleChange}
          name="productName"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Price"
          value={values.price}
          onChange={handleChange}
          name='price'
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Supplier Contact Name"
          value={values.supplierContactName}
          onChange={handleChange}
          name='supplierContactName'
        />
        <br />
        <br />
        <Button type='submit' variant="contained">Add Product</Button>

      </form>
    </div>
  )
}

export default AddProduct