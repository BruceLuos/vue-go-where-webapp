<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img class="gallary-img" :src="item"/>
                </swiper-slide>
        <!-- Optional controls 分页 -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data : function() {
        return {
            swiperOptions:{
                pagination: '.swiper-pagination',
                paginationType : 'fraction',
                // 在组件有变化的时候更新尺寸
                observeParents: true,
                observer: true
            }

        }
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close')
        }
    }
}
</script>
<style lang="stylus" scoped
    .container >>> .swiper-container
        overflow inherit 
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        // 绝对定位
        position fixed 
        left 0
        right 0
        top 0
        bottom 0
        background: #000
        .wrapper
            height 0
            width 100%
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #ffffff
                bottom -1rem
          
                

</style>
