<template>
<div class="box">
    <input type="tel" class="inp" @focus='getHeight'>
    <input type="button" value="回去" class="goback" @click='scrollView'>
</div>
</template>

<script>
export default {
    name:'inpandSrcoll',
    data(){return{

    }},
    created() {

    },
    mounted() {
        
    },
    methods: {
        scrollView(){
            document.querySelector('.inp').scrollIntoView(false)
            // document.body.scrollIntoView(false)
        },
        getHeight(evt){
            console.log('focus-------------------')
            var timer = {
                id:null,
                run:function (callback,time) {
                    this.id = window.setInterval(callback,time);
                },
                clean:function () {
                    var that = this;
                    this.id = window.clearInterval(that.id);
                }
            };
            var keyboardHeight = 0,screenHeight = window.innerHeight;
            
            if(!keyboardHeight){
               var that = this
                timer.run(function () {
                    if (screenHeight !== window.innerHeight) {
                        keyboardHeight = screenHeight-window.innerHeight;
                        that.$toast(keyboardHeight)
                        window.scrollTo(0, screenHeight);
                        timer.clean()
                    }
                }, 50)
            }
          
           
           
        }
    },
}
</script>
<style lang='scss' scoped>
    .box{
        position: relative;
        height:2000px;
    }
    .inp{
        position: absolute;
        bottom: 100px;
    }

</style>
