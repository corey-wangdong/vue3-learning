<template>
  <div>
    <div class="titleBox">
      <div></div>
      <div>书籍名称</div>
      <div>出版日期</div>
      <div>价格</div>
      <div>购买数量</div>
      <div>操作</div>
    </div>
    <div class="body">
      <div v-if="chardInfo.length > 0" class="item" v-for="(val,index) in chardInfo">
        <div>{{index+1}}</div>
        <div>{{val.book}}</div>
        <div>{{val.time}}</div>
        <div>￥{{val.price}}</div>
        <div>
          <button @click="decrement(index)" :disabled="val.num <= 1">-</button>
          {{val.num}}
          <button @click="increment(index)">+</button>
        </div>
        <button @click="remove(index)">移除</button>
      </div>
      <div v-else>购物车为空</div>
    </div>
    <h4>总价格:￥{{total}}</h4>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        chardInfo:[
          {
            book:'《算法导论》',
            time:'2006-9',
            price:'85.00',
            num:1
          },
          {
            book:'《英语》',
            time:'2006-9',
            price:'80.00',
            num:1
          },
          {
            book:'《数学》',
            time:'2006-9',
            price:'89.00',
            num:1
          }
        ],
      }
    },
    methods:{
      decrement(index) {
          this.chardInfo[index].num--
      },
      increment(index) {
          this.chardInfo[index].num++
      },
      remove(index) {
        this.chardInfo.splice(index,1)
      }
    },
    computed:{
      total() {
        return this.chardInfo.reduce((pre,next) => pre + next.num * next.price,0)
      }
    },
    // watch:{
    //   chardInfo:{
    //     handler(chardInfo) {
    //       const res =  chardInfo.reduce((pre,next) => pre + next.num * next.price,0)
    //       this.total = res;
    //     },
    //     deep:true,
    //     immediate:true
    //   }
    // }
  }
</script>

<style scoped>
.titleBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: aliceblue;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

