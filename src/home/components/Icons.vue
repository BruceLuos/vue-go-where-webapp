<template>
    <div class="icons">
        <swiper >
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page"
                :key="item.id"
                >
                    <div class="icon-image">
                    <img class="icon-imagecontent" :src='item.imgUrl'/>
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
    
</template>
<script>
export default {
    name: 'HomeIcons',
    props:{
        list: Array
    },
        computed : {
            // 当图标超过8个的时候，会把多出来的添加到第二页。pages=1/8=0  或  pages=9/8=1
            pages () {
                const pages = []
                this.list.forEach((item,index) =>{
                    const page = Math.floor(index / 8)
                    if(!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
// .icons
//     overflow: hidden
//     height : 0
//     padding-bottom: 50%
    // background: green 
    .icons >>> .swiper-container
        height: 0
        padding-bottom:50%
    .icon
        position relative
        overflow: hidden
        float: left
        width : 25%
        height: 0
        padding-bottom: 25%
        // background: red
        .icon-image
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            box-sizing : border-box
            padding: .1rem
            // background: blue
            .icon-imagecontent
                display: block
                margin: 0 auto 
                height :100%
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height : .44rem
            text-align : center
            color : $darkTextColor
            overflow hidden
            white-space nowrap
            text-overflow ellipsis





</style>
