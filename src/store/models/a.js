import  types from '../types'
export default {
    actions: {
        
    },
    mutations: {
        [types.update]:(state,payload)=>{
          state.name = payload
        }
    },
    state: {
        name:'zhengchao',
        a:'aaaaa'
    }
}