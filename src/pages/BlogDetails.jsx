import React from 'react'
import SettingsSidebar from '../components/sidebar/SettingsSidebar'
import HeaderSection from '../components/header/HeaderSection'
import FooterSection from '../components/footer/FooterSection'
import BlogDetailSection from '../components/blog/BlogDetailSection'

const BlogDetails = () => {
  return (
    <div className="content-wrap3 inner-page blog-details-page">
      <HeaderSection/>
      <BlogDetailSection/>
      <FooterSection/>
      <SettingsSidebar/>
    </div>
  )
}

export default BlogDetails