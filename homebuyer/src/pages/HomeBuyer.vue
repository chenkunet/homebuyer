<template>
  <div>
    <div style="font-size: 25px;">
      房贷计算
    </div>

    <div style="background-color: ghostwhite">
      <div class="select_layout">
        公积金贷款利率：<el-input
          v-model="pfr"
          type="number"
          placeholder="请输入内容"
        ></el-input
        >%
      </div>
      <div class="select_layout">
        商业贷款利率：<el-input
          v-model="br"
          type="number"
          placeholder="请输入内容"
        ></el-input
        >%
      </div>
      <div class="select_layout">
        贷款总额：<el-input
          v-model="total"
          type="number"
          placeholder="请输入内容"
        ></el-input
        >万
      </div>
      <div class="select_layout">
        公积金贷款额度：<el-input
          v-model="PF_Amount"
          type="number"
          placeholder="请输入内容"
        ></el-input
        >万
      </div>
    </div>
<hr align=center width=100% color=#987cb9 SIZE=2>
    <!-- echarts -->
    <div id="main" class="main_container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: 1,
      pfr: 3.1,
      br: 4.1,
      total: 100,
      PF_Amount: 70
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    querySearch(queryString, cb) {
      var rates = this.rates;
      var results = queryString
        ? rates.filter(this.createFilter(queryString))
        : rates;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    handleSelect() {},
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      var option = {
        title: {
          text: "还款曲线"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["等额本息", "等额本金", "利息", "本金", "提前还款"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "等额本息",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "等额本金",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "利息",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "本金",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "提前还款",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top"
            },
            areaStyle: {},
            emphasis: {
              focus: "series"
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss" scoped>
.main_container {
  width: 80%;
  height: 500px;
  overflow: hidden;
}
.select_layout {
  margin: 10px;
  display: inline-flex;
}
</style>
