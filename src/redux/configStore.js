import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk'
import {CourseReducer} from './reducers/CourseReducer'
import {UserReducer} from './reducers/UserReducer'

const rootReducer = combineReducers({
    CourseReducer,
    UserReducer,
})
export const store = createStore(rootReducer, applyMiddleware(reduxThunk))