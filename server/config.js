/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: '随机金额',
    text: '特别奖',
  },
  {
    type: 1,
    count: 2,
    text: '现金奖',
    title: '3000元',
    img: '../img/two.jfif',
  },
  {
    type: 2,
    count: 4,
    text: '现金奖',
    title: '1000元',
    img: '../img/two.jfif',
  },
  {
    type: 3,
    count: 21,
    text: '现金奖',
    title: '500元',
    img: '../img/three.webp',
  },
  {
    type: 4,
    count: 30,
    text: '现金奖',
    title: '200元',
    img: '../img/three.webp',
  },
  {
    type: 5,
    count: 1,
    text: '特等奖',
    title: 'Xiaomi MIX4',
    img: '../img/xiaomi_mix4.jpg',
  },
  {
    type: 6,
    count: 3,
    text: '一等奖',
    title: '小米电视',
    img: '../img/miTV.jpg',
  },
  {
    type: 7,
    count: 5,
    text: '二等奖',
    title: '平板电脑',
    img: '../img/miPad.jpg',
  },
  {
    type: 8,
    count: 40,
    text: '三等奖',
    title: '小爱音箱',
    img: '../img/xayx.jpg',
  },
  {
    type: 9,
    count: 100,
    text: '参与奖',
    title: '电动牙刷',
    img: '../img/teethBrush.jpg',
  },
  {
    type: 10,
    count: 100,
    text: '参与奖',
    title: '蓝牙耳机',
    img: '../img/redmiBuds3.jpg',
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 11, 10, 1, 1, 1, 20, 20, 20];

/**
 * 卡片公司名称标识
 */
const COMPANY = 'KinWong';

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY,
};
