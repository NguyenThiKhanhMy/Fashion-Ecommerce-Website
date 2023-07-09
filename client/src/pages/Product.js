import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import {BsSearch} from "react-icons/bs";
import Banner from "../components/Banner"
import {useDispatch, useSelector} from "react-redux"
import { getProducts } from "../features/products/productSlice";

const Product = () => {
    const productState = useSelector((state) => state?.product?.product);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    return (
        <>
        <section id="main-content" className="product-page">
            <Banner/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col mt-4">
                        <div className="card border-0 mb-4">
                            <div className="header mb-2">
                                <h6>Sắp xếp theo</h6>
                            </div>
                            <div className="body widget">
                                <ul className="list-unstyled categories-clouds">
                                    <li><p><a href="/" className="text-secondary product-text">Mới nhất</a></p></li>
                                    <li><p><a href="/" className="text-secondary product-text">Giá từ cao đến thấp</a></p></li>
                                    <li><p><a href="/" className="text-secondary product-text">Giá từ thấp đến cao</a></p></li>
                                </ul> 
                            </div>
                            <div className="header mt-4  mb-2">
                                <h6>Danh mục</h6>
                            </div>
                            <div className="body widget">
                                <ul className="list-unstyled categories-clouds">
                                    <li><p><a href="/" className="text-secondary ">Bài viết mới nhất</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Xu hướng</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Xuân hè 2023</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Thu đông 2022</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Bộ sưu tập mới</a></p></li>
                                </ul> 
                            </div>
                            <div className="header mt-4 mb-2">
                                <h6>Kích cỡ</h6>
                            </div>
                            <div className="body widget">
                                <ul className="list-unstyled categories-clouds">
                                    <li><p><a href="/" className="text-secondary ">Bài viết mới nhất</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Xu hướng</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Xuân hè 2023</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Thu đông 2022</a></p></li>
                                    <li><p><a href="/" className="text-secondary ">Bộ sưu tập mới</a></p></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="col-9 mt-4">
                    <div className="body search pb-4 d-flex justify-content-end">
                        <div className="input-group " style={{width:"15rem"}}>
                            <input type="text" className="form-control rounded-3" placeholder="Tìm kiếm bài viết" aria-label="Tìm kiếm bài viết"/>
                            <span className="input-group-text border-0 bg-white" id="basic-adon2" style={{fontSize: "22px"}}>
                                <BsSearch/>
                            </span>
                        </div>
                    </div>
                        {productState?.map((item,index) => {
                            return (
                                <div key={index}> 
                                <ProductCard id={item?._id} name={item?.name} price={item?.price} image={item?.images[0]?.url} />
                            </div>
                            )
                            })
                        }
                <ul className="pagination pagination-primary m-4">
                    <li className="page-item"><p><a className="page-link" href="/">Previous</a></p></li>
                    <li className="page-item active"><p><a className="page-link" href="/">1</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">2</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">3</a></p></li>
                    <li className="page-item"><p><a className="page-link" href="/">Next</a></p></li>
                </ul>  
                    </div>              
            </div>       
            </div>
        </section>
        </>
    )
}

export default Product;
