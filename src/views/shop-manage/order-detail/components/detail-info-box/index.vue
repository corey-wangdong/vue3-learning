<template>
  <div class="info-box">
    <div class="info-box-title">
      <div>{{props.title}}</div>
      <div class="sub-title">
        <router-link to="/dashboard/shop/refund-single">{{props.subTitle}}</router-link>
      </div>
    </div>
    <DataShow
      :tableData="props.tableData"
      :columnData="props.columnData"
      :handleCellClick="handleCellClick"
      :handleCellStyle="handleCellStyle"
    />
  </div>
</template>


<script lang="ts" setup>
  import DataShow from '../detail-data-show/index.vue'

  const props = defineProps({
    title:{
      type:String,
      default:''
    },
    subTitle:{
      type:String,
      default:''
    },
    tableData:{
      type: Array,
      default: []
    },
    columnData:{
      type: Array,
      default: []
    }
  })

  console.log('props-----+++',props);
</script>


<style scoped>
  .info-box {
    width: 100%;
    height: auto;
    margin-top: 20px;
    /* border: 1px solid #fefefe; */
    box-shadow:0 0 9px 0px #999;
  }

  .info-box-title {
    width: 30%;
    height: 30px;
    display: flex;
    align-items: center;
    background-color: rgb(214, 245, 222);
  }

  .sub-title {
    margin-left: 20px;
  }
</style>