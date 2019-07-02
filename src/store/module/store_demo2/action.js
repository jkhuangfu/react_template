import * as types from './types';
export default {
    actionFnTwo(){
        return async (dispatch,getState) => {
            //同步请求数据
            //const data = await Promise();
            dispatch({
                type: types.TYPE_TWO, 
                payLoad: {data:'this is second payLoad Data'+Date.now()}
            });
            
        }
    }
}