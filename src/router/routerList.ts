export interface RouterObj {
  path: string;
  src: string;
  name?:string;
  children?: RouterObj[];
}

const list:RouterObj[] = [
  {
    path:'/',
    src:'login'
  },
  {
    path:'/dashboard',
    src:'dashboard',
    children:[
      {
        path:'shop',
        name:'商店系统',
        src:'shop-manage',
        children:[
          {
            path:'order',
            name:'订单管理',
            src:'shop-manage/order'
          },
          {
            path:'order-detail',
            name:'订单详情',
            src:'shop-manage/order-detail'
          },
          {
            path:'refund',
            name:'仅退款管理',
            src:'shop-manage/refund'
          },
          {
            path:'refund-goods',
            name:'退货退款管理',
            src:'shop-manage/refund-goods'
          },
          {
            path:'refund-single',
            name:'退货单管理',
            src:'shop-manage/refund-single'
          },
        ]
      }
    ]
  },
  {
    path:'/*',
    src:'about'
  }
]



export default list;