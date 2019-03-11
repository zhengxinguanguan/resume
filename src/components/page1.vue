<template>

<div>
    <!-- ECharts图表测试 -->
    <div id="main"></div>
</div>
</template>

<script>

var echarts = require('echarts');
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


export default {
  name: 'Bank',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
  },
  methods: {
  },
      mounted() {
    //基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      roseType: 'angle',
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '100%',
          data: [
            { value: 235, name: 'echarts' },
            { value: 274, name: 'jquery' },
            { value: 310, name: 'css' },
            { value: 335, name: 'html' },
            { value: 400, name: 'vue' }
          ],
          itemStyle: {
            // 阴影的大小
            shadowBlur: 200,
            // 阴影水平方向上的偏移
            shadowOffsetX: 0,
            // 阴影垂直方向上的偏移
            shadowOffsetY: 0,
            // 阴影颜色
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    }
  }


  </script>

<style scoped>
    #main {
        margin-top:100px;
        height:400px;
        background:#ccc
    }
</style>