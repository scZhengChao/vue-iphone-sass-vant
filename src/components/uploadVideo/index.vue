<template>
    <div>
        <van-uploader v-model="fileList"  :max-count="10" accept='video/*' />
        <!-- <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player> -->

        

        <video 
            src="http://vjs.zencdn.net/v/oceans.mp4" 
            muted  
            :poster="poster"
            preload="auto"
            style="object-fit:contain;border: 1px solid black;" 
            @click='fullScreen' 
            ref="myvideo"
            width="400px"
            height="400px"
            crossOrigin='*'
        >
            你的浏览器不支持video
        </video>
    </div>
</template>

<script>

export default {
    name:'myuploadVideo',
    data(){return{
        fileList:[

        ],
        playerOptions : {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                type: "",
                src: 'http://vjs.zencdn.net/v/oceans.mp4'//url地址          
                // src: "" //url地址
            }],
            poster: "", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
            }
        },
        controls:false,
        poster:null
    }},
    mounted() {
        this.$refs.myvideo.addEventListener('loadeddata',e=>{
            var canvas = document.createElement('canvas')
            canvas.width = this.$refs.myvideo.width
            canvas.height = this.$refs.myvideo.height
            canvas.getContext('2d').drawImage(this.$refs.myvideo,0,0,canvas.width,canvas.height)
            var dataURL = canvas.toDataURL("image/png")
            this.poster = dataURL
        })

    },
    methods: {
        myafterRead(file) {
           
           
        },
        fullScreen(){
            this.$refs.myvideo.requestFullscreen()
            this.$refs.myvideo.muted = true
            this.$refs.myvideo.loop = true
            this.$refs.myvideo.play()
      
        }
    },
}
</script>
<style lang='scss' scoped>

</style>

  

