import React from "react";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
    return (
        <>
        <div className="product-detail d-flex gap-5 m-5 justify-content-center" >
            <div className="product-card--image">
                <img src="image/dress2.jpeg" className="product-detail--image " alt="Product" />
            </div>
            <div className="p-0">
                <div className="product-name">
                    <h4 className="text-dark">SIRENA MIDI DRESS</h4>
                    <h7 className="text-dark ">1.800.000 VNĐ</h7>
                </div>
                <div className="mt-4 d-flex gap-4 algin-items-end">
                    <p className="mb-0">Kích cỡ</p>
                    <a href="/" className="text-dark"><p>XS</p></a>
                    <a href="/" className="text-dark"><p>S</p></a>
                    <a href="/" className="text-dark"><p>M</p></a>                    
                    <a href="/" className="text-dark"><p>L</p></a>
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <p className="m-0">Số lượng</p>
                    <div class="form-outline" style={{width: "3rem"}}>
                        <input min={1} defaultValue={1} type="number" id="typeNumber" class="form-control border-0 fw-light" />
                    </div>
                </div>
                <div className="mt-4">
                    <p>CHI TIẾT SẢN PHẨM</p>
                    <p className="mb-0">- Chất liệu: Chất tơ mềm mại, bay bổng, 2 lớp lót phối ren.</p>
                    <p className="mb-0">- Dòng sản phẩm: Lep' Hoạ tiết thiết kế</p>
                    <p className="mb-0">- Chiều dài: 110 cm</p>
                </div>
                <div className="d-flex gap-4 mt-5">
                    <a href="/" className="product-btn"><button type="button" class="btn btn-dark product-btn">Thêm vào giỏ hàng</button></a>
                    <a href="/" className="product-btn"><button type="button" class="btn btn-light border-dark product-btn">Mua ngay</button></a>
                </div>
            </div>
        </div>
        <div className="product-detail m-5 ">
            <h4 className="text-center">CÓ THỂ BẠN CŨNG THÍCH</h4>
            <div className="product-detail d-flex gap-5 m-5 justify-content-center">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
        </>
        )
    }

export default ProductDetail;

