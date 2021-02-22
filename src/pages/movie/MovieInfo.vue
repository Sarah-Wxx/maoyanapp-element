<template>
  <div>
    <div class="info-head" :style="headStyle">
      <div class="mask">
        <div class="info-head-box">
          <!-- 返回 -->
          <!-- <a href="movie.html"> -->
          <a @click="backMovie">
            <img src="~@/assets/img/arrows.png" alt="" />
          </a>
          <img src="~@/assets/img/share.png" alt="" />
        </div>
        <div class="info-head-img">
          <div>
            <img :src="movieData.url" alt="" />
          </div>
          <div>
            <h2>{{ movieData.name }}</h2>
            <p>Mechanic:Resurrection</p>
            <div id="score" name="score"></div>
            <p>(7092评分)</p>
            <p class="head-text1">{{ movieData.type }}</p>
            <p class="head-text1">{{ area }} / 97分钟</p>
            <p class="head-text1">
              {{ movieData.time }} {{ area }}上映
              <img src="~@/assets/img/movie_p_arrows.png" alt="" />
            </p>
          </div>
        </div>
        <div class="info-head-button">
          <div>
            <img src="~@/assets/img/like_03.png" alt="" />
            想看
          </div>
          <div
            class="collection"
            :class="{ active: isActive }"
            @click="collection"
          >
            <img src="~@/assets/img/star.png" alt="" />
            收藏
          </div>
        </div>
      </div>
    </div>
    <!-- 简介 -->
    <div class="info">
      <div>
        <p class="brief" :style="briefStyle">
          {{ movieData.brief }}
          <!-- 影片讲述了职业杀手亚瑟为解救爱人不得不完成一系列不可能的暗杀任务。在一-桩看似意外的事件中，亚瑟毕索(杰森斯坦森饰)的红颜知己 -->
        </p>
        <p>
          <img
            src="~@/assets/img/movie_p_arrows.png"
            alt=""
            class="open"
            v-show="openShow"
            @click="open"
          />
          <img
            src="~@/assets/img/movie_p_arrows.png"
            alt=""
            class="close"
            v-show="closeShow"
            @click="close"
          />
        </p>
      </div>
    </div>

    <!-- 演员表 -->
    <div class="info-person">
      <div class="info-person-head">
        <div>
          <p>导演</p>
          <p>演员</p>
        </div>
        <p>
          全部
          <img src="~@/assets/img/movie_p_arrows.png" alt="" />
        </p>
      </div>
      <div class="info-person-box">
        <img src="~@/assets/img/resurgence.actor01_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor02_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor03_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor04_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor01_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor02_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor03_03.png" alt="" />
        <img src="~@/assets/img/resurgence.actor04_03.png" alt="" />
      </div>
    </div>

    <!-- foot -->
    <div class="foot-none"></div>
    <div class="foot">立即购票</div>
  </div>
</template>

<script>
import { movieDet, movieCollect, collect } from '@/api/movie'
import apiUrl from '@/api/apiUrl'
export default {
  name: 'MovieInfo',
  data () {
    return {
      movieId: '', // 电影id
      userId: '', // 用户id
      area: '', // 上映地区
      movieData: {}, // 电影信息
      headStyle: {
        backgroundImage: "url('')" // 电影信息背景
      },
      briefStyle: { // 电影简介
        overflow: 'hidden',
        height: '1.6rem'
      },
      openShow: true, // 展开电影简介
      closeShow: false, // 关闭电影简介
      isActive: false // 是否收藏
    }
  },
  mounted () {
    // console.log(this.$route)
    this.getMovieData()
    this.collectionMovie()
  },
  methods: {
    // 处理地址函数
    getQueryVariable () {
      let query = window.location.search.substring(1)
      let arr = query.split('&')
      const data = {}
      for (let i = 0; i < arr.length; i++) {
        const objArr = arr[i].split('=')
        data[objArr[0]] = objArr[1]
      }
      return data
    },
    // 电影信息
    async getMovieData () {
      try {
        this.movieId = this.getQueryVariable()
        // console.log(movieId, 'movieId')
        const res = await movieDet({ movieId: this.movieId.id })
        // console.log(res, 'res1111111111')
        if (res.code === 0) {
          this.movieData = res.data
          // console.log(this.movieData, 'this.movieData')
          this.movieData.url = `${apiUrl}/images/${this.movieData.url}`
          // console.log(this.movieData, 'this.movieData');
          // 改变背景
          this.headStyle.backgroundImage = `url(${this.movieData.url})`
          // let score = this.movieData.score
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 是否收藏此电影请求
    async collectionMovie () {
      this.userId = JSON.parse(window.localStorage.getItem('users')).userId
      // console.log(JSON.parse(window.localStorage.getItem('users')).phone, '1111111111')
      // 保存电影id和用户id
      let collectionData = {
        userId: this.userId,
        movieId: this.movieId.id
      }
      const res = await movieCollect(collectionData)
      if (res.code === 0) {
        // 收藏状态
        if (res.data === 1) {
          this.isActive = true
        }
      }
    },
    // 展开简介
    open () {
      this.briefStyle.overflow = 'visible'
      this.briefStyle.height = 'auto'
      this.openShow = false
      this.closeShow = true
    },
    // 收缩简介
    close () {
      this.briefStyle.overflow = 'hidden'
      this.briefStyle.height = '1.6rem'
      this.openShow = true
      this.closeShow = false
    },
    // 收藏电影
    async collection () {
      // 保存电影id和用户id
      let collectionData = {
        userId: this.userId,
        movieId: this.movieId.id
      }
      // // 当用户点击收藏时，如果已经收藏则取消收藏
      this.isActive ? collectionData.isCollection = '0' : collectionData.isCollection = '1'
      const res = await collect(collectionData)
      if (res.code === 0) {
        // 收藏条件进行取反操作
        this.isActive = !this.isActive
      }
    },
    // 返回
    backMovie () {
      this.$router.push('/main/movie')
    }
  }
}
</script>

<style scpoed>
.info-head {
  width: 100%;
  height: 8.02rem;
  margin-bottom: 0.5rem;
  background-image: url("~@/assets/img/app_showing_bg.png");
  background-size: 100%;
}
.mask {
  width: 100%;
  height: 8.02rem;
  background-color: rgba(168, 165, 165, 0.5);
}
.info-head .info-head-box {
  width: 9.97rem;
  height: 1.62rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-head .info-head-box img {
  height: 0.61rem;
}
.info-head .info-head-img {
  width: 9.97rem;
  margin: auto;
  display: flex;
}
.info-head .info-head-img div:nth-of-type(1) {
  width: 3.32rem;
  /* height: 4.7rem; */
  background-color: white;
  text-align: center;
  margin-right: 0.41rem;
}
.info-head .info-head-img div:nth-of-type(1) img {
  width: 3.3rem;
  height: 4.67rem;
}
.info-head .info-head-img div:nth-of-type(2) h2 {
  font-size: 0.51rem;
  font-weight: 600;
  color: white;
}
.info-head .info-head-img div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 0.29rem;
  color: white;
  margin-top: 0.05rem;
}
.info-head .info-head-img div:nth-of-type(2) p:nth-of-type(2) {
  /* margin-top: -0.3rem;  */
  font-size: 0.31rem;
}
.info-head .info-head-img div:nth-of-type(2) p:nth-of-type(2) img {
  height: 0.48rem;
}
.info-head .info-head-img div:nth-of-type(2) p:nth-of-type(2) span {
  font-size: 0.41rem;
  color: #ffc900;
  margin-left: 0.2rem;
}
.info-head .info-head-img div:nth-of-type(2) p:nth-of-type(3) {
  font-size: 0.28rem;
  color: #3d3d3c;
}
.info-head .info-head-img div:nth-of-type(2) .head-text1 {
  font-size: 0.34rem;
  color: #3d3d3c;
  margin-top: 0.2rem;
}
.info-head .info-head-img div:nth-of-type(2) .head-text1 span {
  font-size: 0.12rem;
  color: #e8eae6;
  padding: 0.05rem;
  background-color: #7f7d74;
}
.info-head .info-head-img div:nth-of-type(2) .head-text1 img {
  width: 0.15rem;
  transform: rotate(-90deg);
}
.info-head .info-head-button {
  width: 9.97rem;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.info-head .info-head-button div {
  width: 4.81rem;
  height: 1.05rem;
  background-color: #5b534c;
  border: 0.01rem solid #78736f;
  border-radius: 0.1rem;
  font-size: 0.41rem;
  color: #eef1ed;
  text-align: center;
  line-height: 1.05rem;
  margin-top: 0.4rem;
}
.info-head .info-head-button div img {
  height: 0.42rem;
}

.info {
  width: 10.15rem;
  margin: auto;
  /* position: relative; */
  /* height: 3rem;  */
}
.info div {
  background-color: white;
  /* position: absolute;  */
}
.info div .brief {
  font-size: 0.4rem;
  font-weight: 600;
  height: 1.6rem;
  overflow: hidden;
}
.info div p:nth-of-type(2) {
  text-align: center;
}
.info div p img {
  width: 0.5rem;
}
/* .info div:nth-of-type(2) {
  display: none;
}
.info:hover {
  height: 12.3rem;
}
.info:hover div:nth-of-type(1) {
  display: none;
}
.info:hover div:nth-of-type(2) {
  display: block;
} */
.info-person {
  width: 100%;
}
.info-person .info-person-head {
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.info-person .info-person-head p {
  font-size: 0.41rem;
  font-weight: 600;
}
.info-person .info-person-head p:nth-of-type(2) {
  margin-left: 1.5rem;
}
.info-person .info-person-head div {
  margin-left: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.info-person .info-person-head > p {
  color: #a2a2a2;
}
.info-person .info-person-head > p img {
  height: 0.24rem;
  transform: rotate(-90deg);
}
.info-person .info-person-box {
  margin-top: 0.4rem;
  display: flex;
  overflow-x: scroll;
}
.info-person .info-person-box img {
  width: 2.1rem;
  margin-right: 0.2rem;
}
.info-person .info-person-box img:nth-of-type(1) {
  margin: 0 0.3rem 0 0.5rem;
}

.foot-none {
  width: 100%;
  height: 1.5rem;
}

.foot {
  width: 100%;
  height: 1.5rem;
  background-color: #f14e40;
  color: white;
  font-weight: 600;
  font-size: 0.5rem;
  line-height: 1.5rem;
  text-align: center;
  position: fixed;
  bottom: 0;
}

#score {
  display: inline-block;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
}
.layui-rate li i.layui-icon {
  font-size: 12px;
}

.close {
  transform: rotate(-180deg);
  /* display: none; */
}

.active {
  color: red !important;
}
</style>
