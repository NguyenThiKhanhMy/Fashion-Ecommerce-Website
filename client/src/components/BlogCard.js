import React from "react"
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <>
        <div className="blog-card card single_post m-4 p-4">
            <div className="body">
                <div className="blog-content">
                    <img className="blog-image d-block img-fluid" src="image/blog-image.png" alt="First slide" />
                    </div>
                    <Link to="/BlogDetail" className="mt-3 text-dark"><h5>All photographs are accurate</h5></Link>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                </div>
                <div className="footer d-flex">
                    <div className="actions col">
                        <Link to="/BlogDetail"><button type="button" class="btn btn-outline-secondary"><small>Đọc tiếp</small></button></Link>
                    </div>
                    <div className="stats col-md-auto d-flex align-items-center mx-auto">
                        <Link to="/" className="fa fa-heart text-muted mx-4">28</Link>
                        <Link to="/" className="fa fa-comment text-muted">128</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard;
