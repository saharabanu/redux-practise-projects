import React from 'react'
import Header from '../Todo/Header'
import BlogFooter from './BlogFooter'
import BlogSection from './BlogSection'
import Search from './Search'

const Blog = () => {
  return (
    <>
        <Header/>
        <Search/>
        <BlogSection/>
        <BlogFooter/>
    </>
  )
}

export default Blog