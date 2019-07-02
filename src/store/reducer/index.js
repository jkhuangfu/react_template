import {combineReducers} from 'redux';

import store_one from '../module/store_demo1';
import store_two from '../module/store_demo2';

 
const appReducer = combineReducers({
    store_one,
    store_two,
});
export default appReducer
