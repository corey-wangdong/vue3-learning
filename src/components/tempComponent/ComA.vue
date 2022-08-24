<template id="component-a">
  <h2>{{title}}</h2>
  <p>{{content}}</p>
</template>

<script>
  export default {
    template: "#component-a",
    // data() {
    //   return {
    //     title: "我是ComponentA标题",
    //     message: "我是ComponentA内容, 哈哈哈哈"
    //   }
    // }
    props:['title','content']
  }
</script>