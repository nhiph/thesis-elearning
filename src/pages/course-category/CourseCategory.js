import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ScrollTop from "../../components/scrolltop/ScrollTop";
import {
  getCourseCategoryAction,
  registerCourseAction,
} from "../../redux/actions/CourseAction";
import { Pagination } from "antd";

export default function CourseCategory(props) {
  const { courseCategoryList } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.UserReducer);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    let maDanhMuc = props.match.params.category;
    let maNhom = "GP01";
    if (userLogin?.maNhom) {
      maNhom = userLogin.maNhom;
    }
    let action = getCourseCategoryAction(maDanhMuc, maNhom);
    dispatch(action);
  }, []);

  const dangKyKhoaHoc = (maKhoaHoc, taiKhoan) => {
    let infoDangKy = {
      maKhoaHoc,
      taiKhoan,
    };
    let action = registerCourseAction(infoDangKy);
    dispatch(action);
  };

  const paginate = (arr, size) => {
    return arr.reduce((acc, val, i) => {
      let idx = Math.floor(i / size)
      let page = acc[idx] || (acc[idx] = [])
      page.push(val)
      return acc
    }, [])
  }
  let pages = paginate(courseCategoryList, 9)
  // let pageNumber = Math.ceil(courseCategoryList.length/9)

  const renderCourseCategoryList = (currentPage) => {
    if(!pages[currentPage]) {
      return <div className=" text-red-700 flex justify-center items-center ">
        Không tìm thấy khóa học nào!
      </div>
    }
    return pages[currentPage]?.map((course, idx) => {
      return (
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-xs order-first lg:order-none mb-4">
          <div>
            <img
              src={course.hinhAnh}
              alt="Abstract Design"
              className="w-full h-40 sm:h-48 object-cover"
            />
          </div>

          <div className="py-5 px-6 sm:px-8">
            <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold">
              {course.tenKhoaHoc.length > 30
                ? course.tenKhoaHoc.substring(0, 20) + "..."
                : course.tenKhoaHoc}
            </h2>
            <div className="flex justify-end items-center text-gray-500 mb-2">
              <span className="mr-2">
                {course.luotXem}K<i class="pl-2 fa fa-eye"></i>
              </span>
              <span>
                6<i class="pl-2 fa fa-comment-dots"></i>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              {course.moTa.length > 100
                ? course.moTa.substring(0, 100) + "..."
                : "Lorem ipsum dolor sit amet, conse adipiscing elit. Phasellus enim erat, vestibulum vel."}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex justify-start items-center text-yellow-500">
                <span className="mr-1">
                  <i class="fa fa-star"></i>
                </span>
                <span className="mr-1">
                  <i class="fa fa-star"></i>
                </span>
                <span className="mr-1">
                  <i class="fa fa-star"></i>
                </span>
                <span className="mr-1">
                  <i class="fa fa-star"></i>
                </span>
                <span className="mr-1">
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <NavLink
                to={`/detail/${course.maKhoaHoc}`}
                target="_blank"
                onClick={() =>
                  dangKyKhoaHoc(course.maKhoaHoc, userLogin.taiKhoan)
                }
                className="rounded-xl bg-blue-500 px-6 py-2 text-md text-gray-50 font-bold"
              >
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  const onChange = page => {
    console.log(page)
    setCurrent(page)
    renderCourseCategoryList(page-1)
    window.scrollTo(0, 0)
  }

  return (
    <div class="bg-gray-100">
      <h3 className="text-4xl py-12 text-center font-bold text-gray-700">CÁC KHÓA HỌC MỚI NHẤT</h3>
      <div className="max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
      {renderCourseCategoryList(current-1)}
        
      </div>
      <div className="flex justify-center items-center py-8">
        {courseCategoryList.length > 0 ? <Pagination current={current} onChange={onChange} total={courseCategoryList.length} /> : ''}        
      </div>
      <ScrollTop />
    </div>
  );
}
