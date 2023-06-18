import React from "react";
import {AiOutlineMail, AiOutlineGoogle} from "react-icons/ai";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUserSlice } from "../features/user/userSlice";

let loginSchema = yup.object({
    username: yup.string().required("Username không được để trống"),
    password: yup.string().required("Password không được để trống"),
});

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",      
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUserSlice(values));
                navigate('/')
          },
    });

    const userState = useSelector((state) => state);
    const { user, isError, isSuccess, isLoading, message } = userState.user;

    useEffect(() => {
      if (isSuccess) {
        navigate("/");
      } else {
        navigate("");
      }
    }, [user, isError, isSuccess, isLoading]);
    return (
        <>
            <div className="container py-5 h-100" style ={{width: "35%"}}>
                <div className="text-center mb-4">
                    <h3>Đăng nhập</h3>
                </div>
                <div className="error text-center">
                    {message.message == "Rejected" ? "Thông tin đăng nhập không đúng" : ""}
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="error">
                        <p className="text-danger"><small>{formik.touched.username && formik.errors.username}</small></p>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="username" class="username form-control" name="username" placeholder="Username" onChange={formik.handleChange}  value={formik.values.username}/>
                    </div>
                    <div className="error">
                        <p className="text-danger"><small>{formik.touched.password && formik.errors.password}</small></p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" class="password form-control" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password}/>
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
                    <button type="submit" class="btn btn-primary btn-block d-flex mx-auto mb-4">Đăng nhập</button>
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

