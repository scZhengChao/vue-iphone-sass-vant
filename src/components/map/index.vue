<template>
<div  id="map-container">

</div>
</template>

<script>
export default {
    name:'my-map',
    data(){return{
        map:null
    }},
    mounted() {
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
    },
}
</script>
<style lang='scss' scoped>
   #map-container{
       height: 100rem;
   }
</style>