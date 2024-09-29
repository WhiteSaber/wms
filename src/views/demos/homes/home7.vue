<template>
  <div>
    <el-card
      class="box-card"
      :body-style="{
        padding: '20px',
        minHeight: 'calc(100vh - 100px)',
      }"
    >
      <div class="feature">
        <!-- <div>
          1.vue-print-nb官网：https://www.npmjs.com/package/vue-print-nb
        </div>
        <div>2.vue-print-nb安装：npm install vue-print-nb --save</div> -->
        <div>
          3.出现在打印预览的界面，这里的样式需要写在@media print
          {}里面 如果需要设置预览页规则，页脚等样式 @page{}
        </div>
        <div>
          4.打印内容不满一页时自动分页：要打印的内容的div里加style:'page-break-after:
          always'
        </div>
      </div>
      <div id="print">
        <!-- 这里是需要打印的内容 -->
        <!-- 第一页-start -->
        <div class="pageDiv">
          <img
            src="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
          />
          <div class="listTable">
            <table width="100%" style="text-align: center;">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>姓名</td>
                  <td>手机号码</td>
                  <td>ID</td>
                  <td>姓名</td>
                  <td>手机号码</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item) in tables" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.mobile }}</td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.mobile }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 第一页-end -->

        <!-- 第二页-start -->
        <div class="pageDiv">我是第二个分页</div>
        <!-- 第二页-end -->
      </div>

      <!-- <el-button type="primary" size="mini" v-print="'#print'">
        打印
      </el-button> -->

      <el-button type="primary" size="mini" v-print="printObj">
        打印
      </el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      printObj: {
        id: "print", //要打印的id名 无#号
        extraCss: "", // 打印可引入外部的一个 css 文件
        popTitle: "&nbsp;", //打印的页眉标题，默认浏览器标题 空字符串时显示undefined 使用html语言
        extraHead: "", //最上方的头部文字，附加在head标签上的额外标签,使用逗号分隔
        preview: "", // 是否启动预览模式，默认是false（开启预览模式，可以先预览后打印）
        previewTitle: "", // 打印预览的标题（开启预览模式后出现）,
        previewPrintBtnLabel: "", // 打印预览的标题的下方按钮文本，点击可进入打印（开启预览模式后出现）
        zIndex: "", // 预览的窗口的z-index，默认是 20002（此值要高一些，这涉及到预览模式是否显示在最上面）
        previewBeforeOpenCallback() {}, //预览窗口打开之前的callback（开启预览模式调用）
        previewOpenCallback() {}, // 预览窗口打开之后的callback（开启预览模式调用）
        beforeOpenCallback() {}, // 开启打印前的回调事件
        openCallback() {}, // 调用打印之后的回调事件
        closeCallback() {}, //关闭打印的回调事件（无法确定点击的是确认还是取消）
        url: "",
        standard: "",
      },
      tables: [
        {
          id: 1,
          name: "小张",
          mobile: "13548523654",
          status: "正常",
        },
        {
          id: 2,
          name: "小李",
          mobile: "13548523654",
          status: "停用",
        },
        {
          id: 3,
          name: "小红",
          mobile: "13548523654",
          status: "正常",
        },
        {
          id: 4,
          name: "小黄",
          mobile: "13548523654",
          status: "停用",
        },
      ],
      printShow: false,
    };
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped>
.feature {
  text-align: left;
  margin-bottom: 20px;
  line-height: 22px;
  font-size: 14px;
}

//默认隐藏需要打印的内容
#print {
  display: none;
}

//打印预览的界面的样式
@media print {
  //设置默认不打印页尾、页码（margin-top: 0;margin-bottom: 0;）
  @page {
    size: auto; /* auto is the initial value */
    margin: 0 20px;
  }

  #print {
    display: block;
  }
  .listTable {
    font-size: 14px;
    color: #000;
    table {
      border-top: 1px solid #000;
      border-left: 1px solid #000;
      border-spacing: 0;
      td {
        border-bottom: 1px solid #000;
        padding: 8px 10px;
        border-right: 1px solid #000;
        line-height: 20px;
        text-align: center;
      }
    }
  }

  //打印内容不满一页时自动分页要打印的内容的div里加style:'page-break-after:always'
  .pageDiv {
    page-break-after: always;
    padding: 30px 0;
  }
}
</style>