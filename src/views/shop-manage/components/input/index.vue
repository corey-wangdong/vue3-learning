<template>
  <div class="input-box">
    <div class="input-name">{{props.name}}: </div>
    <el-input
      type="text"
      placeholder="Please input"
    />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      default:''
    },
    value: {
      type: String,
      default:''
    }
  })
</script>

<style type="scss" scoped>
.input-box {
  width: 100%;
  display: flex;
  align-items: center;
}


.input-name {
    width: 100px;
}
</style>