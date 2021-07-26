import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN } from "../../util/setting";

export default function MyInfo() {
  const {userLogin} = useSelector(state => state.UserReducer)

  // useEffect(() => {
  //   // let getUser = localStorage.getItem(USER_LOGIN);
  //   setUserLocal(getUser);
  //   console.log("getUser", getUser)
  //   console.log('userlocal', userLocal)
  // }, []);

  return (
    <div class="grid grid-cols-3">
      <div className="flex justify-center">
        <div>
          <h1 className="text-gray-600 text-3xl text-center">Ảnh đại diện</h1>
          <img src="https://picsum.photos/200/200" />
          <a
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
            <button className="bg-gray-800 text-gray-100 font-bold text-xl p-4 rounded-md">
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
