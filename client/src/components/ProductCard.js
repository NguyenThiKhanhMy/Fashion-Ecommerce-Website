import Heart from "react-animated-heart";
import React, { useState } from "react";

const ProductCard = () => {
    const [isClick, setClick] = useState(false);
    return (
        <>
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div className=" product-card card border-0 position-relative">
                    <div className="product-card--image">
                        <img src="image/dress2.jpeg" className="product-image" alt="Product" />
                    </div>
                    <div className="cart-button position-absolute">
                        <div classNameName="wishlist" style={{marginLeft: "14rem", marginTop: "-1.25rem"}}> 
                            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                        </div>
                    </div>
                    <div className="card-body px-0 ">
                        <div className="product-name">
                            <a href="/ProductDetail">
                                <p className="mb-2 text-dark">SIRENA MIDI DRESS</p>
                                <p className="text-dark mb-0 ">1.800.000 VNĐ</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;