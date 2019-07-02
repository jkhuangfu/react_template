import initState from './state'
import * as types from './types';

const store_one = (state = initState, action) => {
    switch (action.type) {
        case types.TYPE_ONE:
            return {...state, storeInfo: action.payLoad.data}
        default:
            return state
    }
}

export default store_one;