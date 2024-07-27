import React, { useContext } from 'react'
import { blogList } from '../../data/Data'
import { DevolinContext } from '../../context/DevolinContext'

const BlogContent = () => {
    const {openBlogModalSection} = useContext(DevolinContext)
  return (
    <div className="blog-content">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-12">
                <h2 className="section-title title-center">
                my latest <span>article</span> collection
                </h2>
            </div>
            </div>
            <div className="row g-4 justify-content-center">
                {blogList.slice(0,3).map((item) => (
                    <div className="col-lg-4 col-md-6 col-sm-8" key={item.id}>
                        <div className="single-blog">
                        <div className="part-img">
                            <img src={item.imgSrc} alt={item.author} />
                        </div>
                        <div className="part-txt">
                            <h3>
                            <a
                                role='button'
                                onClick={openBlogModalSection}
                            >
                                {item.title}
                            </a>
                            </h3>
                            <ul>
                            <li>
                                <span>
                                <i className="fa-duotone fa-user-pen"></i>
                                </span>
                                {item.author}
                            </li>
                            <li>
                                <span>
                                <i className="fa-duotone fa-calendar"></i>
                                </span>
                                {item.date}
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>   
                ))}
           
            <div className="col-12">
                <div className="subscribe-wrap">
                <div className="subscribe">
                    <h3>subscribe my newsletter</h3>
                    <form>
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                    />
                    <button className="def-btn">Subscribe</button>
                    </form>
                </div>
                </div>
            </div>
            {blogList.slice(-3).map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-8" key={item.id}>
                    <div className="single-blog">
                    <div className="part-img">
                        <img src={item.imgSrc} alt={item.author} />
                    </div>
                    <div className="part-txt">
                        <h3>
                        <a
                            role='button'
                            onClick={openBlogModalSection}
                        >
                            {item.title}
                        </a>
                        </h3>
                        <ul>
                        <li>
                            <span>
                            <i className="fa-duotone fa-user-pen"></i>
                            </span>
                            {item.author}
                        </li>
                        <li>
                            <span>
                            <i className="fa-duotone fa-calendar"></i>
                            </span>
                            {item.date}
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>   
            ))}
            </div>
        </div>
    </div>
  )
}

export default BlogContent