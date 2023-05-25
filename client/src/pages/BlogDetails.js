import React from "react";
import Comments from "../components/Comment";


const BlogDetail = () => {
    return (
        <>
        <div class="blog-single gray-bg">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-8">
                    <article class="article">
                        <div class="article-img">
                            <img src="image/blog-image.png" title="" alt="" className="image-banner--blog"/>
                        </div>
                        <div class="article-title">
                            <h3 className="mt-4">They Now Bade Farewell To The Kind But Unseen People</h3>
                            <div class="media d-flex align-items-center my-3">
                                <div class="avatar">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt="" className=" avatar-image rounded-circle"/>
                                </div>
                                <div class="media-body mx-4">
                                    <h6 className="mb-0">Rachel Roth</h6>
                                    <span><small>26 FEB 2020</small></span>
                                </div>
                            </div>
                        </div>
                        <div class="blog-content">
                            <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                            <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                            <h4>What are my payment options?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p class="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </article>
                    <div class="card border-0 mt-5">
                            <div class="header">
                                <h4>Comments</h4>
                            </div>
                            <div class="body">
                                <ul class="comment-reply list-unstyled">
                                    <Comments/>
                                    <Comments/>
                                    <Comments/>
                                </ul>                                        
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
export default BlogDetail;