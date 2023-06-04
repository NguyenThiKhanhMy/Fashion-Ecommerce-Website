import React from "react";
import {NavLink, Link} from "react-router-dom";
import '../App.css';
import {FiShoppingCart, FiHeart, FiSearch} from "react-icons/fi";
import {BiUser} from "react-icons/bi";

const Header = () => {
    return (
        <>
            <header>
                <section className="top-header d-flex align-items-center justify-content-center">
                    <div className="text-secondary"><p className="mb-0"><small>Miễn phí giao hàng toàn quốc</small></p></div>
                </section>
                <section className="sub-navbar d-flex align-items-center border-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 style={{marginBottom: "0"}}>
                                    <Link to="/" className="text-dark">Adore</Link>
                                </h2>
                            </div>
                        <div class="col-3">
                            <div className="input-group mt-2">
                                <input type="text" className="form-control rounded-3" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" />
                                <span className="input-group-text border-0" id="basic-adon2" style={{fontSize: "25px"}}>
                                    <FiSearch/>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-auto  d-flex align-items-center">
                            <div className="header-upper-links d-flex gap-4">
                                <Link to="/WishList" className="text-dark" style={{fontSize: "25px"}}><FiHeart/></Link>
                                <Link to="/ShoppingCart" className="text-dark" style={{fontSize: "25px"}}><FiShoppingCart/></Link>
                                <Link to="/Login" className="text-dark" style={{fontSize: "25px"}}>
                                    <BiUser/>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
        
                </section>
                <navbar className = "navbar bg-light">
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col d-flex" style={{gap: "12rem"}}>
                                <NavLink className="text-dark" to="/">Hàng Mới Về</NavLink>
                                <NavLink className="text-dark" to="/">Sản Phẩm</NavLink>
                                <NavLink className="text-dark" to="/Blog">Bài Viết</NavLink>
                                <NavLink className="text-dark" to="/About">Giới thiệu</NavLink>
                            </div>
                        </div>
                    </div>
                </navbar>
            </header>
        </>
    )
}

export default Header;

                                    {/* <div role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                    // <Link to="/Login" className="text-dark"><BiUser/></Link>
                                    {/* </div> */}
                                    {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li>
                                            <Link className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px" }} to="/">
                                                Thông tin cá nhân
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item py-1 mb-1" style={{ height: "auto", lineHeight: "20px" }} to="/">
                                                Đăng xuất
                                            </Link>
                                        </li>
                                    </div> */}