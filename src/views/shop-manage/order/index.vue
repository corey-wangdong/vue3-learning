<template>
  <div>
    <Title title="订单管理" />
    <Filter :handleSearch="handleSearch"/>
    <DataShow
      :tableData="orderData.order"
      :columnData="orderColumn"
      :handleCellClick="handleCellClick"
      :handleCellStyle="handleCellStyle"
    />
  </div>
</template>

<script lang="ts" setup>

  import { useRouter } from "vue-router"
  import Title from '../components/title/index.vue'
  import Filter from '../components/filter-com/index.vue'
  import DataShow from '../components/data-show/index.vue'
  import { useOrderStore } from "../../../stores/modules/order";
import { reactive } from "vue";

  const {orderColumn, orderInfo} = useOrderStore();
  const router = useRouter()

  let orderData = reactive({
    order: orderInfo
  });

  const handleSearch = (data, isReset) => {
    if(isReset) {
      orderData.order = orderInfo;
      return;
    }
    console.log('orderData---',orderData.order);
    console.log('data---',data);
    const tempData = orderData.order.filter(item => item.order.includes(data.orderNum));
    orderData.order = tempData;
  }

  const handleCellClick = (row, column) => {
    console.log('点击了我');
    const rowData = JSON.parse(JSON.stringify(row));
    const columnData = JSON.parse(JSON.stringify(column));

    if(column.label === "用户信息") {
      location.href = 'https://juejin.cn/post/7089377403717287972'
    }

    if(column.label === "操作") {
      router.push('/dashboard/shop/order-detail');
    }
  }

  const handleCellStyle = (style) => {
    if(style.columnIndex === 0 || style.columnIndex===9) {
      return {
        color: 'rgb(146, 233, 242)',
        cursor: 'pointer'
      }
    }
  }
</script>
