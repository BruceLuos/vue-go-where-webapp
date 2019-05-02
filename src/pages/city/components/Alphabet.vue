<template>
    <ul class="list">
        <li 
        class="item" 
        v-for="(item, key) of cities" 
        :key="key"
        :ref="key"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
        {{key}}
        </li>
    </ul>
</template>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    // 创建了一个计算属性里面存着数组['A', 'B','C']
    computed: {
        letters() {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
           
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus) {
                // 字母到offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置 
                // const startY = this.$refs['A'][0].offsetTop
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() =>{
                     // 手指位置减79
                const touchY = e.touches[0].clientY -79
                // 字母所在的区域的下标
                const index = Math.floor((touchY - this.startY) /20)
                // 当滑到字母所在位置后，展示该字母里的内容
                if ( index >=0 && index < this.letters.length) {
                    this.$emit('change', this.letters[index])
                }
                // console.log(touchY)
                // console.log(startY)
                // console.log(index)
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position: absolute 
    right 0
    top: 1.6rem
    bottom 0
    width .4rem
    .item
        line-height .44rem
        text-align center
        color $bgColor

   
</style>