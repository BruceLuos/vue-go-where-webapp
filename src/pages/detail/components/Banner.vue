<template>
<div>
    <div class="banner" @click="handlebannerClick">
        <img class="banner-img" :src="bannerImg" />
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe678;</span>
                {{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <common-gallary 
    :imgs="bannerImgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    >
    </common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array

    },
    data () {
        return {
            showGallary: false
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handlebannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden 
    height 0
    padding-bottom: 55%
    width 100%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #ffffff
        // 给banner-info一个渐变的效果
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex: 1
            padding 0 .2rem
            font-size .32rem
        .banner-number
            padding: 0 .2rem
            margin-top .14rem
            height .32rem
            line-height .32rem
            border-radius .2rem
            bakcground rgba(0, 0, 0, 0.8)
            font-size .24rem
            .banner-icon
                font-size .24rem
</style>
