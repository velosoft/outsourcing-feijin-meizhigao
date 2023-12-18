export const productOrderStatus = [
  "待付款",
  "待发货",
  "待收货",
  "交易完成",
  "交易关闭",
  "已取消",
];
export const productOrders = [
  {
    orderNumber: "2023060801256768",
    orderStatus: "待付款", // 可选值：["待付款", "待发货", "待售货", "交易完成", "交易关闭", "已取消"]
    orderTime: "2023-06-08 01:25:67", // 下单时间，这是一个示例格式，根据实际需要调整
    receiverInfo: {
      receiverName: "李冰冰",
      receiverPhone: "15212345678",
      receiverAddress: "广东省广州市天河区车陂南东宏国际广场12楼06号",
    },
    products: [
      {
        productName: "全屋整理收纳服务（单次）",
        productDescription: "鎏金岁月三层长45宽30高75",
        productPrice: 200.0, // 价格类型是 number
        productQuantity: 2, // 可随机生成 1 到 3 之间的整数
        productImageURL:
          "https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png",
        isSeckill: false, // 是否是秒杀商品
        afterSaleStatus: "正常", // 可选值：["正常", "售后成功", "售后失败"]
      },
      {
        productName: "示例产品2",
        productDescription: "示例产品2说明文本",
        productPrice: 50.0, // 价格类型是 number
        productQuantity: 1,
        productImageURL: "https://example.com/product2.jpg",
        isSeckill: true, // 示例秒杀商品
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: 10.0, // 运费金额，类型是 number
    activityDiscount: 20.0, // 活动优惠，类型是 number
    couponDiscount: 30.0, // 优惠券减免，类型是 number
    pointsDeduction: 10.0, // 积分抵扣，类型是 number
    storageCoinDeduction: 5.0, // 收纳币抵扣，类型是 number
    totalAmount: 235.0, // 实付款，类型是 number
    orderMessage: "请尽快发货", // 订单留言
    paymentTime: "2023-06-08 02:30:45", // 支付时间，只有在订单状态不是待付款时才有
    paymentMethod: "微信支付", // 支付方式，可选类型为["微信支付", "支付宝支付", "银行卡支付"]
  },
  // 以下是另外 9 条数据，可以根据需要自行修改
  {
    orderNumber: "2023060801256769",
    orderStatus: "待发货",
    orderTime: "2023-06-08 01:30:00",
    products: [
      {
        productName: "示例产品3",
        priceUnitText: "按重量核算（元/kg)",
        productPrice: 30.0,
        productQuantity: 3,
        productImageURL: "https://example.com/product3.jpg",
        isSeckill: false,
        afterSaleStatus: "售后失败",
      },
    ],
    shippingFee: 15.0,
  },
  {
    orderNumber: "2023060801256770",
    orderStatus: "交易完成",
    orderTime: "2023-06-08 02:00:00",
    products: [
      {
        productName: "示例产品4",
        priceUnitText: "按个数核算（元/个)",
        productPrice: 25.0,
        productQuantity: 1,
        productImageURL: "https://example.com/product4.jpg",
        isSeckill: false,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: 12.0,
  },
  {
    orderNumber: "2023060801256771",
    orderStatus: "已取消",
    orderTime: "2023-06-08 03:15:00",
    products: [
      {
        productName: "示例产品5",
        priceUnitText: "按个数核算（元/个)",
        productPrice: 15.0,
        productQuantity: 2,
        productImageURL: "https://example.com/product5.jpg",
        isSeckill: true,
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: 8.0,
  },
  {
    orderNumber: "2023060801256772",
    orderStatus: "待收货",
    orderTime: "2023-06-08 04:30:00",
    products: [
      {
        productName: "示例产品6",
        priceUnitText: "按重量核算（元/kg)",
        productPrice: 35.0,
        productQuantity: 1,
        productImageURL: "https://example.com/product6.jpg",
        isSeckill: false,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: 10.0,
  },
  {
    orderNumber: "2023060801256773",
    orderStatus: "交易关闭",
    orderTime: "2023-06-08 05:45:00",
    products: [
      {
        productName: "示例产品7",
        priceUnitText: "按个数核算（元/个)",
        productPrice: 20.0,
        productQuantity: 3,
        productImageURL: "https://example.com/product7.jpg",
        isSeckill: true,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: 10.0,
  },
  {
    orderNumber: "2023060801256774",
    orderStatus: "待付款",
    orderTime: "2023-06-08 06:00:00",
    products: [
      {
        productName: "示例产品8",
        priceUnitText: "按面积核算（元/m)",
        productPrice: 30.0,
        productQuantity: 2,
        productImageURL: "https://example.com/product8.jpg",
        isSeckill: false,
        afterSaleStatus: "售后失败",
      },
    ],
    shippingFee: 10.0,
  },
  {
    orderNumber: "2023060801256775",
    orderStatus: "待发货",
    orderTime: "2023-06-08 07:30:00",
    products: [
      {
        productName: "示例产品9",
        priceUnitText: "按重量核算（元/kg)",
        productPrice: 40.0,
        productQuantity: 1,
        productImageURL: "https://example.com/product9.jpg",
        isSeckill: true,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: 12.0,
  },
  {
    orderNumber: "2023060801256776",
    orderStatus: "交易完成",
    orderTime: "2023-06-08 08:45:00",
    products: [
      {
        productName: "示例产品10",
        priceUnitText: "按个数核算（元/个)",
        productPrice: 15.0,
        productQuantity: 2,
        productImageURL: "https://example.com/product10.jpg",
        isSeckill: false,
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: 8.0,
  },
];

export const cancelReasons = [
  "不需要了",
  "拍多了",
  "商家缺货",
  "订单信息填写错误",
  "发货时间太长",
  "商品价格太贵",
  "商品质量不满意",
  "已经购买了同类商品",
  "变更了购买计划",
  "其他原因",
];
