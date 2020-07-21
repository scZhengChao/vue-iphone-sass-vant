<template>
    <van-pull-refresh 
        v-model="refreshing" 
        @refresh="onRefresh" 
        class="list"
        success-duration='0'
    >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync='error'
          error-text='请求失败，点击重新加载'
          @load="onLoad"
        >
          <!-- <van-cell v-for="item in list" :key="item"  class="cell"> -->
              <div v-for="item in list" :key="item"  class="cell">
                <strong> {{item}}</strong>
              </div>
            
          <!-- </van-cell> -->
            <template slot='finished'>
                <van-divider :style="{ color: 'black', borderColor: 'black', padding: '0 2rem' }">我是有底线的</van-divider>
            </template>
        </van-list>
        
      </van-pull-refresh>
</template>

<script>
export default {
    name:'list',
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
            error:false,
            loadNum:0,
        };
    },
    methods: {
        onLoad() {
            // 注意未满 一屏的情况下 会重复加载 
            this.loadNum = this.loadNum + 1
            let data = []
            for(var i = 0 ; i < 10;i++){
                data.push(Math.round((Math.random()*100000)) ) 
            }
            if(this.loadNum >=2){
                data = []
            }
            console.log('load-----')
            new Promise((resolve,reject)=>{
                setTimeout(()=>{
        
                    resolve(data)
                },2000)
            }).then(res=>{  
                if(this.refreshing){
                    this.list = res
                    this.refreshing = false
                    this.$toast('刷新成功')
                }else if(res.length>0){
                    this.list = this.list.concat(res)
                }else if(res.length == 0){
                    this.finished = true
                }
                this.loading =false
            }).catch(err=>{
                this.error = true
            })
        },
        onRefresh() {
            this.loadNum = 0
            // 清空列表数据
            this.loading = false;
            this.onLoad();
        },
    },
};
</script>
<style lang='scss' scoped>
.list{
    min-height: 100rem;
}
.cell{
    height: 1rem;
    font-size: .3rem;
    text-align: center;
    line-height: 1rem;

}
</style>