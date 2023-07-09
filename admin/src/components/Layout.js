import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {AiOutlineDashboard,AiOutlineShoppingCart,AiOutlineUser,AiOutlineBgColors,} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa";
import { SiZend } from "react-icons/si";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt, BiUser } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">Ad</span>
            <span className="lg-logo">Admin</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key == "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Người dùng",
            },
            {
              key: "Catalog",
              icon: <FaProductHunt className="fs-4" />,
              label: "Sản phẩm",
              children: [
                {
                  key: "add-product",
                  icon: <FaProductHunt className="fs-4" />,
                  label: "Thêm sản phẩm",
                },
                {
                  key: "product-list",
                  icon: <FaProductHunt className="fs-4" />,
                  label: "Danh sách sản phẩm",
                },
                {
                  key: "product-category-list",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Phân loại",
                },
                {
                  key: "add-product-category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Thêm danh mục sản phẩm",
                },
                {
                  key: "product-size-list",
                  icon: <SiZend className="fs-4" />,
                  label: "Danh sách size",
                },
                {
                  key: "add-product-size",
                  icon: <SiZend className="fs-4" />,
                  label: "Thêm cỡ size",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Đơn hàng",
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Danh sách bài viết",
                },
                {
                  key: "add-blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Thêm bài viết",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Danh sách thể loại",
                },
                {
                  key: "add-blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Thêm thể loại",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Câu hỏi thắc mắc",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <BiUser className="fs-4" />,
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Admin</h5>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/">
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;