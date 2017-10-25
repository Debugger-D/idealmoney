<template>
  <div class="panel">
    <div class="panel-heading bk-bg-primary">
      <i class="el-icon-menu"></i><span class="break"></span>数据列表
      <div class="panel-actions" @click="add">
       <i class="el-icon-plus"></i>&nbsp; 新增
      </div>
    </div>
    <div class="panel-body">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column label="编号">
          <template slot-scope="scope">
            <span> {{ scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column label="虚拟币名称">
          <template slot-scope="scope">
            <span> {{ scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column label="平台名称">
          <template slot-scope="scope">
            <span> {{ scope.row.platName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="修改日期">
          <template slot-scope="scope">
            <span> {{ scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              @click="edit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="虚拟币信息" v-model="dialogFormVisible">
        <el-form :model="selectTable">
          <el-form-item label="虚拟币名称" label-width="100px">
            <el-input v-model="selectTable.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="平台名称" label-width="100px">
            <el-select
              :options="categoryOptions"
              v-model="selectTable.platName"
            ></el-select>
          </el-form-item>
          <el-form-item label="虚拟币发放有效期" label-width="100px">
            <el-input v-model="selectTable.date"></el-input>
          </el-form-item>
          <el-form-item label="虚拟币说明" label-width="100px">
            <el-input type="textarea" v-model="selectTable.desc"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        dialogFormVisible: false,
        selectTable: {},
        categoryOptions: {},
        modalType: 2, // 1: 新增; 2: 编辑;
        tableData: [
          {
            id: 123,
            name: '外部优惠券',
            platName: '2334sef',
            desc: '呵呵',
            date: '2017-12-12 :23-23'
          }
        ]
      }
    },
    methods: {
      add () {
        this.modalType = 1;
        this.selectTable = {};
        this.dialogFormVisible = true;
      },
      confirm () {
        this.dialogFormVisible = false;
      },
      edit (index, data) {
        this.modalType = 2;
        this.selectTable = data
        this.dialogFormVisible = true
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
