<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="herder">header</div>
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
                <router-link to="/dashboard/about">退款管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/dashboard/login2">退货管理</router-link>
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>商店管理模块</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <div class="main">
              <router-view></router-view>
            </div>
          </el-main>
          <el-footer>
            <div class="footer">Footer</div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

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
    /* background-color: red; */
  }

  .footer {
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
  }
</style>