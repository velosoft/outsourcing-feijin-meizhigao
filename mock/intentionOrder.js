export const intentionOrderTabs = ['测量阶段', '设计阶段', '交易完成', '待评价'];

const intentionOrderStatus = [
  '定金未支付',
  '等待分配业务员',
  '等待上门测量',
  '测量中',
  '方案设计中',
  '等待确认方案',
  '等待确认报价',
  '等待上门服务',
  '服务中',
  '等待客户验收',
  '交易完成',
  '交易关闭',
  '已取消',
];

const intentionStages = ['定制测量阶段', '定制设计阶段', '附加服务阶段'];

export const intentionOrders = intentionOrderStatus.map((e, i) => ({
  no: `2023060801256768${i}`,
  status: e,
  image:
    'https://dev.ft.velosoft.cn/api/image?token=657fa099d6bce000114cff3f&name=d401124e8a6d95e65f47fc1530ce8f28.png',
  title: '定制卧室收纳柜新疆包邮卧室床头柜…',
  desc: '中号；白色',
  price: 200,
  quantity: 1,
  reserveTime: '2023-06-08 01:25:67',
  stage: intentionStages[i % 3],
  captain: {
    name: '张小鱼',
    phone: '1334556688',
  },
}));
