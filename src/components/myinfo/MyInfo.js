import React from "react";
import { useSelector } from "react-redux";
import UpdateInfo from "./UpdateInfo";

export default function MyInfo() {
  const {userLogin} = useSelector(state => state.UserReducer)

  return (
    <div class="grid grid-cols-3">
      <div className="flex justify-center">
        <div>
          <h1 className="text-gray-600 text-3xl text-center">Ảnh đại diện</h1>
          <img src="https://picsum.photos/200/200" alt="..."/>
          <a href="/"
            className="text-blue-600 text-lg text-center mt-5"
            style={{ textDecoration: "underline" }}
            type="button"
          >
            Cập nhật ảnh đại diện
          </a>
        </div>
      </div>

      <div className="flex justify-center col-span-2">
        <div>
          <h1 className="text-gray-600 text-3xl text-center">
            Thông tin cá nhân
          </h1>
          <div className="text-red-600 pb-4">
            Bạn chỉ được phép cập nhật họ tên, mật khẩu, số điện thoại, và mã loại người dùng
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div className="col-span-1 text-xl">
              <p>Tài khoản</p>
              <p>Họ và tên</p>
              <p>Số điện thoại</p>
              <p>Mã nhóm</p>
              <p>Email</p>
            </div>
            <div className="col-span-3 text-xl">
              <p>{userLogin?.taiKhoan}</p>
              <p>{userLogin?.hoTen}</p>
              <p>{userLogin?.soDT}</p>
              <p>{userLogin?.maNhom}</p>
              <p>{userLogin?.email}</p>
            </div>
          </div>

          <div className="flex justify-end">
          <UpdateInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
