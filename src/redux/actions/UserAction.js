import axios from 'axios'
import {USER_LOGIN,ACCESSTOKEN} from '../../util/setting'
import {DANG_NHAP} from '../actions/types/UserType'

export const signUpAction = (info) => {
    return async (dispatch) => {
        try {
            console.log(info)
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
                method: 'POST',
                data: info
            })
            console.log("result",result)
            if(result.status==200) {
                alert('Đăng ký thành công')
            }
            if(result.status==500) {
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
            let result = await axios({
                url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method: 'POST',
                data: info
            })
            console.log("result", result.data.accessToken)
            // Dispatch info to reducer
            dispatch({
                type: DANG_NHAP,
                payload: result.data,
            })

            // store infouser + accesstoken in localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data))
            localStorage.setItem(ACCESSTOKEN, JSON.stringify(result.data.accessToken))
            
        }catch(err) {
            alert('Tài khoản hoặc mất khẩu không đúng!')
            console.log("err", err)
        }
    }
}