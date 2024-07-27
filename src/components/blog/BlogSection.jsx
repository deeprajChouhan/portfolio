import React, { useContext } from "react";
import BlogContent from "./BlogContent";
import { DevolinContext } from "../../context/DevolinContext";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const BlogSection = () => {
    const {isBlogOpen,closeBlogSection}= useContext(DevolinContext)
  return (
    <OverlayScrollbarsComponent className={`blog section-panel ${isBlogOpen? 'active':''}`} id="blog">
      <button className="panel-close-btn" data-close="blog" onClick={closeBlogSection}> 
        <i className="fa-light fa-xmark"></i>
      </button>
      <BlogContent/>
    </OverlayScrollbarsComponent>
  );
};

export default BlogSection;
