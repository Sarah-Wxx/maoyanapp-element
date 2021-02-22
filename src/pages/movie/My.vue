<template>
  <div>
    <div id="my">
      <div class="head">
        <div>
          <a @click="toLogin">
            <img src="~@/assets/img/loading_2.e3d934bf_02.png" alt="" />
          </a>
          <div>
            <p class="phone">{{ phone }}</p>
            <p>v1 青铜会员</p>
          </div>
        </div>
        <img src="~@/assets/img/movie_p_arrows.png" alt="" />
      </div>
      <!-- 想看 -->
      <div class="want">
        <ul>
          <li>
            <p class="want-bg1"></p>
            <p>想看0</p>
          </li>
          <li>
            <p class="want-bg2"></p>
            <p>看过0</p>
          </li>
          <li>
            <p class="want-bg3"></p>
            <p>影评0</p>
          </li>
          <li>
            <p class="want-bg4"></p>
            <p>话题0</p>
          </li>
        </ul>
      </div>
      <!-- 我的订单 -->
      <div class="order">
        <div class="order-head">
          <p>我的订单</p>
          <p>
            全部
            <img src="~@/assets/img/movie_p_arrows.png" alt="" />
          </p>
        </div>
        <div class="order-box">
          <div>
            <p class="order-bg1"></p>
            <p>未消费</p>
          </div>
          <div>
            <p class="order-bg2"></p>
            <p>待付款</p>
          </div>
          <div>
            <p class="order-bg3"></p>
            <p>待评价</p>
          </div>
          <div>
            <p class="order-bg4"></p>
            <p>退款</p>
          </div>
        </div>
      </div>

      <div class="my-box">
        <div>
          <p>我的消息</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div>
          <p>我的收藏</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div>
          <p>会员中心</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div>
          <p>我的成就</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div class="none"></div>
        <div>
          <p>美团钱包</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div>
          <p>我的余额</p>
          <p>
            <span>0.00元</span>
            <img src="~@/assets/img/movie_p_arrows.png" alt="" />
          </p>
        </div>
        <div>
          <p>优惠券</p>
          <p>
            <span>0张可用</span>
            <img src="~@/assets/img/movie_p_arrows.png" alt="" />
          </p>
        </div>
        <div>
          <p>商城</p>
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </div>
        <div>
          <p>设置</p>
          <p>
            <span>手机绑定与更换</span>
            <img src="~@/assets/img/movie_p_arrows.png" alt="" />
          </p>
        </div>
      </div>
      <div class="foot-none"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
      phone: ''
    }
  },
  mounted () {
    let data = JSON.parse(window.localStorage.getItem('users')) || {}
    this.phone = data.phone || ''
  },
  methods: {
    // 跳转到登录
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
body {
  background-color: #f5f5f5;
}

.head {
  width: 100%;
  height: 3.35rem;
  background-color: #d33f36;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.head > div {
  color: white;
  display: flex;
  align-items: center;
}
.head > div img {
  width: 1.93rem;
  height: 1.93rem;
  margin: 0 0.46rem 0 0.5rem;
}
.head > div > div p:nth-of-type(1) {
  font-size: 0.43rem;
  margin-bottom: 0.32rem;
}
.head > div > div p:nth-of-type(2) {
  font-size: 0.33rem;
}
.head > img {
  height: 0.3rem;
  transform: rotate(-90deg);
  margin-right: 0.45rem;
}

.want {
  background-color: white;
  width: 100%;
  height: 2.14rem;
  margin-bottom: 0.47rem;
  border-bottom: 1px solid #e5e5e5;
}
.want ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.72rem;
}
.want ul li {
  width: 2.96rem;
  height: 1.44rem;
  border-right: 1px solid #e5e5e5;
}
.want ul li p {
  text-align: center;
}
.want ul li p:nth-of-type(1) {
  width: 0.6rem;
  height: 0.6rem;
  margin: auto;
  background-size: 537% 391%;
}
.want ul li p:nth-of-type(2) {
  font-size: 0.41rem;
}
.want ul li .want-bg1 {
  background: url("~@/assets/img/icon.png") 5px 3px;
}
.want ul li .want-bg2 {
  background: url("~@/assets/img/icon.png") 72px 3px;
}
.want ul li .want-bg3 {
  background: url("~@/assets/img/icon.png") 49px 3px;
}
.want ul li .want-bg4 {
  background: url("~@/assets/img/icon.png") -16px 3px;
}

.order {
  width: 100%;
  background-color: white;
  margin-bottom: 0.47rem;
}
.order .order-head {
  width: 100%;
  height: 1.36rem;
  line-height: 1.36rem;
  border-bottom: 0.01rem solid #e5e5e5;
  display: flex;
  justify-content: space-between;
}
.order .order-head p {
  font-size: 0.47rem;
}
.order .order-head p:nth-of-type(1) {
  font-weight: 600;
  margin-left: 0.5rem;
}
.order .order-head p:nth-of-type(2) {
  color: #999999;
}
.order .order-head p:nth-of-type(2) img {
  height: 0.2rem;
  transform: rotate(-90deg);
}
.order .order-box {
  width: 100%;
  height: 1.91rem;
  padding-top: 0.28rem;
  display: flex;
  justify-content: space-around;
}
.order .order-box div p {
  text-align: center;
  font-size: 0.39rem;
}
.order .order-box div p:nth-of-type(1) {
  margin: auto;
  width: 0.71rem;
  height: 0.66rem;
  margin-bottom: 0.25rem;
  background-size: 537% 391%;
}
.order .order-box div .order-bg1 {
  background: url("~@/assets/img/icon.png") 5px 72px;
}
.order .order-box div .order-bg2 {
  background: url("~@/assets/img/icon.png") -22px 70px;
}
.order .order-box div .order-bg3 {
  background: url("~@/assets/img/icon.png") -46px 70px;
}
.order .order-box div .order-bg4 {
  background: url("~@/assets/img/icon.png") 60px 71px;
}

.my-box {
  width: 100%;
  background-color: white;
}
.my-box .none {
  width: 100%;
  height: 0.45rem;
  background-color: #f5f5f5;
}
.my-box div {
  width: 100%;
  height: 1.35rem;
  border-bottom: 0.01rem solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-box div > p {
  font-size: 0.45rem;
  margin-left: 0.5rem;
}
.my-box div > p:nth-of-type(2) span {
  font-size: 0.37rem;
  color: #979797;
}
.my-box div img {
  height: 0.2rem;
  transform: rotate(-90deg);
}

.foot-none {
  width: 100%;
  height: 1.52rem;
}
</style>
