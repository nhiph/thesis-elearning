import React, { useState, useRef } from "react";
import logo from "../../assets/img/MIN-OP1.png";
import newImg from '../../assets/img/new.png';
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getListCategoryAction,
  getCourseCategoryAction,
  getListCourseFilterAction,
} from "../../redux/actions/CourseAction";
import { NavLink, Redirect } from "react-router-dom";
import DrawerSignUp from "../drawer/DrawerSignUp";
import DrawerSignIn from "../drawer/DrawerSignIn";
import _ from "lodash";
import { USER_LOGIN, ACCESSTOKEN } from "../../util/setting";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import DropdownMenu from "../dropdown/DropdownMenu";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined, SearchOutlined, FacebookOutlined } from "@ant-design/icons";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default function Header() {
  const ref = useRef();

  const { categoryList } = useSelector((state) => state.CourseReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  const onSearch = (value) => {
    // let maNhom = 'GP01';
    // if(userLogin.maNhom) {
    //   maNhom = userLogin.maNhom
    // }
    // let action = getListCourseFilterAction(value, maNhom);
    // dispatch(action);
    return <Redirect to={`/filter/:${value}`} />;
  };

  useEffect(() => {
    let action = getListCategoryAction();
    dispatch(action);
  }, []);

  const dangXuat = async () => {
    await localStorage.removeItem(USER_LOGIN);
    await localStorage.removeItem(ACCESSTOKEN);
    window.location.reload();
  };

  const renderKeywords = () => {
    return categoryList?.map((tag, idx) => {
      return (
        <a
          target="_blank"
          href={`/category/${tag.maDanhMuc}`}
          className="text-blue-600 mr-3 pt-2 text-md"
        >
          {tag.maDanhMuc}
        </a>
      );
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/mypage">
          Trang của bạn
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/admin">
          Trang quản trị
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => dangXuat()}>Đăng xuất</a>
      </Menu.Item>
    </Menu>
  );

  const menuAcc = (
    <Menu>
      <Menu.Item>
        {/* <a type="button" className="text-gray-50 font-bold" style={{backgroundColor: '#5872A7'}} target="_blank" rel="noopener noreferrer" href="/mypage">
          Đăng nhập bằng Facebook
        </a> */}
        <Button className="w-full text-left btn-facebook">
        <i class="fab fa-facebook-f pr-2"></i>Đăng nhập bằng Facebook
        </Button>
      </Menu.Item>
      <Menu.Item>
        {/* <a target="_blank" rel="noopener noreferrer" href="/admin">
        Đăng nhập bằng Google
        </a> */}
        <Button className="w-full text-left btn-google">
        <i class="fab fa-google-plus-g pr-2"></i>Đăng nhập bằng Google
        </Button>
      </Menu.Item>
      <Menu.Item>
      {/* <a target="_blank" rel="noopener noreferrer" href="/admin">
          Đăng nhập bằng Yalo
        </a> */}
        <Button className="w-full text-left btn-twitter" type="primary">
        <i class="fab fa-twitter pr-2"></i>Đăng nhập bằng Twitter
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ background: "#FBC03C", }}>
      <div className="flex items-center justify-between">
      {/* run text */}
      <p className="pl-10 text-blue-700" style={{margin: '0', fontSize: '12px'}}>
        <marquee width="100%" direction="right">Đăng ký ngay để trở thành lập trình viên chuyên nghiệp tại CyberSoft | Đăng ký ngay để trở thành chuyên viên tại CyberSoft </marquee>
      </p>
      {/* Support privacy */}
      <div className="flex justify-start pr-10">
        {/* thong bao && ho tro */}
        
          <span className="mr-4 text-blue-500" style={{fontSize: '12px'}}><i className="mr-1 fa fa-bell"></i>Thông báo</span>
          <span className="mr-2 mb-1 text-blue-500" style={{fontSize: '12px'}}><i className="mr-1 fa fa-question"></i>Hỗ trợ</span>
        
        {/* mang xa hoi lien he */}
        <div className="flex items-center justify-between">
          <span className="mr-2 text-purple-800" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-facebook-f"></i></span>  
          <span className="mr-2 text-red-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-google"></i></span>
          <span className="mr-2 text-blue-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-twitter"></i></span>
          <span className="mr-2 text-pink-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-instagram"></i></span>
        </div>
      </div>
      </div>
     
      <div
      
      className="w-full flex items-center justify-between mt-0 px-6 pb-2"
    >
      {/* <div
        className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        id="menu"
      > */}

        {/* logo cyber */}
        <div className="mr-6">
          <a
            className="inline-block no-underline hover:text-black font-medium text-lg py-2 pl-4 lg:-ml-2"
            href="/"
          >
            <img src={logo} width="250" alt="..." />
          </a>
        </div>

        {/* iconnew */}
        <img src={newImg} width="70"/>

        {/* Category - SearchBar */}
        <div className="flex flex-col items-center justify-between">
          {/* dropdown menu && search bar */}
          <div className="flex items-center justify-between">
            <DropdownMenu />
            <Search
              placeholder="Tìm kiếm khóa học"
              onSearch={onSearch}
              enterButton
              className="ml-8"
            />
          </div>
          {/* keyword tags */}
          <div className="flex items-center justify-between">
            <span className="text-blue-600 mr-3 pt-2 text-md"><strong>Danh mục các khóa học nổi bật</strong> </span>
            {renderKeywords()}
          </div>
        </div>
      

      {/* <div
        className="order-2 md:order-3 flex flex-col items-center justify-end mr-0 md:mr-4"
        id="nav-content"
      > */}
      <div className="flex items-start justify-end">
        {/* UserAccount*/}
      <div className="flex flex-col items-center justify-between mr-8">
          {/* dang nhap dang ky */}
          <div
            className="auth flex flex-col lg:flex-row items-center"
            id="wrapper-sign"
          >
            {_.isEmpty(userLogin) ? (
              <DrawerSignIn />
            ) : (
              <NavLink
                to="/mypage"
                className="bg-blue-500 text-gray-50 px-8 py-1"
              >
                {userLogin.taiKhoan}
              </NavLink>
            )}

            <div className="mr-3"></div>
            {_.isEmpty(userLogin) ? (
              <DrawerSignUp />
            ) : (
              <Dropdown className="py-2" overlay={menu} placement="bottomLeft">
                <Button className="py-2 px-2 flex items-center justify-start">
                  <i class="fa fa-cog mr-1"></i>
                  <span>Cài đặt</span>
                </Button>
              </Dropdown>
            )}

            {/* <DrawerSignUp />  */}
          </div>
          {/* dang nhap by other account */}
          <div className="flex items-center justify-between">
            {/* <span className="mr-2">
              <i className="text-gray-600 fa fa-user text-xl"></i>
            </span> */}
            <Dropdown overlay={menuAcc}>
              <Button className="w-full btn-account">
              <span className="mr-2">
              <i className="text-gray-600 fa fa-user text-xl"></i>
            </span>
              <span className="text-gray-600">Tài khoản <DownOutlined /></span>
              </Button>
            </Dropdown>
            {/* <span><i class="fa fa-angle-down"></i></span> */}
          </div>
        </div>
      {/* </div> */}
      
      {/* Support privacy */}
      {/* <div className="flex flex-col justify-start">
        
          <span className="mr-4 text-blue-500" style={{fontSize: '12px'}}><i className="mr-1 fa fa-bell"></i>Thông báo</span>
          <span className="mr-2 mb-1 text-blue-500" style={{fontSize: '12px'}}><i className="mr-1 fa fa-question"></i>Hỗ trợ</span>
        
        <div className="flex items-center justify-between">
          <span className="mr-2 text-purple-800" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-facebook-f"></i></span>  
          <span className="mr-2 text-red-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-google"></i></span>
          <span className="mr-2 text-blue-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-twitter"></i></span>
          <span className="mr-2 text-pink-500" style={{fontSize: '12px', cursor: 'pointer'}}><i className="fab fa-instagram"></i></span>
        </div>
      </div> */}

      </div>
      
    </div>
    </div>
  );
}

{
  /* <button
              onClick={() => dangXuat()}
              className="bg-gray-300 text-gray-900 text-md font-bold px-8 rounded-lg py-3"
            >
              Đăng xuất
            </button> */
}
