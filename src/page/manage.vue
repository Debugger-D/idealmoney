<template>
  <div class="panel">
    <div class="panel-heading bk-bg-primary">
      <i class="el-icon-menu"></i><span class="break"></span>数据列表
      <div class="panel-actions" >
        <a href="javascript:"><i class="el-icon-plus"></i> </a>&nbsp; 新增
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
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        tableData: [
          {
            id: 123,
            name: '外部优惠券',
            platName: '2334sef',
            date: '2017-12-12 :23-23'
          }
        ]
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
