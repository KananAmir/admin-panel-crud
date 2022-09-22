import React from 'react'
import { Link } from "react-router-dom";
import './index.scss';

const Header = () => {
  return (
    <div id="header">
      <div className='container mx-auto px-4 header'>
        <Link to='/'>
          <h1 className='text-4xl font-extrabold tracking-widest'>Products</h1>
        </Link>
        <nav className='text-xl font-extrabold tracking-widest'>
          <Link to='/add-product'>Add Product</Link>
        </nav>
      </div>
    </div>
  )
}

export default Header