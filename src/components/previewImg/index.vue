<template>
    <div>
        <img src="../../assets/img/02index_munu_03.jpg" alt=""  preview="0" preview-text="描述文字1">
        <img src="../../assets/img/03index_0_r2_c1.jpg" alt="" preview="0" preview-text="描述文字2">
        <img src="../../assets/img/05index_fav_02.jpg" alt="" preview="0" preview-text="描述文字3">
        <img src="../../assets/img/05index_fav_03.jpg" alt="" preview="0" preview-text="描述文字4">
        <img src="../../assets/img/05index_fav_05.jpg" alt="" preview="1" preview-text="描述文字5">

    </div>
</template>

<script>
export default {
    created() {
        let data = this.$route.query.h
        console.log(data)
        
    },
}
</script>
<style lang='scss' scoped>

</style>