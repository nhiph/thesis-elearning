import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getListCourseFilterAction, registerCourseAction } from "../../redux/actions/CourseAction";

export default function CourseFind(props) {
  const { userLogin } = useSelector((state) => state.UserReducer);
  const { courseFilterList } = useSelector((state) => state.CourseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let keyword = props.match.params.keyword
    let maNhom = 'GP01';
    if(userLogin?.maNhom) {
      maNhom = userLogin?.maNhom
    }
    let action = getListCourseFilterAction(keyword, maNhom);
    dispatch(action);
  }, [])

  const dangKyKhoaHoc = (maKhoaHoc, taiKhoan) => {
    let infoDangKy = {
      maKhoaHoc,
      taiKhoan,
    };
    let action = registerCourseAction(infoDangKy);
    dispatch(action);
  };

  const renderCourseList = () => {
    return courseFilterList?.map((course, idx) => {
      return (
        <div key={idx} className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img src={course.hinhAnh} alt="..." width="150" height="150" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            {course.tenKhoaHoc}
            </h2>
            <p className="leading-relaxed text-base">
            {course.biDanh}
            </p>
            <p className="leading-relaxed text-base">
            {course.moTa}
            </p>
            <NavLink
              to={`/detail/${course.maKhoaHoc}`}
              onClick={() =>
                dangKyKhoaHoc(course.maKhoaHoc, userLogin.taiKhoan)
              }
              className="mt-3 text-indigo-500 inline-flex items-center"
            >
              Đăng ký
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container py-10 mx-auto text-center">
      <h1 className="text-3xl">Tìm thấy {courseFilterList.length} khóa học</h1>
      { courseFilterList.length > 0 ? (<section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">{renderCourseList()}</div>
      </section>) : ''}
    </div>
  );
}
