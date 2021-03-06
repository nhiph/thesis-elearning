import React, {useEffect} from "react";
// setup router
import { BrowserRouter, Router, Redirect, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import CourseDetail from "./pages/course-detail/CourseDetail";
import { createBrowserHistory } from "history";
import TabMypage from "./pages/tabmypage/tabMypage";
import AdminUser from "./pages/administration-user/AdminUser";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import { ACCESSTOKEN } from "./util/setting";
import axios from "axios";
import { DANG_NHAP } from "./redux/actions/types/UserType";
import {useDispatch} from 'react-redux'
import { REGISTER_COURSE } from "./redux/actions/types/CoursesType";
import CourseCategory from "./pages/course-category/CourseCategory";
import CourseFind from "./pages/course-find/CourseFind";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import Banner2 from "./components/banner/Banner2";
import ScrollTop from "./components/scrolltop/ScrollTop";
import Carousel from "./components/carousel/Carousel";

export const history = createBrowserHistory();

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(!localStorage.getItem(ACCESSTOKEN)) {
      <Redirect to="/" />
    } else {
      let accessToken = localStorage.getItem(ACCESSTOKEN)
      axios({
        url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
      }).then((res) => {
        dispatch({
        type: DANG_NHAP,
        payload: res.data,
        })
        dispatch({
          type: REGISTER_COURSE,
          payload: res.data.chiTietKhoaHocGhiDanh,
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [])


  console.log(process.env)
  return (
    <Router history={history}>
      <Switch>CourseFind
        <AdminTemplate exact component={AdminUser} path="/admin" />
        <HomeTemplate exact component={Home} path="/" />
        <HomeTemplate exact component={CourseDetail} path="/detail/:courseID" />
        <HomeTemplate exact component={TabMypage} path="/mypage" />
        <HomeTemplate exact component={CourseCategory} path="/category/:category" />
        <HomeTemplate exact component={CourseFind} path="/filter/:keyword" />
        {/* <HomeTemplate exact component={ScrollTop} path="/scroll" /> */}
        <HomeTemplate exact component={Carousel} path="/carousel" />
      </Switch>
    </Router>
  );
}
