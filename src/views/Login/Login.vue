<template>
  <div class="Login">
    <navtab title="登陆"></navtab>
    <div class="con">
      <!-- 登陆logo -->
      <div class="logo">
        <img src="../../images/图标/音乐.png" alt />
      </div>
      <!-- 登陆 -->
      <div class="log">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
      </div>
      <!-- 登陆 -->
      <div class="btn">
        <van-button type="primary" size="large" :round="true" @click="login">登陆</van-button>
      </div>
      <p class="reg" @click="reg">注册</p>
    </div>
  </div>
</template>

<script>
import navtab from '../../components/title'
export default {
  data() {
    return {
      username: '', //用户名
      password: '' //密码
    }
  },
  components: {
    navtab
  },
  mounted() {},
  methods: {
    login() {
      if (!this.username) {
        this.$toast('请输入用户名')
      } else if (!this.password) {
        this.$toast('请输入密码')
      } else {
        this.axios
          .post('/login/cellphone', {
            phone: this.username,
            password: this.password
          })
          .then(data => {
            localStorage.setItem('token', data.token)
            localStorage.setItem('uid', data.account.id)
            this.$router.push('/')
          })
      }
    },
    // 注册
    reg() {
      this.$router.push('/register')
    }
  }
}
</script>
<style lang='less' scoped>
.Login {
  background: #f00;
  min-height: 100vh;
  .con {
    padding-top: 44px;
    .logo {
      text-align: right;
      img {
        width: 100px;
        padding: 50px 0;
        margin: 0 auto;
      }
    }
    .log {
      padding: 30px 0 50px 0;
    }
    .btn {
      padding: 10px;
    }
    .reg {
      color: #fff;
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>