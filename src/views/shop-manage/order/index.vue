<template>
  <div>
    <Title title="订单管理" />
    <Filter />
    <DataShow
      :tableData="tableData"
      :columnData="column"
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

  const router = useRouter()

  const handleCellClick = (row, column) => {
    console.log('点击了我');
    const rowData = JSON.parse(JSON.stringify(row));
    const columnData = JSON.parse(JSON.stringify(column));
    console.log('rowData----',rowData);
    console.log('columnData----',columnData);

    if(column.label === "用户信息") {
      location.href = 'https://juejin.cn/post/7089377403717287972'
    }

    // if(column.label === "操作") {
    //   router.push('/order-detail');
    // }
  }

  const handleCellStyle = (style) => {
    console.log('style---',style);
    if(style.columnIndex === 0 || style.columnIndex===9) {
      return {
        color: 'rgb(146, 233, 242)',
        cursor: 'pointer'
      }
    }
  }

  const Active = {
    template: '<div>User 查看详情</div>',
  }

  const render = () => {
    return '<div>User 查看详情</div>'
  }

const column = [
  {
    type: 'userInfo',
    label:'用户信息',
    width:'140',
    className:'cell-color'
  },
  {
    type: 'order',
    label:'订单号'
  },
  {
    type: 'source',
    label:'订单来源',
  },
  {
    type: 'status',
    label:'状态',
  },
  {
    type: 'orderPrice',
    label:'订单金额'
  },
  {
    type: 'payPrice',
    label:'支付金额'
  },
  {
    type: 'orderTime',
    label:'下单时间',
    width:'160'
  },
  {
    type: 'payTime',
    label:'支付时间',
    width:'160'
  },
  {
    type: 'createTime',
    label:'创建时间',
    width:'160'
  },
  {
    type: 'active',
    label:'操作'
  },
]
const tableData = [
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      source: 'app',
      status: '已付款',
      orderPrice: '100',
      payPrice: '100',
      orderTime: '2016-05-02 19:23:56',
      payTime: '2016-05-02 19:23:56',
      createTime: '2016-05-02 19:23:56',
      active: '查看详情',
    },
  ]
</script>
