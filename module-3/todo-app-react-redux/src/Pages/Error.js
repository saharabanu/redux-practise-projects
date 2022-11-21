import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <div className='bg-gray-500 h-screen '>
        <div className='w-fit m-auto pt-36'>
        <h1 className='text-white text-3xl '>OOPs !!! Your Page Not  Found</h1>
        <br />
            <Link to="/" className='text-white text-xl  bg-red-500 px-5 py-2 rounded '>Go Home</Link>
        </div>
        </div>
    </>
  )
}

export default Error