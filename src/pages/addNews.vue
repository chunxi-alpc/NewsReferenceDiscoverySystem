<template>
  <div>
    <Row>
      <Col span="15">
        <Form :label-width="80" :model="formItem">
          <FormItem label="新闻链接">
            <Input v-model="formItem.catName" placeholder="请输入新闻的链接" />
            <Button type="primary" @click="submit">提交</Button>
          </FormItem>
          <FormItem label="新闻名称">
            <Input v-model="formItem.catName" placeholder="请输入新闻的名称" />
          </FormItem>
          <FormItem label="新闻分类">
            <Select v-model="formItem.id">
              <Option v-for="item in catList" :value="item.catid" :key="item.catid">{{item.catName}}</Option>
            </Select>
          </FormItem>
          <FormItem label="新闻内容">
            <Input v-model="formItem.catContent" placeholder="请输入新闻的内容" type="textarea" :rows="10" />
          </FormItem>
          <FormItem label="新闻作者">
            <Input v-model="formItem.catAuthor" placeholder="请输入新闻的作者" type="textarea" />
          </FormItem>
          <FormItem label="新闻简介">
            <Input v-model="formItem.catDesc" placeholder="请输入新闻的简介" type="textarea" />
          </FormItem>
        </Form>
      </Col>
    </Row>
    <script id="ueditor" type="text/plain"></script>
    <Button type="primary" @click="getUEcontent">查看内容</Button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data () {
    return {
      formItem: {
        catName: '',
        catDesc: '',
        id: '',
        catContent: '',
        catAuthor: '',
      },
      catList: [],
      editor: null
    }
  },
  beforeCreate () {
  },
  created () {
    this.getCat();
  },
  beforeMount () {
  },
  mounted () {
    this.editor = UE.getEditor('ueditor', {
      autoHeightEnabled: false,
      autoFloatEnabled: true,
      initialContent: '',
      autoClearinitialContent: true, //是否自动清除编辑器初始内容，
      initialFrameWidth: null,
      initialFrameHeight: 550,
      BaseUrl: '',
      UEDITOR_HOME_URL: 'static/utf8-php/'
    });
  },
  beforeUpdate () {
  },
  updated () {
  },
  activited () {
  },
  deactivated () {
  },
  beforeDestroy () {
  },
  destroyed () {
    this.editor.destory();
  },
  methods: {
    getCat () {
      this.apidata('http://newsadmin.com/catLists.php', {
        'tag': 1
      }, re => {
        let result = re.lists;
        if (result) {
          this.catList = result;
        } else {
          this.$Message.error('获取栏目列表失败');
        }
      }, err => {

      });
    },
    submit () {
      this.apidata('http://newsadmin.com/addNews.php', this.formItem,
        re => {
          if (re.msg == 1) {
            this.$Message.success('添加新闻成功');
          }
        },
        err => {

        });
    },
    getUEcontent () {
      let content = this.editor.getContent();
      console.log(content);
    }
  },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
</style>
