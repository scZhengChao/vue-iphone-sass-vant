<template>
  <div class="app">
    <span class="test">11{{a}}</span>
      <div class="routes">
          <router-link v-for='(item,index) of routes' :key='item.name'  active-class="router-activ"  exact :to="{path:item.path}">{{item.name}}{{index !==routes.length-1 ? '|':' '}}</router-link>
      </div>
    
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Axios from '@/utils/serve.js'
import CryptoJs from 'crypto-js'
import wx from 'weixin-jsapi'
import { mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    
  },
  computed:{
    routes(){
        return this.$router.options.routes
    },
    ...mapGetters([
        'a'
    ])
  },
  created(){
    // console.log(document.documentElement.clientWidth)
    // console.log(document.documentElement.getBoundingClientRect())
    // console.log(process.env.VUE_APP_SECRET)
    // console.log(process.env)
    // console.log( encodeURIComponent(window.location.href))
    // console.log(wx)
//    console.log(screen.availWidth)
//    console.log(document.documentElement.getClientRects()[0].width)
//    this.$toast(screen.availWidth+'screen')
//    this.$toast(document.documentElement.getClientRects()[0].width,'documentElement')

    // console.log(CryptoJs)
  },
  mounted() {
    // console.log(this.$router)
      setTimeout(()=>{
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            console.log(WeixinJSBridge)
        }
        
      },2000)
  },
  methods: {
    sign(){
        getSign({reqUrl: encodeURIComponent(location.href)}).then(res => {
            if (res.code === 2000) {
                let cont = res.content
                cont.jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo', 'chooseImage', 'uploadImage']
                wx.config({
                    debug: false,
                    appId: api.appid, // 和获取Ticke的必须一样------必填，公众号的唯一标识
                    timestamp: cont.timestamp, // 必填，生成签名的时间戳
                    nonceStr: cont.nonceStr, // 必填，生成签名的随机串
                    signature: cont.signature, // 必填，签名，见附录1
                    // 需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间，请求相册选中并发送图片
                    jsApiList: jsApiList
                })
                wx.ready(function () {
                    callback && callback()
                })
                wx.error(function (res) {
                    console.log('weixin:' + res.msg)
                })
            } else {

            }
        })
    }
  }
}
</script>
<style lang="scss" scoped>

    .routes{
        display: flex;
        justify-content: center;
        height: 50px;
        align-items: center;
        color: green;
    }
    .router-activ{
        color: red;
    }
    .app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .view{
        flex: 1;
    }

</style>
