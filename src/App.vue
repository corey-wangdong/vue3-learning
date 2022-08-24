<template>
  <div>
    <h2>{{ getFullName() }}</h2>
    <h2>{{ getScore() }}</h2>
    <h2>{{ getScore() }}</h2>
    <h2>{{ getReverseMessage() }}</h2>

    <!-- 计算属性 -->
    <h2>{{ fullName }}</h2>
    <h2>{{ score }}</h2>
    <h2>{{ score }}</h2>
    <h2>{{ reverseMessage }}</h2>

    <button @click="setNewName">设置新名字</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName:'xu',
        lastName:'corey',
        score:99,
        message:'hello world'
      }
    },
    methods: {
      setNewName() {
        this.fullName = 'corey code'
      },
      getFullName() {
        return `${this.firstName} ${this.lastName}`
      },
      getScore() {
        console.log("调用了计算属性result的getter");
        return this.score >= 60 ? '及格' : '不及格'
      },
      getReverseMessage() {
        return this.message.split(' ').reverse().join(' ')
      }
    },
    computed:{
      // fullName() {
      //   return `${this.firstName} ${this.lastName}`
      // },
      fullName: {
        get() {
          return `${this.firstName} ${this.lastName}`
        },
        set(value) {
          const names = value.split(" ");
          this.firstName = names[0];
          this.lastName = names[1];
        }
      },
      score() {
        console.log("调用了computed方法");
        return this.score >= 60 ? '及格' : '不及格'
      },
      reverseMessage() {
        return this.message.split(' ').reverse().join(' ')
      }
    }
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