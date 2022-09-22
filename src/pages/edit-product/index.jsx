import React, { useState, useEffect, useLayoutEffect } from 'react'
// import { productFormValidation } from './schema/index'
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { editProducts, getProductsDetail } from '../../services/productService';
import { useNavigate, useParams } from 'react-router';
import './index.scss'

const EditProduct = () => {
  const [product, setproduct] = useState({});

  let { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    setroducts(await getProductsDetail(id));
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = useFormik({
    initialValues: {
      productName: product.productName,
      price: product.price,
      supplierContactName: product.supplierContactName,
      file: null,
    },
    // validationSchema: productFormValidation,
    onSubmit: values => {
      editProducts(id, values);
      navigate('/')
    },
  });

  return (
    <div id='edit-product'>
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
        <Button type='submit' variant="contained">Edit Product</Button>

      </form>
    </div>
  )
}

export default EditProduct