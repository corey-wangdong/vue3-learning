<template id="component-b">
  <h2>{{title}}</h2>
  <p>{{message}}</p>
</template>

<script>
    export default {
      template: "#component-b",
      data() {
        return {
          title: "我是ComponentB标题",
          message: "我是ComponentB内容, 呵呵呵呵"
        }
      }
    }
</script>