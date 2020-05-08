const Mock = require('mockjs');

Mock.mock('/mock/test', {
  'user|1-3': [{ // 随机生成1到3个数组元素
    name: '@cname', // 中文名称
    'id|+1': 88, // 属性值自动加 1，初始值为88
    'age|18-28': 0, // 18至28以内随机整数, 0只是用来确定类型
  }],
});
