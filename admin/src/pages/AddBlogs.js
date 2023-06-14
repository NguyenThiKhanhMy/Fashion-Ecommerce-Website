import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { createBlogs, getABlog, resetState, updateABlog} from "../features/blogs/blogSlice";
import { getCategories } from "../features/blogCategory/blogCategorySlice";

let schema = yup.object().shape({
  title: yup.string().required("Tiêu đề không để trống"),
  description: yup.string().required("Mô tả không để trống"),
  category: yup.string().required("Thể loại không để trống"),
});

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3];
  const imgState = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const blogState = useSelector((state) => state.blogs);
  const {isSuccess, isError, isLoading, createdBlog, blogName, blogDesc, blogContent, blogCategory, blogImages, updatedBlog,} = blogState;
  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImages);
    } else {
      dispatch(resetState());
    }
  }, [getBlogId]);

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Thêm thành công!");
    }
    if (isSuccess && updatedBlog) {
      toast.success("Sửa thành công!");
      navigate("/admin/blog-list");
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
  console.log(img);
  useEffect(() => {
    formik.values.images = img;
  }, [blogImages]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: blogName || "",
      description: blogDesc || "",
      content: blogContent || "",
      category: blogCategory || "",
      images: blogImages||"",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getBlogId !== undefined) {
        const data = { id: getBlogId, blogData: values };
        dispatch(updateABlog(data));
        dispatch(resetState());
      } else {
        dispatch(createBlogs(values));
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
        {getBlogId !== undefined ? "Sửa" : "Thêm"} bài viết
      </h3>

      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput type="text" label="Nhập tiêu đề bài viết" name="title" onChng={formik.handleChange("title")} onBlr={formik.handleBlur("title")} val={formik.values.title}/>
          </div>
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <select name="Thể loại" onChange={formik.handleChange("category")} onBlur={formik.handleBlur("category")} value={formik.values.category}  className="form-control py-3  mt-3" id="">
            <option value="">Chọn thể loại</option>
            {bCatState.map((i, j) => {
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
          <div className="mt-4">
            <CustomInput type="text" label="Nhập mô tả" name="description" onChng={formik.handleChange("description")} onBlr={formik.handleBlur("description")} val={formik.values.description}/>
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <ReactQuill
            theme="snow"
            className="mt-3"
            name="content"
            onChange={formik.handleChange("content")}
            value={formik.values.content}
          />
          <div className="error">
            {formik.touched.content && formik.errors.content}
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
                      Thêm ảnh tại đây
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
            {getBlogId !== undefined ? "Sửa" : "Thêm"} bài viết
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;