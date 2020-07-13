<template>
  <div class="login-container">
    <!-- navBar -->
    <van-nav-bar class="page-nav-bar"
                 title="登录" />

    <!--  -->
    <van-form @submit="onSubmit">
      <van-field v-model="user.mobile"
                 name="手机号"
                 placeholder="请输入手机号">
        <i slot="left-icon"
           class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field v-model="user.code"
                 name="验证码"
                 placeholder="请输入验证码">
        <i slot="left-icon"
           class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-button size="small"
                      round
                      class="send-sms">发送验证码</van-button>
        </template>
      </van-field>

      <div class="login-submit-btn">
        <van-button block
                    type="info"
                    native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const user = this.user
      try {
        const res = await login(user)
        console.log('登录成功' + res)
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或者验证码错误' + err)
        } else {
          console.log('登陆失败请稍后再试' + err)
        }
      }
    }
  }
}
</script>

<style lang="less" scope>
.toutiao {
  .van-nav-bar__title {
    font-size: 36px;
  }
}
.van-button__text {
  color: #666;
  font-size: 30px;
}
.send-sms {
  background: #efefef;
}
.login-submit-btn {
  margin: 45px 30px;
  .van-button {
    background-color: #6db4fb;
    border-radius: 8px;
  }
  .van-button__text {
    color: #fff;
    font-size: 30px;
  }
}
</style>
