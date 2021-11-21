<template>
  <div class="dialog">
      <input v-model="value" v-anti-shake="getData" type="text" />
  </div>
</template>

<script>
export default {
    name: 'Dialog',
    data() {
        return {
            value: ''
        }
    },
    mounted(){},
    methods: {
        getData(value) {
            console.log(value)
        }
    }
}
</script>

<style>

</style>