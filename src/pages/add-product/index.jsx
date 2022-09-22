import React, { useState, useEffect } from 'react'
// import { productFormValidation } from './schema/index'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addProducts } from '../../services/productService';
import { useNavigate } from 'react-router';
import './index.scss'

const AddProduct = () => {

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      productName: '',
      price: '',
      supplierContactName: '',
      file: null,
    },
    // validationSchema: productFormValidation,
    onSubmit: values => {
      addProducts(values);
      navigate('/')
    },
  });

  return (
    <div id='add-product'>
      <form id='product-form' onSubmit={handleSubmit} method='post' action='/'>
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
        {/* <label htmlFor="file">File upload</label>
        <input id="file" name="file" type="file" onChange={(event) => {
          setFieldValue("file", event.currentTarget.files[0]);
        }} className="form-control" /> */}
        <br />
        <Button type='submit' variant="contained">Add Product</Button>

      </form>
    </div>
  )
}

export default AddProduct