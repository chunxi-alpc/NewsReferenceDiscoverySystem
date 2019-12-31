<template>
  <div>
    <Table :columns="catCol" :data="catData"></Table>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data () {
    return {
      catCol: [
        {
          title: '新闻名称',
          key: 'title'
        },
        {
          title: '新闻主题',
          key: 'theme'
        },
        {
          title: '新闻来源',
          key: 'origin'
        },
        {
          title: '新闻内容',
          key: 'content'
        },
      ],
      catData: [

      ]
    }
  },
  beforeCreate () {
  },
  created () {
    this.getLists();
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
  },
  methods: {
    getLists () {
      this.apidata('http://domain.com/server/newsLists.php', {}, re => {
        let result = re.lists;
        if (result) {
          this.catData = result;
        }
      }, err => {

      });
    }
  },
  filters: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss">
</style>
