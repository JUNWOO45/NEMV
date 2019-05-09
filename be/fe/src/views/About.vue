<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{title}}</h1>
    <v-btn :color="btnColor" @click="test">Success</v-btn>
    <v-chip v-for="chip in chips" :color="chip.cl" @click="chipTest">{{chip.name}}</v-chip>
  </div>
</template>
<script>
  export default {
    name: 'default',
    data() {
      return {
        title: 'park jun woo',
        btnColor: 'info',
        chips: [
          {
            cl: 'primary',
            name: 'abc'
          },
          {
            cl: 'red',
            name: 'def'
          },
          {
            cl: 'green',
            name: 'ghi'
          }
        ]
      }
    },
    methods: {
      test() {
        console.log("test is done!");
        this.title='nnnn',
        this.btnColor='warning'
      },
      chipTest() {
        console.log("chip is clicked!");
        // this.chips.name = 123;
      }
    }
  }
</script>
<style scoped>
</style>
