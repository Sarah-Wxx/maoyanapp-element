<template>
  <div>
    <!-- 信息框 -->
    <div class="alter" v-show="isShow">{{ alter }}</div>
    <div class="regiest-head">
      <a @click="backLogin">
        <img src="~@/assets/img/arrows.png" alt="" />
      </a>
      <p>注册</p>
    </div>
    <div class="regiest-input">
      <p>输入手机号</p>
      <img src="~@/assets/img/register_03.png" alt="" />
      <p>输入验证码</p>
      <img src="~@/assets/img/register_05.png" alt="" />
      <p>设置密码</p>
    </div>
    <div class="regiest-num">
      <div class="box">
        <p>手机号：</p>
        <p>
          <input
            type="text"
            placeholder="请输入您的手机号"
            id="phone"
            @blur="blur"
            v-model="phoneVaule"
          />
        </p>
        <p>
          <span id="info">{{ info }}</span>
        </p>
      </div>
      <div class="box">
        <p class="pwd">密码：</p>
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
    <div>
      <p class="btn-box">
        <button
          type="button"
          class="regist-btn"
          id="submit"
          @click="submit"
        >
          提交
        </button>
      </p>
    </div>
    <!-- <div class="regiest-check">
            获取验证码
        </div> -->
    <div class="regiest-foot">
      <img src="~@/assets/img/right.png" alt="" />
      <p>我已阅读并同意<span>美团用户协议</span></p>
    </div>
  </div>
</template>

<script>
import { phoneReg } from '@/assets/js/reg'
import { userCheck, userRegist } from '@/api/user'
export default {
  name: 'Regit',
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
    async blur () {
      // 手机号正则
      // let phonePattern = /^1[345789]\d{9}$/;
      if (phoneReg.test(this.phoneVaule)) {
        try {
          const res = await userCheck({ phone: this.phoneVaule })
          this.info = res.msg
        } catch (error) {
          console.log(error)
        }
      } else {
        this.info = '手机号格式错误'
      }
    },
    // 提交
    async submit () {
      let data = {
        phone: this.phoneVaule,
        pwd: this.pwd
      }
      if (phoneReg.test(this.phoneVaule)) {
        const res = await userRegist(data)
        if (res.code === 0) {
          this.$router.push('/login')
        }
      } else {
        this.alter = '请输入正确的手机号'
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
        }, 1000)
      }
    },
    backLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.regiest-head {
  width: 100%;
  height: 1.49rem;
  background-color: #db413a;
  display: flex;
  align-items: center;
  font-size: 0.51rem;
  color: white;
}
.regiest-head img {
  height: 0.6rem;
  margin-left: 0.6rem;
}
.regiest-head p {
  margin-left: 0.47rem;
  padding-left: 0.47rem;
  border-left: 0.01rem solid #a9271e;
}

.regiest-input {
  width: 96%;
  height: 1.64rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.regiest-input img {
  height: 0.15rem;
}
.regiest-input p {
  font-size: 0.42rem;
  color: #989898;
}
.regiest-input p:nth-of-type(1) {
  color: #d6423e;
}

.regiest-num {
  width: 100%;
  padding-bottom: 5px;
  /* height: 1.51rem; */
  /* display: flex; */
  background-color: white;
  margin-bottom: 1rem;
}
.regiest-num p {
  font-size: 0.45rem;
  display: inline-block;
  /* line-height:  1.51rem;  */
}
.regiest-num .box {
  /* margin-bottom: 15px; */
  height: 1.66rem;
}
#info {
  color: red;
  margin-left: 2.8rem;
}
.regiest-num p:nth-of-type(1) {
  margin-right: 0.25rem;
  margin-left: 0.6rem;
  width: 1.8rem;
  text-align: right;
}
/* .regiest-num p:nth-of-type(2) {
      color: #DDDDDD; } */
.regiest-num p input {
  height: 0.89rem;
  width: 6.4rem;
}
.pwd {
  margin-right: 0.65rem;
  margin-left: 0.6rem;
}
.regiest-check {
  width: 96%;
  height: 1.36rem;
  margin: auto;
  background-color: #eed6a9;
  color: white;
  text-align: center;
  font-size: 0.5rem;
  line-height: 1.36rem;
  border-radius: 0.1rem;
}

.regiest-foot {
  height: 0.95rem;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
}
.regiest-foot img {
  margin-left: 0.6rem;
  height: 0.65rem;
  margin-right: 0.4rem;
}
.regiest-foot p {
  font-size: 0.45rem;
  color: #6e6e6e;
}
.regiest-foot p span {
  color: #0f9dee;
}

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

.regist-btn{
  width: 100%;
  height: 1.5rem;
  color: white;
  background: #ee7340;
  border: 0;
  outline: 0;
}
/*# sourceMappingURL=regiest.css.map */
</style>
