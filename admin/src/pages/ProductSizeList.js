import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiOutlineFileAdd, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAProductSize, getSizes, resetState } from "../features/productSize/productSizeSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Kích cỡ",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "",
    dataIndex: "action",
  },
];

const ProductSizeList = () => {
  const [open, setOpen] = useState(false);
  const [pSizeId, setpSizeId] = useState("");
  const showModal = (e) => {
    setOpen(true);
    setpSizeId(e);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getSizes());
  }, []);

  const pSizeState = useSelector((state) => state.pSize.pSizes);

  const data = [];
  for (let i = 0; i < pSizeState.length; i++) {
    data.push({
      key: i + 1,
      name: pSizeState[i].title,
      action: (
        <>
          <Link
            to={`/admin/add-product-size/${pSizeState[i]._id}`}
            className=" fs-5 text-dark"
          >
            <BiEdit />
          </Link>
          <button
            className="ms-3 fs-5 text-dark bg-transparent border-0"
            onClick={() => showModal(pSizeState[i]._id)}
          >
            <AiOutlineDelete />
          </button>
        </>
      ),
    });
  }

  const deleteProductSize = (e) => {
    dispatch(deleteAProductSize(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getSizes());
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
          deleteProductSize(pSizeId);
        }}
        title="Xác nhận xóa?"
      />
    </div>
  );
};

export default ProductSizeList;