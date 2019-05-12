<template>
<div>
    <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <!-- 为页面撑开大小，使他可以滚动 -->
    <div class="content">
        <detail-list :list="list"></detail-list>
    </div>
</div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data() {
        return {
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
            list:[]
        }
    },
    mounted() {
        this.getDetailInfo()   
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret &&res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height :50rem

</style>
