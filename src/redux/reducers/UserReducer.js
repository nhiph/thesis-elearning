import {DANG_NHAP} from '../actions/types/UserType'

const initialState = {
  userLogin: null,
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
