<template>
  <div class="title-box">
    {{props.title}}
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  title: {
    type: String,
    default: ""
  }
})

</script>


<style scoped>
.title-box {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: #000;
  background-color: #fff;
}
</style>