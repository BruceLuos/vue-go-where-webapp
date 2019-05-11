<template>
<div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <!-- 为页面撑开大小，使他可以滚动 -->
    <div class="content"></div>
</div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
    name: 'Detail',
    components: {
        DetailBanner,
        DetailHeader
    }
}
</script>
<style lang="stylus" scoped>
    .content
        height :50rem

</style>
