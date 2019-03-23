<template>
   <div>
       <ul>
           <Todoitem v-for="(item,index) in dataList" :key='index' :value='item' :index='index'/>     
       </ul>
   </div>
</template>
<script>
import Todoitem from './Todoitem.vue'
import {mapMutations,mapState} from 'vuex'
export default {
    name:'list',
    components:{Todoitem},
    data() {
        return {
        }
    },
    computed:{
        ...mapState(['dataList'])
    },
    methods:{
       
    }
}
</script>

<style>

</style>

