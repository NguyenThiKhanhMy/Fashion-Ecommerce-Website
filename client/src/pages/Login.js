import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMail, AiOutlineGoogle} from "react-icons/ai";

const Login = () => {
    return (
        <>
            <div className="container py-5 h-100" style ={{width: "35%"}}>
                <div class="text-center mb-4">
                    <h4>Đăng nhập</h4>
                </div>
                <form>
                    <div class="form-outline mb-4">
                        <input type="email" id="form2Example1" class="form-control" name="Email" placeholder="Email"/>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" name="Password" placeholder="Password"/>
                    </div>
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-between">
                            <div class="form-check">
                                <input class="form-check-input" placeholder="Remember me" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <Link>Forgot password?</Link>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary btn-block d-flex mx-auto mb-4">Sign in</button>
                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
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