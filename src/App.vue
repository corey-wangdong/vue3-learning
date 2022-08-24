<template>
  <div>
    <h2 :class="{'className':counter > 2}">{{counter}}</h2>
    <button v-if="counter < 4" class="btn" v-on:click='increment'>+1</button>
    <button :style="{color:'red'}" @click='decrement'>-1</button>
    <div v-show="counter>2">test</div>

    <ul>
      <li v-for="(item, index) in movies">{{item}} --- {{index}}</li>
    </ul>

    <ul>
      <li v-for="(value,key,index) in info">{{value}}--{{key}}--{{index}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        movies:['电影1','电影2'],
        info:{
          name:'corey',
          age:'18',
          sex:'男'
        }
      }
    },
    methods: {
      increment(){
        console.log(this);
        this.counter++;
      },
      decrement() {
        this.counter--;
      },
      className:'test'
    },
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