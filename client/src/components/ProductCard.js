import Heart from "react-animated-heart";
import React, { useState } from "react";
import {Link} from "react-router-dom";

const ProductCard = () => {
    const [isClick, setClick] = useState(false);
    return (
        <>
            <div class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
                <div class="card border-0 position-relative">
                    <img src="image/dress2.jpeg" class="product-image" alt="Product" />
                    <div class="cart-button position-absolute">
                        <div className="wishlist" style={{marginLeft: "14rem", marginTop: "-1.25rem"}}> 
                            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                        </div>
                    </div>
                    <div class="card-body px-0 ">
                        <div class="">
                            <p class=" fs-7 mb-0 text-uppercase">SIRENA MIDI DRESS</p>
                            <p class="text-dark mb-0 ">1.800.000 VNĐ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;