<template>
<div class="header">
<div class="header-left">
    <div class="iconfont back-icon">&#xe606;</div>
</div>
<div class="header-input">
    <span class="iconfont">&#xe607;</span>
    输入城市/景点/游玩景点
    </div>
<div class="header-right">
    {{this.city}}
    <span class="iconfont city-icon">&#xe608;</span>
    </div>
</div>
</template>


<script>
export default{
    name:'HomeHeader',
    props: {
        city: String
    }
}

</script>
<style lang="stylus" scoped>
//  1rem = html font-size =50px
@import '~@/assets/styles/varibles.styl'
.header
    display: flex
    line-height: .86rem
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
        width: 1.24rem
        float: right
        text-align: center
        font-size: .3rem
        .city-icon
            font-size: .4rem
</style>

