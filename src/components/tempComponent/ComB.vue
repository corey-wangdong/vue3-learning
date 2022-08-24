<template id="component-b">
  <h2>{{title}}</h2>
  <p>{{content}}</p>
  <button @click="test('哇偶')">点我点我</button>
</template>

<script>
    export default {
      template: "#component-b",
      // props:['title','content','clickMe'],
      methods: {
        test(value) {
          this.$emit('clickMe',value)
        }
      },
      // data() {
      //   return {
      //     title: "我是ComponentB标题",
      //     message: "我是ComponentB内容, 呵呵呵呵"
      //   }
      // }
    }
</script>