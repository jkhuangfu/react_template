import * as types from './types';
export default {
    actionFnOne(){
        console.log(111111)
        return async (dispatch,getState) => {
            //同步请求数据
            //const data = await Promise();
            dispatch({
                type: types.TYPE_ONE, 
                payLoad: {data:'this is payLoad Data'+Date.now()}
            });
            
        }
    }
}