<template>
  <div>
    <div class="left_menu_top">
      <div class="left_menu_item" style="height: 60px;width: 200px">
        <span>系统导航</span>
        <i class="el-icon-s-flag"></i>
      </div>
    </div>
    <el-menu>
      <el-submenu :index="String(item.id)" v-for="item in list" :key="item.id">
        <template slot="title">
          <span style="width: 100%">{{item.nodeName}}</span>
        </template>
        <template v-for="citem in item.children">
          <el-submenu :index="String(citem.id)" v-if="citem.children"
                      :key="citem.id">
            <template slot="title">
              <!--二级目录-->
              <span :title="citem.nodeName">{{citem.nodeName}}</span>
            </template>
            <!--三级-->
            <el-menu-item v-for="sitem in citem.children"
                          :index="String(sitem.id)"
                          :key="sitem.id" @click="opentab(citem)">
              <!--三级-->
              <span :title="sitem.nodeName">{{sitem.nodeName}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="String(citem.id)" v-else
                        :key="citem.id" @click="opentab(citem)">
            <!--二级-->
            <span :title="citem.nodeName">{{citem.nodeName}}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    name: "Main_left",
    props: ["list"],
    methods: {
      opentab(item) {
        debugger
        this.$emit("openAndThen", item);
      }
    }
  }
</script>

<style scoped>
  .left_menu_item {
    display: table-cell;
    vertical-align: middle;
    color: goldenrod;
    background: oldlace;
  }
</style>
