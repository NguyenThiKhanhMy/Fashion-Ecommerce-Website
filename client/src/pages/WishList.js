import React from "react";
import WishListCard from "../components/WishListCard";
import Banner from "../components/Banner";

const WishList = () => {
    return (
        <>
        <Banner/>
        <section className="position-relative m-5">
            <div className="title text-center mb-5">
                <h3>Sản phẩm yêu thích</h3>
            </div>
            <div className="d-flex justify-content-center gap-3">
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
                <WishListCard/>
            </div>
        </section>
        </>
    )}
export default WishList;