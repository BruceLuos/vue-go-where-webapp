<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或拼音"/>
    </div>
</template>
<script>

export default {
    name: 'CitySearch'
   
}
</script>


<style lang="stylus" scoped>
   @import '~@/assets/styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background: $bgColor
   .search-input
        text-align: center
        width 100%
        height .62rem
        line-height .62rem
        border-radius: .06rem
        color #666
        box-sizing: border-box
        padding 0 .1rem
       
</style>