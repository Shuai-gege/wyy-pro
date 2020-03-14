<template>
  <div class="Register">
    <navtab title="注册"></navtab>
    <div class="con">
      <div class="logo">
        <img src="../../images/图标/音乐.png" alt />
      </div>
      <!-- 注册框 -->
      <div class="reg">
        <van-cell-group>
          <van-field v-model="user" placeholder="请输入用户名" />
          <van-field v-model="tel" placeholder="请输入手机号" />
          <van-field v-model="password" placeholder="请输入密码" />
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button
              slot="button"
              size="small"
              type="primary"
              :round="true"
              @click="faSong"
            >发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <!-- 注册 -->
      <div class="btn">
        <van-button type="primary" size="large" :round="true" @click="reg">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import navtab from '../../components/title'
export default {
  data() {
    return {
      user: '', //用户名
      tel: '', //手机号
      password: '', //密码
      sms: '' //验证码
    }
  },
  components: {
    navtab
  },
  mounted() {},
  methods: {
    // 发送验证码
    faSong() {
      if (!this.user) {
        this.$toast('请输入用户名')
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)) {
        this.$toast('请输入正确的手机号')
      } else if (!this.password) {
        this.$toast('请输入密码')
      } else {
        this.axios.post('/captcha/sent?phone=' + this.tel).then(() => {
          this.$toast('发送成功，请耐心等待。')
        })
      }
    },
    //注册
    reg() {
      if (!this.user) {
        this.$toast('请输入用户名')
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.tel)) {
        this.$toast('请输入正确的手机号')
      } else if (!this.password) {
        this.$toast('请输入密码')
      } else if (!this.sms) {
        this.axios
          .post('/captcha/verify', { phone: this.tel, captcha: this.sms })
          .then(() => {})
      } else {
        this.axios
          .post('/register/cellphone', {
            phone: this.tel,
            captcha: this.sms,
            password: this.password,
            nickname: this.user
          })
          .then(() => {
            this.$toast('注册成功')
            setTimeout(() => {
              this.$router.push('/login')
            }, 1500)
          })
      }
    }
  }
}
</script>
<style lang='less' scoped>
.Register {
  min-height: 100vh;
  background: #f00;
  .con {
    padding-top: 44px;
    .logo {
      text-align: center;
      img {
        width: 100px;
        padding: 30px 0;
        margin: 0 auto;
      }
    }
    .btn {
      padding: 50px 10px;
    }
  }
}
</style>