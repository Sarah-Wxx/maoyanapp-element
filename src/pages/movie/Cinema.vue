<template>
  <div>
    <div class="cinema-head">
      <p>
        成都
        <img src="~@/assets/img/movie_p_arrows.png" alt="" />
      </p>
      <p>影院</p>
      <div>
        <img src="~@/assets/img/yfydfs.png" alt="" />
        <img src="~@/assets/img/search.png" alt="" />
      </div>
    </div>
    <div class="head-none"></div>

    <div class="cinema-img">
      <!-- <img src="img/app_cinema_5.png" alt=""> -->
    </div>

    <div class="cinema">
      <div class="cinema-box">
        <h2>
          <a href="room.html">太平洋影城(新城市店)</a>
          <span>14.9</span><span>元起</span>
        </h2>
        <p>
          青羊区西大街1号新城市广场A栋2楼
          <span>1.4km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color2">改签</span>
          <span class="cinema-box-color2">小吃</span>
          <span class="cinema-box-color3">折扣卡</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>UME影城(金牛店) <span>24.4</span><span>元起</span></h2>
        <p>
          金牛区沙湾路1号汇龙湾广场3楼
          <span>1.5km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color1">4DX厅</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>峨影1958电影城 <span>14.9</span><span>元起</span></h2>
        <p>
          青羊区清江东路360号( 近成温立交桥)
          <span>2km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color1">杜比全景声厅</span>
          <span class="cinema-box-color2">退</span>
          <span class="cinema-box-color2">改签</span>
          <span class="cinema-box-color2">小吃</span>
          <span class="cinema-box-color3">会员卡</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>太平洋影城(沙湾店) <span>19.9</span><span>元起</span></h2>
        <p>
          金牛区二环路北一段10号凯德广场4楼
          <span>2.3km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color2">改签</span>
          <span class="cinema-box-color2">小吃</span>
          <span class="cinema-box-color3">折扣卡</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>
          幸福蓝海国际影城(成都仁和春天... <span>28.9</span><span>元起</span>
        </h2>
        <p>
          青羊区二环路西二段19号仁和春天广场C座5楼
          <span>2.4km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color2">小吃</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>橙天嘉禾影城(富力店) <span>14.4</span><span>元起</span></h2>
        <p>
          青羊区上西顺城街289富力天汇mall7楼
          <span>2.7km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color1">4K厅</span>
          <span class="cinema-box-color2">小吃</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
      <div class="cinema-box">
        <h2>橙天嘉禾影城(一品店) <span>14.4</span><span>元起</span></h2>
        <p>
          青羊区上西顺城街289富力天汇mall7楼
          <span>2.7km</span>
        </p>
        <div>
          <span class="cinema-box-color1">座</span>
          <span class="cinema-box-color1">团</span>
          <span class="cinema-box-color1">4K厅</span>
          <span class="cinema-box-color2">小吃</span>
        </div>
        <p>
          <span>惠</span>
          侠探杰克：用户回头等2部电影特惠
        </p>
      </div>
    </div>

    <div class="cinema-address">
      <div>
        <p></p>
        <p>成都金牛区秀城嘉园（东区）</p>
      </div>
      <a href="#">
        <img src="~@/assets/img/fan.png" alt="" />
      </a>
    </div>
    <!-- foot -->
    <div class="foot-none"></div>
  </div>
</template>

<script>
export default {
  name: 'Cinema'
}
</script>

<style scoped>
.head-none {
  width: 100%;
  height: 1.51rem;
}

.cinema-head {
  width: 100%;
  height: 1.51rem;
  background-color: #d33f36;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}
.cinema-head p:nth-of-type(1) {
  font-size: 0.46rem;
  margin-left: 0.6rem;
}
.cinema-head p:nth-of-type(1) img {
  height: 0.2rem;
}
.cinema-head p:nth-of-type(2) {
  font-size: 0.52rem;
}
.cinema-head div {
  margin-right: 0.6rem;
}
.cinema-head div img {
  height: 0.56rem;
}

.cinema-img img {
  width: 100%;
  height: 2.27rem;
  background: url("~@/assets/img/app_cinema_5.png");
}

.cinema {
  width: 100%;
}
.cinema .cinema-box {
  width: 96%;
  padding: 0.43rem 0 0.55rem 0;
  margin: auto;
  border-bottom: 0.01rem solid #dcdcdc;
}
.cinema .cinema-box h2 {
  font-size: 0.53rem;
}
.cinema .cinema-box h2 a {
  text-decoration: none;
  color: black;
}
.cinema .cinema-box h2 span {
  font-size: 0.33rem;
}
.cinema .cinema-box h2 span:nth-of-type(1) {
  color: #f84b3c;
}
.cinema .cinema-box h2 span:nth-of-type(2) {
  color: #9e9e9e;
}
.cinema .cinema-box > p:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  margin: 0.34rem 0;
  color: #6d6d6d;
}
.cinema .cinema-box > p:nth-of-type(1) span {
  color: #9e9e9e;
}
.cinema .cinema-box > p:nth-of-type(2) {
  font-size: 0.35rem;
  color: #979797;
}
.cinema .cinema-box > p:nth-of-type(2) span {
  font-size: 0.3rem;
  background-color: #fd806c;
  color: white;
  padding: 0.1rem 0.2rem;
  margin-right: 0.2rem;
}
.cinema .cinema-box div {
  margin-top: -0.65rem;
  margin-bottom: 0.3rem;
}
.cinema .cinema-box div span {
  font-size: 0.3rem;
  padding: 0rem 0.1rem 0.08rem 0.1rem;
  border-radius: 0.1rem;
}
.cinema .cinema-box div .cinema-box-color1 {
  color: #549dab;
  border: 0.01rem solid #549dab;
}
.cinema .cinema-box div .cinema-box-color2 {
  background-color: #8bc6e9;
  color: white;
}
.cinema .cinema-box div .cinema-box-color3 {
  background-color: #f7ba58;
  color: white;
}

.cinema-address {
  width: 94%;
  background-color: #ededed;
  color: #959595;
  font-size: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 1.83rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.1rem;
}
.cinema-address a {
  margin-right: 0.3rem;
}
.cinema-address a img {
  height: 0.7rem;
}
.cinema-address div {
  display: flex;
  align-items: center;
}
.cinema-address div p:nth-of-type(1) {
  width: 0.6rem;
  height: 0.7rem;
  margin-right: 0.3rem;
  background: url("~@/assets/img/sprite_app.png") 157px 48px;
  background-size: 1618% 1291%;
}

.q {
  height: 2000rem;
}

.foot-none {
  width: 100%;
  height: 1.52rem;
}

.foot {
  width: 100%;
  height: 1.52rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: #f5f5f5;
}
.foot .foot-box {
  display: block;
  text-decoration: none;
}
.foot .foot-box div {
  width: 0.71rem;
  height: 0.71rem;
  position: relative;
  margin: auto;
}
.foot .foot-box div img {
  width: 0.71rem;
  height: 0.71rem;
  position: absolute;
}
.foot .foot-box div img:nth-of-type(1) {
  opacity: 0;
}
.foot .foot-box:nth-of-type(2) div img:nth-of-type(1) {
  opacity: 1;
}
.foot .foot-box:nth-of-type(2) div img:nth-of-type(2) {
  opacity: 0;
}
.foot .foot-box:nth-of-type(2) p {
  color: red;
}
.foot .foot-box p {
  font-size: 0.3rem;
  color: #666666;
  margin: auto;
  text-align: center;
}
.foot .foot-box:hover div img:nth-of-type(1) {
  opacity: 1;
}
.foot .foot-box:hover div img:nth-of-type(2) {
  opacity: 0;
}
.foot .foot-box:hover p {
  color: red;
}

</style>
