<template>
  <div>
    请输入问题：
    <input type="text"   v-model.lazy="question"/>
    <div>{{question}}</div>
    <!-- <div>{{info.name}}</div>
    <button @click="btnClick">修改 info name</button> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        question:'',
        info: {
          name:'corey'
        }
      }
    },
    // watch: {
    //   question(newVal, oldVal) {
    //     console.log('newVal--',newVal,'oldVal--',oldVal);
    //     if(newVal === oldVal) {
    //       console.log('请后值一致');
    //     }else {
    //       this.getAnswer(newVal);
    //     }
    //   },
    //   // 默认情况下，watch只是在侦听info的引用变化，对于内部属性的变化是不会做出相应的：
    //   // info(newVal, oldVal) {
    //   //   console.log('newVal--',newVal,'oldVal--',oldVal);
    //   // }
    //   info:{
    //     handler(newVal, oldVal) {
    //       console.log('------');
    //       // console.log('newVal--',newVal.name,'oldVal--',oldVal.name);
    //     },
    //     deep:true,
    //     immediate: true // 一开始就立即执行一次
    //   }
    // },
    // methods:{
    //   getAnswer(val) {
    //     console.log(`${val}的问题答案是没有答案`);
    //   },
    //   btnClick() {
    //     this.info.name = 'coco'
    //   }
    // }
  }
</script>

<style scoped>
  .btn {
    background-color: pink;
  }
  .className {
    color: red;
  }
</style>