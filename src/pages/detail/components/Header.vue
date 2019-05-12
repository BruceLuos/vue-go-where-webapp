<template>
<div>
    <router-link 
    tag="div" 
    to="/" 
    class="header-abs"
    v-show="showAbs"
    >
        <div class="iconfont header-icon">&#xe606;</div>
    </router-link>
<div 
class="header-fixed" 
v-show="!showAbs"
:style="opacityStyle"
>
    <router-link to="/" >
    <div class="iconfont header-fixed-back">&#xe606;</div>
    </router-link> 景点详情
</div>
</div>
</template>

<script>

export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            opacityStyle: {
                // 隐形范围0-1
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            //实现下拉时的渐隐渐现效果
            const top = document.documentElement.scrollTop
            if (top>60) {
                let opacity = top/140
                opacity = opacity > 1 ? 1:opacity
                this.opacityStyle = { opacity }
                // console.log(opacity)
                this.showAbs = false
            } else {
                this.showAbs = true
            }
            
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    // 全局变量的解绑
    deactivated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header-abs
    position absolute 
    left .2rem
    top .2rem
    width .72rem
    height .72rem
    line-height .72rem
    border-radius :.36rem
    text-align center
    background rgba(0,0,0, .8)
    .header-icon
        color #fff
        font-size .5rem
.header-fixed
// Fixed固定定位，只针对浏览器窗口定位，上下左右，不会随着窗口大小改变，固定不变，例如固定位置的小广告。
    z-index 2
    position: fixed
    top 0
    left  0
    right 0
    overflow: hidden
    background: $bgColor
    height: 0.86rem
    line-height: 0.86rem
    text-align: center
    color: #fff
    font-size: .32rem
    .header-fixed-back
        position: absolute
        top: 0
        left: 0
        // float: left
        text-align: center
        font-size: 0.5rem
        width: 0.8rem
        color: #fff
</style>
