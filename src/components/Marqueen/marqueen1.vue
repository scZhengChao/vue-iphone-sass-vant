<template>
    <div>
        <div id="box">
            <ul 
            id="con1" 
            ref="con1" 
            :class="{anim:animate==true}"
            >
                <li v-for='item in items' :key='item.name'>{{item.name}}</li>
            </ul>
        </div>
        <van-button type="danger" @click='changeList'>改变数据了</van-button>
    </div>
</template>

<script>
export default {
    name:'jsMarqueen',
    data(){return{
        animate:false,
        items:[
            {name:"马云"},
            {name:"雷军"},
            {name:"王勤"},
            {name:"张三"},
            // {name:"李四"},
            // {name:"王麻子"},
            // {name:"大王"},
        ],
        changge:false,
        timer:null
    }},
    created(){
        clearInterval
       this.timer = setInterval(()=>{
            this.animate=true
            setTimeout(()=>{
                this.action()
            },500)
       },1000)
        
    }, 
    mounted() {
        // this.$refs.con1.addEventListener('transitionend', this.action, false)
    }, 
    methods:{
        action(){
            this.items.push(this.items[0]);  // 将数组的第一个元素添加到数组的
            this.items.shift();               //删除数组的第一个元素
            this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
            if(!this.changge) return 
            this.items.push({
                name:'我的名字'+Math.random()
            })
            this.changge = false
        },
        changeList(){
            this.changge = true
        }
    }
}
</script>
<style lang='scss' scoped>
 #box{
            width: 300px;
            height: 90px;
            overflow: hidden;
            padding-left: 30px;
            border: 1px solid black;
        }
        .anim{
            transition: all 0.5s linear;
            /* margin-top: -30px; */
            transform: translateY(-30px);
        }
        #con1 li{
            list-style: none;
            line-height: 30px;
            height: 30px;
        }
        #con1{
            height: 90px;
        }
    
</style>
