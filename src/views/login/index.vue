<template>
  <div>
    我是登录页面
  </div>

  账号:  <el-input
          type="text"
          v-model="loginInfo.username"
          placeholder="Please input"
        />
  密码:  <el-input
          type="password"
          v-model="loginInfo.password"
          placeholder="Please input"
        />

  <button @click="handelLogin" >点击登录</button>
</template>

<script lang="ts" setup>

import { ElMessage } from "element-plus";
import { reactive } from "vue";
import { useRouter } from "vue-router"
const router = useRouter()

let loginData = reactive({
  loginInfo:{
    username: "",
    password: "",
  }
})

const {loginInfo} = loginData;

const handelLogin = () => {
  const {username, password} = loginInfo;

  if(username === 'admin' && password==='123456') {
    ElMessage({
      message: '登录成功',
      grouping: true,
      type: 'success',
    })
    router.push('/dashboard');
  }else {
    ElMessage({
      message: '账号或密码不对',
      grouping: true,
      type: 'error',
    })
  }
}

</script>