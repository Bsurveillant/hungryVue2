import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
}from './mutation-types'
export default{
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    },
    [RECEIVE_ADDRESS](state,categorys){
        categorys.address = categorys
    },
    [RECEIVE_ADDRESS](state,address){
        state.address = address
    }

}