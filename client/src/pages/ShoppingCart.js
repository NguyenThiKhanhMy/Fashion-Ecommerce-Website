import React from "react";
import ShoppingCard from "../components/ShoppingCard";

const ShoppingCart = () => {
    return (
        <>
        <section className="m-5">
            <div className="title text-center mb-5">
                <h3>Giỏ hàng</h3>
            </div>
            <div className="shopping-cart mx-auto">
                <div className="text-end">3 sản phẩm</div>
                <ShoppingCard/>
                <ShoppingCard/>
            </div>
            <a href="/" className="d-flex justify-content-center my-3"><button type="button" class="btn btn-dark">Thanh toán</button></a>
        </section>
        </>
    )}
export default ShoppingCart;