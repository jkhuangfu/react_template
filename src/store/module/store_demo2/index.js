import initState from './state'
import * as types from './types';

const store_two = (state = initState, action) => {
    switch (action.type) {
        case types.TYPE_TWO:
            return {...state, storeInfo: action.payLoad}
        default:
            return state
    }
}
export default store_two;