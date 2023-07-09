import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import {  useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {createProducts, getAProduct, resetState , updateAProduct} from "../features/products/productSlice";
import { getCategories } from "../features/productCategory/productCategorySlice";
import { getSizes } from "../features/productSize/productSizeSlice";
import Select from "react-select";


let schema = yup.object().shape({
  name: yup.string().required("Tên sản phẩm không để trống"),
  describe: yup.string().required("Mô tả không để trống"),
  category: yup.string().required("Thể loại không để trống"),
  size: yup.array().min(1, "Kích cỡ không để trống").required("Kích cỡ không để trống"),
  price: yup.string().required("Giá không để trống"),
  material: yup.string().required("Chất liệu không để trống"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getProductId = location.pathname.split("/")[3];
  const [images, setImages] = useState([]);
  const imgState = useSelector((state) => state.upload.images);
  const pSizeState = useSelector((state) => state.pSize.pSizes);
  const productState = useSelector((state) => state.products);
  const pCatState = useSelector((state) => state.pCategory.pCategories);
  const {isSuccess,isError,isLoading,createProduct,productName,productDesc,productCategory,productImages,updatedProduct,productPrice, productSize, productMaterial} = productState;

  useEffect(() => {
    if (getProductId !== undefined) {
      dispatch(getAProduct(getProductId));
      img.push(productImages);
    } else {
      dispatch(resetState());
    }
  }, [getProductId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getSizes());
  }, []);

  useEffect(() => {
    if (isSuccess && createProduct) {
      toast.success("Thêm thành công!");
    }
    if (isSuccess && updatedProduct) {
      toast.success("Sửa thành công!");
      navigate("/admin/product-list");
    }
    if (isError) {
      toast.error("Lỗi!");
    }
  }, [isSuccess, isError, isLoading]);
  const img = [];
  imgState.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  useEffect(() => {
    formik.values.images = img;
  }, [img]);
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      name: productName || "",
      describe: productDesc || "",
      category: productCategory || "",
      material: productMaterial || "",
      price: productPrice || "",
      images: "",
      size: productSize || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
    if (getProductId !== undefined) {
      const data = { id: getProductId, productData: values };
      dispatch(updateAProduct(data));
      dispatch(resetState());
    } else {
      dispatch(createProducts(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 300);
    }
  },
  });

  return (
    <div>
      <h3 className="mb-4 title">
      {getProductId !== undefined ? "Sửa" : "Thêm"} sản phẩm
      </h3>

      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Nhập tên sản phẩm"
              name="name"
              onChng={formik.handleChange("name")}
              onBlr={formik.handleBlur("name")}
              val={formik.values.name}
            />
          </div>
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Nhập mô tả chất liệu"
              name="material"
              onChng={formik.handleChange("material")}
              onBlr={formik.handleBlur("material")}
              val={formik.values.material}
            />
          </div>
          <div className="error">
            {formik.touched.material && formik.errors.material}
          </div>
          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3  mt-3"
            id=""
          >
            <option value="">Chọn danh mục sản phẩm</option>
            {pCatState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            className="mt-3"
            name="describe"
            onChange={formik.handleChange("describe")}
            value={formik.values.describe}
            modules={{
              clipboard: {
                  matchVisual: false
              }
          }}
          />
          <div className="error">
            {formik.touched.describe && formik.errors.describe}
          </div>
          <div className="mt-4">
            <CustomInput
              type="number"
              label="Nhập giá sản phẩm"
              name="price"
              onChng={formik.handleChange("price")}
              onBlr={formik.handleBlur("price")}
              val={formik.values.price}
            />
          </div>
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div> 

          <Select 
            className="py-3  mt-3"
            name="size"
            isMulti
            options={pSizeState.map((i) => ({ value: i.title, label: i.title }))}
            onChange={(selectedOptions) =>
            formik.setFieldValue("size",selectedOptions.map((option) => option.value))}
            onBlur={formik.handleBlur("size")}
            value={pSizeState
            .filter((i) => formik.values.size.includes(i.title))
            .map((i) => ({ value: i.title, label: i.title }))}
            classNamePrefix="react-select"
          />
          <div className="error">
            {formik.touched.size && formik.errors.size}
          </div>

          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Chọn file hình ảnh
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap mt-3 gap-3">
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getProductId !== undefined ? "Sửa" : "Thêm"} sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;