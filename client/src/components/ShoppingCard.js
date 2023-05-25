import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const ShoppingCard = () => {
    return (
        <>
                <div className=" shopping-card card border-0 mx-auto">
                    <hr className="hr"/>
                    <div className="d-flex gap-4 mt-2">
                        <div className="shopping-card--image">
                            <img src="image/dress2.jpeg" className="shopping-image" alt="Product" />
                        </div>
                        <div className="card-body px-0 ">
                            <div className="product-name">
                                <p className="mb-2 text-dark">SIRENA MIDI DRESS</p>
                                <p className="mb-2 text-dark">Size: XL</p>
                                <p className="text-dark mb-0 ">Đơn giá: 1.800.000 VNĐ</p>
                            </div>
                            <div className="d-flex gap-3 align-items-center">
                                <p className="mb-0">Số lượng</p>
                                <div class="form-outline" style={{width: "3rem"}}>
                                    <input min={1} defaultValue={1} type="number" id="typeNumber" class="form-control border-0 fw-light" />
                                </div>
                            </div>
                        </div>
                        <div className="justify-content-end">
                        <div  className="text-dark" style={{fontSize: "18px"}}><AiOutlineClose/></div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ShoppingCard;