<template>
  <!-- <div>这个是左侧导航</div> -->
  <el-scrollbar wrap-class="sidebar-scrollbar" view-class="sidebar-box" :native="false">
    <el-menu
      :show-timeout="200"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  }
}

</script>
