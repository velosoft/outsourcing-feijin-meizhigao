export const serviceOrderTabs = ['测量阶段', '设计阶段', '服务阶段'];

const serviceOrderStatus = [
  '未支付',
  '等待分配业务员',
  '等待上门测量',
  '测量中',
  '等待客户签约',
  '等待开始设计',
  '方案设计中',
  '等待确认方案',
  '等待确认报价',
  '等待上门服务',
  '服务中',
  '差额支付',
  '等待客户验收',
  '交易完成',
  '交易关闭',
  '已取消',
];

const serviceStages = ['服务测量阶段', '服务设计阶段', '服务阶段'];

export const serviceOrders = serviceOrderStatus.map((e, i) => ({
  no: `2023060801256768${i}`,
  status: e,
  image:
    'https://dev.ft.velosoft.cn/api/image?token=658a4231d6bce000114dc6f7&name=mock_thumb_008.png',
  title: '全屋整理收纳服务（单次）',
  desc: '按面积核算（元/m)',
  price: 200,
  quantity: 1,
  reserveTime: '2023-06-08 01:25:67',
  stage: serviceStages[i % 3],
  captain: {
    name: '张小鱼',
    phone: '1334556688',
  },
}));
