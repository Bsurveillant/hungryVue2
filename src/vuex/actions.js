import{
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'
import state from './state';
export default{
    async getAddress({commit,state}){
        
        const {longitude,latitude} = state
        const result = await reqAddress(longitude,latitude)
        if(result.code ===0){
            const address = result.data
            commit(RECEIVE_ADDRESS,address)
        }
    }
}