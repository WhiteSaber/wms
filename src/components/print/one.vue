<template>
  <div>
    <div id="print">
      <!-- 这里是需要打印的内容 -->
      <!-- 第一页-start -->
      <div class="pageDiv">

        <div class="qrcodeBox">

          <!-- 上部分帶二維碼 -->
          <div class="qrcodeBox-top">
            <div class="imgBox">
              <!-- <vue-qr text="Hello world!"></vue-qr> -->
              <!-- <vue-qr :bgSrc='src' :logoSrc="src2" text="Hello world!" :size="200"></vue-qr> -->
              <vue-qr text="Hello world!" qid="testid"></vue-qr>
              <!-- <el-image 
                style="width: 160px; height: 160px"
                :src="require('@/assets/images/frame/ma.png')"
                :preview-src-list="srcList">
              </el-image> -->
            </div>
            <div class="img-right">
              <div class="img-right-list">
                <div class="img-right-list-title">编码:</div>
                <div class="img-right-list-value">122342123</div>
              </div>
              <div class="img-right-list">
                <div class="img-right-list-title">名称:</div>
                <div class="img-right-list-value">测试名称</div>
              </div>
              <div class="img-right-list">
                <div class="img-right-list-title">批号:</div>
                <div class="img-right-list-value">12</div>
              </div>
              <div class="img-right-list">
                <div class="img-right-list-title">图号:</div>
                <div class="img-right-list-value"></div>
              </div>
            </div>
          </div>

          <!-- 下部 -->
          <div class="qrcodeBox-bottom"></div>
          <div></div>
          <div></div>

        </div>




        <!-- <el-image 
          style="width: 100px; height: 100px"
          :src="require('@/assets/images/frame/ma.png')"
          :preview-src-list="srcList">
        </el-image>
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
        </div> -->
      </div>
      <!-- 第一页-end -->

      <!-- 第二页-start -->
      <!-- <div class="pageDiv">我是第二个分页</div> -->
      <!-- 第二页-end -->
    </div>

    <!-- <el-button type="primary" size="mini" v-print="'#print'">
      打印
    </el-button> -->

    <el-button type="primary" size="mini" icon="el-icon-printer" v-print="printObj">
      打印
    </el-button>
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
      test: {
          id: 1,
          name: "小张",
          mobile: "13548523654",
          status: "正常",
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

  // 打印樣式
  .qrcodeBox {
    display: flex;
    flex-direction: column;
    .qrcodeBox-top {
      display: flex;
      align-items: center;
      .img-right {
        .img-right-list {
          display: flex;
          .img-right-list-title {
            height: 35px;
            line-height: 35px;
            width: 50px;
            text-align: center;
            // border: 1px solid #000;
            border-left: 1px solid #000;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            border-right: 1px solid #000;
          }
          .img-right-list-value {
            height: 35px;
            line-height: 35px;
            min-width: 150px;
            text-align: center;
            border: 1px solid #000;
          }
        }
      }
    }
  }
}
</style>