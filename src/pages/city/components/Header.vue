<template>
    <div class="header">
        城市选择
        <router-link to="/">
        <div class="iconfont header-back">&#xe606;</div>
        </router-link>
    </div>
</template>
<<script>
export default {
    name: 'CityHeader'
}
</script>


<<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
    .header
        position: relative
        overflow: hidden
        background: $bgColor
        height: 0.86rem
        line-height: 0.86rem
        text-align: center
        color: #fff
        font-size: .32rem
        .header-back
            position: absolute
            top: 0
            left: 0
            // float: left
            text-align: center
            font-size: 0.5rem
            width: 0.8rem
            color: #fff
            


</style>