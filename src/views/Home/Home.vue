<template>
  <div class="Home">
    <div class="con">
      <!-- 搜索框 -->
      <van-sticky :offset-top="0">
        <van-search placeholder="请输入搜索关键词" v-model="value" @input="souSuo" />
      </van-sticky>
      <!-- 搜索哦列表 -->
      <div class="list" v-show="show">
        <ul>
          <li
            v-for="(item,i) in m_list.slice(0,10)"
            :key="i"
            @click="$router.push({path:'/musicpage',query:{
            id:item.id
          }})"
          >{{item.name}}</li>
        </ul>
      </div>
      <!-- 轮播图 -->
      <div class="lunBo">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,i) in l_list" :key="i">
            <img class="banner" :src="item.imageUrl" alt />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 宫格 -->
      <div class="gongGe">
        <van-grid :column-num="5" gutter="5" :border="false">
          <van-grid-item icon="https://s2.ax1x.com/2019/12/26/lAJSVe.png" text="每日推荐" />
          <van-grid-item icon="https://s2.ax1x.com/2019/12/26/lAJZqS.png" text="歌单" />
          <van-grid-item icon="https://s2.ax1x.com/2019/12/26/lAJF2t.png" text="排行榜" />
          <van-grid-item icon="https://s2.ax1x.com/2019/12/26/lAJQGn.png" text="电台" />
          <van-grid-item icon="https://s2.ax1x.com/2019/12/26/lAJpUH.png" text="直播" />
        </van-grid>
      </div>
      <van-divider />
      <!-- 推荐歌单 -->
      <div class="tuiJian">
        <div class="flex head">
          <h2>推荐歌单</h2>
          <p id="more">歌单广场</p>
        </div>
        <van-grid :column-num="3" gutter="5" icon-size="80">
          <van-grid-item
            v-for="(item,i) in t_list.slice(0,6)"
            :key="i"
            :icon="item.picUrl"
            :text="item.name"
          />
        </van-grid>
      </div>
      <!-- 新歌、新碟 -->
      <div class="new_ge">
        <div class="flex title">
          <div class="left">
            <span :class="[dian<1?'cu':'xi']" @click="newDie">新碟</span>&nbsp;
            <span :class="[dian>1?'cu':'xi']" @click="newGe">新歌</span>
          </div>
          <div>
            <span id="more" :class="[dian>1?'show':'xianShi']">更多新碟</span>
            <span id="more" :class="[dian<1?'show':'xianShi']">新歌推荐</span>
          </div>
        </div>
        <div>
          <!-- 列表1 -->
          <van-grid :column-num="3" gutter="3" :border="false" icon-size="100" v-if="dian == 0">
            <van-grid-item
              class="yihang"
              v-for="(item,i) in new_die.slice(0,3)"
              :key="i"
              :icon="item.picUrl"
              :text="item.name"
            />
          </van-grid>
          <!-- 列表2 -->
          <van-grid :column-num="3" gutter="3" :border="false" icon-size="100" v-if="dian == 2">
            <van-grid-item
              class="yihang"
              v-for="(item,i) in new_die.slice(10,13)"
              :key="i"
              :icon="item.picUrl"
              :text="item.name"
            />
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router.js'
import axios from 'axios'
export default {
  data() {
    return {
      value: '', //搜索框
      show: false, //现实隐藏
      m_list: [], //歌曲列表
      l_list: [], //轮播图
      t_list: [], //推荐歌单list
      new_die: [], //新碟列表
      dian: '2' //添加动态类名
    }
  },
  created() {
    // 路由守卫
    /**
     * @param {to} 将要去的路由
     * @param {from} 出发的路由
     * @param {next} 执行下一步
     */
    router.beforeEach((to, form, next) => {
      // 如果进去到的页面是登录或者注册页面
      if (to.path == '/login' || to.path == '/register') {
        next()
      } else if (!localStorage.getItem('token')) {
        alert('还没登录，请先登录/注册')
        next('/login') //转入登陆/注册页面
      } else {
        next()
      }
    })
  },
  mounted() {
    // 轮播接口
    this.axios.post('/banner').then(data => {
      this.l_list = data.banners
    }),
      // 推荐歌单接口
      this.axios.post('/personalized').then(data => {
        this.t_list = data.result
      })
    //新碟列表
    this.axios.post('/top/album').then(data => {
      console.log(data.albums)
      this.new_die = data.albums
    })
  },
  methods: {
    souSuo() {
      axios.post('/search', { keywords: this.value }).then(data => {
        console.log(data.data.result.songs)
        this.m_list = data.data.result.songs
        if (this.value == '') {
          this.show = false
        } else {
          this.show = true
        }
      })
    },
    newGe() {
      this.dian = '2'
    },
    newDie() {
      this.dian = '0'
    }
  }
}
</script>
<style lang='less' scoped>
.Home {
  .con {
    #more {
      border: 1px solid #999;
      border-radius: 15px;
      padding: 1px 5px;
    }
    .list {
      margin: 0 12px;
      position: fixed;
      z-index: 999;
      ul {
        background: #fff;
        li {
          padding: 5px;
          border-bottom: 1px solid #f4f5f6;
          width: 350px;
        }
      }
    }
    .lunBo {
      padding: 0 10px 5px;
      .van-swipe {
        border-radius: 10px;
      }
      .banner {
        width: 100%;
        height: 150px;
      }
    }
    .tuiJian {
      /deep/.van-grid-item__icon + .van-grid-item__text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .head {
        padding: 0 9px 5px;
      }
    }
    .new_ge {
      .show {
        display: none;
      }
      .xianShi {
        display: inline;
      }
      .title {
        padding: 5px 15px;
        .left {
          font-weight: 700;
          font-size: 16px;
          .cu {
            font-weight: 700;
            font-size: 16px;
          }
          .xi {
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>