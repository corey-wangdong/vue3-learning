<template>
  <!-- <component-a title="hahaha a" content="内容"></component-a>
  <component-b :title="title" :content="content"></component-b> -->
  <component-a :title="info.title" :content="info.content"></component-a>
  <component-b v-bind="info" :clickMe="clickMe"></component-b>
  <component-b v-bind="info" @clickMe="clickMe"></component-b>
  <div>{{message}}</div>
</template>

<script>
  import ComA from './components/tempComponent/ComA.vue';
  import ComB from './components/tempComponent/ComB.vue';

  export default {
      components: {
        'component-a': ComA,
        'component-b': ComB,
      },
      data() {
        return {
          message: "Hello World",
          title:'hahaha bbb',
          content:'内容 B',
          info:{
            title:'title 123',
            content:'content 456'
          }
        }
      },
      methods:{
        clickMe(value) {
          console.log('click me--',value);
        }
      }
  };
</script>

<style scoped>
  .btn {
    background-color: pink;
  }
  .className {
    color: red;
  }
</style>