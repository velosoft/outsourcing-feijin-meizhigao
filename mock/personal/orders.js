export const productOrders = [
  {
    orderNumber: "2023060801256768",
    orderStatus: "待付款", // 可选值：["待付款", "待发货", "待收货", "交易完成", "交易关闭", "已取消"]
    orderTime: "2023-06-08 01:25:67",
    products: [
      {
        productName: "全屋整理收纳服务（单次）",
        priceUnitText: "按面积核算（元/m)",
        productPrice: "￥200.00",
        productQuantity: 2,
        productImageURL:
          "https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png",
        isSeckill: false,
        afterSaleStatus: "正常",
      },
      {
        productName: "示例产品2",
        priceUnitText: "按个数核算（元/个)",
        productPrice: "￥50.00",
        productQuantity: 1,
        productImageURL: "https://example.com/product2.jpg",
        isSeckill: true,
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: "￥10.00",
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
        productPrice: "￥30.00",
        productQuantity: 3,
        productImageURL: "https://example.com/product3.jpg",
        isSeckill: false,
        afterSaleStatus: "售后失败",
      },
    ],
    shippingFee: "￥15.00",
  },
  {
    orderNumber: "2023060801256770",
    orderStatus: "交易完成",
    orderTime: "2023-06-08 02:00:00",
    products: [
      {
        productName: "示例产品4",
        priceUnitText: "按个数核算（元/个)",
        productPrice: "￥25.00",
        productQuantity: 1,
        productImageURL: "https://example.com/product4.jpg",
        isSeckill: false,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: "￥12.00",
  },
  {
    orderNumber: "2023060801256771",
    orderStatus: "已取消",
    orderTime: "2023-06-08 03:15:00",
    products: [
      {
        productName: "示例产品5",
        priceUnitText: "按个数核算（元/个)",
        productPrice: "￥15.00",
        productQuantity: 2,
        productImageURL: "https://example.com/product5.jpg",
        isSeckill: true,
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: "￥8.00",
  },
  {
    orderNumber: "2023060801256772",
    orderStatus: "待收货",
    orderTime: "2023-06-08 04:30:00",
    products: [
      {
        productName: "示例产品6",
        priceUnitText: "按重量核算（元/kg)",
        productPrice: "￥35.00",
        productQuantity: 1,
        productImageURL: "https://example.com/product6.jpg",
        isSeckill: false,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: "￥10.00",
  },
  {
    orderNumber: "2023060801256773",
    orderStatus: "交易关闭",
    orderTime: "2023-06-08 05:45:00",
    products: [
      {
        productName: "示例产品7",
        priceUnitText: "按个数核算（元/个)",
        productPrice: "￥20.00",
        productQuantity: 3,
        productImageURL: "https://example.com/product7.jpg",
        isSeckill: true,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: "￥10.00",
  },
  {
    orderNumber: "2023060801256774",
    orderStatus: "待付款",
    orderTime: "2023-06-08 06:00:00",
    products: [
      {
        productName: "示例产品8",
        priceUnitText: "按面积核算（元/m)",
        productPrice: "￥30.00",
        productQuantity: 2,
        productImageURL: "https://example.com/product8.jpg",
        isSeckill: false,
        afterSaleStatus: "售后失败",
      },
    ],
    shippingFee: "￥10.00",
  },
  {
    orderNumber: "2023060801256775",
    orderStatus: "待发货",
    orderTime: "2023-06-08 07:30:00",
    products: [
      {
        productName: "示例产品9",
        priceUnitText: "按重量核算（元/kg)",
        productPrice: "￥40.00",
        productQuantity: 1,
        productImageURL: "https://example.com/product9.jpg",
        isSeckill: true,
        afterSaleStatus: "正常",
      },
    ],
    shippingFee: "￥12.00",
  },
  {
    orderNumber: "2023060801256776",
    orderStatus: "交易完成",
    orderTime: "2023-06-08 08:45:00",
    products: [
      {
        productName: "示例产品10",
        priceUnitText: "按个数核算（元/个)",
        productPrice: "￥15.00",
        productQuantity: 2,
        productImageURL: "https://example.com/product10.jpg",
        isSeckill: false,
        afterSaleStatus: "售后成功",
      },
    ],
    shippingFee: "￥8.00",
  },
];
