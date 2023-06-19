import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import {  AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteABlogCat, getCategories,resetState} from "../features/blogCategory/blogCategorySlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Tiêu đề",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "",
    dataIndex: "action",
  },
];

const BlogCategoryList = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const showModal = (e) => {setOpen(true);setblogCatId(e);};
  const hideModal = () => {setOpen(false);};
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);

  const bCatState = useSelector((state) => state.bCategory.bCategories);
  console.log(bCatState);
  
  const data = [];
  for (let i = 0; i < bCatState.length; i++) {
    data.push({
      key: i + 1,
      name: bCatState[i].title,
      action: (
        <>
          <Link to={`/admin/add-blog-category/${bCatState[i]._id}`} className=" fs-4 text-dark float-center">
            <BiEdit />
          </Link>
          <button className="ms-3 fs-4 float-center bg-transparent border-0" onClick={() => showModal(bCatState[i]._id)}>
            <AiOutlineDelete />
          </button>
        </>
      ),
    });
  }
  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Danh sách thể loại</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBlogCategory(blogCatId);
        }}
        title="Xác nhận xóa?"
      />
    </div>
  );
};

export default BlogCategoryList;