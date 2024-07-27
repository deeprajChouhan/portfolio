import React from "react";
import { Link } from "react-router-dom";

const BlogDetailSection = () => {
  return (
    <div className="blog-details-page">
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-regular fa-house"></i>
                  </Link>
                </li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="blog-details">
              <div className="part-img">
                <img src="assets/images/blog-details.jpg" alt="Image" />
              </div>
              <div className="part-txt">
                <h2 className="blog-title" id="blogDetailsTitle">
                  Integrate ReactJS into a legacy Dojo application
                </h2>
                <ul>
                  <li>
                    <span>
                      <i className="fa-duotone fa-user-pen"></i>
                    </span>
                    Saumya Daga
                  </li>
                  <li>
                    <span>
                      <i className="fa-duotone fa-calendar"></i>
                    </span>
                    16 Dec 2021
                  </li>
                </ul>
                <p>
                  Because technology moves fast, it’s easy to feel left behind.
                  An old version of a JavaScript library is making your
                  application perform slowly. You spend most of your time
                  patching old code. Your UI looks like it was created years
                  ago, but you don’t have time to update it.
                </p>
                <p>
                  Our team recently faced all these challenges when our
                  10-year-old product was using an old version of the Dojo
                  toolkit. To migrate to the latest version of Dojo, we needed
                  to rewrite the whole code with an asynchronous model. Our
                  solution also needed to improve performance and provide a rich
                  UI experience that complies with the IBM Carbon theme.
                </p>
                <blockquote>
                  <p>
                    After a lot of research, we decided to use React JS instead
                    of upgrading to a new version of Dojo.
                  </p>
                </blockquote>
                <p>
                  After a lot of research, we decided to use React JS instead of
                  upgrading to a new version of Dojo. This blog post introduces
                  ReactJS, highlights the research we did when comparing ReactJS
                  with other JavaScript languages, and explains how we
                  integrated ReactJS with our current Dojo library.
                </p>
                <p>
                  Solution: Our goal was to develop new pages with ReactJS and
                  integrate them into our existing legacy Dojo application. We
                  also needed to create reusable components of React in order to
                  implement a single-page application quickly and migrate our
                  whole application page-by-page in the long run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSection;
