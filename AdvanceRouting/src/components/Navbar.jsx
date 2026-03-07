import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-pink-700 justify-between '>
      <h2 className='text-lg font-semibold'>Sneha Gupta</h2>
      <div className='flex gap-8'>
        <Link className='text-lg font-semibold' to='/'>Home</Link>
        <Link className='text-lg font-semibold' to='/About'>About</Link>
        <Link className='text-lg font-semibold' to='/Product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar