import React from 'react'
import SingleBlog from './SingleBlog';
import {  useSelector } from 'react-redux';

const Blogs = () => {
  const blogs = useSelector((state) => state.blogs);
  const {name, category, search} = useSelector((state) => state.blogFilters);
  
  let noSearchFilter;
  let noAuthorCategoryFilter = [];

  if (search) {
    noSearchFilter = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (
    search &&
    name &&
    category &&
    blogs
      .filter((blog) => {
        if (category) {
          return blog.category === category;
        }
        return true;
      })
      .filter((blog) => {
        if (name) {
          return blog.name === name;
        }
        return true;
      })
      .filter((blog) => {
        if (search) {
          return blog.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      }).length === 0
  ) {

    noAuthorCategoryFilter = [];
  }

  
    

  return (
    <>
         {/* <!-- card grid  --> */}
         {(search && noSearchFilter.length <= 0) || (search && name && category && noAuthorCategoryFilter.length <= 0) ? (<div className="text-center">
         
         <h2 className="text-xl tracking-tight font-bold text-gray-500 sm:text-4xl">
           NO RESULTS FOUND FOR{" "}
           <span className="font-extrabold text-gray-900">
             {search ? search : null}
             {category ? (search ? ` , ${category}` : category) : null}
             {name ? (category ? ` , ${name}` : name) : null}
           </span>
         </h2>
       </div>): (<div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {/* <!-- single card  --> */}
                    {blogs.filter((blog) => {
                if (category) {
                  return blog.category === category;
                }
                return true;
              })
              .filter((blog) => {
                if (name) {
                  return blog.name === name;
                }
                return true;
              })
              .filter((blog) => {
                if (search) {
                  return blog.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
                }
                return true;
              })
              
              .map((blog) => {
                return <SingleBlog key={blog.id} blog={blog} />;
              })}
                  

                   
                </div>)}
    </>
  )
}

export default Blogs