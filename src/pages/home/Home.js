import React, {useState} from "react";
import "./Home.scss";
import Banner from "./Banner";
import {useEffect} from 'react'
import { getListCourseAction, registerCourseAction } from "../../redux/actions/CourseAction";
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from "react-router-dom";
import { Pagination } from 'antd';

export default function Home() {
  const {courseList} = useSelector(state => state.CourseReducer)
  const {userLogin} = useSelector(state => state.UserReducer)
  const [current, setCurrent] = useState(1)
  const dispatch = useDispatch()
  console.log(courseList)
  // console.log("maNhom", userLogin)
  useEffect(() => {
    let action = getListCourseAction(userLogin?.maNhom);
    dispatch(action)
  }, [])

  const dangKyKhoaHoc = (maKhoaHoc, taiKhoan) => {
    let infoDangKy = {
      maKhoaHoc,
      taiKhoan
    }
    let action = registerCourseAction(infoDangKy)
    dispatch(action) 
  }

  const renderCourseList = () => {
    return courseList?.map((course, idx) => {
      return <div className="p-4 md:w-1/3" key={idx}>
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={course.hinhAnh}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-lg title-font font-medium text-gray-700 mb-1">
            {course.maKhoaHoc}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {course.tenKhoaHoc.length > 30 ? course.tenKhoaHoc.substring(0,20) + '...' : course.tenKhoaHoc}
          </h1>
          <p className="leading-relaxed mb-3">
          {course.biDanh.length > 30 ? course.biDanh.substring(0,20) + '...' : course.biDanh}
          </p>
          <div className="flex items-center flex-wrap ">
            <NavLink 
              to={`/detail/${course.maKhoaHoc}`}
              className="bg-gray-700 px-6 py-4 text-xl text-white font-bold">
              Xem chi tiết
            </NavLink>
            <NavLink 
              to={`/detail/${course.maKhoaHoc}`}
              onClick={() => dangKyKhoaHoc(course.maKhoaHoc, userLogin.taiKhoan)}
              className="ml-2 bg-yellow-400 px-6 py-4 text-xl text-gray-700 font-bold">
              Đăng ký
            </NavLink>
            <span className="mt-4 text-gray-800 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              {course.luotXem}K
            </span>
            <span className=" text-gray-800 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
      {/* 6 items/page */}
      {(idx+1)%6 === 0 ? <br /> : ''}
    </div>
    })
  }

  const onChange = page => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div className="home">
      {/* HOME-BANNER */}
      <Banner />
      {/* HOME - DANHSACHKHOAHOC LIST */}
      {/* LIST COURSE */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto">
          <h3 className="text-3xl">Các khóa học mới nhất</h3>

          <div className="flex flex-wrap -m-4">
            {renderCourseList()}
          </div>
          <div className="flex justify-center my-6">
          <Pagination current={current} onChange={onChange} total={50} />
          </div>
        </div>
      </section>
    </div>
  );
}
