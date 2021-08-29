import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateInfoAction } from "../../redux/actions/UserAction";

export default function UpdateInfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const { userLogin } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: userLogin.taiKhoan,
      matKhau: userLogin.matKhau,
      hoTen: userLogin.hoTen,
      soDT: userLogin.soDT,
      maNhom: userLogin.maNhom,
      email: userLogin.email,
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống").min(6, "Mật khẩu tối thiểu 6 - 22 kí tự!").max(22, "Mật khẩu tối thiểu 6 - 22 kí tự!"),
      email: Yup.string().email("Email không hợp lệ").required("Email không được bỏ trống"),
      soDT: Yup.string().required("Số điện thoại không được bỏ trống").matches(/^[0-9]+$/, "Số điện thoại phải là số"),
      hoTen: Yup.string().required("Họ tên không được bỏ trống"),
    }),
    onSubmit: (values) => {
      let action = updateInfoAction(values);
      dispatch(action);
      setIsModalVisible(false);
    },
  });

  const { handleChange, handleSubmit, touched, errors } = formik;

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Cập nhật thông tin
      </Button>
      <Modal onCancel={handleCancel} title="Cập nhật thông tin" visible={isModalVisible}>
        <form className="container" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <p>Tài khoản</p>
              <input style={{cursor: 'not-allowed'}} disabled value={userLogin.taiKhoan} name="taiKhoan" className="form-control update-info"
              onChange={handleChange}
              onBlur={formik.handleBlur}
              />
              {touched.taiKhoan && errors.taiKhoan && <p className="text text-danger">{formik.errors.taiKhoan}</p>}
            </div>
            <div className="form-group">
              <p>Họ tên</p>
              <input 
                value={formik.values.hoTen} 
                name="hoTen" className="form-control update-info" 
                onChange={handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.hoTen && errors.hoTen && <p className="text text-danger">{formik.errors.hoTen}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <p>Mật khẩu</p>
              <input 
                type="password"
                value={formik.values.matKhau} name="matKhau" className="form-control update-info" 
                onChange={handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.matKhau && errors.matKhau && (
              <p className="text-red-400">{formik.errors.matKhau}</p>
              )}
            </div>
            <div className="form-group">
              <p>Email</p>
              <input 
                disabled
                style={{cursor: 'not-allowed'}}
                value={userLogin.email} name="email" className="form-control update-info" 
                onChange={handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.email && errors.email && (
              <p className="text-red-400">{formik.errors.email}</p>
            )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <p>Số điện thoại</p>
              <input 
                value={formik.values.soDT} 
                name="soDT" className="form-control update-info" 
                onChange={handleChange}
                onBlur={formik.handleBlur}
              />
              {touched.soDT && errors.soDT && (
              <p className="text-red-400">{formik.errors.soDT}</p>
            )}
            </div>
            <div className="form-group">
              <p>Mã nhóm</p>
              <select 
                disabled
                style={{cursor: 'not-allowed'}}
                value={userLogin.maNhom} name="maNhom" className="form-control update-info"
                onChange={handleChange}
              >
                <option value="GP01">Group 1</option>
                <option value="GP02">Group 2</option>
                <option value="GP03">Group 3</option>
                <option value="GP04">Group 4</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <p>Mã loại người dùng</p>
              <select 
                value={formik.values.maLoaiNguoiDung} name="maLoaiNguoiDung" className="form-control update-info"
                onChange={handleChange}
                >
                <option value="HV">HV</option>
                <option value="GV">GV</option>
              </select>
            </div>
            <div className="form-group flex justify-center items-center my-8">
              <button type="submit" className="btn bg-gray-700 text-yellow-300 py-2 px-4 text-lg rounded-md">
                Cập nhật
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
