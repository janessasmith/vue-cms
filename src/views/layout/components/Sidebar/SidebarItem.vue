<template>
  <div class="sidebar">
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <el-submenu :index="index+''" v-if="!item.leaf">
        <template slot="title">
          <i :class="item.iconCls"></i>
          {{item.name}}
        </template>
        <el-menu-item v-for="child in item.children" 
                      :index="child.path"
                      :key="child.path" 
                      v-if="!child.hidden">
                      {{child.name}}
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
        <i :class="item.iconCls"></i>
        {{item.children[0].name}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem'
  }

</script>
