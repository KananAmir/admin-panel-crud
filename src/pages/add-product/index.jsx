import React, { useState, useEffect } from 'react'
// import { productFormValidation } from './schema/index'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './index.scss'

const AddProduct = () => {

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      categoryId: '',
      name: '',
      unitPrice: 0,
      unitsInStock: 0,
      discontinued: false,
      quantityPerUnit: '',
    },
    // validationSchema: productFormValidation,
    // onSubmit: values => addProduct(values),
  });

  return (
    <div id='add-product'>
      <form id='product-form' onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Price"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Supplier Contact Name"
        />
        <br />
        <br />
        <Button type='submit' variant="contained">Add Product</Button>

      </form>
    </div>
  )
}

export default AddProduct