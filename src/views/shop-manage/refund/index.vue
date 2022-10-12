<template>
  <div>
    <Title title="售后管理-仅退款" />
    <Filter />
    <DataShow :tableData="tableData" :columnData="column"/>
  </div>
</template>

<script lang="ts" setup>
  import Title from '../components/title/index.vue'
  import Filter from '../components/filter-com/index.vue'
  import DataShow from '../components/data-show/index.vue'

  const column = [
  {
    type: 'userInfo',
    label:'用户信息1',
    width:'140'
  },
  {
    type: 'order',
    label:'订单号',
    width:'100'
  },
  {
    type: 'refundOrderStatus',
    label:'退款单状态',
  },
  {
    type: 'orderStatus',
    label:'订单状态',
  },
  {
    type: 'refundPrice',
    label:'退款金额'
  },
  {
    type: 'refundCreateTime',
    label:'退款创建时间',
    width:'160'
  },
  {
    type: 'confirmRefundTime',
    label:'客服确认退款时间',
    width:'160'
  },
  {
    type: 'refundFinishTime',
    label:'退款完成时间',
    width:'160'
  },
  {
    type: 'reviewers',
    label:'客服审核人员'
  },
  {
    type: 'financialAuditor',
    label:'财务审核人员'
  },
  {
    type: 'active',
    label:'操作'
  },
]
const tableData = [
    {
      userInfo: 'BH09034345699',
      order: 'U3253446',
      refundOrderStatus: '待审核',
      orderStatus: '退款中',
      refundPrice: '100',
      refundCreateTime: '2016-05-02 19:23:56',
      confirmRefundTime: '2016-05-02 19:23:56',
      refundFinishTime: '2016-05-02 19:23:56',
      reviewers: '张三',
      financialAuditor: '李四',
      active: '查看详情'
    },
    {
      userInfo: 'BH090343456',
      order: 'U3253446',
      refundOrderStatus: '待审核',
      orderStatus: '退款中',
      refundPrice: '100',
      refundCreateTime: '2016-05-02 19:23:56',
      confirmRefundTime: '2016-05-02 19:23:56',
      refundFinishTime: '2016-05-02 19:23:56',
      reviewers: '张三',
      financialAuditor: '李四',
      active: '查看详情'
    },
  ]
</script>
