import Heart from "react-animated-heart";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const [isClick, setClick] = useState(false);
    const {id, name, price, image} = props
    return (
        <>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                    <div className=" product-card card border-0 position-relative">
                        <div className="product-card--image">
                            <img  src={image ? image : "image/dress2.jpeg"} className="product-image" alt="Product" />
                        </div>
                        <div className="cart-button position-absolute">
                            <div classNameName="wishlist" style={{marginLeft: "14rem", marginTop: "-1.25rem"}}> 
                                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                            </div>
                        </div>
                        <Link to={"/Product/" + id}>
                            <div className="card-body px-0 ">
                                <div className="product-name">
                                    <a href="/ProductDetail">
                                        <p className="mb-2 text-dark">{name}</p>
                                        <p className="text-dark mb-0 ">{price} VNĐ</p>
                                    </a>
                                </div>
                            </div>
                        </Link>
                    </div>
            </div>
        </>
    )
}

export default ProductCard;