import {defineStore} from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    orderColumn:[
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
      }
    ],
    orderInfo:[
      {
        id:'0',
        userInfo: 'BH090343411',
        order: 'U32534461',
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
        id:'1',
        userInfo: 'BH0903434562',
        order: 'U32534462',
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
        id:'2',
        userInfo: 'BH090343453',
        order: 'U32534463',
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
        id:'3',
        userInfo: 'BH0903434564',
        order: 'U32534464',
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
        id:'4',
        userInfo: 'BH090343455',
        order: 'U32534465',
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
        id:'5',
        userInfo: 'BH0903434566',
        order: 'U32534466',
        source: 'app',
        status: '已付款',
        orderPrice: '100',
        payPrice: '100',
        orderTime: '2016-05-02 19:23:56',
        payTime: '2016-05-02 19:23:56',
        createTime: '2016-05-02 19:23:56',
        active: '查看详情',
      }
    ]
  }),
  actions:{

  }
})