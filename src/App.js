import React from "react";
// setup router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import CourseDetail from "./pages/course-detail/CourseDetail";
import {createBrowserHistory} from 'history'
import TabMypage from './pages/tabmypage/tabMypage'

export const history = createBrowserHistory()

export default function App() {
  return (
    <BrowserRouter>
      <HomeTemplate component={Home} path="/"/>
      <HomeTemplate component={CourseDetail} path="/detail/:courseID"/>
      <HomeTemplate component={TabMypage} path="/mypage"/>
    </BrowserRouter>
  );
}
