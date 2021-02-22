<template>
  <div>
    <div class="find-head">
      <!-- <my-slot>
        <input
          type="text"
          slot="center"
          placeholder="找影视剧、影人、影院"
          class="input"
        />
      </my-slot> -->
      <div class="find-search">
        <img src="~@/assets/img/waiting_search.png" alt="" />
        <p>找影视剧、影人、影院</p>
      </div>
    </div>
    <div class="find-head-none"></div>
    <!-- 咨询 -->
    <div class="find-box">
      <div>
        <img src="~@/assets/img/find_icon01.png" alt="" />
        <p>今日TOP10</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon02.png" alt="" />
        <p>影视快讯</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon03.png" alt="" />
        <p>好片推荐</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon04.png" alt="" />
        <p>预告片速递</p>
      </div>
      <div>
        <img src="img/find_icon05.png" alt="" />
        <p>大咖来了</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon06.png" alt="" />
        <p>美图</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon07.png" alt="" />
        <p>周边商城</p>
      </div>
      <div>
        <img src="~@/assets/img/find_icon08.png" alt="" />
        <p>实时票房</p>
      </div>
    </div>

    <!-- 今天 -->
    <div class="today">
      <p>今天</p>
      <div class="today-box">
        <div class="today-box1">
          <p>电影扫地僧:心理研究者谈《惊天破》犯罪心理学套路</p>
          <div>
            <img src="~@/assets/img/app_discover_3_03.png" alt="" />
            <img src="~@/assets/img/app_discover_5_03.png" alt="" />
            <img src="~@/assets/img/app_discover_5_08_05.png" alt="" />
          </div>
          <div>
            <p>电影扫地僧</p>
            <p>
              <img src="~@/assets/img/icon09.png" alt="" />
              <span>1875</span>
              <img src="~@/assets/img/icon10.png" alt="" />
              <span>8</span>
            </p>
          </div>
        </div>
        <div class="today-box2">
          <img src="~@/assets/img/app_discover_4_07.png" alt="" />
          <div>
            <p class="today-box-title">
              《全世界》超7.86亿，创国产爱情电影票房新纪录
            </p>
            <div>
              <p>猫眼资讯</p>
              <p>
                <img src="~@/assets/img/icon09.png" alt="" />
                <span>1024</span>
                <img src="~@/assets/img/icon10.png" alt="" />
                <span>13</span>
              </p>
            </div>
          </div>
        </div>
        <div class="today-box2">
          <img src="~@/assets/img/app_discover_11_03.png" alt="" />
          <div>
            <p class="today-box-title">
              王菲有望献综艺首秀，节目记录演唱会诞生过程
            </p>
            <div>
              <p>影讯速报</p>
              <p>
                <img src="~@/assets/img/icon09.png" alt="" />
                <span>55</span>
                <img src="~@/assets/img/icon10.png" alt="" />
                <span>1</span>
              </p>
            </div>
          </div>
        </div>
        <div class="today-box1">
          <p>张嘉佳是要拿这部片子来谋害王家卫和梁朝伟吗?</p>
          <div>
            <img src="~@/assets/img/app_discover_11_06.png" alt="" />
            <img src="~@/assets/img/app_discover_11_08.png" alt="" />
            <img src="~@/assets/img/app_discover_4_05_033_03.png" alt="" />
          </div>
          <div>
            <p>毒药</p>
            <p>
              <img src="~@/assets/img/icon09.png" alt="" />
              <span>185</span>
              <img src="~@/assets/img/icon10.png" alt="" />
              <span>0</span>
            </p>
          </div>
        </div>
        <div class="today-box2">
          <img src="~@/assets/img/app_discover_4_07.png" alt="" />
          <div>
            <p class="today-box-title">
              刘强东朋友圈发飙:谁再提"奶茶妹妹"我跟谁急!
            </p>
            <div>
              <p>影讯速报</p>
              <p>
                <img src="~@/assets/img/icon09.png" alt="" />
                <span>700</span>
                <img src="~@/assets/img/icon10.png" alt="" />
                <span>10</span>
              </p>
            </div>
          </div>
        </div>
        <div class="today-box1">
          <p>能写满分作文的明星，除了胡歌，还有王凯董子健吴秀波</p>
          <div>
            <img src="~@/assets/img/app_discover_4_03.png" alt="" />
            <img src="~@/assets/img/app_discover_4_05.png" alt="" />
            <img src="~@/assets/img/app_discover_5_07.png" alt="" />
          </div>
          <div>
            <p>毒药</p>
            <p>
              <img src="~@/assets/img/icon09.png" alt="" />
              <span>134</span>
              <img src="~@/assets/img/icon10.png" alt="" />
              <span>0</span>
            </p>
          </div>
        </div>
        <div class="today-box1">
          <p>今年最棒的韩国片在豆瓣只得5分，这绝对是千古奇冤</p>
          <div>
            <img src="~@/assets/img/app_discover_4_12.png" alt="" />
            <img src="~@/assets/img/app_discover_4_13.png" alt="" />
            <img src="~@/assets/img/app_discover_4_14.png" alt="" />
          </div>
          <div>
            <p>虹膜</p>
            <p>
              <img src="~@/assets/img/icon09.png" alt="" />
              <span>226</span>
              <img src="~@/assets/img/icon10.png" alt="" />
              <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- foot -->
    <div class="foot-none"></div>
  </div>
</template>

<script>
export default {
  name: 'Find'
}
</script>

<style scoped>
.find-head-none {
  width: 100%;
  height: 1.5rem;
}

.find-head {
  width: 100%;
  height: 1.5rem;
  background-color: #db413a;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
}
.find-head .find-search {
  width: 96%;
  height: 0.85rem;
  background-color: white;
  border-radius: 0.85rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.39rem;
  color: #a8a8a8;
}
.find-head .find-search img {
  height: 0.4rem;
}

.find-box {
  width: 96%;
  height: 5.55rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.find-box div {
  width: 2.2rem;
  text-align: center;
  padding-top: 0.45rem;
}
.find-box div img {
  height: 1.3rem;
}
.find-box div p {
  font-size: 0.33rem;
}

.today {
  width: 100%;
  margin: auto;
  margin-top: 0.5rem;
}
.today > p {
  height: 0.85rem;
  font-size: 0.38rem;
  background-color: #f1f1f1;
  line-height: 0.85rem;
  padding-left: 0.6rem;
}
.today .today-box {
  width: 96%;
  margin: auto;
}
.today .today-box .today-box1 {
  padding: 0.45rem 0 0.55rem 0;
  border-bottom: 1px solid #e4e4e4;
}
.today .today-box .today-box1 > p {
  font-size: 0.5rem;
  font-weight: 600;
}
.today .today-box .today-box1 div:nth-of-type(1) {
  margin: 0.5rem 0 0.4rem 0;
  display: flex;
  justify-content: space-between;
}
.today .today-box .today-box1 div:nth-of-type(1) img {
  height: 2.4rem;
}
.today .today-box .today-box1 div:nth-of-type(2) {
  display: flex;
  justify-content: space-between;
}
.today .today-box .today-box1 div:nth-of-type(2) p {
  color: #979797;
}
.today .today-box .today-box1 div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 0.4rem;
}
.today .today-box .today-box1 div:nth-of-type(2) p:nth-of-type(2) {
  font-size: 0.37rem;
}
.today .today-box .today-box1 div:nth-of-type(2) p:nth-of-type(2) img {
  height: 0.31rem;
  margin-right: 0.12rem;
  margin-left: 0.4rem;
}
.today .today-box .today-box2 {
  padding: 0.47rem 0 0.43rem 0;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
}
.today .today-box .today-box2 > img {
  height: 2.4rem;
  margin-right: 0.4rem;
}
.today .today-box .today-box2 > div .today-box-title {
  font-size: 0.47rem;
  font-weight: 600;
}
.today .today-box .today-box2 > div > div {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.today .today-box .today-box2 > div > div p {
  color: #959595;
}
.today .today-box .today-box2 > div > div p:nth-of-type(1) {
  font-size: 0.38rem;
}
.today .today-box .today-box2 > div > div p:nth-of-type(2) {
  font-size: 0.28rem;
}
.today .today-box .today-box2 > div > div p:nth-of-type(2) img {
  height: 0.31rem;
  margin-right: 0.12rem;
  margin-left: 0.4rem;
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
.foot .foot-box:nth-of-type(3) div img:nth-of-type(1) {
  opacity: 1;
}
.foot .foot-box:nth-of-type(3) div img:nth-of-type(2) {
  opacity: 0;
}
.foot .foot-box:nth-of-type(3) p {
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

.headSlot {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 0.45rem;
  margin-left: 0.6rem;
}
.right {
  height: 0.57rem;
  margin-right: 0.6rem;
}

.right img {
  height: 0.57rem;
}
.center {
  text-align: center;
  /* width: 100%;  */
  flex-grow: 1;
  /* display: flex; */
  justify-content: space-evenly;
}
.input {
  width: 100%;
  height: 0.8rem;
}

/*# sourceMappingURL=find.css.map */
</style>
