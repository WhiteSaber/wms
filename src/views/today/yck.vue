<template>
  <div class="spp-theme-body spp-theme-pad">
    <!-- 列表查询条件 -->
    <el-form :inline="true" size="small" :model="tableSearchParams" class="spp-form-search spp-theme-top">
      <el-form-item>
        <span class="spp-form-label" style="width: 80px">
          单据编号
        </span>
        <el-input v-model="tableSearchParams.name1" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <span class="spp-form-label" style="width: 80px">
         业务单据
        </span>
        <el-input v-model="tableSearchParams.name1" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <span class="spp-form-label" style="width: 80px">
          单据类型
        </span>
        <!-- <el-input v-model="tableSearchParams.name1" maxlength="20" placeholder="请输入" /> -->
        <el-select v-model="typeValue" clearable>
          <el-option
            v-for="item in typeList"
            :key="item.value"
            :label="item.name"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <span class="spp-form-label" style="width: 50px">
          时间:
        </span>
        <el-date-picker v-model="tableSearchParams.timeRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" format="yyyy年MM月dd日" />
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" @click="onSearch()">查询</el-button>
        <el-button size="small" type="info" plain @click="onSearch()">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 列表 -->
    <div class="spp-table-group spp-theme-top spp-theme-pad">
      <el-table ref="tableRef" v-loading="tableLoading" class="spp-table spp-theme-top" :data="tableData" border :header-cell-style="{textAlign: 'center'}" :cell-style="{textAlign: 'center'}" style="width: 100%" @selection-change="onSelectionChange">
        <el-table-column prop="state" label="系统状态" width="100">
          <template slot-scope="scope">
            <div  v-for="(item, index) in stateList"  :key="index">
              <el-tag
                v-if="scope.row.state == item.value "
                effect="dark"
                :type="item.type"
              >
                {{ item.name }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="单据类型">
          <template slot-scope="scope">
            <div  v-for="(item, index) in typeList"  :key="index">
              <span v-if="item.value == scope.row.type">
                {{  item.name  }}
              </span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="单据编号"></el-table-column>
        <el-table-column prop="document" label="业务单据">
          <template slot-scope="scope">
            <span @click="onClickRow(scope.row)"> <a style="color: #00a0e9;text-decoration:underline;">{{ scope.row.document }}</a> </span>
          </template>
        </el-table-column>
        <el-table-column prop="updateDate" label="单据日期"></el-table-column>
        <el-table-column prop="name" label="业务员"></el-table-column>
      </el-table>
      <div style="display: flex; flex-direction: row-reverse;">
        <el-pagination v-show="tableTotal>0" background class="spp-theme-top" :current-page="tableSearchParams.page" :page-size="tableSearchParams.limit" :page-sizes="tableSizes" :total="tableTotal" layout="prev, pager, next, sizes" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </div>

    <!-- 详情弹窗 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible" width="800px">
      <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
              <template slot="title">
                <div style="font-weight: 600; font-size: 15px;">基础性息</div>
              </template>
              <el-form ref="dialogFormRef" :model="dialogFormData" label-width="100px" size="small">
                <el-row :gutter="10">
                  <el-col :span="12">
                    <el-form-item label="单据编号:" prop="document">  
                      <div style="border-bottom: 1px solid #dbdbdb">{{ dialogFormData.number }}</div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="单据日期:" prop="document">  
                      <div style="border-bottom: 1px solid #dbdbdb">{{ dialogFormData.updateDate }}</div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="业务单据:" prop="document">  
                      <div style="border-bottom: 1px solid #dbdbdb">{{ dialogFormData.document }}</div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="业务员:" prop="name">
                      <div style="border-bottom: 1px solid #dbdbdb">{{ dialogFormData.name }}</div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              <div style="font-weight: 600; font-size: 15px;">单据列表</div>
            </template>
            <el-table ref="tableRef" v-loading="tableLoading" size="mini" border height="300" class="spp-table spp-theme-top" :data="kwList" :header-cell-style="{textAlign: 'center'}" :cell-style="{textAlign: 'center'}" style="width: 100%">
              <el-table-column prop="numbers" type="index" label="序号" />
              <el-table-column prop="name" label="物料名称"></el-table-column>
              <el-table-column prop="code" label="物料编码" width="100"></el-table-column>
              <el-table-column prop="number" label="数量" width="80"></el-table-column>
              <el-table-column prop="ckName" label="仓库名称"></el-table-column>
              <el-table-column prop="ckCode" label="仓库编号" width="150"></el-table-column>
              <!-- <el-table-column prop="name" label="物料编码">
                <template slot-scope="scope">
                  <span class="tab-line-max-show-css">
                    {{ scope.row.name }}
                  </span>
                </template>
              </el-table-column> -->
            </el-table>
          </el-collapse-item>
      </el-collapse>
    </el-dialog>
  </div>
</template>
  
  <script>
import TimeUtils from '@/utils/timeUtils'
// import Print from '@/components/print/one.vue';
import { getDictLevel, getListData, getDataById } from '@/api/tables/tables'

export default {
  components: {
    // Print
  },
  data() {
    return {
      tableHeight: 170,
      tableLoading: false,
      tableData: [
        {
          state: 1,
          type: 1,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '张三1',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 2,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '李四1',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 3,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '王五1',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 4,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '张三2',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 5,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '李四2',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 6,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '王五2',
          document: 'SH240820001'
        },
        {
          state: 0,
          type: 7,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '张三3',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 8,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '李四3',
          document: 'SH240820001'
        },
        {
          state: 0,
          type: 9,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '王五3',
          document: 'SH240820001'
        },
        {
          state: 1,
          type: 10,
          number: 'RK240928002',
          updateDate: '2024.09.26',
          name: '赵六',
          document: 'SH240820001'
        },
      ], // 列表
      tableSearchParams: {
        name1: '',
        time: '',
        level: '',
        page: 1,
        limit: this.pageGroup.size
      }, // 搜索列表
      tableTotal: 10, // 默认数据总数
      tableSizes: this.pageGroup.sizes, // 显示条数分组
      selectionList: [], // 勾选一行或多行数据
      // 字典项
      deptOptions: [],
      levelOptions: [],
      typeValue: '', // 搜索类型
      typeList: [
        { name: '销售出库单', value: 1 },
        { name: '生产领料单', value: 2 },
        { name: '简单生产领料单', value: 3 },
        { name: '简单生产退库单', value: 4 },
        { name: '生产补料单', value: 5 },
        { name: '生产退库单', value: 6 },
        { name: '委外领料单', value: 7 },
        { name: '委外补料单', value: 8 },
        { name: '采购退料单', value: 9 },
        { name: '盘亏出库单', value: 10 },
      ], // 类型列表
      stateList: [
        { name: '正常', value: 1, type: '', },
        { name: '停用', value: 0, type: 'danger', },
      ],
      // 详情内容弹窗
      activeNames: ['1', '2'], // 弹窗折叠面板默认打开
      selectId: '', // 点击获取胡id
      dialogTitle: '', // 弹窗名称
      dialogTableVisible: false, //打开弹窗
      dialogFormData: {
        number: '', // 单据编号
        updateDate: '', // 单据日期
        document: '', // 业务单据
        name: '', // 业务员
      }, // 弹窗内容
      kwList: [
        {
          code: '5A-1-02',
          name: '测试1',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试2',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试3',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试4',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试5',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试6',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试7',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试8',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试9',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试10',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
      ], // 弹窗table
    }
  },
  mounted() {
    this.requestDict()
    //   this.requestList()
  },
  methods: {
    // 搜索列表
    onSearch() {
      this.handleCurrentChange(1)
    },
    // 加载列表数据
    requestList() {
      var that = this
      var params = {}
      params = this.tableSearchParams
      params.startDate = this.tableSearchParams.timeRange ? TimeUtils.startOfDay(this.tableSearchParams.timeRange[0]) : ''
      params.endDate = this.tableSearchParams.timeRange ? TimeUtils.endOfDay(this.tableSearchParams.timeRange[1]) : ''
      // console.log(JSON.stringify(params))

      this.tableLoading = true
      getListData(params)
        .then((res) => {
          that.tableLoading = false
          if (res.code === 20000) {
            that.tableData = res.data
            that.tableTotal = res.total
          } else {
            that.$message.error(res.msg)
          }
        })
        .catch((error) => {
          that.tableLoading = false
          console.log(JSON.stringify(error))
        })
    },
    // 字典
    requestDict() {
      var that = this
      // getDeptList().then(res => {
      //   if (res.code === 20000) {
      //     that.deptOptions = res.data
      //   }
      // }).catch(error => {
      //   console.log(JSON.stringify(error))
      // })
      getDictLevel()
        .then((res) => {
          if (res.code === 20000) {
            that.levelOptions = res.data
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    },
    getName(value, data) {
      var tempData = data
      for (var i = 0; i < tempData.length; i++) {
        if (tempData[i].value === value) {
          return tempData[i].label
        }
      }
    },
    // 页容量改变时会触发
    handleSizeChange(size) {
      this.tableSearchParams.page = 1
      this.tableSearchParams.limit = size
      // this.requestList()
    },
    // 当前页改变时会触发
    handleCurrentChange(currentPage) {
      this.tableSearchParams.page = currentPage
      // this.requestList()
    },
    onSelectionChange(val) {
      this.selectionList = val
    },
    // 通过下划线点击row  查看详情
    onClickRow(row) {
      console.log(JSON.stringify(row))
      this.selectId = row.id
      this.dialogTitle = '查看'
      // this.dialogIsLook = true
      this.handelDialogSetData(row)
      this.kwList = [
      {
          code: '5A-1-02',
          name: '测试1',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试2',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试3',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试4',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试5',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试6',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试7',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试8',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试9',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
        {
          code: '5A-1-01',
          name: '测试10',
          number: 1,
          ckName: '仓库1',
          ckCode: '123124'
        },
      ] // 库位列表
      this.dialogTableVisible = true
    },
    // 行内处理
    onHandle(row) {
      console.log(JSON.stringify(row))
      var that = this
      getDataById(row.id)
        .then((res) => {
          if (res.code === 20000) {
            that.dialogTitle = '查看'
            that.dialogIsLook = true
            that.handelDialogSetData(res.data)
            that.isShowDialog = true
          } else {
            that.$message.error(res.msg)
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    },

    // 对弹框数据赋值
    handelDialogSetData(data) {
      var that = this
      this.$nextTick(() => {
        that.dialogFormData = JSON.parse(JSON.stringify(data))
        that.dialogFormData = { ...data }
      })
    },
  }
}
</script>
  
  <style lang="scss" scoped>
// ::v-deep .el-form-item {
//   background-color: white !important;
// }
::v-deep .inputClass .el-input.is-disabled .el-input__inner {
  width: 650px;
}
::v-deep .inputClass .el-input .el-input__inner {
  width: 650px;
}
::v-deep .el-collapse {
  border: none;
  border-left: none;
  box-shadow: none;
}

::v-deep .el-collapse .el-collapse-item__header {
  border: none;
}

::v-deep .el-collapse .el-collapse-item__wrap {
  border: none;
}

::v-deep .el-dialog__body {
  padding-top: 0px;
}
::v-deep .el-dialog__header {
  padding-bottom: 10px;
}
::v-deep .el-collapse-item__content {
  padding: 0px;
}
</style>
  