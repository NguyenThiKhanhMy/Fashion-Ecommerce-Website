import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail, AiOutlineGoogle} from "react-icons/ai";

const Login = () => {
    return (
        <>
            <div className="container py-5 h-100" style ={{width: "35%"}}>
                <div class="text-center mb-4">
                    <h3>Đăng nhập</h3>
                </div>
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" name="Email" placeholder="Email"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <div class="row mb-3">
                        <div class="col d-flex justify-content-between">
                            <div class="form-check">
                                <input class="form-check-input" placeholder="Remember me" type="checkbox" value="" id="form2Example31" checked />
                                <p><label class="form-check-label" for="form2Example31">Lưu tài khoản</label></p>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <p><Link to="/">Quên mật khẩu?</Link></p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary btn-block d-flex mx-auto mb-4">Đăng nhập</button>
                    <div class="text-center">
                        <p>Không phải thành viên? <Link to="/Signup">Đăng ký</Link></p>
                        <p>Hoặc đăng nhập với:</p>
                    </div>
                    <div className="d-flex justify-content-center gap-5">
                        <Link className=" footer-social--icon " to ="/" style={{fontSize: `25px`}}>
                            <AiOutlineGoogle/>
                        </Link>
                        <Link className="footer-social--icon" to ="/" style={{fontSize: `25px`}}>
                        <AiOutlineMail/>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;