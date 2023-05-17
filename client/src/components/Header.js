import React from "react";
import {NavLink, Link} from "react-router-dom";
import '../App.css';
import {BsSearch} from "react-icons/bs"
import {FiShoppingCart} from "react-icons/fi";
import {BiUser} from "react-icons/bi";

const Header = () => {
    return (
        <>
            <header>
                <subheader className="top-header d-flex align-items-center justify-content-center">
                    <div className="text-secondary"><small>Miễn phí giao hàng toàn quốc</small></div>
                </subheader>
                <subnavbar className="subnavbar d-flex align-items-center border-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 style={{marginBottom: "0"}}>
                                    <Link className="text-dark">Adore</Link>
                                </h2>
                            </div>
                        <div class="col-3">
                            <div className="input-group">
                                <input type="text" className="form-control rounded-3" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" aria-aria-describedby="basic-addon2"/>
                                <span className="input-group-text border-0" id="basic-adon2" style={{fontSize: "22px"}}>
                                    <BsSearch/>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-auto  d-flex align-items-center">
                        <div className="header-upper-links d-flex gap-5">
                                    <div>
                                        <Link className="text-dark" style={{fontSize: "25px"}}><FiShoppingCart/></Link>
                                    </div>
                                    <div>
                                        <Link className="text-dark" style={{fontSize: "25px"}}><BiUser/></Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                </subnavbar>
                <navbar className = "navbar bg-light">
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col d-flex" style={{gap: "12rem"}}>
                                <NavLink className="text-dark initialism" to="/">Hàng Mới Về</NavLink>
                                <NavLink className="text-dark initialism" to="/">Sản Phẩm</NavLink>
                                <NavLink className="text-dark initialism" to="/">Bài Viết</NavLink>
                                <NavLink className="text-dark initialism" to="/">Giới thiệu</NavLink>
                            </div>
                        </div>
                    </div>
                </navbar>
            </header>
        </>
    )
}

export default Header;