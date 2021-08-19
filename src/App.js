import React, {useEffect} from "react";
// setup router
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
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
import Tabpane from './components/tab/Tabpane';

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

  return (
    <BrowserRouter>
      <Switch>CourseFind
        <AdminTemplate exact component={AdminUser} path="/admin" />
        <HomeTemplate exact component={Home} path="/" />
        <HomeTemplate exact component={CourseDetail} path="/detail/:courseID" />
        <HomeTemplate exact component={TabMypage} path="/mypage" />
        <HomeTemplate exact component={CourseCategory} path="/category" />
        <HomeTemplate exact component={CourseFind} path="/filter" />
        {/* <HomeTemplate exact component={Form} path="/form" /> */}
        <HomeTemplate exact component={Tabpane} path="/tab" />
      </Switch>
    </BrowserRouter>
  );
}
