import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAProduct } from "../features/products/productSlice";
import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
    const productState = useSelector((state) => state?.product?.productDetails);
    const dispatch = useDispatch();
    const location = useLocation();
    const getProductId = location.pathname.split("/")[2];
    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
      setQuantity(Number(event.target.value)); 
    };
  
    useEffect(() => {
        dispatch(getAProduct(getProductId));
      }, []);
    return (
        <>
        <div className="product-detail d-flex gap-5 m-5 justify-content-center" >
            <div className="product-card--image">
                <img src={productState?.images[0]?.url} className="product-detail--image" alt="Product" />
            </div>
            <div className="p-0">
                <div className="product-name">
                    <h4 className="text-dark">{productState?.name}</h4>
                    <h7 className="text-dark ">{productState?.price} VNĐ</h7>
                </div>
                <div className="mt-4 d-flex gap-4 algin-items-end">
                    <p className="mb-0">Kích cỡ</p>
                    {productState?.size.map((size, index) => (
                        <a key={index} className="text-dark">
                            <p>{size}</p>
                        </a>
                    ))}
                </div>
                <div className="d-flex gap-3 align-items-center">
                    <p className="m-0">Số lượng</p>
                    <div class="form-outline" style={{width: "3rem"}}>
                        <input min={1} defaultValue={1} value={quantity} onChange={handleQuantityChange} type="number" id="typeNumber" class="form-control border-0 fw-light" />
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
        </>
        )
    }

export default ProductDetail;

