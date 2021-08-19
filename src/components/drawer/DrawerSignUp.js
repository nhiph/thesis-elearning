import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./SignUp.scss";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import {signUpAction} from '../../redux/actions/UserAction'

export default function DrawerSignUp(props) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống *"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống *").min(6, "Mật khẩu tối thiểu 6 - 22 kí tự! *").max(22, "Mật khẩu tối thiểu 6 - 22 kí tự! *"),
      email: Yup.string().email("Email không hợp lệ *").required("Email không được bỏ trống *"),
      soDT: Yup.string().required("Số điện thoại không được bỏ trống *").matches(/^[0-9]+$/, "Số điện thoại phải là số *"),
      hoTen: Yup.string().required("Họ tên không được bỏ trống *"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let action = signUpAction(values);
      dispatch(action);
      setVisible(false);
    },
  });

  const { handleChange, handleSubmit, touched, errors } = formik;

  const showDrawer = () => {
    setVisible({
      visible: true,
    });
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Đăng ký
      </Button>
      <Drawer
        title="Đăng ký tài khoản"
        width={400}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <form className="container" onSubmit={handleSubmit}>
          <div className="form-group">
            <p className="label">Tài khoản</p>
            <input
              name="taiKhoan"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            {touched.taiKhoan && errors.taiKhoan && (
              <p className="text-yellow-300 mt-2">{formik.errors.taiKhoan}</p>
            )}
          </div>
          <div className="form-group">
            <p>Họ tên</p>
            <input
              type="text"
              name="hoTen"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            {touched.hoTen && errors.hoTen && (
              <p className="text-yellow-300 mt-2">{formik.errors.hoTen}</p>
            )}
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input
              type="password"
              name="matKhau"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {touched.matKhau && errors.matKhau && (
              <p className="text-yellow-300 mt-2">{formik.errors.matKhau}</p>
            )}
          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            {touched.email && errors.email && (
              <p className="text-yellow-300 mt-2">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDT"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            {touched.soDT && errors.soDT && (
              <p className="text-yellow-300 mt-2">{formik.errors.soDT}</p>
            )}
          </div>
          <div className="form-group">
            <p>Mã nhóm</p>
            <select
              name="maNhom"
              className="form-control select"
              onChange={handleChange}
            >
              <option value="GP01">GP01</option>
              <option value="GP02">GP02</option>
              <option value="GP03">GP03</option>
              <option value="GP04">GP04</option>
            </select>
          </div>
          <div className="form-group mb-10 flex justify-center">
            <button
              type="submit"
              className="btn-signup rounded-sm mt-10 text-center bg-green-500 w-full py-4 text-xl text-gray-50 font-bold"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
