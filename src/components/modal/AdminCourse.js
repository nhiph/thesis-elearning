import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { Input, Space } from "antd";
import "./AdminUser.scss";
import { getUserListReviewed, getUserListReviewing, confirmUser, deleteUser } from "../../redux/actions/AdminAction";

const { Search } = Input;

export default function AdminCourse(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const { userLogin } = useSelector((state) => state.UserReducer);
  // const {courseList} = useSelector(state => state.CourseReducer)
  const { userListReviewing } = useSelector((state) => state.AdminReducer);
  const { userListReviewed } = useSelector((state) => state.AdminReducer);
  
  const dispatch = useDispatch();

  const showModal = () => {
    let maKhoaHoc = { maKhoaHoc: props.maKhoaHoc };
    let actionReviewing = getUserListReviewing(maKhoaHoc);
    let actionReviewed = getUserListReviewed(maKhoaHoc);
    dispatch(actionReviewing);
    dispatch(actionReviewed);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onSearch = (value) => console.log(value);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toConfirmUser = (user) => {
    let action = confirmUser(user)
    dispatch(action)
  }

  const toDeleteUser = (user) => {
    let action = deleteUser(user)
    dispatch(action)
  }

  const renderUserListReviewing = () => {
    return userListReviewing?.map((user, idx) => {
      return <tr key={idx}>
      <td className="text-left">{idx + 1}</td>
      <td className="text-left">{user.taiKhoan}</td>
      <td className="text-left">{user.hoTen}</td>
      <td className="text-left">
        <div className="flex justify-center items-center">
          <button
            onClick={() => toConfirmUser(user)}
           className="mx-4 action-btn">
            <i class="fa fa-check"></i>
          </button>
          <button 
            onClick={() => toDeleteUser(user)}
            className=" action-btn">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
    })
  }

  const renderUserListReviewed = () => {
    return userListReviewed?.map((user, idx) => {
      return <tr key={idx}>
      <td className="text-left">{idx + 1}</td>
      <td className="text-left">{user.taiKhoan}</td>
      <td className="text-left">{user.hoTen}</td>
      <td className="text-left">
        <div className="flex justify-center items-center">
          <button
            onClick={() => toDeleteUser(user)}
            className=" action-btn">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
    })
  }

  return (
    <>
      <button onClick={showModal}
            className=" action-btn"><i class="fa fa-plus"></i></button>
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
        {/* Hoc vien chua xet duyet */}
        <p className="text-lg text-gray-700 font-bold mt-0">Học viên chờ xác nhận</p>
        <div className="admin-course" style={{ height: "170px" }}>
          <table class="table-fill">
            <thead>
              <tr>
                <th className="text-left">STT</th>
                <th className="text-left">Tài khoản</th>
                <th className="text-left">Họ tên</th>
                <th className="text-left">Chờ xác nhận</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              { renderUserListReviewing() }
            </tbody>
          </table>
        </div>
        {/* Hoc vien da ghi danh */}
        <p className="text-lg text-gray-700 font-bold">Học viên đã xét duyệt</p>
        <div className="admin-course" style={{ height: "170px" }}>
          <table class="table-fill">
            <thead>
              <tr>
                <th className="text-left">STT</th>
                <th className="text-left">Tài khoản</th>
                <th className="text-left">Họ tên</th>
                <th className="text-left">Thao tác</th>
              </tr>
            </thead>
            <tbody class="table-hover">
              { renderUserListReviewed() }
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  );
}
