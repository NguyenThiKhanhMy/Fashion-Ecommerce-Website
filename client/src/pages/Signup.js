import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserSlice } from "../features/user/userSlice";

let signupSchema = yup.object({
    username: yup.string().required("Username không được để trống"),
    password: yup.string().required("Password không được để trống"),
    email: yup.string().email("Email phải đúng định dạng").required("Email không được để trống"),
});

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",    
            email: "",
        },
        validationSchema: signupSchema,
        onSubmit: (values) => {
            dispatch(registerUserSlice(values));
          },
    });
    
    const userState = useSelector((state) => state);
    const { user, isError, isSuccess, isLoading, message } = userState.user;

    useEffect(() => {
      if (isSuccess) {
        navigate("/Login");
      } else {
        navigate("");
      }
    }, [user, isError, isSuccess, isLoading]);
    return (
        <>
            <div className="container py-5 h-100" style ={{width: "35%"}}>
                <div class="title text-center mb-4">
                    <h3>Đăng ký</h3>
                    error
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="error">
                        <p className="text-danger"><small>{formik.touched.username && formik.errors.username}</small></p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="username" class="form-control" name="username" placeholder="username" onChange={formik.handleChange}  value={formik.values.username}/>
                    </div>
                    <div className="error">
                        <p className="text-danger"><small>{formik.touched.password && formik.errors.password}</small></p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="password" class="form-control" name="password" placeholder="password" onChange={formik.handleChange}  value={formik.values.password}/>
                    </div>
                    <div className="error">
                        <p className="text-danger"><small>{formik.touched.email && formik.errors.email}</small></p>
                    </div>
                    <div class="form-outline mb-4">
                        <input type="email" class="form-control" name="email" placeholder="email" onChange={formik.handleChange} value={formik.values.email}/>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block d-flex mx-auto mb-4">Đăng ký</button>
                    <div class="text-center">
                        <p>Đã có tài khoản? <Link to="/Login">Đăng nhập ngay</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;