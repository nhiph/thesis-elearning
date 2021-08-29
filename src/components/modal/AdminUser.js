import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { Input } from "antd";
import "./AdminUser.scss";
import { confirmCourse, deleteCourse, getCourseListReviewed, getCourseListReviewing } from "../../redux/actions/AdminAction";

const { Search } = Input;

export default function AdminUser(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { courseListReviewing } = useSelector((state) => state.AdminReducer);
  const { courseListReviewed } = useSelector((state) => state.AdminReducer);
  const dispatch = useDispatch();
  // console.log("courseListReviewing", courseListReviewing)
  // console.log("courseListReviewed", courseListReviewed)
  const showModal = () => {
    let taiKhoan = { taiKhoan: props.taiKhoan };
    let actionReviewing = getCourseListReviewing(taiKhoan);
    let actionReviewed = getCourseListReviewed(taiKhoan);
    dispatch(actionReviewing);
    dispatch(actionReviewed);
    setIsModalVisible(true);
  };
  const onSearch = (value) => console.log(value);

  const toConfirmCourse = (course) => {
    let action = confirmCourse(course)
    dispatch(action)
  }

  const toDeleteCourse = (course) => {
    let action = deleteCourse(course)
    dispatch(action)
  }

  const renderCourseListReviewing = () => {
    return courseListReviewing?.map((course, idx) => {
      return (
        <tr key={idx}>
          <td className="text-left">{idx + 1}</td>
          <td className="text-left">{course.tenKhoaHoc}</td>
          <td className="text-left">
            <div className="flex justify-center items-center">
              <button 
                onClick={() => toConfirmCourse(course)}
                className="mx-4 action-btn">
                <i class="fa fa-check"></i>
              </button>
              <button
                onClick={() => toDeleteCourse(course)}
                className=" action-btn">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderCourseListReviewed = () => {
    return courseListReviewed?.map((course, idx) => {
      return (
        <tr key={idx}>
          <td className="text-left">{idx + 1}</td>
          <td className="text-left">{course.tenKhoaHoc}</td>
          <td className="text-left">
            <div className="flex justify-center items-center">
              <button 
                onClick={() => toDeleteCourse(course)}
                className=" action-btn">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <button onClick={showModal} className=" action-btn">
        <i class="fa fa-plus"></i>
      </button>
      <Modal
        title={
          <div>
            <p className="text-lg text-gray-700 font-bold">Chọn khóa học</p>
            <div className="flex justify-center items-center">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
              <button
                style={{ width: "140px" }}
                className="bg-blue-700 text-gray-50 rounded-sm px-4 py-2 ml-4"
              >
                Ghi danh
              </button>
            </div>
          </div>
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        {/* Khoa hoc da chua xet duyet */}
        <p className="text-lg text-gray-700 font-bold mt-0">Khóa học chờ xác nhận</p>
        <div className="admin-course" style={{ height: "170px" }}>
          <table class="table-fill">
            <thead>
              <tr>
                <th className="text-left">STT</th>
                <th className="text-left">Tên khóa học</th>
                <th className="text-left">Chờ xác nhận</th>
              </tr>
            </thead>
            <tbody class="table-hover">{renderCourseListReviewing()}</tbody>
          </table>
        </div>
        {/* Khoa hoc da ghi xet duyet */}
        <p className="text-lg text-gray-700 font-bold">Khóa học đã xét duyệt</p>
        <div className="admin-course" style={{ height: "170px" }}>
          <table class="table-fill">
            <thead>
              <tr>
                <th className="text-left">STT</th>
                <th className="text-left">Tên khóa học</th>
                <th className="text-left">Thao tác</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              { renderCourseListReviewed() }
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}
