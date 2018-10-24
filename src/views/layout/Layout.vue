<template>
  <div class="app-wrapper">
    <!-- 头部导航 -->
    <Header></Header>
    <!-- 左侧导航 -->
    <Sidebar></Sidebar>
    <!-- 右侧内容 -->
    <div class="main-container">
      <Container></Container>
    </div>
  </div>

</template>

<script>
  import {
    Header,
    Sidebar,
    Container
  } from './components'

  export default {
    name: 'Layout',
    components: {
      Header,
      Sidebar,
      Container
    }
  }

</script>
