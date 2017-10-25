<template>
  <div>
    <div class="portlet">
      <div class="portlet-title main-center">
        <div class="caption">
          <span class="caption-subject bold">筛选条件</span>
        </div>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="会员手机：">
          <el-input v-model="formInline.phone" placeholder="平台名称"></el-input>
        </el-form-item>
        <el-form-item label="平台名称：">
          <el-select v-model="formInline.region" placeholder="平台名称">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="panel">
      <div class="panel-heading bk-bg-primary">
        <i class="el-icon-menu"></i><span class="break"></span>数据列表
        <div class="panel-actions" @click="downLoad">
          <i class="el-icon-upload2"></i>&nbsp; 导出
        </div>
      </div>
      <div class="panel-body">
        <el-table
          :data="tableData"
          border>
          <el-table-column label="用户id">
            <template slot-scope="scope">
              <span> {{ scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column label="用户手机号">
            <template slot-scope="scope">
              <span> {{ scope.row.platName }}</span>
            </template>
          </el-table-column>
          <el-table-column label="虚拟币名称">
            <template slot-scope="scope">
              <span> {{ scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="交易类型">
            <template slot-scope="scope">
              <span> {{ scope.row.type}}</span>
            </template>
          </el-table-column>
          <el-table-column label="虚拟币数量">
            <template slot-scope="scope">
              <span> {{ scope.row.number}}</span>
            </template>
          </el-table-column>
          <el-table-column label="备注">
            <template slot-scope="scope">
              <span> {{ scope.row.remark}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        selectTable: {},
        categoryOptions: {},
        tableData: [
          {
            type: 123,
            name: '外部优惠券',
            number: 456,
            remark: '你好好啊',
            date: '2017-12-12 :23-23',
            platName: '2334sef'
          }
        ],
        formInline: {
          region: {},
          startTime: '',
          endTime: '',
          user: ''
        }
      }
    },
    methods: {
      downLoad () {
        this.modalType = 1;
        this.selectTable = {};
        this.dialogFormVisible = true;
      },
      search () {
        console.log(123, this.formInline, new Date(this.formInline.startTime).getTime())
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
