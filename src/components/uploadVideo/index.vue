<template>
    <div class="box">
        <!-- <van-uploader v-model="fileList"  :max-count="10" accept='video/*' /> -->
        <!-- <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player> -->

        <!-- src="http://vjs.zencdn.net/v/oceans.mp4"  -->
            <!-- <div class="controls">
                controls
            </div> -->
            <!-- x5-video-player-type="h5"
            x5-playsinline
            webkit-playsinline="true" 
            x-webkit-airplay="allow" 
                   x5-video-orientation="protraint"
            x5-video-player-fullscreen="true"
            playsinline="true" -->

            <div  class="videoBox" >
                <div class="videoBox_controls" @click='videoBoxfullScreen'>
                    这是我的控制样式；可以随心所欲了；哈哈哈
                </div>
                <video 
                    src="http://vjs.zencdn.net/v/oceans.mp4"
                    muted  
                    class="myVideo"
                    :poster="poster"
                    preload="auto"
            
                    x5-playsinline="" 
                    playsinline=""
                        controls
                    
                    x-webkit-airplay="allow"
                    webkit-playsinline=""
                    x5-video-player-fullscreen="true"
                    x5-video-player-type="h5"
                    style="object-fit:contain;border: 1px solid black;" 
                    @click='fullScreen' 
                    ref="myvideo"
                    width="400px"
                    height="400px"
                    loop
                    autoplay
                    crossOrigin='*'
                >
                    你的浏览器不支持video
                </video>
            </div>
        
      
    
        <!-- <div id="mse">
            <div>asfasgag</div>
        </div> -->
    </div>
</template>

<script>
// import DPlayer from 'dplayer';
// import Player from 'xgplayer';
// import '../../custom/.xgplayer/skin'
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
        poster:null,
        Doptions:{
            
        }
    }},
    mounted() {
        // this.$refs.myvideo.addEventListener('loadeddata',e=>{
        //     var canvas = document.createElement('canvas')
        //     canvas.width = this.$refs.myvideo.width
        //     canvas.height = this.$refs.myvideo.height
        //     canvas.getContext('2d').drawImage(this.$refs.myvideo,0,0,canvas.width,canvas.height)
        //     var dataURL = canvas.toDataURL("image/png")
        //     this.poster = dataURL
        // })
        // const dp = new DPlayer({
        //     container: document.getElementById('dplayer'),
        //     autoplay: true,
        //     theme: '#FADFA3',
        //     loop: true,
        //     lang: 'zh-cn',
        //     screenshot: true,
        //     preload: 'auto',
        //     volume: 0.7,
        //     mutex: true,
        //     type: 'auto',
        //     video: {
        //         url: 'http://vjs.zencdn.net/v/oceans.mp4',
        //     },
        // });
        // let player = new Player({
        //     id: 'mse',
        //     url: 'http://vjs.zencdn.net/v/oceans.mp4',
        //     width: 200,
        //     height: 200,
        // });
    },
    methods: {
        myafterRead(file) {
           
           
        },
        videoBoxfullScreen(){
            let videoBox = document.querySelector('.videoBox')
            if (videoBox.requestFullscreen) {
                videoBox .requestFullscreen();
            } else if (videoBox .mozRequestFullScreen) {
                videoBox .mozRequestFullScreen();
            } else if (videoBox .webkitRequestFullScreen) {
                videoBox .webkitRequestFullScreen();
            }
        },
        fullScreen(e){
            console.log(e.target)
            // this.$refs.myvideo.requestFullscreen()
            // this.$refs.myvideo.muted = true
            // this.$refs.myvideo.loop = true
            // this.$refs.myvideo.play()
            // e.target.requestFullscreen()
            // this.$refs.myvideo.muted = true
            // this.$refs.myvideo.loop = true
            
            e.target.play()
      
        }
    },
}
</script>
<style lang='scss' >
#mse{
    width: 100px;
    height: 100px;
}


.video-player {
    width: 100px;
    height: 100px;
}
.box{
    position: relative;
  

}
.videoBox_controls{
    position: 'absolute';
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}
.videoBox{
    width: 200px;
    height: 200px;
    position: relative;
}
.myVideo{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.controls{
    position: absolute;
    top: 0;
    color: orange;
    background: white;
    z-index: 9999999999;
    top: 20px;
}

video::-webkit-media-controls-fullscreen-button{ 
    display: none; 
}

.myVideo::-webkit-media-controls-enclosure{
    display: none!important;
}
.myVideo::-webkit-media-controls {
    display: none!important;
}
.myVideo::-webkit-media-controls-panel{
    display: none!important;
}
.myVideo::-webkit-media-controls-fullscreen-button {
    display: none!important;
}
</style>

  

