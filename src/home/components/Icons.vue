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
    data :function(){
        return {
            iconList:[{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '热门景点'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc: '动植物园'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
                desc: '玻璃栈道'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png' ,
                desc: '东莞踏青'
            },{
                id: '0005',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
                desc: '长隆度假区'
            },{
                id: '0006',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/4573132ba33603c8c3dbacc4d46a1ac6.png',
                desc: '罗浮山'
            },{
                id: '0007',
                imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/cba147cf6cfcea7109d0bff6aac6f626.png',
                desc: '香市动物园'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png' ,
                desc: '隐贤山'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '热门景点'
            }]
        }
    },
        computed : {
            // 当图标超过8个的时候，会把多出来的添加到第二页。pages=1/8=0  或  pages=9/8=1
            pages () {
                const pages = []
                this.iconList.forEach((item,index) =>{
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
