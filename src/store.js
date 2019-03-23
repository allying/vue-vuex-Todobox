import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        dataList:[]
    },
    mutations:{
        setDataList(state,value){
            let newArr = state.dataList
            newArr.push(value)
            state.dataList = newArr
        },
        delDataList(state,index){
            let newArr = state.dataList
            newArr.splice(index,1)
            state.dataList = newArr
        }
    }
})