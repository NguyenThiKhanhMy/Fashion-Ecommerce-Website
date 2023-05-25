import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <div className="container py-5 h-100" style ={{width: "35%"}}>
                <div class="title text-center mb-4">
                    <h3>Đăng ký</h3>
                </div>
                <form>
                    <div class="form-outline mb-4">
                        <input type="username" id="form2Example1" class="form-control" name="Username" placeholder="Username"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" name="Email" placeholder="Email"/>
                    </div>
                    <button type="button" class="btn btn-primary btn-block d-flex mx-auto mb-4">Đăng ký</button>
                    <div class="text-center">
                        <p>Đã có tài khoản? <Link to="/Login">Đăng nhập ngay</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;