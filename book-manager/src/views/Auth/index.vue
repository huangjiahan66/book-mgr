<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img
        src="https://ncstatic.clewm.net/rsrc/2020/1016/02/4757e4910cb527fc040d019a93ded74f.png?x-oss-process=image/resize,w_750/format,gif/sharpen,100/quality,Q_80/interlace,1/auto-orient,1"
        alt=""
      />
      <h2 class="title">闽科毕设管理系统后台</h2>
    </div>

    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登陆">
          <div class="item">
            <a-input placeholder="账号" size="large" v-model:value="loginForm.account">
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input placeholder="密码" size="large" v-model:value="loginForm.password">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a href="">忘记密码</a>
          </div>
          <div class="item">
            <a-button type="primary" @click="login">登陆</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="注册">
          <div class="item">
            <a-input placeholder="账号" size="large" v-model:value="regForm.account">
              <template #prefix>
                <user-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input placeholder="密码" size="large" v-model:value="regForm.password">
              <template #prefix>
                <lock-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-input placeholder="邀请码" size="large" v-model:value="regForm.invitecode">
              <template #prefix>
                <folder-outlined />
              </template>
            </a-input>
          </div>
          <div class="item">
            <a-button type="primary" @click="register">注册</a-button>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { UserOutlined, LockOutlined, FolderOutlined } from "@ant-design/icons-vue";
import { auth } from "@/servies";
import { message } from "ant-design-vue";
import { result } from "@/helpers/utils";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    FolderOutlined,
  },
  setup() {
    const regForm = reactive({
      account: "",
      password: "",
      invitecode: "",
    });
    const loginForm = reactive({
      account: "",
      password: "",
    });

    // 注册请求
    const register = async () => {
      if (regForm.account == "") {
        message.info("账户不能为空");
        return;
      }
      if (regForm.password == "") {
        message.info("密码不能为空");
        return;
      }
      if (regForm.invitecode == "") {
        message.info("请输入邀请码");
        return;
      }

      const res = await auth.register(regForm.account, regForm.password, regForm.invitecode);
      result(res).success((data) => {
        message.success(data.msg);
      });
    };

    // 登录请求
    const login = async () => {
      // if (loginForm.account == "") {
      //   message.info("账户不能为空");
      //   return;
      // }
      // if (loginForm.password == "") {
      //   message.info("密码不能为空");
      //   return;
      // }
      const res = await auth.login(loginForm.account, loginForm.password);

      result(res).success((data) => {
        message.success(data.msg);
      });
    };
    return {
      regForm,
      register,
      loginForm,
      login,
    };
  },
});
</script>

<style lang="scss" scoped>
.bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.auth {
  .title-info {
    text-align: center;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 60px;
      height: 60px;
    }
    h2 {
      margin: 0;
      margin-left: 18px;
    }
  }
}
.form {
  width: 400px;
  margin: 0 auto;
  .item {
    margin-bottom: 16px;
    button {
      width: 100%;
    }
  }
}
</style>
