import React, { useEffect } from "react";
import Comments from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../features/blogs/blogSlice";
import { useLocation } from "react-router-dom";

const BlogDetail = () => {
  const blogState = useSelector((state) => state?.blog?.blogDetails);
  const dispatch = useDispatch();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  useEffect(() => {
    dispatch(getABlog(getBlogId));
  }, [dispatch, getBlogId]);

  return (
    <div className="blog-single gray-bg">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-8">
            {blogState && (
              <article className="article">
                <div className="article-img">
                  <img
                    src={blogState.images[0]?.url}
                    title=""
                    alt=""
                    className="image-banner--blog"
                  />
                </div>
                <div className="article-title">
                  <h3 className="mt-4">{blogState.title}</h3>
                  <div className="media d-flex align-items-center my-3">
                    <div className="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        title=""
                        alt=""
                        className="avatar-image rounded-circle"
                      />
                    </div>
                    <div className="media-body mx-4">
                      <h6 className="mb-0">{blogState.author}</h6>
                      <span>
                        <small>26 FEB 2020</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blogState.content }}
                ></div>
              </article>
            )}

            <div className="card border-0 mt-5">
              <div className="header">
                <h4>Comments</h4>
              </div>
              <div className="body">
                <ul className="comment-reply list-unstyled">
                  <Comments />
                  <Comments />
                  <Comments />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;