<template>
  <div class="table-box">
    <el-table
      :data="props.tableData"
      border
      style="width: 100%"
      @cell-click="handleCellClick"
      :cell-style="handleCellStyle"
    >
      <el-table-column
        v-for="(item, index) in props.columnData"
        :prop="item.type"
        :label="item.label"
        :width="item.width"
        class-name="first-cell"
      >
      <template #default="scope" v-if="index===props.columnData.length-1">
        <router-link to="/dashboard/shop/order-detail">{{ scope.row.active }}</router-link>
        <!-- {{ scope.row.active }} -->
      </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    tableData:{
      type: Array,
      default: []
    },
    columnData:{
      type: String,
      default: ''
    },
    handleCellClick:{
      type:Function,
      default:() => {}
    },
    handleCellStyle:{
      type:Function,
      default:() => {}
    }
  })

</script>


<style scoped>
  .table-box {
    margin-top: 20px;
  }
</style>