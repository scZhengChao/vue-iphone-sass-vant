<template>
    <div>
        <div class="icon-home box">222</div>
 
    </div>
</template>
<script>
export default {
    name:'sprites',
    created() {
        
        
    },
}
</script>
<style lang='scss' scoped>

 .box{
        width: 100%;
        height: 100px;
        color: $mainColor;   
        @include fz(20px);
        .test{
            width:100%;
            height:2rem;
        }
    }
   
</style>