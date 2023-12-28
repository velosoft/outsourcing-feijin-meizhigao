export const productAfterSalesTabs = ['全部', '待付款', '待发货', '待收获', '交易完成'];
export const serviceAfterSalesTabs = ['全部', '申请中', '售后中', '售后成功'];
export const intentionAfterSalesTabs = ['全部', '申请中', '售后中', '售后成功'];

const afterSalesStatus = ['申请中', '售后中', '售后成功', '售后失败', '售后关闭'];

export const afterSalesList = [
  {
    reserveTime: '2023-06-08 01:25:67',
    number: '20230304405595',
    salesStatus: '申请中',
    customerProgress: '客服介入',
    customerStatus: '申请中',
    btnText: '售后申请',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '定制卧室收纳柜新疆包邮卧室床头',
      desc: '中号；白色',
      price: 200,
      quantity: 1,
    },
  },
  {
    reserveTime: '2023-06-08 01:25:67',
    number: '20230304405595',
    salesStatus: '售后中',
    customerProgress: '客服介入',
    customerStatus: '客服已介入',
    btnText: '取消售后',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '定制卧室收纳柜新疆包邮卧室床头',
      desc: '中号；白色',
      price: 200,
      quantity: 1,
    },
  },
  {
    reserveTime: '2023-06-08 01:25:67',
    number: '20230304405595',
    salesStatus: '售后关闭',
    customerProgress: '客服介入',
    customerStatus: '已取消售后',
    btnText: '',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '定制卧室收纳柜新疆包邮卧室床头',
      desc: '中号；白色',
      price: 200,
      quantity: 1,
    },
  },
  {
    reserveTime: '2023-06-08 01:25:67',
    number: '20230304405595',
    salesStatus: '售后成功',
    customerProgress: '客服介入',
    customerStatus: '已退回￥200；退回成功',
    btnText: '',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '定制卧室收纳柜新疆包邮卧室床头',
      desc: '中号；白色',
      price: 200,
      quantity: 1,
    },
  },
];

export const afterSaleOrderList = [
  {
    orderNumber: 2023060801256768,
    orderStatus: '申请中',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '全屋整理收纳服务（单次）',
      desc: '按面积核算（元/m)',
      price: 200,
      quantity: 6,
    },
    refundNumber: 200,
    refundStatus: '仅退款',
    reserveTime: '2023-06-08 01:25:67',
  },
  {
    orderNumber: 2023060801256768,
    orderStatus: '售后中',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '全屋整理收纳服务（单次）',
      desc: '按面积核算（元/m)',
      price: 200,
      quantity: 1,
    },
    refundNumber: 200,
    refundStatus: '退款退货',
    reserveTime: '2023-06-08 01:25:67',
  },
  {
    orderNumber: 2023060801256768,
    orderStatus: '售后成功',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '全屋整理收纳服务（单次）',
      desc: '按面积核算（元/m)',
      price: 200,
      quantity: 5,
    },
    refundNumber: 200,
    refundStatus: '换货中',
    reserveTime: '2023-06-08 01:25:67',
  },
  {
    orderNumber: 2023060801256768,
    orderStatus: '售后失败',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '全屋整理收纳服务（单次）',
      desc: '按面积核算（元/m)',
      price: 200,
      quantity: 1,
    },
    refundNumber: 200,
    refundStatus: '退款退货',
    reserveTime: '2023-06-08 01:25:67',
  },
  {
    orderNumber: 2023060801256768,
    orderStatus: '售后关闭',
    goods: {
      image:
        'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5f3ddec970d1f400111a4ce0/6579072b740f740012ac4768/17025193857474421503.png',
      title: '全屋整理收纳服务（单次）',
      desc: '按面积核算（元/m)',
      price: 200,
      quantity: 1,
    },
    refundNumber: 200,
    refundStatus: '仅退款',
    reserveTime: '2023-06-08 01:25:67',
  },
];
