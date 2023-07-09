import React, { useEffect } from "react";
import BlogCard from "../components/BlogCard";
import {BsSearch} from "react-icons/bs";
import Banner from "../components/Banner"
import {useDispatch, useSelector} from "react-redux"
import { getBlogs } from "../features/blogs/blogSlice";

const Blog = () => {
    const blogState = useSelector((state) => state?.blog?.blog);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getBlogs());
    }, []);
    return (
        <>
        <section id="main-content" className="blog-page">
            <Banner/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-8 col-md-12 left-box">
                        {blogState?.map((item,index) => {
                            return (
                                <div key={index}>
                                <BlogCard id={item?._id} title={item?.title} description={item?.description} image ={item?.images && item.images[0]?.url}/> 
                            </div>
                            )
                            })
                        }

                <ul className="pagination pagination-primary m-4">
                    <li className="page-item"><p><a className="page-link" href="/">Previous</a></p></li>
                    <li className="page-item active"><p><a className="page-link" href="/">1</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">2</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">3</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">Next</a></p></li>
                </ul>  
            </div>              
            <div className="col-lg-4 col-md-12 right-box mt-4">
                <div className="card border-0">
                    <div className="body search pb-4">
                        <div className="input-group">
                            <input type="text" className="form-control rounded-3" placeholder="Tìm kiếm bài viết" aria-label="Tìm kiếm bài viết"/>
                            <span className="input-group-text border-0" id="basic-adon2" style={{fontSize: "22px"}}>
                                <BsSearch/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="card p-4 mb-4">
                    <div className="header mb-2">
                        <h4>Thể loại</h4>
                    </div>
                    <div className="body widget">
                        <ul className="list-unstyled categories-clouds">
                            <li><p><a href="/" className="text-secondary ">Bài viết mới nhất</a></p></li>
                            <li><p><a href="/" className="text-secondary ">Xu hướng</a></p></li>
                            <li><p><a href="/" className="text-secondary ">Xuân hè 2023</a></p></li>
                            <li><p><a href="/" className="text-secondary ">Thu đông 2022</a></p></li>
                            <li><p><a href="/" className="text-secondary ">Bộ sưu tập mới</a></p></li>
                        </ul> 
                    </div>
                </div>
                <div className="card p-4 mb-4">
                    <div className="header mb-2">
                        <h4>Bài viết phổ biến</h4>                       
                    </div>
                    <div className="body widget popular-post">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="single_post mb-5">
                                    <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                                    <p>jun 22, 2018</p>
                                    <div className="img-post">
                                        <img src="image/dress4.jpeg" alt="Awesome Image" className="img-blog-post"/>                                        
                                    </div>                                            
                                </div>
                                <div className="single_post">
                                    <p className="m-b-0">new rules, more cars, more races</p>
                                    <p>jun 8, 2018</p>
                                    <div className="img-post">
                                        <img src="image/dress4.jpeg" alt="Awesome Image" className="img-blog-post"/>                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</section>
        </>
    )
}

export default Blog;
