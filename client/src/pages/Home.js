import React from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
    return (
        <>
            <section className="carouse-banner">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> 
                    <div className="carousel-inner d-flex align-items-center ">
                        <div className="carousel-item active">
                            <img src="image/1.png" className="image-banner d-block w-100" alt="Banner 1"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/2.png" className="image-banner d-block w-100" alt="Banner 2"/>
                        </div>
                        <div className="carousel-item">
                            <img src="image/3.png" className="image-banner d-block w-100" alt="Banner 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section id="products-bestseller" className="products-bestseller position-relative mb-5">
                <div className="container">
                    <div className="row">
                        <div className="title p-5">
                            <h3 className="text-dark text-uppercase d-flex justify-content-center">Sản phẩm bán chạy</h3>
                            <div className="btn-right d-flex justify-content-center mt-3">
                                <a href="/Blog" className="btn btn-medium btn-normal">Xem ngay</a>
                            </div>
                        </div>
                    <div class="row">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div> 
                <div className="swiper-pagination position-absolute text-center"></div>
            </section>
            <section className="sub-banner">
                <div className="bg-image d-flex align-items-center">
                    <img src="image/4.png" className="d-block w-100" alt="Sub Banner" style={{height : "30rem"}}/>  
                </div>
            </section>
            <section id="new-product" className="new-product position-relative ">
                <div className="container">
                    <div className="row">
                        <div className="title p-5">
                            <h3 className="text-dark text-uppercase d-flex justify-content-center">Hàng mới về</h3>
                            <div className="btn-right d-flex justify-content-center m-3">
                                <a href="shop.html" className="btn btn-medium btn-normal">Xem ngay</a>
                            </div>
                        </div>
                    <div class="row">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div> 
                <div className="swiper-pagination position-absolute text-center"></div>
            </section>
            <section className="m-5">
                <h3 className="title text-center pb-3">ĐĂNG KÝ ĐỂ CẬP NHẬT NHỮNG THÔNG TIN MỚI NHẤT CỦA CHÚNG TÔI</h3>
                <p className="text-center">Đăng ký để nhận ngay 10% giảm giá khi mua hàng lần đầu tiên tại website,cập nhật nhanh chóng các thông tin mới nhất về sản phẩm, các chương trình khuyến mãi và các sự kiện độc quyền.</p>
            </section>
        </>
    )
}

export default Home;