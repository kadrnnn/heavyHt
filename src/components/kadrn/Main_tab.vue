<template>
  <el-container class="main_tab_box">
    <el-header>
      <el-tabs v-model="mainTabsValue" type="border-card" closable @tab-remove="removeTab" class="main_tab"
               @tab-click='tabClick' @contextmenu.prevent.native="openMenu">
        <el-tab-pane label="个人工作台" name="个人工作台" key="个人工作台" path="/welcome"></el-tab-pane>
        <el-tab-pane v-for="(item,index) in tabArr" :key="index+new Date().getTime()" :label="item.label"
                     :name="item.name"
                     :index="index"
                     :url="item.url"></el-tab-pane>
      </el-tabs>
      <ul class='contextmenu' v-show="visible" :style="{left:left+'px'}">
        <li @click="closeOthersTags" v-if="isItemContext">关闭其他</li>
        <li @click="closeAllTags">关闭全部</li>
      </ul>
    </el-header>
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <router-view :key="$route.params.t"></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Main_tab",
    data() {
      return {
        left: 0,
        visible: false,
        selectedTag: {},
        isItemContext: false
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .main_tab {
    border-radius: 0px !important;
    border-top: none !important;
    box-shadow: none !important;
    border-bottom: none
  }
</style>
