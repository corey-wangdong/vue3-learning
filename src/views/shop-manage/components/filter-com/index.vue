<template>
  <div class="box">
   <div class="input-box-container">
    <div class="input-box">
      <Input name="订单号"/>
    </div>
    <div class="input-box">
      <Input name="子订单号"/>
    </div>
    <div class="input-box">
      <Input name="手机号"/>
    </div>
    <div class="input-box">
      <Input name="用户 UK"/>
    </div>
   </div>
   <div class="button">
    <el-button>重置</el-button>
    <el-button>查询</el-button>
   </div>
  </div>
</template>

<script lang="ts" setup>
import Input from '../input/index.vue'

</script>

<style scoped>
.box {
  width: 100%;
  height: 100px;
  margin-top: 20px;
  padding-top: 20px;
  border: 1px solid #aba8a8;
  border-radius: 8px;
}

.input-box-container {
  display: flex;
  align-items: center;
}

.input-box {
    width: 250px;
    margin-right: 50px;
  }

.button {
  margin-top: 10px;
  text-align: right;
  padding-right: 50px;
}
</style>