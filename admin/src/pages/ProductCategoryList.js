import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {deleteAProductCategory,getCategories,resetState,} from "../features/productCategory/productCategorySlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Tên danh mục",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },

  {
    title: "",
    dataIndex: "action",
  },
];

const ProductCategoryList = () => {
  const [open, setOpen] = useState(false);
  const [pCatId, setpCatId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setpCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);
  
  const pCatStat = useSelector((state) => state.pCategory.pCategories);
  const data = [];
  for (let i = 0; i < pCatStat.length; i++) {
    data.push({
      key: i + 1,
      name: pCatStat[i].title,
      action: (
        <>
          <Link
            to={`/admin/add-product-category/${pCatStat[i]._id}`}
            className=" fs-5 text-dark"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-5 text-dark bg-transparent border-0"
            onClick={() => showModal(pCatStat[i]._id)}
          >
            <AiOutlineDelete />
          </button>
        </>
      ),
    });
  }
  const deleteCategory = (e) => {
    dispatch(deleteAProductCategory(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };
  return (
    <div>
      <h3 className="mb-4 title">Danh mục sản phẩm</h3>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteCategory(pCatId);
        }}
        title="Xác nhận xóa?"
      />
    </div>
  );
};

export default ProductCategoryList;