import {USER_LOGIN} from '../../util/setting'
import {DANG_NHAP} from '../actions/types/UserType'

let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
  userLogin: usLogin,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP:{
        console.log(action)
        state.userLogin = action.payload
        return {...state}
    }
      
    default: {
        return {...state}
    }
  }
};
