import React from "react"
import { Link } from "react-router-dom";

const BlogCard = (props) => {
    const {id, title, description, image} = props
    return (
        <>
        <div className="blog-card card single_post m-4 p-4">
            <div className="body">
                <div className="blog-content">
                    <img className="blog-image d-block img-fluid" src={image ? image : "image/blog-image.png"} alt="blog" />
                    </div>
                    <Link to="/BlogDetail" className="title mt-3 text-dark"><h5>{title}</h5></Link>
                    <p className="description">{description}</p>
                </div>
                <div className="footer d-flex">
                    <div className="actions col">
                        <Link to={"/blog/" +id}><button type="button" class="btn btn-outline-secondary"><small>Đọc tiếp</small></button></Link>
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

