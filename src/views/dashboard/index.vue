<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="herder">
          <div>后台管理系统</div>
          <div @click="handleExit">退出</div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>抽奖管理模块</span>
              </template>
              <el-menu-item index="1-1">
                <router-link to="/dashboard/lottery/list">抽奖活动列表</router-link>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><location /></el-icon>
                <span>商店管理模块</span>
              </template>
              <el-menu-item index="1-1">
                <router-link to="/dashboard/shop/order">订单管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-1">
                <router-link to="/dashboard/shop/refund">退款管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/dashboard/shop/refund-goods">退货管理</router-link>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div class="main">
              <router-view></router-view>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../../../src/stores/modules/user';
import { useOrderStore } from '../../stores/modules/order';

const router = useRouter();
const {token, setToken} = useUserStore();

console.log('token----',token);
console.log('router----',router);
if(!token) router && router.push('/')

const handleExit = () => {
  console.log('退出登录----');
  setToken('')
}

</script>

<style lang="scss" scoped>

  .common-layout {
    height: 100%;
    background-color: #f0f0f0;

    .el-container {
      height: 100%;
    }

    .el-aside {
      .el-menu--vertical {
        height: 100%;
      }
    }
  }

  .herder {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .aside {
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: #000;
  }

  .main {
    width: 100%;
    height: 100%;
  }

  .footer {
    width: 100%;
    height: 100%;
  }
</style>