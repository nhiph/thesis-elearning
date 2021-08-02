import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./SignIn.scss";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {signInAction} from '../../redux/actions/UserAction'
import './SignIn.scss'

export default function DrawerSignIn(props) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống"),
      matKhau: Yup.string().required("Mật khẩu không được bỏ trống").min(6, "Mật khẩu tối thiểu 6 - 22 kí tự!").max(22, "Mật khẩu tối thiểu 6 - 22 kí tự!"),
    }),
    onSubmit: (values) => {
      let action = signInAction(values)
      dispatch(action)
      setVisible(false)
    },
  });

  const { handleChange, handleSubmit, touched, errors } = formik;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Đăng nhập
      </Button>
      <Drawer
        title="Đăng nhập"
        width={400}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <form className="container" onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Tài khoản</p>
            <input
              name="taiKhoan"
              className="form-control"
              onChange={handleChange}
              onBlur={formik.handleBlur}
            />
            {touched.taiKhoan && errors.taiKhoan && (
              <p className="text-red-400">{formik.errors.taiKhoan}</p>
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
            <p className="text-red-400">{formik.errors.matKhau}</p>
          )}
          <div className="form-group mb-10 flex justify-center">
            <button
              type="submit"
              className="btn-signin rounded-md mt-10 text-center bg-yellow-400 px-6 py-4 text-xl text-gray-700 font-bold"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
