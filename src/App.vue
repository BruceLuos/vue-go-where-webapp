<template>
  <div id="app">
    <!-- 显示的是当前路由地址所对应的内容 -->
    <!-- keep-alive是Vue的内置组件，能在组件切换过程中将
    状态保留在内存中，防止重复渲染DOM。 -->
    <keep-alive>
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
