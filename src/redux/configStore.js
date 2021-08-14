import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import {CourseReducer} from './reducers/CourseReducer'
import {UserReducer} from './reducers/UserReducer'
import {AdminReducer} from './reducers/AdminReducer'

const rootReducer = combineReducers({
    CourseReducer,
    UserReducer,
    AdminReducer,
})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk))