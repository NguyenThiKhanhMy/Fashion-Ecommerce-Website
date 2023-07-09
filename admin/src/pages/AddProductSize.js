import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {createSize,getAProductSize,resetState,updateAProductSize,} from "../features/productSize/productSizeSlice";

let schema = yup.object().shape({
  title: yup.string().required("Danh mục không để trống"),
});

const AddProductSize = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const getPSizeId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const newSize = useSelector((state) => state.pSize);
  const {isSuccess,isError,isLoading,createdSize,sizeName,updatedSize,} = newSize;

  useEffect(() => {
    if (getPSizeId !== undefined) {
      dispatch(getAProductSize(getPSizeId));
    } else {
      dispatch(resetState());
    }
  }, [getPSizeId]);

  useEffect(() => {
    if (isSuccess && createdSize) {
      toast.success("Thêm thành công!");
    }
    if (isSuccess && updatedSize) {
      toast.success("Sửa thành công!");
      navigate("/admin/product-size-list");
    }
    if (isError) {
      toast.error("Lỗi!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: sizeName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getPSizeId !== undefined) {
        const data = { id: getPSizeId, pSizeData: values };
        dispatch(updateAProductSize(data));
        dispatch(resetState());
      } else {
        dispatch(createSize(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState());
        }, 300);
      }
    },
  });
  return (
    <div>
      <h3 className="mb-4  title">
        {getPSizeId !== undefined ? "Sửa" : "Thêm"} kích cỡ
      </h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Nhập danh mục kích cỡ"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            id="brand"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getPSizeId !== undefined ? "Sửa" : "Thêm"} kích cỡ
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductSize;