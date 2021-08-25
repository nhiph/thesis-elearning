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
import { NavLink, Redirect } from "react-router-dom";
import DrawerSignUp from "../drawer/DrawerSignUp";
import DrawerSignIn from "../drawer/DrawerSignIn";
import _ from "lodash";
import { USER_LOGIN, ACCESSTOKEN } from "../../util/setting";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import DropdownMenu from "../dropdown/DropdownMenu";

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
  const [isShow, setIsShow] = useState(false);

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
    return <Redirect to={`/filter/:${value}`} />
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

  const showCategory = () => {
    setIsShow(!isShow);
  };

  const dangXuat = async () => {
    await localStorage.removeItem(USER_LOGIN);
    await localStorage.removeItem(ACCESSTOKEN);
    window.location.reload();
  };

  return (
    <div style={{background: '#FBC03C'}} className="w-full flex items-center justify-between mt-0 px-6 py-2">
      <div
        className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
        id="menu"
      >
        <div className="mr-6">
          <a
            className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
            href="/"
          >
            <img src={logo} width="300" alt="..." />
          </a>
        </div>

        {/* DMKH - PC */}
        <DropdownMenu />
        <Search
          placeholder="Tìm kiếm khóa học"
          onSearch={onSearch}
          enterButton
          className="ml-8"
        />
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
  );
}
