<template>
  <div class="box">
   <div class="input-box-container">
    <div class="input-box">
      <Input
        name="订单号"
        type="orderNum"
        :value="loginData.data.orderNum"
        :handleChange="handleChange"
      />
    </div>
    <div class="input-box">
      <Input
        name="子订单号"
        type="subOrderNUm"
        :value="loginData.data.subOrderNUm"
        :handleChange="handleChange"
      />
    </div>
    <div class="input-box">
      <Input
        name="手机号"
        type="phoneNum"
        :value="loginData.data.phoneNum"
        :handleChange="handleChange"
      />
    </div>
    <div class="input-box">
      <Input
        name="用户 UK"
        type="userUk"
        :value="loginData.data.userUk"
        :handleChange="handleChange"
      />
    </div>
   </div>
   <div>
    <div class="date-picker-container">
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        range-separator="-"
        size="small"
        start-placeholder="Start date"
        end-placeholder="End date"
      />
    </div>
  </div>
   <div class="button">
    <el-button @click="handleReset">重置</el-button>
    <el-button @click="props.handleSearch(loginData.data)">查询</el-button>
   </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { ref } from 'vue'
import Input from '../input/index.vue'

const value1 = ref('')

const initState = {
  orderNum:'',
  subOrderNUm:'',
  phoneNum:'',
  userUk:''
}
let loginData = reactive({
  data: JSON.parse(JSON.stringify(initState))
});

const props = defineProps({
  handleSearch:{
    type: Function,
    default: () => {}
  }
})

const handleReset = () => {
  console.log('value1----',value1.value);
  loginData.data = initState;
  props.handleSearch(loginData.data, true)
}

const handleChange = (type, value) => {
  switch(type) {
    case 'orderNum':
      return loginData.data.orderNum = value
    case 'subOrderNUm':
      return loginData.data.subOrderNUm = value
    case 'phoneNum':
      return loginData.data.phoneNum = value
    case 'userUk':
      return loginData.data.userUk = value
  }
}

</script>

<style scoped>
.box {
  width: 100%;
  /* height: 100px; */
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #aba8a8;
  border-radius: 8px;
  box-sizing: border-box;
}

.input-box-container {
  display: flex;
  align-items: center;
}

.input-box {
    width: 250px;
    margin-right: 50px;
  }

.date-picker-container {
  width: 20%;
  margin-top: 20px;
  margin-left: 10px;
}
.button {
  margin-top: 10px;
  text-align: right;
  padding-right: 50px;
}
</style>