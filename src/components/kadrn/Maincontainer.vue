<template>
  <div class="main" style="width: 100%;height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <main_left :list="leftlist" @openAndThen="openAndThen"></main_left>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <span>{{this.$route.query.username}} <i class="el-icon-setting" style="margin-right: 15px"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="logout">退出登录</span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span @click="userinfo" type="primary">个人中心</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>

        <el-main>
          <!--          <el-table :data="tableData">-->
          <!--            <el-table-column prop="date" label="日期" width="140">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column prop="name" label="姓名" width="120">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column prop="address" label="地址">-->
          <!--            </el-table-column>-->
          <!--          </el-table>-->
          <main_tab></main_tab>
        </el-main>
        <el-drawer
          title="个人中心"
          :visible.sync="drawer"
          :append-to-body="true"
          :with-header="false">
          <div class="drawer-top" style="height: 100px;text-align: center">
            <h3>个人中心</h3>
            <div class="drawer-user" style="height: 100px">
              <span>{{msg}}</span>
              <span>{{this.user.password}}</span>
              <span>{{this.user.id}}</span>
            </div>
          </div>
        </el-drawer>
      </el-container>
    </el-container>
    <component></component>
  </div>
</template>

<script>
  import main_left from "./Main_left"
  import {treenode, userinfo} from "../../api/kadrn"
  import bus from "../../assets/js/eventBus"
  import helloword from "../../components/HelloWorld"
  import main_tab from "./Main_tab"

  export default {
    name: 'Maincontainer',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        drawer: false,
        show: true,
        leftlist: [],
        user: {
          'id': '',
          'username': '',
          'password': ''
        },
        msg: '',
        tableData: Array(20).fill(item)
      }
    },
    components: {
      main_left,
      helloword,
      main_tab
    },
    mounted() {
      this.init();
    },
    create() {
    },
    methods: {
      init() {
        // bus.$on("sendUser", data => {
        //   this.user = data;
        //   console.log(this.user.username);
        // }),
        treenode().then(res => {
          if (res.data.message === '成功') {
            this.leftlist = res.data.data;
            console.log(this.leftlist);
          }
        })
      },
      openAndThen(item) {
        this.show = false
      },
      logout() {
        this.$router.push({
          path: '/'
        })
      },
      userinfo() {
        this.drawer = true;
        let username = this.$route.query.username;
        userinfo({"username": username}).then(res => {
          if (res.data.message === '成功') {
            debugger
            this.user = res.data.data;
            this.msg = this.user.username;
          }
        })
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
