import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/spinner';
import { getProductsDetail } from '../../services/productService';
import Button from '@material-ui/core/Button';
import './index.scss'


function ProductDetail() {

  const [product, setproducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  let { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    setproducts(await getProductsDetail(id));
    setIsLoading(false);
  }

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div id='product-detail' className='text-center p-12'>
      {isLoading
        ?
        <Spinner />
        :
        <>
          <h1 className='text-4xl font-extrabold tracking-widest text-[#04aa6d] mb-6'>{product.name}</h1>
          <ul>
            <li>ID: <span>{product?.id}</span></li>
            <li>Name: <span>{product?.name}</span></li>
            <li>Price: <span>{product?.price}</span></li>
            <li>Supplier Contact Name: <span>{product?.supplierContactName}</span></li>
          </ul>
          <Button variant="contained" style={{ backgroundColor: "#d18d48", color: "white" }} onClick={() => navigate('/')} >Go Back</Button>
        </>
      }

    </div>
  )
}

export default ProductDetail