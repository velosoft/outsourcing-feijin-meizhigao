// 商品订单的 tabs
export const productOrderStatus = ['待付款', '待发货', '待收货', '交易完成', '交易关闭', '已取消'];

// 商品订单列表及详情页的 mock
export const productOrders = [
  {
    orderNumber: '2023060801256768',
    orderStatus: '待付款',
    orderTime: '2023-06-08 01:25:67', // 下单时间，这是一个示例格式，根据实际需要调整
    receiverInfo: {
      receiverName: '李冰冰',
      receiverPhone: '15212345678',
      receiverAddress: '广东省广州市天河区车陂南东宏国际广场12楼06号',
    },
    isSeckill: false,
    products: [
      {
        productName: '全屋整理收纳服务（单次）',
        productDescription: '鎏金岁月三层长45宽30高75',
        productPrice: 200, // 价格类型是 number
        productQuantity: 2, // 可随机生成 1 到 3 之间的整数
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false, // 是否是秒杀商品
        afterSaleStatus: '正常', // 可选值：["正常", "售后成功", "售后失败"]
        productStatus: '正常', // 商品状态，可选值：["正常", "补购商品", "已退回"]
      },
      {
        productName: '示例产品2，这是一个非常长的产品名字，很长很长，努力超过两行，马上超过两行！',
        productDescription: '示例产品2说明文本，说明文本也很长很长很长很长很长很长很长很长很长很长很长很长',
        productPrice: 50, // 价格类型是 number
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true, // 示例秒杀商品
        afterSaleStatus: '售后成功',
        productStatus: '正常', // 商品状态，可选值：["正常", "补购商品", "已退回"]
      },
      {
        productName: '示例产品2.1',
        productDescription: '示例产品2.1说明文本',
        productPrice: 50,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true, // 示例秒杀商品
        afterSaleStatus: '正常',
        productStatus: '补购商品',
      },
      {
        productName: '示例产品2.2',
        productDescription: '示例产品2.2说明文本',
        productPrice: 50,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true, // 示例秒杀商品
        afterSaleStatus: '正常',
        productStatus: '已退回',
      },
      {
        productName: '示例产品2.3',
        productDescription: '示例产品2.3说明文本',
        productPrice: 50,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true, // 示例秒杀商品
        afterSaleStatus: '正常',
        productStatus: '正常',
      },
    ],
    shippingFee: 10, // 运费金额，类型是 number
    activityDiscount: 20, // 活动优惠，类型是 number
    couponDiscount: 30, // 优惠券减免，类型是 number
    pointsDeduction: 10, // 积分抵扣，类型是 number
    storageCoinDeduction: 5, // 收纳币抵扣，类型是 number
    totalAmount: 235, // 实付款，类型是 number
    orderMessage: '请尽快发货', // 订单留言
    paymentTime: '2023-06-08 02:30:45', // 支付时间，只有在订单状态不是待付款时才有
    paymentMethod: '微信支付', // 支付方式，可选类型为["微信支付", "支付宝支付", "银行卡支付"]
    hasInvoice: false,
    // 查看评价页的 Mock 数据
    comment: {
      rating: 3,
      content: '商品收纳位置大，质量妥妥，有需要的朋友可以下单',
      images: [
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
        'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=10889394af4d20d34e3cdde10aa54934.png',
      ],
    },
  },
  // 以下是另外 9 条数据，可以根据需要自行修改
  {
    orderNumber: '2023060801256769',
    orderStatus: '待发货',
    orderTime: '2023-06-08 01:30:00',
    products: [
      {
        productName: '示例产品3',
        productDescription: '按重量核算（元/kg)',
        productPrice: 30,
        productQuantity: 3,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false,
        afterSaleStatus: '售后失败',
      },
    ],
    shippingFee: 15,
    totalAmount: 90,
  },
  {
    orderNumber: '2023060801256772',
    orderStatus: '待收货',
    orderTime: '2023-06-08 04:30:00',
    products: [
      {
        productName: '示例产品6',
        productDescription: '按重量核算（元/kg)',
        productPrice: 35,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false,
        afterSaleStatus: '正常',
      },
    ],
    shippingFee: 10,
    totalAmount: 35,
  },
  {
    orderNumber: '2023060801256770',
    orderStatus: '交易完成',
    orderTime: '2023-06-08 02:00:00',
    products: [
      {
        productName: '示例产品4',
        productDescription: '按个数核算（元/个)',
        productPrice: 25,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false,
        afterSaleStatus: '正常',
      },
    ],
    hasInvoice: false,
    shippingFee: 12,
    totalAmount: 25,
  },
  {
    orderNumber: '2023060801256773',
    orderStatus: '交易关闭',
    orderTime: '2023-06-08 05:45:00',
    products: [
      {
        productName: '示例产品7',
        productDescription: '按个数核算（元/个)',
        productPrice: 20,
        productQuantity: 3,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true,
        afterSaleStatus: '正常',
      },
    ],
    shippingFee: 10,
    totalAmount: 20,
  },
  {
    orderNumber: '2023060801256771',
    orderStatus: '已取消',
    orderTime: '2023-06-08 03:15:00',
    products: [
      {
        productName: '示例产品5',
        productDescription: '按个数核算（元/个)',
        productPrice: 15,
        productQuantity: 2,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true,
        afterSaleStatus: '售后成功',
      },
    ],
    shippingFee: 8,
    totalAmount: 50,
  },

  {
    orderNumber: '2023060801256774',
    orderStatus: '待付款',
    orderTime: '2023-06-08 06:00:00',
    products: [
      {
        productName: '示例产品8',
        productDescription: '按面积核算（元/m)',
        productPrice: 30,
        productQuantity: 2,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false,
        afterSaleStatus: '售后失败',
      },
    ],
    shippingFee: 10,
    totalAmount: 60,
  },
  {
    orderNumber: '2023060801256775',
    orderStatus: '待发货',
    orderTime: '2023-06-08 07:30:00',
    products: [
      {
        productName: '示例产品9',
        productDescription: '按重量核算（元/kg)',
        productPrice: 40,
        productQuantity: 1,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: true,
        afterSaleStatus: '正常',
      },
    ],
    shippingFee: 12,
    totalAmount: 40,
  },
  {
    orderNumber: '2023060801256776',
    orderStatus: '交易完成',
    orderTime: '2023-06-08 08:45:00',
    products: [
      {
        productName: '示例产品10',
        productDescription: '按个数核算（元/个)',
        productPrice: 15,
        productQuantity: 2,
        productImageURL:
          'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
        isSeckill: false,
        afterSaleStatus: '售后成功',
      },
    ],
    hasInvoice: true,
    shippingFee: 8,
    totalAmount: 30,
  },
];

// 取消原因 poup 的 mock
export const cancelReasons = [
  '不需要了',
  '拍多了',
  '商家缺货',
  '订单信息填写错误',
  '发货时间太长',
  '商品价格太贵',
  '商品质量不满意',
  '已经购买了同类商品',
  '变更了购买计划',
  '其他原因',
];

// 物流列表的 mock
export const shippingPackages = [
  {
    package_name: '包裹一',
    logistics_company: '顺丰快递',
    contact_phone: '13966907675',
    driver_name: '张三',
    tracking_number: '202313966907675',
    license_plate: '粤A467788',
  },
  {
    package_name: '包裹二',
    logistics_company: '中通快递',
    tracking_number: '202313888888888',
  },
  {
    package_name: '包裹三',
    logistics_company: '圆通快递',
    contact_phone: '13777777777',
    driver_name: '王五',
    tracking_number: '202313777777777',
    license_plate: '粤C789012',
  },
  {
    package_name: '包裹四',
    logistics_company: '韵达快递',
    contact_phone: '13666666666',
    driver_name: '赵六',
    tracking_number: '202313666666666',
    license_plate: '粤D345678',
  },
  {
    package_name: '包裹五',
    logistics_company: '百世快递',
    contact_phone: '13555555555',
    driver_name: '钱七',
    tracking_number: '202313555555555',
    license_plate: '粤E901234',
  },
  {
    package_name: '包裹六',
    logistics_company: '申通快递',
    contact_phone: '13444444444',
    driver_name: '孙八',
    tracking_number: '202313444444444',
    license_plate: '粤F567890',
  },
  {
    package_name: '包裹七',
    logistics_company: '京东快递',
    contact_phone: '13333333333',
    driver_name: '李九',
    tracking_number: '202313333333333',
    license_plate: '粤G123456',
  },
  {
    package_name: '包裹八',
    logistics_company: '邮政快递',
    contact_phone: '13222222222',
    driver_name: '周十',
    tracking_number: '202313222222222',
    license_plate: '粤H789012',
  },
  {
    package_name: '包裹九',
    logistics_company: '天天快递',
    contact_phone: '13111111111',
    driver_name: '吴十一',
    tracking_number: '202313111111111',
    license_plate: '粤I345678',
  },
  {
    package_name: '包裹十',
    logistics_company: '中铁快运',
    contact_phone: '13000000000',
    driver_name: '郑十二',
    tracking_number: '202313000000000',
    license_plate: '粤J901234',
  },
];

// 物流详情页数据
export const shippingDetail = {
  package_name: '包裹一',
  logistics_company: '顺丰快递',
  contact_phone: '13966907675',
  driver_name: '张三',
  tracking_number: '202313966907675',
  license_plate: '粤A467788',
  products: [
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
    {
      productName: '定制卧室收纳柜新疆包邮卧室床头',
      productDescription: '中号；白色',
      productPrice: 200,
      productQuantity: 2,
      productImageURL:
        'https://dev.ft.velosoft.cn/api/image?token=658311f7d6bce000114d53b2&name=21021fe5e0bfe79f1dae61f5b8b53166.png',
    },
  ],
  details: [
    {
      status: '订单已签收',
      detail: [
        {
          date: '04-01',
          time: '12:23:45',
          content: '派送成功',
        },
      ],
    },
    {
      status: '派送中',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content:
            '快件交给张三，正在派途中（联系电话：13678933578，顺丰已开启“安全呼叫”保护您的电话隐私，请放心接听！）',
        },
      ],
    },
    {
      status: '运输中',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '快件到达【广州车陂南哈哈哈店】',
        },
        {
          date: '04-02',
          time: '12:23:45',
          content: '快件在【广州车陂南店】完成分练，准备发往【广州车陂南哈哈哈店】',
        },
        {
          date: '04-02',
          time: '12:23:45',
          content: '快件在【广州车陂南店】完成分练，准备发往【广州车陂南哈哈哈店】',
        },
      ],
    },
    {
      status: '已揽件',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '顺丰速运 已收取快件',
        },
      ],
    },
    {
      status: '已发货',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '包裹正在等候揽收',
        },
      ],
    },
    {
      status: '已出库',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '包裹已出库',
        },
      ],
    },
    {
      status: '仓库已接单',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '包裹已出库',
        },
      ],
    },
    {
      status: '已下单',
      detail: [
        {
          date: '04-02',
          time: '12:23:45',
          content: '商品已经下单',
        },
      ],
    },
  ],
};
