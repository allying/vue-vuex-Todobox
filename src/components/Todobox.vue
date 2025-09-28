<template>
   <div>
       <h4 class="title">Vue-Todobox</h4>
       <Todoinput/>
       <Todolist/>
       <div v-if="dataList.length == 0" class="title">暂无数据...123</div>
   </div>
</template>
<script>
import Todoinput from './Todoinput.vue'
import Todolist from './Todolist.vue'
import {mapMutations,mapState} from 'vuex'
export default {
    name:'todobox',
    components:{Todoinput,Todolist},
    data() {
        return {
        }
    },
    computed:{
        ...mapState(['dataList'])
    },
    mounted(){
    },
    methods:{
       
    }
}
</script>

<style >
.title{text-align: center}
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding: 0 20px;
}
</style>

