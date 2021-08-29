import React, { useEffect, useState } from "react";
import "./AdminCourse.scss";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "antd";
import { getListCourseAction } from "../../redux/actions/CourseAction";
import AdminCourseModal from '../../components/modal/AdminCourse'
import { deleteCourseCode, getCourseList } from "../../redux/actions/AdminAction";
import { Redirect } from "react-router-dom";

const { Search } = Input;
const onSearch = (value) => console.log(value);


export default function AdminCourse() {
  const [current, setCurrent] = useState(1);
  const { userLogin } = useSelector((state) => state.UserReducer);
  const { courseListAd } = useSelector((state) => state.AdminReducer);
  const dispatch = useDispatch();

 


  useEffect(() => {
    if(userLogin) {
      let action = getCourseList(userLogin.maNhom, current);
      dispatch(action);
    }
  }, [userLogin]);

  if(userLogin && userLogin.maLoaiNguoiDung != 'GV') {
    return <Redirect to="/" />
  }

  const onDeleteCourse = (maKhoaHoc) => {
    // console.log(maKhoaHoc)
    let action = deleteCourseCode(maKhoaHoc)
    dispatch(action)
  }

  const renderCourseList = () => {
    return courseListAd?.map((course, idx) => {
      return <tr key={idx}>
      <td className="text-left">{ idx+1 }</td>
      <td className="text-left">{ course.maKhoaHoc }</td>
      <td className="text-left">{ course.tenKhoaHoc }</td>
      <td className="flex justify-center items-center">
        <img src="https://picsum.photos/50/50" alt="..." width="50" height="30"/>
      </td>
      <td className="text-left">{ course.luotXem }</td>
      <td className="text-left">{ course.nguoiTao.taiKhoan }</td>
      <td className="text-left">
        <div className="flex justify-center items-center">
          <AdminCourseModal maKhoaHoc={course.maKhoaHoc}/>
          <button className="mx-4 action-btn"><i class="fa fa-edit"></i></button>
          <button className=" action-btn" onClick={() => onDeleteCourse(course.maKhoaHoc)}><i class="fa fa-trash"></i></button>
        </div>
      </td>
    </tr>
    })
  }

  const onChange = page => {
    setCurrent(page);
    let action = getCourseList(userLogin.maNhom, page);
    dispatch(action);
  };

  return (
    <div className="px-10">
      <Search
        placeholder="Nhập từ khóa"
        onSearch={onSearch}
        enterButton
        className="mr-10 mb-8"
      />

      {/* course list */}
      <div className="admin-course">
        <table class="table-fill">
          <thead>
            <tr>
              <th className="text-left">STT</th>
              <th className="text-left">MaKhoaHoc</th>
              <th className="text-left">TenKhoaHoc</th>
              <th className="text-left">HinhAnh</th>
              <th className="text-left">LuotXem</th>
              <th className="text-left">NguoiTao</th>
              <th className="text-left">HanhDong</th>
            </tr>
          </thead>
          <tbody class="table-hover">
            {renderCourseList()}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Pagination current={current} onChange={onChange} total={100} />
      </div>
    </div>
  );
}
