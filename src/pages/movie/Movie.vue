<template>
  <div>
    <div class="movie-head">
      <div>
        <p>
          成都
          <img src="~@/assets/img/movie_p_arrows.png" alt />
        </p>
        <ul>
          <li
            v-for="(item, index) in tabList"
            :key="index"
            :class="{ active: isActive === index }"
            @click="tabChange(index)"
          >
            <a>{{ item }}</a>
          </li>
        </ul>
      </div>
      <img src="~@/assets/img/waiting_search.png" alt />
    </div>
    <div class="head-none"></div>
    <div class="movie-img">
      <img src="~@/assets/img/app_showing_01.png" alt />
    </div>
    <!-- 电影 -->
    <div class="movie" v-for="(item, index) in movieData" :key="index">
      <div class="movie-box" @click="entryMovie(item)">
        <img :src="item.url" alt />
        <div class="movie-text">
          <p>
            {{ item.name }}
            <!-- <img src="~@/assets/img/app_movie_3d.png" alt /> -->
          </p>
          <p>
            观众
            <span class="fen">{{ item.score }}</span>
          </p>
          <p class="text1">{{ item.brief }}</p>
        </div>
      </div>
      <div class="movie-buy">购票</div>
    </div>
    <div class="tab-bar-empty"></div>
  </div>
</template>

<script>
import { movieList } from '@/api/movie'
import apiUrl from '@/api/apiUrl'
import { showLoading, hideLoading } from '@/assets/js/loading'

export default {
  name: 'Movie',
  data () {
    return {
      movieData: [],
      page: 1, // 当前页
      maxPage: 0, // 最大页数
      limit: 7, // 每页条数
      tabList: ['热映', '待映', '找片'],
      isActive: 0,
      timeout: null,
      isShowing: 'on' // 是否上映
    }
  },
  mounted () {
    // 展示电影列表
    this.movieShow()
    // 监听滚动条
    // window.addEventListener('scroll', this.debounce(this.handleScroll, 1000), false)
    window.addEventListener('scroll', this.handleScroll, false)
    // 切换页面时滚动条自动滚动到顶部
    window.scrollTo(0, 0)
  },
  methods: {
    // 获取电影列表
    async movieShow () {
      try {
        showLoading()
        let data = {
          page: this.page,
          limit: this.limit,
          isShowing: this.isShowing
        }
        const movieInfo = await movieList(data)
        if (movieInfo.code === 0) {
          hideLoading()
          // 图片url设置
          for (const iterator of movieInfo.data) {
            iterator.url = `${apiUrl}/images/${iterator.url}`
          }
          // 最大页数
          this.maxPage = movieInfo.maxPage
          // this.movieData = movieInfo.data
          // 通过拓展运算符将需要的数据拼接起来
          this.movieData = [...this.movieData, ...movieInfo.data]
          console.log(movieInfo, 'this.movieInfo')
        }
        this.page++
      } catch (error) {
        hideLoading()
      }
    },
    // 防抖
    debounce (fun, wait) {
      this.timeout = null
      // return () => {
      if (this.timeout !== null) {
        console.log('1111')
        clearTimeout(this.timeout)
      } else {
        console.log('2222')
        this.timeout = setTimeout(fun, wait)
      }
      // }
    },
    // 滚动条监听事件
    handleScroll () {
      // console.log('handel')
      // 滚动条相关数据
      // clientHeight：视口可见区域的高，只读
      // scrollHeight：整个文档的高度，是包括隐藏起来的内容。当出现滚动条时，scrollHeight > clientHeight 恒成立
      // scrollTop：代表在有滚动条时，滚动条向下滚动的距离，也就是元素顶部被遮住的部分
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      // console.log(scrollTop, 'scrollTop')
      // console.log(clientHeight, 'clientHeight')
      // console.log(scrollHeight, 'scrollHeight')

      // 滚动条到底部的条件
      if (scrollTop + clientHeight + 1 >= scrollHeight) {
        if (this.page <= this.maxPage) {
          console.log('滚动了')
          this.debounce(this.movieShow, 300)
        }
      }
    },
    // tab切换
    tabChange (index) {
      this.isActive = index
      // 热映/待映
      if (index === 0) {
        this.isShowing = 'on'
      } else if (index === 1) {
        this.isShowing = 'off'
      }
      this.page = 1
      this.movieData = []
      this.movieShow()
    },
    // 进入电影详情
    entryMovie (item) {
      // console.log(item, 'item')
      this.$router.push({
        path: '/movieInfo',
        query: {
          id: item._id
        }
      })
    }
  }
}
</script>

<style scoped>
/* @import '~@/assets/css/movie.css'; */

.active {
  background-color: white;
  color: #db4742;
}
.movie-head {
  width: 100%;
  height: 1.51rem;
  background-color: #d33f36;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
}
.movie-head > img {
  height: 0.57rem;
  margin-right: 0.6rem;
}
.movie-head > div {
  font-size: 0.45rem;
  display: flex;
  align-items: center;
  margin-left: 0.6rem;
}
.movie-head > div p img {
  height: 0.2rem;
  margin-left: 0.1rem;
}
.movie-head > div ul {
  width: 5.8rem;
  height: 0.97rem;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0.1rem;
  background-color: #b42019;
  margin-left: 0.75rem;
}
.movie-head > div ul li {
  width: 1.88rem;
  height: 0.85rem;
  text-align: center;
  line-height: 0.85rem;
  border-radius: 0.1rem;
  font-weight: 500;
}
.movie-head > div ul li a {
  text-decoration: none;
  /* color: white; */
}
/* .movie-head > div ul li:hover {
  background-color: white;
}
.movie-head > div ul li:hover a {
  color: #db4742;
} */
/* .movie-head > div ul li:first-child {
  background-color: white;
}
.movie-head > div ul li:first-child a {
  color: #db4742;
} */

.head-none {
  width: 100%;
  height: 1.51rem;
}

.movie-img img {
  width: 100%;
}

.movie {
  width: 100%;
  padding: 0.35rem 0 0.32rem;
  border-bottom: 0.01rem solid #eaeaea;
  display: flex;
  align-items: center;
}
.movie .movie-box {
  width: 96%;
  margin-left: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.movie .movie-box a > img {
  width: 1.9rem;
}
.movie .movie-box img {
  width: 1.9rem;
}
.movie .movie-box .movie-text {
  width: 6.5rem;
}
.movie .movie-box .movie-text p:nth-of-type(1) {
  font-size: 0.47rem;
}
.movie .movie-box .movie-text p:nth-of-type(1) img {
  height: 0.42rem;
  margin-left: 0.15rem;
}
.movie .movie-box .movie-text p:nth-of-type(2) {
  font-size: 0.33rem;
  color: #999999;
  margin: 0.15rem 0 0.15rem 0;
}
.movie .movie-box .movie-text p:nth-of-type(2) .fen {
  font-size: 0.37rem;
  color: #f7b30b;
  margin-left: 0.2rem;
}
.movie .movie-box .movie-text p:nth-of-type(2) span:nth-of-type(2) {
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  border-left: 0.01rem solid #c3c3c3;
}
.movie .movie-box .movie-text .text1 {
  font-size: 0.38rem;
  color: #646464;
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movie-buy {
  width: 1.43rem;
  height: 0.77rem;
  border: 0.01rem solid #f4482f;
  border-radius: 0.1rem;
  font-size: 0.33rem;
  text-align: center;
  line-height: 0.77rem;
  color: #f4482f;
  margin-right: 0.1rem;
}
.movie .movie-info {
  width: 87%;
  height: 1.16rem;
  margin: auto;
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
}
.movie .movie-info span {
  font-size: 0.3rem;
  color: #ee9c15;
  border: 0.01rem solid;
  padding: 0.1rem;
  margin-right: 0.3rem;
}
.movie .movie-info p {
  width: 7.97rem;
  font-size: 0.4rem;
  color: #636363;
  padding-top: 0.4rem;
  margin-top: -0.4rem;
  border-top: 0.01rem solid #e8e8e8;
}

.tab-bar-empty {
  width: 100%;
  height: 49px;
}
</style>
