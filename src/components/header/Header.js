import React, { useState, useRef } from "react";
import logo from "../../assets/img/MIN-OP1.png";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getListCategoryAction,
  getCourseCategoryAction,
  getListCourseFilterAction,
} from "../../redux/actions/CourseAction";
import { NavLink } from "react-router-dom";
import DrawerSignUp from "../drawer/DrawerSignUp";
import DrawerSignIn from "../drawer/DrawerSignIn";
import _ from "lodash";
import { USER_LOGIN, ACCESSTOKEN } from "../../util/setting";
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

export default function Header() {
  const ref = useRef();
  const [isShow, setIsShow] = useState(false);

  const { categoryList } = useSelector((state) => state.CourseReducer);
  const { userLogin } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();

  const onSearch = (value) => {
    console.log(value)
    let action = getListCourseFilterAction(value, userLogin.maNhom)
    dispatch(action)
  };

  useEffect(() => {
    let action = getListCategoryAction();
    dispatch(action);
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isShow && ref.current && !ref.current.contains(e.target)) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isShow]);

  const getCourseCategory = (maDanhMuc, maNhom = "GP01") => {
    let action = getCourseCategoryAction(maDanhMuc, maNhom);
    dispatch(action);
    showCategory();
  };

  const renderCategoryList = () => {
    return categoryList.map((category, idx) => {
      return (
        <li
          key={idx}
        >
          <NavLink to="/category" 
              onClick={() => getCourseCategory(category.maDanhMuc, userLogin.maNhom)
          }>{category.tenDanhMuc}</NavLink>
        </li>
      );
    });
  };

  const showCategory = () => {
    setIsShow(!isShow);
  };

  const dangXuat = async () => {
    await localStorage.removeItem(USER_LOGIN);
    await localStorage.removeItem(ACCESSTOKEN);
    window.location.reload();
  };

  return (
    <nav
      id="header"
      className="z-30 bg-dark shadow-lg border-b border-blue-300 font-bold"
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
                <a
                  className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  href="/"
                >
                  <img src={logo} width="200" alt="..." />
                </a>
              </li>
              {/* DMKH - PC */}
              <div className="flex justify-center items-center flex-col lg:flex-row lg:items-center mr-4">
                <li className="my-3">
                  <span className="no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2">
                    <span
                      id="DanhMucKhoaHoc"
                      ref={ref}
                      onClick={() => showCategory()}
                    >
                      <i className="fa fa-align-justify mr-2"></i>
                      Danh mục khóa học
                    </span>
                    <div id="categoryList">
                      {isShow ? <ul ref={ref}>{renderCategoryList()}</ul> : ""}
                    </div>
                  </span>
                </li>
                <li>
                  <div
                    className="no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                  >
                    <Search placeholder="Tìm kiếm khóa học" onSearch={onSearch} enterButton />
                  </div>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div
            className="auth flex flex-col lg:flex-row items-center"
            id="wrapper-sign"
          >
            {_.isEmpty(userLogin) ? (
              <DrawerSignIn />
            ) : (
              <NavLink
                to="/mypage"
                className="bg-gray-700 text-xl text-gray-100 px-8 rounded-lg py-2"
              >
                {userLogin.taiKhoan}
              </NavLink>
            )}

            <div className="mr-3"></div>
            {_.isEmpty(userLogin) ? (
              <DrawerSignUp />
            ) : (
              <button
                onClick={() => dangXuat()}
                className="bg-gray-300 text-gray-900 text-md font-bold px-8 rounded-lg py-3"
              >
                Đăng xuất
              </button>
            )}

            {/* <DrawerSignUp />  */}
          </div>
        </div>
      </div>
    </nav>
  );
}
