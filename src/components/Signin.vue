<template>
  <div>
    <el-form label-width="120px" :model="searchable" ref="formRef">
      <el-row>
        <el-col :span="8">
          <el-form-item label="请输入昵称" prop="name" :rules="$filter_rules({required:true})">
            <el-input v-model="searchable.name"
                      placeHolder="请输入昵称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请输入账号" prop="username" :rules="$filter_rules({required:true})">
            <el-input v-model="searchable.username"
                      placeHolder="请输入账号"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请输入密码" prop="password" :rules="$filter_rules({required:true,type:'password'})">
            <el-input v-model="searchable.password"
                      placeHolder="请输入密码" show-password></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请再次输入密码" prop="passwordconfirm" :rules="$filter_rules({required:true,type:'password'})">
            <el-input v-model="searchable.passwordconfirm"
                      placeHolder="请再次输入密码" show-password></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请输入联系电话" prop="telephone" :rules="$filter_rules({required:true,type:'mobile'})">
            <el-input v-model="searchable.telephone"
                      placeHolder="请输入联系电话"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <el-col :span="8">
        <el-button @click="submitForm('formRef')">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {signin} from '../api/kadrn'

  export default {
    name: 'Signin',
    data() {
      return {
        searchable: {
          name: '',
          username: '',
          password: '',
          passwordconfirm: '',
          telephone: ''
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          debugger
          if (valid) {
            if (this.searchable.password === this.searchable.passwordconfirm) {
              this.$confirm("是否注册", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: 'warning'
              }).then(() => {
                signin(this.searchable).then(res => {
                  if (res.data.message === '成功') {
                    this.$notify({
                      title: "提示",
                      message: "注册" + res.data.message,
                      type: "info"
                    })
                    this.$router.push({
                      path: '/'
                    })
                  } else {
                    this.$notify({
                      title: "提示",
                      message: res.data.message,
                      type: "warning"
                    })
                  }
                })
              })
            } else {
              this.$alert("两次输入密码不符")
            }
          }
        })
      },
      validateForm() {
        let flag = false;
        this.$refs.formRef.validate(valid => {
          if (valid) {
            flag = true
          } else {
            flag = false
          }
        })
        return flag
      }
    }
  }
</script>

<style scoped>

</style>
