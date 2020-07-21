<template>
    <div>
        <van-radio-group v-model="componentId" direction="horizontal">
            <van-radio name="jsmarqueen">单选框 1</van-radio>
            <van-radio name="cssmarqueen">单选框 2</van-radio>
        </van-radio-group>
        <component :is="componentId"></component>
        <span class="test">11</span>
    </div>
</template>

<script>
    import jsmarqueen from './marqueen1.vue'
    import cssmarqueen from './marqueen2.vue'
export default {
    name:'Marqueen',
    data(){return{
        componentId:null
    }},
    components:{
        jsmarqueen,cssmarqueen
    }
}
</script>
<style lang='scss' scoped>
  .test{
      width: 275px;
      background: green;
      display: inline-block;
      font-size: 16px;
  } 
</style>