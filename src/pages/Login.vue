<template>
  <div>
    <div class="alter" v-show="isShow">{{ alter }}</div>
    <div class="login-head">
      <div class="login-head-left">
        <a @click="backMy">
          <img src="~@/assets/img/arrows.png" alt="" />
        </a>
        <p>登录</p>
      </div>
      <p>忘记密码</p>
    </div>

    <div class="login-logo">
      <div>
        <img src="~@/assets/img/avatar.png" alt="" />
      </div>
      <p>美团账号登录</p>
    </div>
    <div class="login-box">
      <div class="phone-box">
        <p>用户名：</p>
        <p>
          <input
            type="text"
            placeholder="请输入手机号"
            id="phone"
            v-model="phoneVaule"
            @blur="blur"
          />
        </p>

        <p class="info-box">
          <span id="info">{{ info }}</span>
        </p>
      </div>
      <div>
        <p>密 &nbsp;&nbsp;码：</p>
        <p>
          <input
            type="password"
            placeholder="请输入密码"
            id="pwd"
            v-model="pwd"
          />
        </p>
      </div>
    </div>

    <!-- <div class="login">登录</div> -->
    <div>
      <p class="btn-box">
        <button
          type="button"
          class="login-btn"
          id="submit"
          @click="onSubmit"
        >
          登录
        </button>
      </p>
    </div>
    <div class="regiest">
      <a @click="toRegist">
        <p>立即注册</p>
      </a>
      <p>手机号快捷登录 &gt;</p>
    </div>

    <div class="login-other">
      <div class="login-other-head">
        <div>
          <span>. . . . . . . . . . . . . . . . .</span>
        </div>
        <p>第三方账号登录</p>
        <div>
          <span>. . . . . . . . . . . . . . . . . </span>
        </div>
      </div>
      <div class="login-other-logo">
        <div>
          <img src="~@/assets/img/wx.png" alt="" />
          <p>微信</p>
        </div>
        <div>
          <img src="~@/assets/img/qq.png" alt="" />
          <p>QQ</p>
        </div>
        <div>
          <img src="~@/assets/img/wb.png" alt="" />
          <p>微博</p>
        </div>
        <div>
          <img src="~@/assets/img/baidu.png" alt="" />
          <p>百度</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { phoneReg } from '@/assets/js/reg'
import { userLogin } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      phoneVaule: '', // 手机号
      pwd: '', // 密码
      info: '', // 手机号信息提示
      alter: '', // 注册有误信息提示
      isShow: false // 注册有误信息是否提示
    }
  },
  methods: {
    // 手机号输入框失焦
    blur () {
      if (!phoneReg.test(this.phoneVaule)) {
        this.info = '手机号格式错误'
      }
    },
    // 提交
    async onSubmit () {
      if (phoneReg.test(this.phoneVaule)) {
        try {
          let data = {
            phone: this.phoneVaule,
            pwd: this.pwd
          }
          const res = await userLogin(data)
          if (res.code === 0) {
            this.$router.push('/main/movie')
            let phone = res.data.phone
            let userId = res.data._id
            let userData = {
              userId: userId,
              phone: phone
            }
            // 将用户数据存入localStorage
            window.localStorage.setItem('users', JSON.stringify(userData))
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    // 返回
    backMy () {
      this.$router.push('/main/my')
    },
    // 注册
    toRegist () {
      this.$router.push('/regist')
    }
  }
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.login-head {
  width: 100%;
  height: 1.51rem;
  background-color: #db413a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}
.login-head .login-head-left {
  width: 3rem;
  height: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.51rem;
}
.login-head .login-head-left img {
  height: 0.55rem;
  margin-left: 0.5rem;
}
.login-head .login-head-left p {
  padding-left: 0.47rem;
  border-left: 0.01rem solid #a9271e;
}
.login-head > p {
  font-size: 0.47rem;
  margin-right: 0.4rem;
}

.login-logo {
  width: 100%;
  height: 3.6rem;
  padding-top: 0.75rem;
  margin-bottom: 0.4rem;
}
.login-logo div {
  width: 1.97rem;
  height: 1.97rem;
  border-radius: 50%;
  text-align: center;
  background-color: #e7e6e5;
  margin: auto;
}
.login-logo div img {
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.08rem;
}
.login-logo > p {
  font-size: 0.43rem;
  color: #989898;
  margin-top: 0.93rem;
  margin-left: 0.5rem;
}

.login-box {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ebebeb;
  border-top: 1px solid #ebebeb;
  margin-bottom: 0.62rem;
}
.login-box div {
  width: 96%;
  height: 1.63rem;
  margin-left: 0.5rem;
  padding-bottom: 0.62rem;
  border-bottom: 1px solid #ebebeb;
  /* position: relative; */
  /* display: flex;  */
}
.login-box div:nth-of-type(2) {
  border: 0;
}
.login-box div p {
  font-size: 0.48rem;
  /* line-height: 1.57rem; */
  /* font-weight: 600; */
  display: inline-block;

}
.login-box div p:nth-of-type(1) {
  margin-right: 0.6rem;
}
.login-box div p:nth-of-type(2) {
  color: #cbcbcb;
}
.login-box div p input {
  height: 0.75rem;
  width: 6.5rem;
}
.login {
  width: 96%;
  height: 1.35rem;
  background-color: #f14e40;
  color: white;
  text-align: center;
  line-height: 1.35rem;
  margin: auto;
  border-radius: 0.1rem;
  font-size: 0.44rem;
}

.regiest {
  width: 96%;
  height: 1.45rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 0.47rem;
}
.regiest a {
  text-decoration: none;
}
.regiest p {
  font-size: 0.37rem;
  color: #ee4d40;
}

.login-other {
  width: 90%;
  margin: auto;
}
.login-other .login-other-head {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #979797;
  margin-bottom: 0.62rem;
}
.login-other .login-other-head div {
  font-size: 0.1rem;
}
.login-other .login-other-head div span {
  vertical-align: 0.3rem;
}
.login-other .login-other-head p {
  font-size: 0.47rem;
}
.login-other .login-other-logo {
  display: flex;
  justify-content: space-around;
}
.login-other .login-other-logo div {
  text-align: center;
}
.login-other .login-other-logo div img {
  width: 1.22rem;
  height: 1.22rem;
}
.login-other .login-other-logo div p {
  font-size: 0.4rem;
}

/* #info {
  font-size: 0.42rem;
  color: red;
  margin-left: 2.6rem;
  font-weight: 500;
} */
body {
  position: relative;
}
.alter {
  width: 7rem;
  height: 1.5rem;
  background: rgba(111, 181, 235, 0.5);
  text-align: center;
  line-height: 1.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-btn{
  width: 100%;
  height: 1.5rem;
  color: white;
  background: #ee7340;
  border: 0;
  outline: 0;
}
.phone-box{
  position: relative;
}
.info-box{
  font-size: 0.42rem;
    color: red;
    margin-left: 2.6rem;
    font-weight: 500;
  position: absolute;
  bottom: 0;
  left: 2%;
}
/*# sourceMappingURL=login.css.map */
</style>
