<template>
   <div class="flex">
       <el-input v-model="inputVal" placeholder="请输入内容"></el-input>
       <el-button type="success" plain @click="add">add</el-button>
   </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
    name:'input',
    data() {
        return {
            inputVal:''
        }
    },
    mounted(){
    },
    methods:{
        ...mapMutations(['setDataList']),
       add(){
           this.setDataList(this.inputVal)
           this.inputVal = ''
       }
    }
}
</script>

<style>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 0 20px;
}
</style>

