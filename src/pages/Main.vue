<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-item slot="tab-item" v-for="(item, index) in tabList" :key="index" :path="item.path">
        <img slot="item-icon2" :src="item.urlActive" alt="" />
        <img slot="item-icon1" :src="item.url" alt="" />
        <p slot="item-title">{{item.title}}</p>
      </tab-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabItem from '@/components/tabbar/TabItem'

// 引入图片
import iconMovie2 from 'assets/img/movie_icon_02.png'
import iconMovie from 'assets/img/movie_icon_03.png'
import iconFind2 from 'assets/img/find_icon_01.png'
import iconFind from 'assets/img/find_icon_02.png'
import iconCinema2 from 'assets/img/cinema_icon_01.png'
import iconCinema from 'assets/img/cinema_icon_02.png'
import iconMine2 from 'assets/img/mine_icon_01.png'
import iconMine from 'assets/img/mine_icon_02.png'

export default {
  name: 'Mine',
  components: {
    TabBar,
    TabItem
  },
  data () {
    return {
      tabList: [
        {
          url: iconMovie,
          urlActive: iconMovie2,
          path: '/main/movie',
          title: '电影'
        },
        {
          url: iconCinema,
          urlActive: iconCinema2,
          path: '/main/cinema',
          title: '影院'
        },
        {
          url: iconFind,
          urlActive: iconFind2,
          path: '/main/find',
          title: '发现'
        },
        {
          url: iconMine,
          urlActive: iconMine2,
          path: '/main/my',
          title: '我的'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
