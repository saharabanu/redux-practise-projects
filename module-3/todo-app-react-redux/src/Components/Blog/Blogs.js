import React from 'react'
import SingleBlog from './SingleBlog';
import { useSelector } from 'react-redux';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  return (
    <>
         {/* <!-- card grid  --> */}
         <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
         { blogs.map((blog) => (<SingleBlog blog={blog} key={blog.id}/>))}
                
                  
                </div>
    </>
  )
}

export default Blogs