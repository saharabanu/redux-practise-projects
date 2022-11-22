/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch } from 'react-redux';
import { filterByCategory, filterByName } from '../../redux/blogFilters/blogFiltersActions';

const SingleBlog = ({ blog}) => {
    const { img, title, category, authorImg, name, date, timing } = blog;
    const dispatch = useDispatch();


    const filterByNameHandler = (name) => {
          dispatch(filterByName(name));
    };

    const filterByCategoryHandler = (category) => {
          dispatch(filterByCategory(category));
    };
  return (
    <>
         {/* <!-- single card  --> */}
         <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover"
                     src={img}alt="" />
                                
                        </div>

                        <div
                            className="flex-1 bg-white p-6 flex flex-col justify-between"
                        >
                            <div className="flex-1">
                                <p className="text-sm font-medium text-indigo-600 cursor-pointer" >
                                    <span onClick={() => filterByCategoryHandler(category)}
                                        className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                                    >
                                        {category}
                                    </span>
                                </p>
                               
                                <a href="#" className="block mt-1">
                                    <p
                                        className="text-xl font-semibold text-gray-900"
                                    >
                                        {title}
                                    </p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center cursor-pointer"  >
                                <div className="flex-shrink-0">
                                    <img 
                                        className="h-10 w-10 rounded-full"
                                        src={authorImg}
                                        alt=""
                                    />
                                </div>
                                <div className="ml-3">
                                    <p onClick={() => filterByNameHandler(name)}
                                        className="text-sm font-medium text-gray-900 hover:underline"
                                    >
                                        {name}
                                    </p>
                                    <div
                                        className="flex space-x-1 text-sm text-gray-500"
                                    >
                                        <time dateTime="2020-03-16"
                                            >{date}
                                        </time>
                                        <span aria-hidden="true">
                                            &middot;
                                        </span>
                                        <span> {timing} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default SingleBlog