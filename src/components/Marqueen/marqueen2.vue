<template>
    <div>
        <div class="stage">
            <div class="inner-container" :style='styleObject'>
                <p class="text" v-for="(text, index) in arr" :key="index">{{text}}</p>
            </div>
        </div>
        <van-button type="danger" @click='changeList'>改变数据了</van-button>
    </div>
</template>

<script>
export default {
    name:'cssMarqueen',
    data(){return{
        animate:false,
        arr: [
                '1 不是被郭德纲发现的，也不是一开始就收为徒弟。',
                '2 现在雅阁这个状态像极了新A4L上市那段日子。',
                '3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色',
                '4 然后各种机油门、经销商造反什么的幺蛾子。',
                '5 看五月销量，建议参考A4，打8折吧。', 
                '1 不是被郭德纲发现的，也不是一开始就收为徒弟。', 
                '2 现在雅阁这个状态像极了新A4L上市那段日子。',
                '3 低配太寒碜，各种需要加装，中配定价过高，又没啥特色',
            ],
        styleObject:{
            animationDuration:'5s'
        }
    }},
    created(){
       
        
    }, 
    mounted() {
       this.move()
    }, 
    methods:{
        move(){
            var styleEl = document.createElement('style');
            styleEl.type = 'text/css';
            styleEl.id = 'styles_js';
            styleEl.appendChild(document.createTextNode(`@keyframes myMove {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(-150px);
                }
            } `));
            document.getElementsByTagName('head')[0].appendChild(styleEl);
        },
        changeList(){
            this.arr.splice(5,0,'这是我新添加的'+Math.floor(Math.random()*100))
            var style = document.querySelector('#styles_js')
            style.innerHTML = `@keyframes myMove {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(-${(this.arr.length-3)*30}px);
                }
            } `
            this.styleObject.animationDuration = this.arr.length+'s'
            
        }
    }
}
</script>
<style lang='scss' scoped class="move">
        .stage{
            height: 90px;
            overflow: hidden;
            margin: 50px auto;
            border: 1px solid black;
        }
        .inner-container {
            animation: myMove 5s linear infinite;
            animation-fill-mode: forwards;
        }
        p{
            height: 30px;
            margin: 0;
        }
        /* 文字无缝滚动 */
        
    
</style>
