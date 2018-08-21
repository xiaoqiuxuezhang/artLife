<template>
  <div id="home">
    <div class="search_box">
      <input type="text" class="search" placeholder="中央美术学院">
      <swiper loop auto :list="demoSwiper" :index="swiper_index" @on-index-change="demo06_onIndexChange"dots-position="center"></swiper>
    </div>
   <!-- <p>current index: {{swiper_index}}</p>-->
    <div class="home_bar clearfix">
      <a href="javascipt:;">
        <img src="../assets/lesson.png">
        <h6>课程</h6>
      </a>
      <a href="javascipt:;">
        <img src="../assets/liCaiWenDa.png">
        <h6>问卷</h6>
      </a>
      <a href="javascipt:;">
        <img src="../assets/shop.png">
        <h6>商城</h6>
      </a>
      <a href="javascipt:;">
        <img src="../assets/signUp.png">
        <h6>院校</h6>
      </a>
      <a href="javascipt:;">
        <img src="../assets/signIn.png">
        <h6>签到</h6>
      </a>
    </div>
    <div class="back_hr"></div>
    <!--课程排行榜-->
    <div class="lesson clearfix ">
      <p>
        <span class="fl">课程排行榜</span>
        <a href="javascript:;" class="fr">查看全部&nbsp;></a>
      </p>
      <ul class="clearfix" >
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson1.png">
            <h3>课程1</h3>
          </a>

        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson2.png">
            <h3>课程2</h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson3.png">
            <h3>课程3</h3>
          </a>
        </li>
      </ul>
    </div>
    <div class="back_hr"></div>
    <!--老师排行榜-->
    <div class="lesson clearfix ">
      <p>
        <span class="fl">老师排行榜</span>
        <a href="javascript:;" class="fr">查看全部&nbsp;></a>
      </p>
      <ul class="clearfix" >
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson1.png">
            <h3>老师1</h3>
          </a>

        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson2.png">
            <h3>老师2</h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson3.png">
            <h3>老师3</h3>
          </a>
        </li>
      </ul>
    </div>
    <div class="back_hr"></div>
    <!--学校排行榜-->
    <div class="lesson clearfix ">
      <p>
        <span class="fl">学校排行榜</span>
        <a href="javascript:;" class="fr">查看全部&nbsp;></a>
      </p>
      <ul class="clearfix" >
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson1.png">
            <h3>学校1</h3>
          </a>

        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson2.png">
            <h3>学校2</h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../assets/lesson3.png">
            <h3>学校3</h3>
          </a>
        </li>
      </ul>
    </div>
    <div class="back_hr"></div>
    <!--实物商城-->
    <div class="lesson clearfix ">
    <p>
      <span class="fl">实物商城</span>
      <a href="javascript:;" class="fr">进入商城&nbsp;></a>
    </p>
    <ul class="clearfix" >
      <li>
        <a href="javascript:;">
          <img src="../assets/lesson1.png">
          <h3 style="color: dodgerblue">2000</h3>
        </a>

      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/lesson2.png">
          <h3  style="color: dodgerblue">3000</h3>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <img src="../assets/lesson3.png">
          <h3  style="color: dodgerblue">2500</h3>
        </a>
      </li>
    </ul>
     <div class="back_hr"></div>
  </div>
    <!--tobar-->
    <tabbar style="position: fixed;bottom: 0;">
      <tabbar-item @on-item-click="demo1" link="/login">
        <img slot="icon" src="../assets/signIn.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/revise">
        <img slot="icon" src="../assets/signIn.png">
        <span slot="label">圈子</span>
      </tabbar-item>
      <tabbar-item selected link="/regist">
        <img slot="icon" src="../assets/signIn.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/signIn.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <div style="height:3rem; "></div>
  </div>
</template>

<script>
  import {Search, Swiper, GroupTitle, SwiperItem, XButton, Divider, Tabbar, TabbarItem ,Group, Cell  } from 'vux'
  import Banner1 from '../assets/banner1.png';
  import Banner2 from '../assets/banner2.png';
  import Banner3 from '../assets/banner3.png';
  let baseList = [{
    url: 'http://www.baidu.com',
    img: Banner1,
   // title: '送你一朵fua',
  }, {
    url: 'http://www.jd.com',
    img: Banner2,
    //title: '送你一辆车'
  }, {
    url: 'https://list.tmall.com',
    img:  Banner3, // 404
   // title: '送你一次旅行',
    //fallbackImg: '../assets/banner3.png'
  }]
  let urlList = baseList.map((item, index) => ({
    url: item.url,
    img: item.img,
    //fallbackImg: item.fallbackImg,
    //title: console.log(item,index)
  }))
    export default {
      name: "home",
      data(){
        return {
          demoSwiper: urlList,
          swiper_index:0,
          results: [],
          value: 'test'
        }

      },
      methods:{
        demo06_onIndexChange(index) {
          this.swiper_index = index
        },
        setFocus () {
          this.$refs.search.setFocus()
        },
        resultClick (item) {
          window.alert('you click the result item: ' + JSON.stringify(item))
        },
        getResult (val) {
          console.log('on-change', val)
          this.results = val ? getResult(this.value) : []
        },
        onSubmit () {
          this.$refs.search.setBlur();
          this.$vux.toast.show({
            type: 'text',
            position: 'top',
            text: 'on submit'
          })
        },
        onFocus () {
          console.log('on focus')
        },
        onCancel () {
          console.log('on cancel')
        },
        demo1(){
          //this.$router.push({path:'/regist'});
        }
      },
      components: {
        Swiper,
        GroupTitle,
        SwiperItem,
        XButton,
        Divider,
        Search,
        Tabbar,
        TabbarItem,
        Group,
        Cell
      }
    }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 5; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>
  h1,h2,h3,h4,h5,h6,p{ font-size:12px;}
/*#home{
  background: url("../assets/banner1.png");
}*/
.search_box{
  position: relative;
}
.search_box .search{
    width: 50%;
    border: 1px solid #ccc;
    outline: 0;
    padding: 2px 1.5rem;
    border-radius: 1rem;
    -webkit-appearance: none;
    height: 1.41176471em;
    line-height: 1.41176471;
    position: absolute;
    z-index: 10;
    background:url("../assets/icon-search.png") no-repeat 3% center #fff;
    background-size: 0.8rem;
    top:1%;
    left:17%;
    font-size: 12px;
  }
input::-ms-input-placeholder{font-size: 12px;}
input::-webkit-input-placeholder{font-size: 12px;}
.home_bar{
  height: 4rem;
}
.home_bar a{
  float: left;
  width: 20%;
  height: 3rem;
  margin-top:1rem;
  text-decoration: none;
  color:#000;
}
.home_bar a img{
  width: 50%;
  height: 50%;
}
.home_bar a  h6{
    margin: 0;
  }
  .back_hr{
    background: black;
    height: 0.5rem;
  }
  .lesson ul li{
    width: 33.3%;
    float: left;
  }
  .lesson p{
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    height: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
.lesson p a{
  text-decoration: none;
  color: #ccc;
}
  .lesson ul li a{
    text-decoration: none;
    color: black;
  }
.lesson ul li a img{
  width:95%;
  height: 100%;
}

</style>
