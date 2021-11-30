<template>
  <div class="message">
    <el-button @click="open">按钮</el-button>
    <Message />
  </div>
</template>

<script>
import Message from './file/index.vue'
export default {
  name: 'Message1',
  components: {
    Message
  },
  mounted() {
  },
  methods: {
    open() {
      this.$Message().init()
      setTimeout(() => {
        this.$Message().hide()
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
