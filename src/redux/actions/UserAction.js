import axios from 'axios'
import {ACCESSTOKEN} from '../../util/setting'
import {DANG_NHAP, GET_LIST_ALL_USER} from '../actions/types/UserType'
import { REGISTER_COURSE } from './types/CoursesType'

export const getListAllUser = () => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01`,
                method: 'GET'
            })
            dispatch({
                type: GET_LIST_ALL_USER,
                payload: result.data
            })
        }catch(err) {
            console.log(err)
        }
    }
}

export const signUpAction = (info) => {
    return async (dispatch) => {
        try {
            console.log(info)
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: info
            })
            if(result.status === 200) {
                alert('Đăng ký thành công')
            }
            if(result.status === 500) {
                alert('Email đã tồn tại')
            }
        }catch(err) {
            console.log("err", err)
        }
    }
}

export const signInAction = (info) => {
    return async (dispatch) => {
        try{
            let result1 = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: info
            })
            let result2 = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${result1.data.accessToken}`,
                },
            })
            // Dispatch info to reducer
            dispatch({
                type: DANG_NHAP,
                payload: result2.data,
            })

            dispatch({
                type: REGISTER_COURSE,
                payload: result2.data.chiTietKhoaHocGhiDanh,
            })

            localStorage.setItem(ACCESSTOKEN, result1.data.accessToken)
            
        }catch(err) {
            alert('Tài khoản hoặc mất khẩu không đúng!')
            console.log("err", err)
        }
    }
}

export const updateInfoAction = (updateInfo) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
                method: 'PUT',
                data: updateInfo,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            let result2 = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            dispatch({
                type: DANG_NHAP,
                payload: result2.data,
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const getUserInfo = (accessToken) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            dispatch({
                type: REGISTER_COURSE,
                payload: result.data 
            })
        }
        catch(err) {
            console.log("err", err)
        }
    }
}