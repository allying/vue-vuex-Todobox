<template>
   <div>
      <li v-if='value'>
          <span>{{value}}</span>
          <el-button type="success" plain @click="dele(index)">delete</el-button>
      </li>
   </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'item',
    props:{
        value:{
            type:String,
        },
        index:{
            type:Number,
        }
    },
    data() {
        return {
        }
    },
    mounted(){
    },
    methods:{
        ...mapMutations(['delDataList']),
       dele(key){
           this.delDataList(key)
       }
    }
}
</script>

<style>
    li{display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 5px auto;
    padding: 0 20px;
    }
</style>

