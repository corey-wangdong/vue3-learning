<template>
  <div>
    <Title title="订单详情" />
    <div class="base-info">
      <div class="base-info-title">
        <div>基本信息</div>
        <div @click="centerDialogVisible = true" class="editInfo">编辑收件信息</div>
        <div  @click="editPriceVisible = true" class="editInfo">修改订单价格</div>
      </div>
    </div>
    <detailInfoBox title="支付信息" subTitle="退款" :columnData="pay_column" :tableData="pay_table_data"/>
    <detailInfoBox title="退款信息" :columnData="refund_column" :tableData="refund_table_data"/>
    <detailInfoBox title="优惠信息" :columnData="sales_column" :tableData="sales_table_data"/>
  </div>

  <el-dialog v-model="editPriceVisible" width="30%" center show-close='false'>
    <div>
      <div class="dialog-input"><Input name="订单金额"/></div>
      <div class="dialog-input"><Input name="邮费"/></div>
      <div class="dialog-input"><Input name="修改备注"/></div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editPriceVisible = false">确定</el-button>
        <el-button type="primary" @click="editPriceVisible = false"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="centerDialogVisible" width="30%" center show-close='false'>
    <div>
      <div class="dialog-input"><Input name="收件人"/></div>
      <div class="dialog-input"><Input name="手机号"/></div>
      <div class="dialog-input"><Input name="省份"/></div>
      <div class="dialog-input"><Input name="城市"/></div>
      <div class="dialog-input"><Input name="区县"/></div>
      <div class="dialog-input"><Input name="街道"/></div>
      <div class="dialog-input"><Input name="状态"/></div>
      <div class="dialog-input"><Input name="客服备注"/></div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">确定</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >取消</el-button
        >
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
  import Title from '../components/title/index.vue'
  import detailInfoBox from './components/detail-info-box/index.vue'
  import Input from '../components/input/index.vue'

  import { ref } from 'vue'
  
const centerDialogVisible = ref(false)
const editPriceVisible = ref(false)

  const refund_column = [
  {
    type: 'refundId',
    label:'退款单ID'
  },
  {
    type: 'createTime',
    label:'创建时间'
  },
  {
    type: 'refundPrice',
    label:'退款金额',
  },
  {
    type: 'reason',
    label:'退款原因'
  },
  {
    type: 'progress',
    label:'处理进度'
  },
  {
    type: 'active',
    label:'操作'
  }
]
const refund_table_data = [
  {
    refundId: '20111',
    createTime: '2016-05-02 19:23:56',
    refundPrice: '现金999，余额 0.0',
    reason: '不需要',
    progress: '待审核',
    active: '编辑',
  },
  {
    refundId: '20111',
    createTime: '2016-05-02 19:23:56',
    refundPrice: '现金999，余额 0.0',
    reason: '不需要',
    progress: '待审核',
    active: '编辑',
  }
]

  const sales_column = [
  {
    type: 'type',
    label:'促销类型'
  },
  {
    type: 'conditions',
    label:'条件'
  },
  {
    type: 'description',
    label:'描述',
  },
  {
    type: 'detail',
    label:'详情'
  }
]
const sales_table_data = [
  {
    type: '随心配',
    conditions: '满99减10',
    description: '参加活动送礼品',
    detail: '描述信息'
  },
  {
    type: '随心配',
    conditions: '满99减10',
    description: '参加活动送礼品',
    detail: '描述信息'
  }
]

const pay_column = [
  {
    type: 'payOrder',
    label:'支付单号',
    width:'140',
    className:'cell-color'
  },
  {
    type: 'payType',
    label:'支付方式'
  },
  {
    type: 'payPrice',
    label:'支付金额',
  },
  {
    type: 'hasPayPrice',
    label:'余额支付金额',
  },
  {
    type: 'status',
    label:'状态'
  },
  {
    type: 'payTime',
    label:'支付时间'
  }
]
const pay_table_data = [
  {
    payOrder: '923t893479396',
    payType: '微信小程序',
    payPrice: '9.9',
    hasPayPrice: '0',
    status: '已付款',
    payTime: '2016-05-02 19:23:56'
  },
  {
    payOrder: '923t893479396',
    payType: '微信小程序',
    payPrice: '9.9',
    hasPayPrice: '0',
    status: '已付款',
    payTime: '2016-05-02 19:23:56'
  }
]

</script>


<style lang="scss" scoped>
.base-info {
  width: 100%;
  height: 100px;
  margin-top: 20px;
  box-shadow:0 0 9px 0px #999;
}

.editInfo {
  cursor: pointer;
  color: rgb(73, 124, 234);
}

.dialog-input {
  margin-bottom: 20px;
}

.base-info-title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #fff;

  div {
    margin-right: 20px;
  }
}
</style>