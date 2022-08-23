<template>
  <div class="basic-layout">
    <div class="app-header">
      <div class="left">
        <img
          src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
          alt=""
        />
        <div class="title">图书管理系统</div>
      </div>
      <div class="right">
        <div class="hello-msg">你好,xxxx</div>
        <div class="logout">退出</div>
      </div>
    </div>
    <div class="app-header-placeholder"></div>
    <div class="app-content">
      <div class="left">
        <app-nav></app-nav>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: {
    AppNav: Nav,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.basic-layout {
  .app-header-placeholder {
    height: 64px;
    width: 100%;
  }
  .app-header {
    height: 64px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    z-index: 1;
    .left {
      display: flex;
      align-items: center;
      img {
        margin-right: 16px;
        height: 50px;
      }
      .title {
        font-size: 18px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .logout {
        width: 80px;
        text-align: center;
        line-height: 64px;
        cursor: pointer;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
  .app-content {
    display: flex;
    .left {
      width: 256px;
      background-color: pink;
      position: fixed;
      top: 64px;
      bottom: 0;
    }
    .right {
      padding: 24px;
      flex: 1;
      margin-left: 256px;
    }
  }
}
</style>
