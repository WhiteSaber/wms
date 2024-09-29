<template>
  <div class="spp-theme-body spp-theme-pad">
    <!-- 列表查询条件 -->
    <el-form :inline="true" size="small" :model="tableSearchParams" class="spp-form-search spp-theme-top">
      <el-form-item>
        <span class="spp-form-label" style="width:100px">
          <i class="icon" /><i class="label">名称:</i>
        </span>
        <el-input v-model="tableSearchParams.name1" maxlength="20" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <span class="spp-form-label" style="width: 150px">
          <i class="icon" /><i class="label">创建时间:</i>
        </span>
        <el-date-picker v-model="tableSearchParams.timeRange" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" format="yyyy年MM月dd日" />
      </el-form-item>
      <el-form-item>
        <el-button class="spp-form-btn" size="small" type="primary" @click="onSearch()">查询</el-button>
      </el-form-item>
    </el-form>

    <!-- 列表 -->
    <div class="spp-table-group spp-theme-top spp-theme-pad">
      <div class="spp-table-btns">
        <el-button size="small" type="primary" @click="onAdd"><i class="el-icon-plus" />新增 </el-button>
        <!-- <el-button size="small" type="primary" @click="onEdit"><i class="el-icon-edit" />编辑 </el-button> -->
        <!-- <el-button size="small" type="primary" @click="onLook"><i class="el-icon-search" />查看 </el-button> -->
        <!-- <el-button size="small" type="warning" @click="onExport"><i class="el-icon-download" />导出 </el-button> -->
        <el-button size="small" type="danger" @click="onDelete"><i class="el-icon-delete" />删除 </el-button>
      </div>
      <el-table ref="tableRef" v-loading="tableLoading" class="spp-table spp-theme-top" :data="tableData" border :header-cell-style="{textAlign: 'center'}" :cell-style="{textAlign: 'center'}" style="width: 100%" @selection-change="onSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="number" type="index" label="序号" width="70" />
        <el-table-column prop="code" label="仓库编码" width="200" >
          <template slot-scope="scope">
            <span @click="onClickRow(scope.row)"> <a style="color: #00a0e9;text-decoration:underline;">{{ scope.row.code }}</a> </span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="仓库名称" width="200">
          <template slot-scope="scope">
            <el-tooltip :visible-arrow="false" class="item" effect="light" :content="scope.row.name" placement="bottom">
              <span class="tab-line-max-show-css">
                {{ scope.row.name }}
              </span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注">
          <template slot-scope="scope">
            <el-tooltip :visible-arrow="false" class="item" effect="light" :content="scope.row.remark" placement="bottom">
              <span class="tab-line-max-show-css">
                {{ scope.row.remark }}
              </span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="createDate" label="创建时间" width="180" />
        <el-table-column prop="updateDate" label="更新时间" width="180" />

        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button size="mini" icon="el-icon-edit-outline" @click="rowEdit(scope.row)" />
            <el-button size="mini" icon="el-icon-delete" type="danger" @click="rowDelete(scope.row)" />
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-show="tableTotal>0" background class="spp-theme-top" :current-page="tableSearchParams.page" :page-size="tableSearchParams.limit" :page-sizes="tableSizes" :total="tableTotal" layout="prev, pager, next, sizes" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>

    <!-- 新增 编辑弹框 -->
    <el-dialog title="仓库库位" :visible.sync="isShowDialog" v-if="isShowDialog" top="8vh" width="900px" :close-on-click-modal="false" @opened="onOpenDialog" @closed="onClosedDialog">
      <div slot="title" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <span style="font-size: 18px; font-weight: 600;">{{ dialogTitle }}</span>
        </div>
        <!-- 打印按钮 -->
        <div style=" margin-right: 50px;">
          <Print></Print>
        </div>
      </div>
      <div class="spp-dialog">
        <el-collapse v-model="activeNames">
          <el-collapse-item name="1">
            <template slot="title">
              <div style="font-weight: 600; font-size: 16px;">基础性息</div>
            </template>
            <el-form ref="dialogFormRef" :model="dialogFormData" :rules="dialogRules" label-width="100px" size="small" :disabled="dialogIsLook">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="仓库编码:" prop="code">  
                    <el-input v-model="dialogFormData.code" placeholder="请选择" clearable>
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="仓库名称:" prop="name">
                    <el-input v-model="dialogFormData.name" clearable />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="备注:" prop="reamrk">
                    <div class="inputClass">
                      <el-input placeholder="请输入备注" v-model="dialogFormData.remark">
                      </el-input>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </el-collapse-item>
          <!-- 库位列表 -->
          <el-collapse-item name="2">
            <template slot="title">
              <div style="font-weight: 600; font-size: 16px;">库位</div>
            </template>
            <div>
              <el-button size="mini" type="text" icon="el-icon-plus" @click="addHang">新增行</el-button>
              <el-button size="mini" type="text" icon="el-icon-delete">删除行</el-button>
              <el-dialog
                width="600px"
                :visible.sync="innerVisible"
                append-to-body
              >
                <template slot="title">
                  <div style="font-weight: 600; font-size: 16px;">仓库仓位</div>
                </template>
                <el-table ref="tableCW" v-loading="tableLoading" size="mini" border height="300" class="spp-table spp-theme-top" :data="kwAllList" :header-cell-style="{textAlign: 'center'}" :cell-style="{textAlign: 'center'}" style="width: 100%" @selection-change="onSelectionChange">
                  <el-table-column type="selection" width="55" v-if="!dialogIsLook" />
                  <el-table-column prop="code" label="库位编码" width="200">
                    <template slot-scope="scope">
                      <span class="tab-line-max-show-css">
                        {{ scope.row.code }}
                      </span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="库位名称">
                    <template slot-scope="scope">
                      <span class="tab-line-max-show-css">
                        {{ scope.row.name }}
                      </span>
                    </template>
                  </el-table-column>
                </el-table>
              </el-dialog>
            </div>
            <el-table ref="tableRef" v-loading="tableLoading" size="mini" border height="300" class="spp-table spp-theme-top" :data="kwList" :header-cell-style="{textAlign: 'center'}" :cell-style="{textAlign: 'center'}" style="width: 100%" @selection-change="onSelectionChange">
              <el-table-column type="selection" width="55" v-if="!dialogIsLook" />
              <el-table-column prop="number" type="index" label="序号" />
              <el-table-column prop="code" label="库位编码" width="200">
                <template slot-scope="scope">
                  <span class="tab-line-max-show-css">
                    {{ scope.row.code }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="库位名称">
                <template slot-scope="scope">
                  <span class="tab-line-max-show-css">
                    {{ scope.row.name }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="120" v-if="!dialogIsLook">
                <!-- <template slot-scope="scope"> -->
                  <el-button size="mini" icon="el-icon-delete" type="danger" />
                <!-- </template> -->
              </el-table-column>
            </el-table>
            <el-pagination v-show="tableTotal>0" background class="spp-theme-top" :current-page="tableSearchParams.page" :page-size="tableSearchParams.limit" :page-sizes="tableSizes" :total="tableTotal" layout="prev, pager, next, sizes" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
          </el-collapse-item>
        </el-collapse>
        <div v-if="!dialogIsLook" slot="footer" class="dialog-footer spp-dialog-btns" style="padding-top: 20px">
          <el-button :loading="dialogSubmitBtnLoading" type="primary" size="small" @click="onDialogSubmit()">保存
          </el-button>
          <el-button size="small" @click="isShowDialog = false">取消</el-button>
        </div>
      </div>
    </el-dialog>

  </div>
</template>
  
  <script>
import TimeUtils from '@/utils/timeUtils'
import Print from '@/components/print/one.vue';
// import * as checkUtils from '@/utils/checkUtils'
// import { REGEX_phone } from '@/utils/checkUtils'

// import { getDeptList } from '@/api/base/base'
import { getDictLevel, getListData, getDataById, addData, deleteData, editData } from '@/api/tables/tables'

export default {
  components: {
    Print
  },
  data() {
    return {
      tableHeight: 170,
      tableLoading: false,
      tableData: [
        {
          code: '02.14',
          name: '包材仓(新)',
          remark: '123124',
          createDate: '2024.09.26',
          updateDate: '2024.09.26'
        },
        {
          code: '02.01',
          name: '五金仓',
          remark: '',
          createDate: '2024.09.26',
          updateDate: '2024.09.26'
        },
        {
          code: '02.03',
          name: '自制仓',
          remark: '',
          createDate: '2024.09.26',
          updateDate: '2024.09.26'
        },
        {
          code: '02.02',
          name: '塑料仓',
          remark: '',
          createDate: '2024.09.26',
          updateDate: '2024.09.26'
        },
        {
          code: '02.15',
          name: '五金仓',
          remark: '123124',
          createDate: '2024.09.26',
          updateDate: '2024.09.26'
        }
      ], // 仓库列表
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
      // 弹框相关
      dialogTitle: '',  // 弹窗title
      isShowDialog: false,  // 打开外部弹窗
      innerVisible: false, // 打开内部弹窗
      dialogSubmitBtnLoading: false,
      dialogIsLook: false,  // 弹窗是否是查看/新增修改  保存按钮
      dialogFormData: {
        code: '', // 仓库编码
        content: '', // 仓库名称
        remark: '' // 备注
      }, // 仓库数据
      dialogRules: {
        code: [
          { required: true, message: '请输入', trigger: 'blur' },
          { min: 1, max: 20, message: '10字符以内', trigger: 'blur' }
        ],
        name: [
          { required: false, message: '请输入', trigger: 'blur' },
          { min: 1, max: 50, message: '100字符以内', trigger: 'blur' }
        ]
      },
      selectId: '',
      activeNames: ['1', '2'], // 弹窗折叠面板默认打开

      kwList: [
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        }
      ], // 库位列表

      kwAllList: [
      {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        }
      ], // 全部库位
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
      // params.name1 = this.tableSearchParams.name1
      // params.page = this.tableSearchParams.page
      // params.limit = this.tableSearchParams.limit
      console.log(JSON.stringify(params))

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
    // 操作按钮  新建仓库
    onAdd() {
      this.dialogFormData = {
        code: '', // 仓库编码
        content: '', // 仓库名称
        remark: '' // 备注
      }
      this.dialogTitle = '新增库位'
      this.dialogIsLook = false
      this.isShowDialog = true
      this.kwList = []
    },
    // 查看
    // onLook() {
    //   if (this.selectionList.length === 0) {
    //     this.$message.warning('请选择记录')
    //     return
    //   } else if (this.selectionList.length > 1) {
    //     this.$message.warning('只能选择一条记录！')
    //     return
    //   } else {
    //     this.selectId = this.selectionList[0].id
    //     this.dialogTitle = '查看'
    //     this.handelDialogSetData(this.selectionList[0])
    //     this.isShowDialog = true
    //   }
    // },

    // 编辑
    // onEdit() {
    //   if (this.selectionList.length === 0) {
    //     this.$message.warning('请选择记录')
    //     return
    //   } else if (this.selectionList.length > 1) {
    //     this.$message.warning('只能选择一条记录！')
    //     return
    //   } else {
    //     this.selectId = this.selectionList[0].id
    //     this.dialogTitle = '编辑库位'
    //     this.dialogIsLook = false
    //     this.handelDialogSetData(this.selectionList[0])
    //     this.isShowDialog = true
    //   }
    // },

    // 删除
    onDelete() {
      var that = this
      if (this.selectionList.length === 0) {
        this.$message.warning('请选择记录')
        return
      }
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          var tempArr = []
          for (var item of that.selectionList) {
            tempArr.push(item.id)
          }
          var arrStr = tempArr.join(',')
          var params = { ids: arrStr }
          that.deleteRequest(params)
        })
        .catch(() => {})
    },
    // 通过下划线点击row  查看仓库
    onClickRow(row) {
      console.log(JSON.stringify(row))
      this.selectId = row.id
      this.dialogTitle = '查看库位'
      this.dialogIsLook = true
      this.handelDialogSetData(row)
      this.kwList = [
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        }
      ] // 库位列表
      this.isShowDialog = true
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

    // 行编辑  仓库
    rowEdit(row) {
      console.log(JSON.stringify(row))
      this.kwList = [
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        },
        {
          code: '5A-1-01',
          name: '5A-1-01'
        }
      ] // 库位列表
      this.dialogTitle = '编辑'
      this.dialogIsLook = false
      this.handelDialogSetData(row)
      this.isShowDialog = true
    },
    // 行删除
    rowDelete(row) {
      console.log(JSON.stringify(row))
      var that = this
      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          that.deleteRequest(row.id)
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    },
    // 对弹框数据赋值
    handelDialogSetData(data) {
      var that = this
      this.$nextTick(() => {
        // that.dialogFormData = JSON.parse(JSON.stringify(data))
        that.dialogFormData = { ...data }
      })
    },
    // 弹框相关
    onOpenDialog() {},
    onClosedDialog() {
      this.$refs.tableRef.clearSelection()
      if (!this.dialogIsLook) {
        this.$refs['dialogFormRef'].resetFields() // 仅清除验证
      }
    },
    onDialogSubmit() {
      this.$refs['dialogFormRef'].validate((valid) => {
        if (valid) {
          this.submitRequest()
        }
      })
    },
    deleteRequest(params) {
      var that = this
      console.log(JSON.stringify(params))
      deleteData(params)
        .then((res) => {
          if (res.code === 20000) {
            that.$message.success('删除成功!')
            that.isShowDialog = false
            that.requestList()
          } else {
            that.$message.error(res.msg)
          }
        })
        .catch((error) => {
          console.log(JSON.stringify(error))
        })
    },
    submitRequest() {
      var that = this
      this.dialogSubmitBtnLoading = true

      var params = {}
      params = this.dialogFormData
      console.log(JSON.stringify(params))

      if (this.dialogTitle === '新增') {
        addData(params)
          .then((res) => {
            that.dialogSubmitBtnLoading = false
            if (res.code === 20000) {
              that.$message.success('保存成功!')
              that.isShowDialog = false
              that.requestList()
            } else {
              that.$message.error(res.msg)
            }
          })
          .catch((error) => {
            that.dialogSubmitBtnLoading = false
            console.log(JSON.stringify(error))
          })
      }
      if (this.dialogTitle === '编辑') {
        editData(params)
          .then((res) => {
            that.dialogSubmitBtnLoading = false
            if (res.code === 20000) {
              that.$message.success('保存成功!')
              that.isShowDialog = false
              that.requestList()
            } else {
              that.$message.error(res.msg)
            }
          })
          .catch((error) => {
            that.dialogSubmitBtnLoading = false
            console.log(JSON.stringify(error))
          })
      }
    },
    
    // 打开仓位弹窗
    addHang() {
      this.innerVisible = true
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
  