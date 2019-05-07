<template>
<div class="header">
    <div class="header-left">
        <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
    <span class="iconfont">&#xe607;</span>
    输入城市/景点/游玩景点
    </div>
    <router-link to="/city">
    <!-- 页面跳转 -->
    <div class="header-right">
    {{this.city}}
    <span class="iconfont city-icon">&#xe608;</span>
    </div>
    </router-link>
</div>
</template>


<script>
import { mapState } from 'vuex'
export default{
    name:'HomeHeader',
    computed: {
        // 把vuex里的数据映射到这个组件的的计算属性里
        // 这里是把city这个公共数据映射到city这个计算属性里
        ...mapState(['city'])
    }
}

</script>
<style lang="stylus" scoped>
//  1rem = html font-size =50px
@import '~@/assets/styles/varibles.styl'
.header
    display: flex
    line-height: .86rem
    height: .86rem
    background: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        .back-icon
            text-align: center
            font-size: .5rem
    .header-input
         flex: 1
         line-height : .64rem
         height: .64rem
         margin-top: .12rem
         margin-bottom: .12rem
         background: #fff
         border-radius: .1rem
         color: #ccc
    .header-right
        min-width: 1.04rem
        padding 0 .1rem
        float: right
        text-align: center
        font-size: .2.5rem
        color: #fff
        .city-icon
            font-size: .3.5rem
</style>

