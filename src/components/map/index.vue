<template>
<div  id="map-container">

</div>
</template>

<script>
export default {
    name:'my-map',
    data(){return{
        map:null,
        geo:null
    }},
    mounted() {
        var that = this
        this.map = new AMap.Map('map-container',{
            zoom:11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode:'3D',//使用3D视图,
            resizeEnable: true,
            position:[116.39, 39.9],//位置
            icon: new AMap.Icon({            
                size: new AMap.Size(40, 50),  //图标的大小
                image: "https://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
                imageOffset: new AMap.Pixel(0, -60)
            })        
        });
        // AMap.Geolocation 插件 高德
        this.map.plugin('AMap.Geolocation', function () {
            that.geo  = new AMap.Geolocation({
                enableHighAccuracy: true,//是否使用高精度定位，默认:true
                timeout: 3000,          //超过10秒后停止定位，默认：无穷大
                maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true,        //显示定位按钮，默认：true
                buttonPosition: 'RT',    //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
         
            that.map.addControl(that.geo);
            that.geo.getCurrentPosition();
            AMap.event.addListener(that.geo, 'complete', that.onComplete);//返回定位信息
            AMap.event.addListener(that.geo, 'error', that.onError);      //返回定位出错信息
        });
        var gps = [longitude,latitude]
        AMap.convertFron(gps,'gps',function(status,result){
            
        })
    },
    methods:{
        onComplete(position){
            console.log(position,'------position--------')
        },
        onError(err){
            console.log(err,'-------------err-----------')
        }
    },
    beforeDestroy() {
        
    },
}
</script>
<style lang='scss' scoped>
   #map-container{
       height: 100px;
       width: 500px;
   }
</style>