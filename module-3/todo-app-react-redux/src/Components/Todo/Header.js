import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
          <div
                className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg"
            >
                
              
               <Link to="/" className='pr-5 '>Todo</Link>
               <Link to="/blog">Blog</Link>
              
            </div>
    </>
  )
}

export default Header