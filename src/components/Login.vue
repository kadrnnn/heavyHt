<template>
  <div class="login" style="width: 100%;height: 100%;position: center">
    <div class="main-form">
      <div class="main-formIn">
        <h2>用户登录</h2>
        <div class="fromItem">
          <el-form label-width="120px" :model="searchable">
            <el-row>
              <el-col :span="8">
                <el-form-item label="输入用户名">
                  <el-input v-model="searchable.username"
                            placeHolder="输入用户名"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="输入密码">
                  <el-input v-model="searchable.password"
                            placeHolder="输入密码" show-password></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item>
                  <el-button type="primary" @click="login">登录</el-button>
                  <el-button @click="setup">注册</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {login} from '../api/kadrn'
  import bus from '../assets/js/eventBus'

  export default {
    name: 'Login',
    data() {
      return {
        searchable: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        login(this.searchable).then(res => {
          if (res.data.message === '成功') {
            this.$notify({
              title: "提示",
              message: res.data.message,
              type: 'info'
            })
            let data = res.data;
            //this.$store.commit('set_token', data["Authorization"]);
            // if (store.state.token) {
            //   this.$router.push('/')
            //   console.log(store.state.token)
            // } else {
            //   this.$router.replace('/login');
            // }
            //bus.$emit('sendUser', res.data.data)
            this.$router.push({
              path: '/maincontainer/' + new Date().getTime(),
              query: {username: res.data.data.username}
            })
          }
        })
      },
      setup() {
        this.$router.push({
          path: '/signin/' + new Date().getTime()
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    background-image: url("../assets/image/bg.jpg");
    color: tomato;
  }

  .login .main-form {
    display: flex;
    width: 100vw;
    height: 38vh;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -19vh;
    margin-left: -50vw;
  }

  .login .main-form .main-formIn {
    height: 100%;
    width: 100%;
    padding: 0% 8%;
  }

  .login .main-form .main-formIn .fromItem {
    padding: 0% 30%;
    width: 100%;
    height: 100%;
  }
</style>
