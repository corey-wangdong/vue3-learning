<template>
  <component-a></component-a>
  <component-b></component-b>
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
          message: "Hello World"
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