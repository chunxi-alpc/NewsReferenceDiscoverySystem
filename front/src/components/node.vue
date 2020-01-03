<template>
  <div id="app">
    <el-row>
      <el-col :span="2">
        <el-button type="primary" @click="dialogVisible=true,isEdit=false">新增</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="Category" label="类别">
        <template slot-scope="scope">{{scope.row.Category}}</template>
      </el-table-column>
      <el-table-column prop="theme" label="主题"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="del(scope.row.id)">删除</el-button>
          <el-button @click="dialogVisible=true,form = scope.row,isEdit=true">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="isEdit?'修改':'新增'" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题：">
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="类别：">
          <el-select v-model.number="form.Category" placeholder="请选择类别">
            <el-option label="科技" value="科技"></el-option>
            <el-option label="自然" value="自然"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主题">
          <el-input v-model="form.theme" placeholder="请输入主题"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false,add()" v-if="!isEdit">确 定</el-button>
        <el-button type="primary" @click="dialogVisible = false,edit()" v-if="isEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>


export default {
  name: 'node',
  components: {

  },
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      form: {
        id: '',
        title: '',
        theme: '',
        Category: null
      },
      isEdit: false,
    }
  },
  created () {

    this.getList()
  },
  methods: {
    async getList () {//列表
      let da = await this.$http.get('/test/list?name=ka&sex=25');
      this.tableData = da.data.data;
    },

    async add () {//新增
      let data = {
        ...this.form
      }
      console.log(data);
      let da = await this.$http.post('/test/add', data);
      this.$message.success('新增成功！')
      this.getList()
    },
    async edit () {//修改
      let data = {
        ...this.form
      }
      let da = await this.$http.post('/test/edit', data);
      this.$message.success('修改成功！')
      this.getList()
    },
    async del (id) {//删除
      await this.$_confirm('此操作将永久删除该文件, 是否继续?')
      let data = { id }
      let da = await this.$http.post('/test/del', data);
      this.getList()
      this.$message.success('删除成功!');

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
