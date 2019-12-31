<template>
  <div>
    <Row>
      <Col span="15">
        <Form :label-width="80" :model="formItem">
          <FormItem label="新闻链接">
            <Input v-model="formItem.link" placeholder="请输入新闻的链接" />
          </FormItem>
          <FormItem label="新闻名称">
            <Input v-model="formItem.title" />
          </FormItem>
          <FormItem label="新闻内容">
            <Input v-model="formItem.content" placeholder type="textarea" :rows="10" />
          </FormItem>
          <FormItem label="新闻主题">
            <Input v-model="formItem.theme" />
          </FormItem>
          <FormItem label="新闻来源">
            <Input v-model="formItem.origin" />
          </FormItem>
          <Button type="primary" @click="submit">提交</Button>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data () {
    return {
      formItem: {
        link: '',
        title: '',
        content: '',
        theme: '',
        origin: '',
      },
      editor: null
    }
  },
  beforeCreate () {
  },
  created () {
    //this.getCat();
  },
  beforeMount () {
  },
  mounted () {
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
    //this.editor.destory();
  },
  methods: {
    submit () {
      this.apidata('http://domain.com/server/addNews.php', this.formItem,
        re => {
          if (re.msg == 1) {
            this.$Message.success('添加新闻成功');
          }
          else {
            this.$Message.success('fail0');
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
