<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive是Vue的内置组件，能在组件切换过程中将
    状态保留在内存中，防止重复渲染DOM。
    exclude指的是除了这个组件其他组件都会缓存，
    这里写Detail是为了让他点击不同推荐内容时显示的id会变化为当前内容的id
     -->
    <keep-alive exclude="Detail">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
