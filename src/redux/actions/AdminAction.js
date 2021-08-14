import { data } from 'autoprefixer';
import axios from 'axios';
import { ACCESSTOKEN } from '../../util/setting';
import { COURSE_LIST_REVIEWED, COURSE_LIST_REVIEWING, USER_LIST_REVIEWING, USER_LIST_REVIEWED, CONFIRM_COURSE, DELETE_COURSE, GET_LIST_COURSE_AD, GET_LIST_USER_AD, DELETE_USER, CONFIRM_USER } from './types/AdminType';

export const getCourseList = (MaNhom, page) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=${MaNhom}`
                ,
                method: 'GET',
            })
            dispatch({
                type: GET_LIST_COURSE_AD,
                payload: result.data.items
            })
        }catch(err) {
            console.log("err", err)
        }
    }
}

export const getUserList = (MaNhom, page) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${MaNhom}&page=${page}&pageSize=30`
                ,
                method: 'GET',
            })
            dispatch({
                type: GET_LIST_USER_AD,
                payload: result.data.items
            })
        }catch(err) {
            console.log("err", err)
        }
    }
}

export const getCourseListReviewing = (taiKhoan) => {
    return async dispatch => {
        try{
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet',
                method: 'POST',
                data: taiKhoan,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            let result1 = result.data.map((course, idx) => {
                return {...course, taiKhoan: taiKhoan.taiKhoan}
            })
            dispatch({
                type: COURSE_LIST_REVIEWING,
                payload: result1
            })
        }catch(err) {
            console.log('err', err)
        }
    }
} 

export const getCourseListReviewed = (taiKhoan) => {
    return async dispatch => {
        try{
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet',
                method: 'POST',
                data: taiKhoan,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            let result1 = result.data.map((course, idx) => {
                return {...course, taiKhoan: taiKhoan.taiKhoan}
            })
            dispatch({
                type: COURSE_LIST_REVIEWED,
                payload: result1
            })
        }catch(err) {
            console.log('err', err)
        }
    }
} 

export const getUserListReviewing = (maKhoaHoc) => {
    return async dispatch => {
        try{
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet',
                method: 'POST',
                data: maKhoaHoc,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            let result1 = result.data.map((userInfo, idx) => {
                return {...userInfo, maKhoaHoc: maKhoaHoc.maKhoaHoc}
            })
            dispatch({
                type: USER_LIST_REVIEWING,
                payload: result1
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const getUserListReviewed = (maKhoaHoc) => {
    return async dispatch => {
        try{
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc',
                method: 'POST',
                data: maKhoaHoc,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            })
            let result1 = result.data.map((userInfo, idx) => {
                return {...userInfo, maKhoaHoc: maKhoaHoc.maKhoaHoc}
            })
            dispatch({
                type: USER_LIST_REVIEWED,
                payload: result1,
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const confirmCourse = (infoConfirm) => {
    return async dispatch => {
        try {
            let result = await axios(({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc',
                method: 'POST',
                data: {
                    taiKhoan: infoConfirm.taiKhoan,
                    maKhoaHoc: infoConfirm.maKhoaHoc
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            }))
            dispatch({
                type: CONFIRM_COURSE,
                payload: infoConfirm
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const deleteCourse = (infoConfirm) => {
    return async dispatch => {
        try {
            let result = await axios(({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
                method: 'POST',
                data: {
                    taiKhoan: infoConfirm.taiKhoan,
                    maKhoaHoc: infoConfirm.maKhoaHoc
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            }))
            dispatch({
                type: DELETE_COURSE,
                payload: infoConfirm
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const confirmUser = (infoConfirm) => {
    return async dispatch => {
        try {
            let result = await axios(({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc',
                method: 'POST',
                data: {
                    taiKhoan: infoConfirm.taiKhoan,
                    maKhoaHoc: infoConfirm.maKhoaHoc
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            }))
            dispatch({
                type: CONFIRM_USER,
                payload: infoConfirm
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}

export const deleteUser = (infoConfirm) => {
    return async dispatch => {
        try {
            let result = await axios(({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
                method: 'POST',
                data: {
                    taiKhoan: infoConfirm.taiKhoan,
                    maKhoaHoc: infoConfirm.maKhoaHoc
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(ACCESSTOKEN)}`,
                },
            }))
            dispatch({
                type: DELETE_USER,
                payload: infoConfirm
            })
        }catch(err) {
            console.log('err', err)
        }
    }
}
