import React, { useEffect, useState } from "react";
import {NavLink, Link} from "react-router-dom";
import '../App.css';
import {FiShoppingCart, FiHeart, FiSearch} from "react-icons/fi";
import {BiUser} from "react-icons/bi";
import { useDispatch,useSelector } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [total,setTotal] = useState(null);
    const userState = useSelector(state => state.user)
    return (
        <>
            <header>
                <section className="top-header d-flex align-items-center justify-content-center">
                    <div className="text-secondary"><p className="mb-0"><small>Miễn phí giao hàng toàn quốc</small></p></div>
                </section>
                <section className="sub-navbar d-flex align-items-center border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 style={{marginBottom: "0"}}>
                                    <Link to="/" className="text-dark">Adore</Link>
                                </h2>
                            </div>
                        <div className="col-3">
                            <div className="input-group mt-1">
                                <input type="text" className="form-control rounded-3" placeholder="Tìm kiếm sản phẩm" aria-label="Tìm kiếm sản phẩm" />
                                <span className="input-group-text border-0" id="basic-adon2" style={{fontSize: "25px"}}>
                                    <FiSearch/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-auto  d-flex align-items-center">
                            <div className="header-upper-links d-flex gap-4">
                                <Link to="/WishList" className="text-dark" style={{fontSize: "25px"}}><FiHeart/></Link>
                                <Link to="/ShoppingCart" className="text-dark" style={{fontSize: "25px"}}><FiShoppingCart/></Link>
                                <Link to={userState.user === "" ? "/Login" : ""} className="text-dark d-flex mt-2 gap-1" style={{fontSize: "25px"}}>
                                    <BiUser/>
                                    {!userState.user ? (
                                    <p className="">Login</p>) : (
                                    <>
                                    <p className="dropdown-menu">{userState.user.username}</p>
                                        <Link className="dropdown-item" to="/">Action</Link>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                        </>
                                    )}
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