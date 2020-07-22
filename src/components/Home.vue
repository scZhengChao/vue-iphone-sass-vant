<template>
<div class="box">
    home
    <van-button type="info">主要按钮</van-button>
    <div class="test border-box a" 
        v-touch.preventDefault 
        @tap="tapCb" 
        @longtap="longTapCb" 
        @swipeup="swipeupCb" 
        @swipedown="swipedownCb" 
        @swipeleft="swipeleftCb" 
        @swiperight="swiperightCb" 
        @swipe="swipeCb"
        @click='click'
        @touchstart ='touchstart'
        @touchmove ='touchmove'
        @touchend ='touchend'
        @touchcancel ='touchcancel'
    >
       events
    </div>
    <div class="test border-box b" v-touch.preventDefault.drag @drag="dragCb">
        drag
    </div>
    <van-icon name="phone" @click='phone'/>
    <svg-icon icon-class="camera" class-name="camera"></svg-icon>
</div>
</template>

<script>
export default {
    name:'home',
    data(){return{

    }},
    methods:{
        tapCb(e){
            console.log(e,'tapCb')
        },
        longTapCb(e){
            console.log(e,'longTapCb')
        },
        swipeupCb(e){
            console.log(e,'swipeupCb')
        },
        swipedownCb(e){
            console.log(e,'swipedownCb')
        },
        swipeleftCb(e){
            console.log(e,'swipeleftCb')
        },
        swiperightCb(e){
            console.log(e,'swiperightCb')
        },
        swipeCb(e){
            console.log(e,'swipeCb')
        },
        dragCb(e){
            console.log(e,'dragCb')
        },
        touchstart(e){
            console.log(e,'touchstart')
        },
        touchmove(e){
            // console.log(e,'touchmove')
        },
        touchend(e){
            console.log(e,'touchend')
        },
        touchcancel(e){
            console.log(e,'touchcancel')
        },
        click(e){
            console.log(e,'click')
        },
        phone(){
            window.location.href = 'tel:15082810674'
        }
    },
    created(){
      console.log(1111)
    }
}
</script>
<style lang='scss' scoped>
    @include borderCreator("box", "", solid, #979797)
    
    .box{
        width: 100%;
        color: $mainColor;   
        @include fz(16px);
        .test{
            width:100%;
            height:2rem;
        }
    }
    
</style>
