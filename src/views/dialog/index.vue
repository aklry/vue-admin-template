<template>
  <div class="message">
    <el-button @click="open">打开消息框</el-button>
  </div>
</template>

<script>
export default {
  name: 'Message1',
  mounted() {
  },
  methods: {
    open() {
      this.$Message({
        title: '我是消息框',
        bgColor: 'red'
      }, {
        btn: <el-button type='success'>按钮</el-button>
      }).init()
    }
  }
}
</script>

<style scoped>

</style>
